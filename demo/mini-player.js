// Page-level tab + mini-player controller for the standalone Open Media
// Player page (adapted from data-kitchen's src/dk-tabs-shell.js). It
// drives deferred panel loading on tab switches, pauses the panels you
// leave (except the audio one — it plays on under the mini player), and
// binds the .omp-mini bar (markup: src/ia-player/assets/mini-player.html,
// included by index.html) to the music panel's media element. Everything
// re-queries the DOM and tolerates elements being absent, because the
// tabset, the panels, and the mini-player include all upgrade async.

const AUDIO_KEY = 'music';
let current = '';
let seeking = false;

const panelEl  = (key) => document.getElementById('panel-' + key);
const audioEl  = () => panelEl(AUDIO_KEY)?.getMediaElement?.();
const allPanels = () => [...document.querySelectorAll('[id^="panel-"]')];
const miniBar  = () => document.querySelector('.omp-mini');
const miniPlay = () => document.querySelector('.omp-mini-play');
const miniSeek = () => document.querySelector('.omp-mini-seek');
const miniTime = () => document.querySelector('.omp-mini-time');
const fmtTime = (s) => Number.isFinite(s) && s >= 0
  ? `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}` : '0:00';

function updateMini() {
  const bar = miniBar(); if (!bar) return;
  const el = audioEl();
  const hide = (current === AUDIO_KEY) || !(el && el.src);
  bar.hidden = hide;
  if (hide || !el) return;
  bar.title = panelEl(AUDIO_KEY)?.nowPlayingText?.() || '';
  const play = miniPlay(); if (play) play.textContent = el.paused ? '▶' : '⏸';
  const seek = miniSeek();
  if (seek && !seeking) {
    const d = el.duration || 0;
    seek.value = d ? Math.round((el.currentTime / d) * 1000) : 0;
  }
  const time = miniTime();
  if (time) time.textContent = `${fmtTime(el.currentTime)} / ${fmtTime(el.duration)}`;
}

function bindAudio() {
  const el = audioEl();
  if (!el || el._ompMiniBound) return;
  el._ompMiniBound = true;
  for (const ev of ['play', 'pause', 'timeupdate', 'loadedmetadata', 'ended', 'emptied'])
    el.addEventListener(ev, updateMini);
  updateMini();
}

// Wire the mini-player controls once they exist; idempotent so the settle
// loop can call it repeatedly as the late <sol-include> renders them.
function bindMini() {
  const play = miniPlay();
  if (play && !play._ompBound) {
    play._ompBound = true;
    play.addEventListener('click', () => {
      const el = audioEl(); if (!el) return;
      if (el.paused) el.play().catch(() => {}); else el.pause();
    });
  }
  const seek = miniSeek();
  if (seek && !seek._ompBound) {
    seek._ompBound = true;
    seek.addEventListener('input', () => { seeking = true; });
    seek.addEventListener('change', () => {
      const el = audioEl();
      if (el && el.duration) el.currentTime = (seek.value / 1000) * el.duration;
      seeking = false;
    });
  }
}

const panes = (tabs) =>
  [...tabs.querySelectorAll(':scope > .sol-tabs-content > .sol-tabs-pane')];

// React to a tab switch: load the active panel (they're marked `defer` in
// ui-data/omp-tabs.ttl), pause the ones we left except audio, refresh the
// mini bar.
function onTab(name) {
  const tabs = document.querySelector('sol-tabs');
  const pane = tabs && panes(tabs).find((p) => p.dataset.tabName === name);
  const el = pane?.querySelector('[id^="panel-"]');
  if (el) { current = el.id.replace(/^panel-/, ''); el.ensureLoaded?.(); }
  for (const p of allPanels())
    if (p.id !== 'panel-' + current && p.id !== 'panel-' + AUDIO_KEY)
      p.getMediaElement?.()?.pause?.();
  bindAudio(); updateMini();
}

// Settle loop: retry until the tabset exists and the first visible pane has
// been activated, then keep polling briefly for the late mini include.
let wiredTabs = false;
const started = Date.now();
const settle = setInterval(() => {
  bindMini(); bindAudio();
  const tabs = document.querySelector('sol-tabs');
  if (tabs && !wiredTabs) {
    wiredTabs = true;
    tabs.addEventListener('sol-tab-change', (e) => {
      if (e.target === tabs) onTab(e.detail?.name);
    });
  }
  if (tabs && !current) {
    const active = panes(tabs).find((p) => !p.hidden) || panes(tabs)[0];
    if (active) onTab(active.dataset.tabName);
  }
  // The panel may not have upgraded yet when onTab first ran, so keep
  // nudging the active one until it has rendered (ensureLoaded is
  // idempotent).
  if (current) {
    const el = panelEl(current);
    if (el && !el.children.length) el.ensureLoaded?.();
  }
  if (Date.now() - started > 20000) clearInterval(settle);
}, 300);
