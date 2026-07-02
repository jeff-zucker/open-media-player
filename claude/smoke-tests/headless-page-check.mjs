// Headless verification of the standalone read-only page. Run from repo root:
//   node tools/serve-static.mjs &   (or: npm run serve)
//   node claude/smoke-tests/headless-page-check.mjs
// Uses the playwright install from the sibling component-interop working tree
// (this repo deliberately has no playwright devDep).

import { createRequire } from 'node:module';
const require = createRequire('/home/jeff/solid/component-interop/package.json');
const { chromium } = require('playwright');

const URL = process.env.OMP_URL || 'http://localhost:8082/';
const errors = [];
const browser = await chromium.launch();
const page = await browser.newPage();
page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
page.on('console', (m) => { if (m.type() === 'error') errors.push(`console: ${m.text()}`); });

await page.goto(URL, { waitUntil: 'domcontentloaded' });

const defined = await page.evaluate(() => Promise.all([
  customElements.whenDefined('ia-player'),
  customElements.whenDefined('omp-images'),
  customElements.whenDefined('sol-tabs'),
]).then(() => true)).catch(() => false);

await page.waitForSelector('.sol-tabs-bar', { timeout: 20000 }).catch(() => null);
const barText = await page.evaluate(() =>
  document.querySelector('.sol-tabs-bar')?.textContent?.trim().slice(0, 120) || '(no tab bar)');
const panels = await page.evaluate(() =>
  [...document.querySelectorAll('[id^="panel-"]')].map((p) => `${p.id}:${p.tagName.toLowerCase()}`));

// Give the deferred music panel a chance to load its library, then look for
// rendered content inside it.
await page.waitForTimeout(12000);
const music = await page.evaluate(() => {
  const el = document.getElementById('panel-music');
  const root = el?.shadowRoot || el;
  return {
    present: !!el,
    contentChars: root ? (root.textContent || '').trim().length : 0,
    mini: !!document.querySelector('.omp-mini'),
  };
});

console.log(JSON.stringify({ defined, barText, panels, music, errors: errors.slice(0, 12) }, null, 2));
await browser.close();
if (!defined || !music.present) process.exit(1);
