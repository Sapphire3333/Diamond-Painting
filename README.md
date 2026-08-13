# 💎 Diamond Painting Colors

A free, no-nonsense tracker for your diamond painting hobby. Keep every kit, every DMC color, every photo and every leftover drill organized — on your phone and your PC.

**No account needed. No app store. No ads. Your data stays on your device.**

> **Try it:** https://YOUR-USERNAME.github.io/YOUR-REPO/
> *(replace with your GitHub Pages link)*

---

## What is it?

Diamond Painting Colors is a single-page web app for tracking craft projects. It handles three kinds, and each one shows only the fields that make sense for it:

- 💎 **Diamond paintings** — the full DMC colour catalogue, drill types, special diamonds
- 🎨 **Paint by number** — your own colour palette picked by eye, since the pots have no standard code
- ✏️ **Your own drawings** — a big hero picture with a photo gallery, plus the media you used

Switching a project's kind only hides sections — nothing is ever deleted, so you can switch back and everything is still there.

For every diamond painting you can track:

- 🎨 **Which DMC colors it uses** — tap them in a built-in catalog of all 454 DMC colors, or paste a whole list of numbers from the kit at once
- 💠 **Diamond type** — square ■, round ●, or odd ✦
- ✨ **Special diamonds** — AB, Crystal, Fairy Dust, Acrylic… with your own shared library of special drills
- 📷 **Photos** — the seller's picture and your finished result, with crop, background cut-out, and a free "arrange" mode to place photos anywhere on the page
- 📋 **Everything else** — status (wishlist / in progress / finished), progress %, rating, price, size, seller, kit code, start & finish dates, and your own tags

## Why you'll like it

**"Do I already have this color?"** — the Find page answers the question every diamond painter asks. Tap any DMC number and instantly see which of your paintings use it (filtered by square/round if you want) — and mark the colours you have leftover drills of 🧺, so "do I own this?" gets a direct answer. A "Leftovers only" filter shows your whole stash at a glance, and **🧾 Check a kit list** takes a pasted colour list from a kit you're eyeing and reports what's new to you, what's in your leftovers, and what's already in your paintings — before you buy.

**It works everywhere.** It's a website, so it runs on any phone, tablet, or PC. Add it to your home screen and it installs like a real app and works offline.

**Your data is yours.** Everything is saved locally in your browser — nothing is uploaded anywhere unless *you* set up your own private cloud sync. Built-in backups (manual codes, saved snapshots, and automatic daily/weekly backups) make sure nothing gets lost.

**It's careful with your stuff.** Deletes need a second tap to confirm, deleted paintings can be restored, and there's full undo/redo (Ctrl+Z / Ctrl+Y on PC).

## How to use it

### Getting started

1. Open the app link in your browser
2. Tap **+ New painting** and give it a name
3. Pick the diamond type, then tap the colors the kit uses — or tap **＋ Paste list** and paste all the DMC numbers straight from the kit's chart
4. Add photos, a rating, tags, price… as much or as little as you like

### Install it like an app (recommended)

- **Android / Chrome:** menu (⋮) → **Add to home screen**
- **iPhone / Safari:** Share button → **Add to Home Screen**
- **PC (Chrome/Edge):** click the install icon in the address bar

After that it opens full-screen from its own icon and works offline.

### The four tabs

| Tab | What it does |
|---|---|
| **⌂ Overview** | Stats about your collection, CSV export for Excel, dark mode, text size & accent color, storage meter, cloud sync, backups |
| **🖼 Projects** | Everything you've made — the search box and ↶ undo stay out; **▸ Filters & sorting** folds away the rest (kind, search field, grouping, sorting, multi-select), and anything you've switched on is spelled out beside the button so a filter is never left on invisibly |
| **🔎 Find** | Look up any DMC color, size, special diamond or medium and see which projects use it — every section folds away, and a **Jump to** bar takes you straight to one |
| **+ New project** | Adds a project (same kind as the last one you made) |

### How your projects are laid out

**Overview → Display → How a project looks in the list** offers two shapes for the same card, and you can switch between them as often as you like — nothing about your projects changes, only the layout:

