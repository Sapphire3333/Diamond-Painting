#!/usr/bin/env node
/* Compile-checks every piece of JavaScript in the repo — the inline <script>
   blocks of index.html plus the standalone .js files. The whole app is one
   page, so a single missing bracket takes down everything; this catches that
   before it can be committed. Run by .githooks/pre-commit when node exists,
   or by hand:  node scripts/check-syntax.mjs  */
import { readFileSync } from 'node:fs';

let failed = false;
function check(label, code) {
  try {
    new Function(code); /* compile only — nothing is executed */
    console.log('  ok  ' + label);
  } catch (e) {
    failed = true;
    console.error('FAIL  ' + label + ' — ' + e.message);
  }
}

const html = readFileSync('index.html', 'utf8');
const blocks = [...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi)];
blocks.forEach((m, i) => check('index.html <script> block ' + (i + 1), m[1]));

for (const f of ['dmc.js', 'version.js', 'sw.js']) {
  try {
    check(f, readFileSync(f, 'utf8'));
  } catch (e) {
    failed = true;
    console.error('FAIL  ' + f + ' — ' + e.message);
  }
}

process.exit(failed ? 1 : 0);
