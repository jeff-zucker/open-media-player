// Phone-shell harness: force the coarse-pointer gate, mount the REAL player
// shell (createPlayerUI), fill it with fake rows, and exercise the browse
// sheet — no library data needed.
const realMM = window.matchMedia.bind(window);
window.matchMedia = (q) => (/pointer:\s*coarse|hover:\s*none/.test(q)
  ? { matches: true, media: q, addEventListener() {}, removeEventListener() {}, addListener() {}, removeListener() {} }
  : realMM(q));

import { createPlayerUI } from '/home/jeff/Dropbox/Web/solid/open-media-player/src/ia-player/ia-ui.js';
import '/home/jeff/Dropbox/Web/solid/sol-components/web/sol-sheet.js';
import iaCss from '/home/jeff/Dropbox/Web/solid/open-media-player/src/ia-player/assets/ia.css';

const style = document.createElement('style');
style.textContent = iaCss.replaceAll('@media (hover: none) and (pointer: coarse)', '@media all');
document.head.appendChild(style);

const ui = createPlayerUI({ mediaType: 'audio', panel: true });
document.body.appendChild(ui.container);
ui.container.style.height = '100vh';

// Fake tracklist rows (same markup renderTrackList emits).
const rows = Array.from({ length: 12 }, (_, i) => `
  <tr class="ia-track-row${i === 2 ? ' playing' : ''}" tabindex="-1">
    <td class="col-num">${i + 1}</td>
    <td class="col-title">Track number ${i + 1} with a longer title that may wrap</td>
    <td class="col-artist">Bessie Smith</td>
    <td class="col-album">Yellow Dog Blues</td>
    <td class="col-time">3:1${i % 10}</td>
    <td class="col-remove"><button type="button" class="ia-src-edit ia-row-kebab ia-track-kebab">⋯</button></td>
  </tr>`).join('');
ui.container.querySelector('.ia-tracklist tbody').innerHTML = rows;
ui.container.querySelector('.ia-tracklist-empty').hidden = true;

// Fake list items in the (moved) listboxes.
for (const sel of ['.ia-libraries-list', '.ia-sources-list', '.ia-favourites-list']) {
  const ul = ui.container.querySelector(sel) || document.querySelector(sel);
  if (ul) ul.innerHTML = Array.from({ length: 4 }, (_, i) => `<li role="option">Item ${i + 1}</li>`).join('');
}

// Build the sheet the way ia3's phone branch does (same structure/classes).
const sheet = document.createElement('sol-sheet');
sheet.setAttribute('label', 'Browse the library');
sheet.className = 'ia-browse-sheet';
const names = [['Libraries', '.ia-libraries-list'], ['Playlists', '.ia-sources-list'],
  ['Community Favorites', '.ia-favourites-list'], ['Genres', '[data-column="genre"] .ia-listbox'],
  ['Artists', '[data-column="artist"] .ia-listbox'], ['Albums', '[data-column="album"] .ia-listbox']];
for (const [title, sel] of names) {
  const det = document.createElement('details');
  det.className = 'ia-sheet-section';
  det.name = 'ia-browse';
  const sum = document.createElement('summary');
  sum.textContent = title;
  det.append(sum);
  const el = ui.container.querySelector(sel);
  if (el) {
    if (!el.children.length) el.innerHTML = '<li role="option">Blues</li><li role="option">Jazz</li><li role="option">Funk</li>';
    det.append(el);
  }
  sheet.appendChild(det);
}
sheet.querySelectorAll('details')[3].open = true;   // Genres, like ia3 does
ui.container.appendChild(sheet);
ui.container.querySelector('.ia-browse-btn').addEventListener('click', () => sheet.show());

window.__openSheet = () => sheet.show();
window.__sheetDebug = () => {
  const out = [];
  for (const det of sheet.querySelectorAll('details')) {
    const b = det.getBoundingClientRect();
    out.push({ title: det.querySelector('summary').textContent, open: det.open,
               y: Math.round(b.y), h: Math.round(b.height) });
  }
  const body = sheet.shadowRoot.querySelector('.body').getBoundingClientRect();
  return { body: { y: Math.round(body.y), h: Math.round(body.height) }, sections: out };
};
window.__rowDebug = () => {
  const row = document.querySelector('.ia-track-row');
  const cs = getComputedStyle(row);
  const cell = (sel) => { const el = row.querySelector(sel); if (!el) return null;
    const c = getComputedStyle(el); const b = el.getBoundingClientRect();
    return { display: c.display, col: c.gridColumnStart, w: Math.round(b.width), x: Math.round(b.x), text: el.textContent.trim().slice(0, 10) }; };
  return { rowDisplay: cs.display, cols: cs.gridTemplateColumns,
           title: cell('.col-title'), time: cell('.col-time'), kebab: cell('.col-remove') };
};
window.__debug = () => {
  const cs = (sel) => { const el = document.querySelector(sel); if (!el) return null;
    const c = getComputedStyle(el); return { display: c.display, height: c.height, width: c.width }; };
  return { pill: cs('.ia-browse-btn'), seek: cs('.ia-seek'), seekWrap: cs('.ia-seek-wrap'),
           sources: cs('.ia-sources'), toolbar: cs('.ia-toolbar'),
           appClasses: document.querySelector('.ia-player-app').className };
};
window.__measure = () => {
  const r = (el) => { if (!el) return null; const b = el.getBoundingClientRect();
    return { x: Math.round(b.x), y: Math.round(b.y), w: Math.round(b.width), h: Math.round(b.height), bottom: Math.round(b.bottom) }; };
  const dock = document.querySelector('.ia-phone-dock');
  const pill = document.querySelector('.ia-browse-btn');
  const sources = document.querySelector('.ia-sources');
  return {
    viewport: { w: innerWidth, h: innerHeight },
    dockPresent: !!dock,
    dockAtBottom: dock ? Math.abs(r(dock).bottom - innerHeight) < 2 : false,
    pillVisible: pill ? r(pill).width > 0 : false,
    sourcesHidden: sources ? r(sources).width === 0 : true,
    browserHidden: (document.querySelector('.ia-browser')?.getBoundingClientRect().width || 0) === 0,
    playHit: r(document.querySelector('.ia-play')),
    seekH: r(document.querySelector('.ia-seek'))?.height || 0,
    sheetOpen: sheet.hasAttribute('open'),
    sheetPanel: sheet.shadowRoot ? r(sheet.shadowRoot.querySelector('.panel')) : null,
    under16: [...document.querySelectorAll('.ia-player-app *')].filter((el) => {
      const fs = parseFloat(getComputedStyle(el).fontSize);
      return el.offsetParent && fs && fs < 16;
    }).length,
  };
};