- **Roomy** — big covers on the right, the kit's own colours filling the middle
- **Tiles** — a grid of picture tiles, the most projects on screen at once

Tapping anywhere on a card — the covers included — opens that project, and coming back puts you where you were in the list.

### Too small to read?

Every page has **A− 115% A+** in the top-right corner. It grows the whole app — words, buttons and photos together — from 80% to 220%, and the layout re-checks how much room is really left as you go, so nothing overlaps or slides off the side. The button beside it switches between the narrow **📱 phone** shape and the wide **🖥 full** one, whatever screen you're on. Both settings belong to the device you set them on, so a big-text phone doesn't drag your PC along with it.

### Tips

- **⇔ Compare:** on any project with two pictures, this puts the seller's photo and your finished result on screen together, full size — side by side on a PC, one above the other on a phone, with a tap to switch. Tap either one to see it alone and tap again to bring the other back.
- **Photos:** tap a photo to open its tools (crop to card, flip, reorder). Use **⇱ Arrange & edit** to drag photos anywhere on the page, resize, tilt, crop, or cut out the background. On PC you can paste a copied image with Ctrl+V. If a photo ever refuses to load on a phone, **🩺 Photo check** explains what went wrong on that device.
- **Tags, sizes, sellers** are shared lists — add one once, reuse it everywhere. Tap **edit list** next to a group to remove entries you no longer want.
- **Backups:** Overview → *Backup & restore*. "Show backup code" gives you a text code you can save anywhere (notes app, email to yourself), and "⬇ Download as file" saves the same thing as a file — sturdier than the clipboard when photos make the code huge. You can also keep up to 20 snapshots on the device and turn on automatic daily/weekly backups.

## Phone ⇄ PC sync (optional)

By default the app is 100% local. If you want your phone and PC to share the same data, you can connect it to your **own free [Supabase](https://supabase.com) project** — so the data still belongs to you, not to some company:

1. Create a free Supabase project
2. Open the SQL Editor, paste in the whole [`SUPABASE_SETUP.sql`](SUPABASE_SETUP.sql) file, and run it
3. In `index.html`, near the top of the script, fill in your project's URL and anon (publishable) key in the `CLOUD` section
4. Reload the app, go to **Overview → Cloud sync**, create an account with an email + password, and log in with the same account on your other device

Sync is automatic while the app is open. Each account only ever sees its own data (enforced by row-level security), and the anon key is safe to keep in a public file. After creating your account, you can disable new sign-ups in Supabase (Authentication → Sign In / Providers) so nobody else can register on your project.

## Host your own copy

Want your own version? It's one HTML file — no build tools, no server code.

1. **Fork** this repository (or download it and create a new repo)
2. In the repo settings, enable **GitHub Pages** (Settings → Pages → deploy from the `main` branch)
3. Your app is live at `https://your-username.github.io/your-repo/`

Everything is in plain files:

| File | Purpose |
|---|---|
| `index.html` | The entire app — HTML, CSS, JavaScript, and the DMC color table |
| `sw.js` | Service worker for offline use |
| `manifest.webmanifest` + `icon.svg` | Makes it installable as an app |
| `SUPABASE_SETUP.sql` | Optional — sets up your own cloud sync |

## Privacy & storage

- All data lives in your browser (IndexedDB — usually hundreds of MB of room). The Overview page has a storage meter so you can see exactly what's used.
- Photos are automatically resized before saving so they stay small.
- Nothing leaves your device unless you set up your own cloud sync — and then it goes only to *your* Supabase project.
- Clearing your browser data will erase the app's data too — that's what backups (and sync) are for. Save a backup code somewhere safe once in a while!

## FAQ

**Is it really free?** Yes. It's a static web page — there's nothing to pay for and nothing to subscribe to.

**Does it work offline?** Yes, once you've opened it at least once (install it to the home screen for the best experience).

**What if I get a new phone?** Either use cloud sync, or copy a backup code from the old phone (Overview → Show backup code) and restore it on the new one.

**Can I track colors that aren't DMC?** The main catalog is DMC, but the *special diamonds* library accepts any text — so odd brands, AB variants, and custom drills fit there.

---

*Made for diamond painters who lost one too many paper color charts.* 💎
