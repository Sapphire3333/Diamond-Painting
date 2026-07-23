/* Diamond Painting Colors - offline service worker */
var CACHE = 'dp-colors-v2';
var ASSETS = ['./', './index.html', './manifest.webmanifest', './icon.svg'];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  /* only handle our own app files; let cross-origin (e.g. Supabase sync) go straight to the network */
  if (url.origin !== location.origin) return;

  /* The page itself is network-first, so a freshly uploaded version always wins.
     Falls back to the cached copy when offline. */
  var isPage = (req.mode === 'navigate') || /\.html?$/.test(url.pathname) || url.pathname.replace(/\/$/, '') === location.pathname.replace(/\/[^\/]*$/, '');
  if (isPage) {
    e.respondWith(
      fetch(req).then(function (res) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(req, copy); });
        return res;
      }).catch(function () {
        return caches.match(req).then(function (m) { return m || caches.match('./index.html'); });
      })
    );
    return;
  }

  /* everything else (icon, manifest): cache-first is fine */
  e.respondWith(
    caches.match(req).then(function (cached) {
      return cached || fetch(req).then(function (res) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(req, copy); });
        return res;
      }).catch(function () { return caches.match('./index.html'); });
    })
  );
});
