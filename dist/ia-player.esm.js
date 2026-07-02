var Ki=`/* =====================================================================
   Theme variables \u2014 override these in your page CSS (or via a higher-
   specificity selector) to retheme the player without touching the rest
   of the stylesheet.
   ===================================================================== */

/* =====================================================================
   THEME ARCHITECTURE \u2014 "two rooms, one building".
   Every surface/text/border token is DERIVED (color-mix) from four room
   inputs: --ia-base (surface), --ia-ink (text), --ia-accent, --ia-on-accent,
   plus two theme inputs: --ia-lift (elevation tint) / --ia-hover (interaction
   tint). So a whole theme or per-library mood is just a handful of vars.
     \u2022 Theme  \u2192 :root (dark) and [data-theme="light"].
     \u2022 Room   \u2192 .media-audio (warm/amber) and .media-video (cool/cyan),
                each refined again under light mode.
   The derived set is declared on BOTH :root (the neutral page/tab "hallway")
   and .ia-player-app, so each computes from its OWN base (var() substitution
   is per-element \u2014 a single :root copy would NOT pick up the room override).
   ===================================================================== */

/* ---- Theme inputs + fonts + geometry (DARK is the default) ---------- */
:root {
  color-scheme: dark;

  --ia-font-display: ui-serif, Georgia, "Times New Roman", serif;
  --ia-font-body:    system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --ia-font-mono:    ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace;

  /* elevation lightens toward white; interaction also lightens (dark) */
  --ia-lift:  #ffffff;
  --ia-hover: #ffffff;
  --ia-sink:  #000000;

  /* neutral "hallway" room (page bg, tab bar) */
  --ia-base:      #121317;
  --ia-ink:       #f6f6fa;
  --ia-accent:    #c79248;
  --ia-on-accent: #15100a;

  /* fixed (theme-independent) */
  --ia-star:               #ffcc33;
  --ia-error:              #ff5a4d;
  --ia-error-soft:         #ff7a70;

  --ia-radius-sm:          5px;
  --ia-radius:             8px;
  --ia-radius-lg:          12px;
  --ia-sources-width:      260px;
  /* Default browse-cascade height \u2248 \u2153 of the screen (genre/artist/album or
     their movie equivs on top, tracklist below). A saved drag overrides it
     with a px value via restoreState. */
  --ia-browser-height:     33vh;

  --ia-overlay:            color-mix(in srgb, var(--ia-base) 18%, transparent);
  --ia-overlay-strong:     color-mix(in srgb, var(--ia-base) 30%, transparent);
  --ia-shadow-menu:        0 10px 28px -8px rgba(0,0,0,0.55);
  --ia-shadow-menu-strong: 0 14px 36px -10px rgba(0,0,0,0.65);

  --ia-z-modal:                100;
  --ia-modal-width:            500px;
  --ia-modal-width-large:      1100px;
  --ia-modal-gutter:           40px;
  --ia-modal-gutter-large:     60px;
  --ia-modal-max-height:       85vh;
  --ia-modal-max-height-large: 90vh;
}

[data-theme="light"] {
  color-scheme: light;
  --ia-lift:  #ffffff;   /* cards lift to white above the paper bg */
  --ia-hover: #1b1712;   /* interaction DARKENS on a light surface */
  --ia-sink:  #000000;
  --ia-base:      #efe9dd;
  --ia-ink:       #2a2620;
  --ia-accent:    #b5651d;
  --ia-on-accent: #ffffff;
}

/* ---- Room inputs (the two media moods) ----------------------------- */
.ia-player-app.media-audio { --ia-base:#15110c; --ia-ink:#f8f1e3; --ia-accent:#f0a23a; --ia-on-accent:#1b1206; }
.ia-player-app.media-video { --ia-base:#0a0d12; --ia-ink:#eef5fb; --ia-accent:#49c8d8; --ia-on-accent:#06161a; }
[data-theme="light"] .ia-player-app.media-audio { --ia-base:#f7f1e4; --ia-ink:#2c2317; --ia-accent:#a8581a; --ia-on-accent:#fff; }
[data-theme="light"] .ia-player-app.media-video { --ia-base:#e8eff2; --ia-ink:#152029; --ia-accent:#1c7283; --ia-on-accent:#fff; }

/* ---- Derived tokens \u2014 computed per element from its own inputs ------ */
:root, .ia-player-app {
  /* Surfaces */
  --ia-bg:                 var(--ia-base);
  --ia-bg-app:             color-mix(in srgb, var(--ia-base) 96%, var(--ia-lift));
  --ia-bg-panel:           color-mix(in srgb, var(--ia-base) 92%, var(--ia-lift));
  --ia-bg-panel-strong:    color-mix(in srgb, var(--ia-base) 89%, var(--ia-lift));
  --ia-bg-elev:            color-mix(in srgb, var(--ia-base) 90%, var(--ia-lift));
  --ia-bg-elev-2:          color-mix(in srgb, var(--ia-base) 85%, var(--ia-lift));
  --ia-bg-row-alt:         color-mix(in srgb, var(--ia-base) 97%, var(--ia-sink));
  --ia-bg-row-hover:       color-mix(in srgb, var(--ia-base) 90%, var(--ia-hover));
  --ia-bg-row-focus:       color-mix(in srgb, var(--ia-base) 84%, var(--ia-hover));
  --ia-bg-row-selected:    color-mix(in srgb, var(--ia-base) 70%, var(--ia-accent));
  --ia-bg-row-playing:     color-mix(in srgb, var(--ia-base) 82%, var(--ia-accent));
  --ia-bg-row-playing-sel: color-mix(in srgb, var(--ia-base) 60%, var(--ia-accent));
  --ia-bg-btn:             color-mix(in srgb, var(--ia-base) 87%, var(--ia-lift));
  --ia-bg-btn-hover:       color-mix(in srgb, var(--ia-base) 78%, var(--ia-hover));
  --ia-bg-menu-hover:      color-mix(in srgb, var(--ia-base) 84%, var(--ia-hover));
  --ia-bg-section:         color-mix(in srgb, var(--ia-base) 98%, var(--ia-sink));
  --ia-bg-section-hover:   color-mix(in srgb, var(--ia-base) 88%, var(--ia-hover));
  --ia-bg-drop:            color-mix(in srgb, var(--ia-base) 78%, var(--ia-accent));
  --ia-bg-danger:          color-mix(in srgb, var(--ia-base) 80%, var(--ia-error));

  /* Borders */
  --ia-border:             color-mix(in srgb, var(--ia-base) 84%, var(--ia-hover));
  --ia-border-strong:      color-mix(in srgb, var(--ia-base) 74%, var(--ia-hover));
  --ia-border-btn:         color-mix(in srgb, var(--ia-base) 78%, var(--ia-hover));

  /* Text */
  --ia-text:               color-mix(in srgb, var(--ia-ink) 90%, var(--ia-base));
  --ia-text-strong:        var(--ia-ink);
  --ia-text-soft:          color-mix(in srgb, var(--ia-ink) 80%, var(--ia-base));
  --ia-text-muted:         color-mix(in srgb, var(--ia-ink) 80%, var(--ia-base));
  --ia-text-dim:           color-mix(in srgb, var(--ia-ink) 66%, var(--ia-base));
  --ia-text-faint:         color-mix(in srgb, var(--ia-ink) 56%, var(--ia-base));
  --ia-text-fainter:       color-mix(in srgb, var(--ia-ink) 46%, var(--ia-base));
  --ia-text-disabled:      color-mix(in srgb, var(--ia-ink) 46%, var(--ia-base));
  --ia-text-placeholder:   color-mix(in srgb, var(--ia-ink) 38%, var(--ia-base));

  /* Accent family + atmosphere */
  --ia-accent-hover:       color-mix(in srgb, var(--ia-accent) 84%, var(--ia-lift));
  --ia-accent-soft:        color-mix(in srgb, var(--ia-accent) 64%, var(--ia-lift));
  --ia-accent-pale:        color-mix(in srgb, var(--ia-accent) 44%, var(--ia-lift));
  --ia-accent-glow:        color-mix(in srgb, var(--ia-accent) 38%, transparent);
  --ia-glow:               color-mix(in srgb, var(--ia-accent) 20%, transparent);
}

/* ---- Text size (root font-size drives all rem-based type) ----------- */
:root[data-fontsize="small"]  { font-size: 16px; }
:root[data-fontsize="medium"] { font-size: 20px; }   /* default */
:root[data-fontsize="large"]  { font-size: 24px; }

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--ia-font-body);
  background: var(--ia-bg);
  color: var(--ia-text-strong);
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

ia-player {
  display: block;
  width: 100%;
  height: 100vh;
}

/* Themed, tactile scrollbars. */
* { scrollbar-width: thin; scrollbar-color: var(--ia-border-strong) transparent; }
::-webkit-scrollbar { width: 11px; height: 11px; }
::-webkit-scrollbar-thumb {
  background: var(--ia-border-strong);
  border: 3px solid transparent;
  background-clip: padding-box;
  border-radius: 999px;
}
::-webkit-scrollbar-thumb:hover { background: var(--ia-accent-soft); background-clip: padding-box; }
::-webkit-scrollbar-track { background: transparent; }

/* Cohesive accent focus ring across the whole app. */
.ia-player-app :focus-visible {
  outline: 2px solid var(--ia-accent);
  outline-offset: 2px;
  border-radius: var(--ia-radius-sm);
}

/* ====== Rhythmbox-style desktop player layout ===================== */

.ia-player-app {
  display: grid;
  grid-template-columns: var(--ia-sources-width) 1fr;
  /* minmax(0,\u2026) so the browser cascade AND the tracklist can shrink
     instead of forcing the whole app taller than the viewport (which
     pushed the status bar \u2014 and now-playing \u2014 below the fold). */
  grid-template-rows: auto auto minmax(0, var(--ia-browser-height)) minmax(0, 1fr) auto;
  grid-template-areas:
    "toolbar    toolbar"
    "nowplaying nowplaying"
    "sources    browser"
    "sources    tracklist"
    "status     status";
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  position: relative;   /* positioning context for the .ia-notice banner */
  background: var(--ia-bg-app);
  color: var(--ia-text);
  font-family: var(--ia-font-body);
  font-size: 0.92rem;
  /* Cross-fade theme + library switches. */
  transition: background-color 0.35s ease, color 0.35s ease;
}
@media (prefers-reduced-motion: reduce) {
  .ia-player-app { transition: none; }
}

/* When the user is on a source that has no browser (Favorites or a saved
   playlist), hide the browser columns and let the tracklist take the
   full content area. */
.ia-player-app.source-no-browser .ia-browser { display: none; }
.ia-player-app.source-no-browser {
  grid-template-rows: auto auto 1fr auto;
  grid-template-areas:
    "toolbar    toolbar"
    "nowplaying nowplaying"
    "sources    tracklist"
    "status     status";
}

.ia-audio { display: none; }

/* Prominent, dismissible notice banner \u2014 used when media can't play (a quiet
   status-bar line is too easy to miss). Centred near the top of the panel,
   over everything, with a warning colour. Auto-dismisses unless sticky. */
.ia-notice {
  position: absolute;
  top: 14px;
  left: 50%;
  transform: translateX(-50%) translateY(-10px);
  z-index: 60;
  display: flex;
  align-items: center;
  gap: .6em;
  max-width: min(560px, 92%);
  padding: .75em 1.05em;
  border-radius: 11px;
  border: 1px solid color-mix(in srgb, var(--ia-error, #ff5a4d) 70%, #000);
  background: var(--ia-error, #ff5a4d);
  color: #fff;
  font-size: .96rem;
  font-weight: 600;
  line-height: 1.35;
  box-shadow: 0 14px 40px -10px rgba(0, 0, 0, .6);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  /* Quick fade-IN, gentle fade-OUT so the auto-dismiss reads as a fade. */
  transition: opacity .45s ease, transform .45s ease, visibility .45s;
}
.ia-notice.show {
  transition: opacity .18s ease, transform .18s ease, visibility .18s;
}
.ia-notice.show {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
  pointer-events: auto;
}
.ia-notice-icon { font-size: 1.2rem; line-height: 1; flex: 0 0 auto; }
.ia-notice-msg { flex: 1 1 auto; }
.ia-notice-close {
  flex: 0 0 auto;
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 1.05rem;
  line-height: 1;
  opacity: .85;
  padding: 0 .1em;
}
.ia-notice-close:hover,
.ia-notice-close:focus-visible { opacity: 1; }
@media (prefers-reduced-motion: reduce) { .ia-notice { transition: opacity .22s ease; } }

/* --- Video (movies) layout --------------------------------------- */
/* Movies have NO file list: clicking a film plays its best version
   straight into a large <video> that fills the bottom (the \`player\` row).
   Keyed off .media-video set by createPlayerUI for a
   \`dct:type dctype:MovingImage\` library. */
.ia-player-app.media-video {
  grid-template-rows: auto auto minmax(0, var(--ia-browser-height)) minmax(0, 1fr) auto;
  grid-template-areas:
    "toolbar    toolbar"
    "nowplaying nowplaying"
    "sources    browser"
    "sources    player"
    "status     status";
}
.ia-player-app.media-video.source-no-browser {
  grid-template-rows: auto auto minmax(0, 1fr) auto;
  grid-template-areas:
    "toolbar    toolbar"
    "nowplaying nowplaying"
    "sources    player"
    "status     status";
}
/* No tracklist (title/artist rows) in the movies panel \u2014 only the banner
   and the playing film. */
.ia-player-app.media-video .ia-tracklist-wrap { display: none; }
/* \u2026except the Favorites view, where the communal films DO list. There's no
   one-film-at-a-time \`tracklist\` row in the movies grid, so surface the list
   in the \`player\` cell. A clicked film then plays in the <video>, which sits
   later in the DOM (same cell) and paints over the list. */
.ia-player-app.media-video.source-favorites .ia-tracklist-wrap {
  display: block;
  grid-area: player;
}
/* The <video> fills the player area, letterboxed on black \u2014 but only once
   a movie is actually loaded (Req 4): an idle movies screen shows no
   black box, just the empty player area. */
.ia-player-app.media-video .ia-video { display: none; }
.ia-player-app.media-video.has-video .ia-video {
  grid-area: player;
  display: block;
  width: 100%;
  height: 100%;
  min-height: 0;
  background: #000;
  object-fit: contain;
}

/* Film intro overlay \u2014 stacked in the same \`player\` grid cell, on top of
   the <video>, when a film is selected but not yet started. Clicking it
   hides it and starts playback. */
.ia-film-intro { display: none; }
.ia-player-app.media-video.film-intro .ia-film-intro {
  grid-area: player;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: rgba(0, 0, 0, .82);
  cursor: pointer;
  text-align: center;
}
.ia-film-intro-card {
  position: relative;
  max-width: 38rem;
  color: #fff;
  font-family: var(--ia-font-body, system-ui, sans-serif);
}
.ia-film-intro-title {
  margin: 0 0 .4rem;
  font-family: var(--ia-font-display, Georgia, serif);
  font-size: 1.7rem;
  font-weight: 600;
  color: #fff;
}
.ia-film-intro-length { margin: 0 0 1rem; font-size: 1rem; color: #cdd6df; }
.ia-film-intro-length:empty { display: none; }
.ia-film-intro-about { margin: 0 0 1.4rem; font-size: 1rem; color: #e6edf3; }
.ia-film-intro-about:empty { display: none; }
.ia-film-intro-about a { color: var(--ia-accent, #49c8d8); }
.ia-film-intro-rights { margin: 0 0 1rem; font-size: .9rem; color: #aeb9c4; }
.ia-film-intro-rights:empty { display: none; }
.ia-film-intro-hint { margin: 0; font-size: .92rem; font-style: italic; color: #aeb9c4; }
.ia-nowplaying .ia-np-rights { color: #aeb9c4; }

/* --- Toolbar ----------------------------------------------------- */

.ia-toolbar {
  grid-area: toolbar;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: linear-gradient(var(--ia-bg-elev-2), var(--ia-bg-panel-strong));
  border-bottom: 1px solid var(--ia-border);
}

.ia-btn {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1px;
  background: var(--ia-bg-btn);
  color: var(--ia-text);
  border: 1px solid var(--ia-border-btn);
  border-radius: 4px;
  min-width: 44px;
  padding: 3px 6px;
  font-size: 0.95rem;
  line-height: 1.1;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}
.ia-btn .ia-icon { font-size: 0.95rem; }
.ia-btn .ia-blabel {
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--ia-text-disabled);
  line-height: 1;
}
.ia-btn:hover,
.ia-btn:focus-visible {
  background: var(--ia-bg-btn-hover);
  color: var(--ia-text-strong);
  border-color: var(--ia-accent);
  outline: none;
}
.ia-btn:hover .ia-blabel,
.ia-btn:focus-visible .ia-blabel { color: var(--ia-text-strong); }
.ia-btn.active {
  background: var(--ia-accent);
  color: var(--ia-on-accent);
  border-color: var(--ia-accent);
}
.ia-btn.active .ia-blabel { color: var(--ia-on-accent); }

.ia-play .ia-icon { font-size: 1.05rem; }

.ia-seek-wrap {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
}
.ia-seek {
  flex: 1;
  height: 4px;
  cursor: pointer;
  min-width: 0;
}
.ia-time {
  color: var(--ia-text-dim);
  font-family: var(--ia-font-mono);
  font-size: 0.8rem;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.ia-volume-wrap {
  display: flex;
  align-items: center;
  gap: 6px;
}
.ia-volume {
  width: 160px;
  cursor: pointer;
}

/* --- Artist search ----------------------------------------------- */

/* Flexes 1:1 with .ia-seek-wrap, so the free toolbar space splits evenly
   between the seek bar and this search box. */
.ia-artist-search { display: inline-flex; margin-left: auto; flex: 1; min-width: 0; }
.ia-artist-search-input {
  width: 100%;
  min-width: 160px;
  padding: 4px 8px;
  font: inherit;
  color: var(--ia-text);
  background: var(--ia-bg);
  border: 1px solid var(--ia-border);
  border-radius: 4px;
}
.ia-artist-search-input:focus {
  outline: none;
  border-color: var(--ia-accent);
}

/* --- Gear menu --------------------------------------------------- */

.gear-wrap { position: relative; display: inline-flex; }

.gear-menu {
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  min-width: 180px;
  background: var(--ia-bg-elev);
  border: 1px solid var(--ia-border-strong);
  border-radius: 6px;
  padding: 4px;
  z-index: 50;
  box-shadow: var(--ia-shadow-menu);
}
.gear-menu .menu-item {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  text-align: left;
  background: transparent;
  border: none;
  color: var(--ia-text);
  padding: 8px 10px;
  font-size: 0.9rem;
  cursor: pointer;
  border-radius: 4px;
  height: auto;
  min-width: 0;
}
.gear-menu .menu-item:hover,
.gear-menu .menu-item:focus {
  background: var(--ia-bg-btn);
  color: var(--ia-text-strong);
  outline: none;
}

/* Appearance: text-size is a single .gear-fontsize menu-item that cycles
   Small \u2192 Medium \u2192 Large (the "A" icon resizes to show the current step). */
.gear-fontsize .gear-fontsize-ico {
  display: inline-block;
  width: 1.1rem; text-align: center;
  font-family: var(--ia-font-display);
}

/* Sol-login chip lives at the top of the gear menu. Visually distinct from
   the .menu-item rows below \u2014 a small framed block that hosts the login
   button / WebID popover. Not keyboard-nav'd by the menu's arrow handler
   (sol-login owns its own focus). */
.menu-item-sollogin {
  display: block;
  padding: 6px 8px 8px;
  border-bottom: 1px solid var(--ia-border);
  margin-bottom: 4px;
}
.menu-item-sollogin .ia-sol-login {
  display: block;
  width: 100%;
}

/* Menu button reflects real-session state (kitchen mode does NOT colour the
   chip \u2014 it only opens up the affordances). Green accent + the WebID lands
   in the title attribute (no visible label change \u2014 the \u22EE button stays
   compact in the toolbar). */
.ia-btn.manage-btn.logged-in {
  background: var(--ia-bg-loggedin, #1f5a2c);
  border-color: var(--ia-accent-green, #4caf50);
  color: var(--ia-text-strong);
}
.ia-btn.manage-btn.logged-in:hover,
.ia-btn.manage-btn.logged-in:focus-visible {
  background: var(--ia-bg-loggedin-hover, #267237);
  border-color: var(--ia-accent-green, #4caf50);
}
.ia-btn.manage-btn.logged-in .ia-icon { color: var(--ia-accent-green, #66d77a); }

/* Guest mode (no real session, no kitchen flag): hide admin / pod / edit
   affordances so anonymous visitors see a read-only player. Driven by
   .guest-mode on .ia-player-app from applyAccessGating(). */
.ia-player-app.guest-mode .gear-filters,
.ia-player-app.guest-mode .gear-view-deleted,
.ia-player-app.guest-mode .gear-install-pod,
.ia-player-app.guest-mode .gear-update-app { display: none; }
.ia-player-app.guest-mode .ia-add-source-btn { display: none; }
/* Playlists are owner content now \u2014 guests can browse/listen but not
   create or modify them (favouriting is the communal write surface instead). */
.ia-player-app.guest-mode .ia-add-playlist-btn { display: none; }
.ia-player-app.guest-mode .ia-sources-list .ia-row-kebab { display: none; }
/* Add-genre / add-artist (= add-film-type / add-collection for movies) are
   owner-only edits. Hide the whole column footer (border + padded strip), not
   just the button, so guests don't see an empty bar. Footers exist only on the
   genre + artist columns. */
.ia-player-app.guest-mode .ia-column-footer { display: none; }
/* Kebabs: hide everywhere EXCEPT in the Sources / Playlists list and the
   tracklist (per-row track kebabs are inside the table, not a listbox).
   Library + Genre + Artist listboxes lose their kebab in guest mode. */
.ia-player-app.guest-mode .ia-libraries-list .ia-row-kebab,
.ia-player-app.guest-mode [data-column="genre"] .ia-row-kebab,
.ia-player-app.guest-mode [data-column="artist"] .ia-row-kebab { display: none; }

/* Artist IA link: emitted on every artist row, but only DISPLAYED when
   it would otherwise be the row's lone affordance \u2014 i.e. in guest mode,
   where the artist kebab is hidden (no Rename/Delete/Convert for
   guests). In logged-in / kitchen mode the kebab covers it (Visit /
   Search archive.org lives as an item inside the kebab menu \u2014 see
   openArtistEditMenu). Same dimensions as .ia-row-kebab so the row
   layout stays stable. */
.ia-row-ialink {
  display: none;
  align-items: center;
  background: transparent;
  border: 1px solid transparent;
  color: var(--ia-text-dim);
  font-size: 0.95rem;
  line-height: 1;
  padding: 0 4px;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
}
.ia-row-ialink:hover,
.ia-row-ialink:focus-visible {
  color: var(--ia-text-strong);
  background: var(--ia-bg-btn);
  outline: none;
}
.ia-player-app.guest-mode [data-column="artist"] .ia-row-ialink {
  display: inline-flex;
}

/* --- Now-playing strip ------------------------------------------ */

.ia-nowplaying {
  grid-area: nowplaying;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 9px 16px;
  background:
    linear-gradient(90deg, var(--ia-glow), transparent 40%),
    var(--ia-bg-panel-strong);
  border-bottom: 1px solid var(--ia-border);
  min-height: 30px;
}
.ia-nowplaying-text {
  flex: 1 1 auto;
  min-width: 0;
  color: var(--ia-text-strong);
  font-family: var(--ia-font-display);
  font-optical-sizing: auto;
  font-size: 1.18rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ia-nowplaying-text:empty::before {
  content: 'Nothing playing yet.';
  color: var(--ia-text-placeholder);
  font-style: italic;
  font-weight: 400;
}
/* Movies have no transport bar \u2014 hide the whole toolbar; the film-search is
   moved (JS) onto the now-playing line's right. */
.ia-player-app.media-video .ia-toolbar { display: none; }
.ia-nowplaying .ia-artist-search { flex: 0 0 auto; margin-left: auto; }
.ia-nowplaying .ia-artist-search-input {
  width: 240px; max-width: 32vw;
  font-family: var(--ia-font-body); font-size: 0.85rem; font-weight: 400;
}
.ia-nowplaying .ia-link {
  color: var(--ia-accent);
  text-decoration: none;
  margin-left: 6px;
  font-size: 0.85em;
}
.ia-nowplaying .ia-link:hover,
.ia-nowplaying .ia-link:focus-visible {
  text-decoration: underline;
  outline: none;
}

/* --- Sources sidebar -------------------------------------------- */

.ia-sources {
  grid-area: sources;
  position: relative;
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--ia-border);
  background: var(--ia-bg-panel);
  min-width: 0;
  overflow: hidden;
}
/* Drag handle on the sources column's right edge \u2014 resizes the grid's
   first track by setting --ia-sources-width on .ia-player-app. */
.ia-sources-resize {
  position: absolute;
  top: 0;
  right: 0;
  width: 6px;
  height: 100%;
  cursor: col-resize;
  z-index: 5;
}
.ia-sources-resize:hover,
.ia-player-app.resizing-sources .ia-sources-resize {
  background: var(--ia-accent);
  opacity: 0.5;
}
.ia-sources .ia-column-header {
  padding: 7px 12px;
  font-size: 0.68rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.13em;
  color: var(--ia-accent-soft);
  background: var(--ia-bg-elev);
  border-bottom: 1px solid var(--ia-border);
  margin: 0;
}
/* Single-library panels (Music/Movies each run as their own <ia-player>)
   don't need the one-row Libraries switcher \u2014 the host page's tab bar
   switches panels. Hide the Libraries header, list and "+ Library". */
.ia-player-app.single-library #ia-h-libs,
.ia-player-app.single-library .ia-libraries-list,
.ia-player-app.single-library .ia-add-source-btn { display: none; }

/* Two-panel shell: the panel's own \u22EE menu is replaced by the shared chrome
   bar (host page). The menu DOM stays (its handlers are driven via the
   chrome's appAction), it's just hidden. */
.ia-player-app.panel-instance .gear-wrap { display: none; }

/* Libraries list sizes to its content; Playlists list takes the rest of
   the sources column. A 50% cap on libraries keeps a very long library
   list from starving playlists (it scrolls instead). */
.ia-sources .ia-libraries-list {
  flex: 0 0 auto;
  max-height: 50%;
  margin-bottom: 1rem;   /* gap between Libraries and the Playlists section */
}
.ia-sources .ia-sources-list {
  flex: 1 1 auto;
}
/* Community Favorites: a capped, independently-scrolling section below the
   Playlists section. Music caps it at ~\u2153 of the column; both lists scroll as
   needed. Movies (favourites-only) hide Playlists and let favourites fill. */
.ia-sources .ia-favourites-list {
  flex: 0 0 auto;
  max-height: 33%;
}
.ia-player-app.favourites-only #ia-h-sources,
.ia-player-app.favourites-only .ia-sources-list,
.ia-player-app.favourites-only .ia-add-playlist-btn { display: none; }
.ia-player-app.favourites-only .ia-favourites-list {
  flex: 1 1 auto;
  max-height: none;
}
.ia-sources .ia-listbox-item {
  padding: 6px 10px;
  font-size: 0.92rem;
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
}
.ia-sources .ia-listbox-checkbox {
  font-size: 0.95rem;
  color: var(--ia-text-disabled);
  flex-shrink: 0;
}
.ia-sources .ia-listbox-item.selected .ia-listbox-checkbox { color: var(--ia-on-accent); }
.ia-sources .ia-listbox-label {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Pencil button on each source row, hidden until hover/focus. */
.ia-src-edit {
  background: transparent;
  border: none;
  color: var(--ia-text-dim);
  cursor: pointer;
  padding: 0 4px;
  font-size: 0.9rem;
  visibility: hidden;
  flex-shrink: 0;
}
.ia-sources .ia-listbox-item:hover .ia-src-edit,
.ia-sources .ia-listbox-item:focus-within .ia-src-edit,
.ia-sources .ia-listbox-item.selected .ia-src-edit { visibility: visible; }
.ia-src-edit:hover,
.ia-src-edit:focus-visible {
  color: var(--ia-accent);
  outline: none;
}

/* Genre + artist column rows need flex layout so the kebab can sit flush
   right with margin-left:auto. */
.ia-browser .ia-listbox-item {
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
}
.ia-browser .ia-listbox-label {
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Kebab on the genre + artist column rows: always visible, pushed to the
   right edge of the row, bolder than the label so it reads as a control. */
.ia-row-kebab {
  visibility: visible;
  margin-left: auto;
  flex-shrink: 0;
  font-size: 1.1rem;
  line-height: 1;
  letter-spacing: 1px;
  font-weight: 700;
  color: var(--ia-text-soft);
}
.ia-row-kebab:hover,
.ia-row-kebab:focus-visible { color: var(--ia-text-strong); }

/* Owner-only \u2715 on the movies \u2605 Favourites column rows \u2014 removes the film
   from the communal wall. Pushed to the right edge of the row. */
.ia-row-favdel {
  margin-left: auto;
  flex-shrink: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0 .25rem;
  font-size: .9rem;
  line-height: 1;
  color: var(--ia-text-faint, #888);
}
.ia-player-app.guest-mode .ia-row-favdel { display: none; }
.ia-row-favdel:hover,
.ia-row-favdel:focus-visible { color: var(--ia-error-soft, #e74c3c); }

/* \u2606 communal-favourite toggle on Movies-column rows (the way images are
   starred in their Collection column). Always visible, pushed to the right;
   gold when the film is on the wall. */
.ia-row-fav {
  visibility: visible;
  margin-left: auto;
  flex-shrink: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0 .15rem;
  font-size: 1.05rem;
  line-height: 1;
  color: var(--ia-text-faint, #888);
}
.ia-row-fav:hover,
.ia-row-fav:focus-visible { color: #e6b800; }
.ia-row-fav.on { color: #e6b800; }

/* Inline rename input that replaces a row's label during edit. */
.ia-row-rename {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid var(--ia-accent);
  background: var(--ia-bg);
  color: var(--ia-text-strong);
  padding: 2px 4px;
  font: inherit;
  border-radius: 3px;
}

/* Footer area below each browser column, hosting the "+ Add" button or
   its expanded inline form. */
.ia-column-footer {
  padding: 4px 6px;
  border-top: 1px solid var(--ia-border);
  background: var(--ia-bg-subtle);
}
.ia-column-footer button.ia-add-genre-btn,
.ia-column-footer button.ia-add-artist-btn {
  width: 100%;
  background: transparent;
  border: 1px dashed var(--ia-border);
  color: var(--ia-text-dim);
  cursor: pointer;
  padding: 4px 6px;
  border-radius: 3px;
  font-size: 0.85rem;
  text-align: left;
}
.ia-column-footer button.ia-add-genre-btn:hover,
.ia-column-footer button.ia-add-artist-btn:hover {
  color: var(--ia-text-strong);
  border-color: var(--ia-accent);
}
.ia-column-addform {
  display: flex;
  gap: 4px;
  align-items: center;
}
.ia-column-addinput {
  flex: 1 1 auto;
  min-width: 0;
  padding: 3px 5px;
  border: 1px solid var(--ia-accent);
  border-radius: 3px;
  background: var(--ia-bg);
  color: var(--ia-text-strong);
  font: inherit;
}
.ia-column-addselect {
  flex: 0 1 auto;
  max-width: 40%;
  padding: 3px;
  border: 1px solid var(--ia-border);
  border-radius: 3px;
  background: var(--ia-bg);
  color: var(--ia-text-strong);
  font: inherit;
}
.ia-column-addsave,
.ia-column-addcancel {
  flex: 0 0 auto;
  background: transparent;
  border: none;
  color: var(--ia-text-dim);
  cursor: pointer;
  padding: 0 4px;
  font-size: 1rem;
}
.ia-column-addsave:hover { color: var(--ia-accent); }
.ia-column-addcancel:hover { color: var(--ia-danger, #c33); }
/* Stack the artist add-form when the column is narrow \u2014 keeps the URL
   input usable. */
.ia-column-addartist { flex-wrap: wrap; }
.ia-column-addartist .ia-column-addinput { flex-basis: 100%; }

.ia-sources-actions {
  display: flex;
  gap: 6px;
  padding: 6px 8px;
  border-top: 1px solid var(--ia-border);
  background: var(--ia-bg-elev);
}
.ia-sources-actions button {
  flex: 1;
  background: var(--ia-bg-btn);
  color: var(--ia-text);
  border: 1px solid var(--ia-border-strong);
  border-radius: 4px;
  padding: 6px 8px;
  font-size: 0.82rem;
  cursor: pointer;
}
.ia-sources-actions button:hover,
.ia-sources-actions button:focus-visible {
  background: var(--ia-bg-btn-hover);
  color: var(--ia-text-strong);
  border-color: var(--ia-accent);
  outline: none;
}

/* Floating contextual menu (used by pencil actions and similar). */
.ia-floating-menu {
  position: fixed;
  z-index: 200;
  background: var(--ia-bg-elev-2);
  border: 1px solid var(--ia-border-strong);
  border-radius: 6px;
  padding: 4px;
  min-width: 180px;
  box-shadow: var(--ia-shadow-menu-strong);
}
.ia-floating-menu-item {
  display: block;
  width: 100%;
  text-align: left;
  background: transparent;
  border: none;
  color: var(--ia-text);
  padding: 6px 10px;
  font-size: 0.88rem;
  border-radius: 4px;
  cursor: pointer;
}
.ia-floating-menu-item:hover,
.ia-floating-menu-item:focus-visible {
  background: var(--ia-bg-menu-hover);
  color: var(--ia-text-strong);
  outline: none;
}

/* --- Browser columns (Genres / Artists / Albums) ----------------- */

.ia-browser {
  grid-area: browser;
  display: grid;
  grid-template-columns: 1fr 1fr 1.5fr;
  height: 100%;          /* fill the (shrinkable) browser grid row */
  min-height: 0;
  background: var(--ia-bg-elev);
  border-bottom: 1px solid var(--ia-border);
  position: relative;
}
.ia-browser-resize {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -3px;
  height: 7px;
  cursor: row-resize;
  z-index: 6;
}
.ia-browser-resize:hover,
.ia-player-app.resizing-browser .ia-browser-resize {
  background: var(--ia-accent);
  opacity: .5;
}
.ia-column {
  display: flex;
  flex-direction: column;
  min-width: 0;
  border-right: 1px solid var(--ia-border);
  overflow: hidden;
}
.ia-column:last-child { border-right: none; }

.ia-column-header {
  margin: 0;
  padding: 8px 12px;
  font-family: var(--ia-font-display);
  font-optical-sizing: auto;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  color: var(--ia-text-soft);
  background: var(--ia-bg-elev-2);
  border-bottom: 1px solid var(--ia-border);
}
.ia-album-note {
  padding: 5px 10px;
  font-size: 0.72rem;
  line-height: 1.3;
  color: var(--ia-text-dim);
  background: var(--ia-bg-elev);
  border-bottom: 1px solid var(--ia-border);
}

.ia-listbox {
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;
  overflow-y: auto;
  outline: none;
}
.ia-listbox:focus-visible {
  box-shadow: inset 0 0 0 2px var(--ia-accent);
}

.ia-listbox-item {
  padding: 4px 12px;
  cursor: pointer;
  color: var(--ia-text-soft);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
}
.ia-listbox-item:hover { background: var(--ia-bg-row-focus); }
.ia-listbox-item.selected {
  background: var(--ia-accent);
  color: var(--ia-on-accent);
  font-weight: 600;
}

/* While a playlist is the current source, only the playlist row (in the
   Sources list) shows the selected highlight. The library cascade \u2014
   genre / artist / album columns and the Libraries list \u2014 must NOT look
   active. The Libraries *checkbox* (\u2611) is unaffected: it's a separate
   glyph driven by enabled-state, we only neutralise the accent row
   paint here. The Playlists list (.ia-sources-list) is intentionally
   excluded so the active playlist stays highlighted. */
.ia-player-app.viewing-playlist .ia-browser .ia-listbox-item.selected,
.ia-player-app.viewing-playlist .ia-sources .ia-libraries-list .ia-listbox-item.selected {
  background: transparent;
  color: var(--ia-text-soft);
}
.ia-player-app.viewing-playlist .ia-sources .ia-libraries-list .ia-listbox-item.selected .ia-listbox-checkbox {
  color: var(--ia-text-soft);
}
.ia-listbox-item:focus {
  outline: none;
  box-shadow: inset 0 0 0 2px var(--ia-accent-soft);
}
.ia-listbox-all {
  font-style: italic;
  color: var(--ia-text-disabled);
  border-bottom: 1px solid var(--ia-border);
}

/* Curated vs raw artist split. The divider is the structural cue
   (so the distinction isn't colour-only); raw rows are de-emphasised
   but stay fully interactive \u2014 hover/selected restore full contrast. */
.ia-listbox-divider {
  padding: 8px 12px 3px;
  color: var(--ia-text-muted);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  border-top: 1px solid var(--ia-border);
  margin-top: 4px;
  cursor: default;
  user-select: none;
}
.ia-listbox-item.ia-item-raw { color: var(--ia-text-muted); font-style: italic; }
.ia-listbox-item.ia-item-raw:hover { color: var(--ia-text-soft); }
.ia-listbox-item.ia-item-raw.selected { color: var(--ia-on-accent); font-style: normal; }

.ia-listbox-message {
  padding: 14px 12px;
  color: var(--ia-text-faint);
  font-style: italic;
  font-size: 0.88rem;
  cursor: default;
}

/* --- Track list -------------------------------------------------- */

.ia-tracklist-wrap {
  grid-area: tracklist;
  overflow: auto;
  background: var(--ia-bg-app);
  position: relative;
}
.ia-tracklist-empty {
  padding: 30px 20px;
  text-align: center;
  color: var(--ia-text-faint);
}
.ia-tracklist {
  width: 100%;
  /* Floor: below this the three flex columns (title/artist/album) would
     clip their header labels, so the wrap scrolls horizontally instead.
     \`table-layout: fixed\` ignores per-column min-width, so the minimum
     is enforced here on the table as a whole. */
  min-width: 500px;
  border-collapse: collapse;
  font-size: 0.92rem;
  table-layout: fixed;
}
.ia-tracklist.resizing { cursor: col-resize; user-select: none; }
.ia-tracklist thead {
  position: sticky;
  top: 0;
  background: var(--ia-bg-elev);
  z-index: 2;
}
.ia-tracklist th {
  position: relative;
  text-align: left;
  font-weight: 600;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--ia-text-dim);
  padding: 6px 10px;
  border-bottom: 1px solid var(--ia-border);
  white-space: nowrap;
}
.ia-tracklist th[data-sort] { cursor: pointer; }
.ia-tracklist th[data-sort]:hover { color: var(--ia-text-strong); }
.ia-tracklist th.sorted { color: var(--ia-accent); }
.ia-tracklist th .sort-arrow {
  display: inline-block;
  margin-left: 4px;
  font-size: 0.7rem;
}
.ia-tracklist th .resize-handle {
  position: absolute;
  right: 0;
  top: 0;
  width: 6px;
  height: 100%;
  cursor: col-resize;
  user-select: none;
  z-index: 3;
}
.ia-tracklist th .resize-handle:hover { background: var(--ia-accent-glow); }
/* Column widths. The table is table-layout:fixed at width:100%, so the
   columns always fit the pane. num / time / remove are fixed px, each
   wide enough for its header (and header button); title / artist /
   album are width:auto, so they flex \u2014 sharing the leftover space
   equally and shrinking together as the pane narrows. They never drop
   below their header labels: the table's min-width (above) is the floor
   where those three still clear "Title" / "Artist" / "Album"; below it
   the tracklist scrolls rather than clipping a heading. A resize handle
   still overrides any column with an explicit px width. */
col.col-num    { width: 64px; }
col.col-title  { width: auto; }
col.col-artist { width: auto; }
col.col-album  { width: auto; }
col.col-time   { width: 76px; }
col.col-fav    { width: 36px; }
col.col-remove { width: 60px; }
.ia-tracklist .col-num    { text-align: right; padding-right: 6px; }
.ia-tracklist .col-time   { text-align: right; font-family: var(--ia-font-mono); font-size: 0.82em; font-variant-numeric: tabular-nums; color: var(--ia-text-dim); }
.ia-tracklist .col-fav    { text-align: center; }
.ia-tracklist .col-remove { text-align: center; }
/* Header layout: keep button (left) + # label (right) in the col-num <th>,
   and the clear-tracklist button centered in the col-remove <th>. Body
   cells aren't affected \u2014 they're plain row numbers / per-row remove \xD7. */
.ia-tracklist thead th.col-num {
  text-align: left;
  padding-left: 4px;
  padding-right: 6px;
}
.ia-tracklist thead th.col-num .th-label {
  margin-left: 4px;
}
.ia-tracklist thead th.col-remove { padding: 4px; }
.ia-randomize-btn,
.ia-clear-tracks-btn {
  background: transparent;
  border: 1px solid transparent;
  color: var(--ia-text-dim);
  font-size: 0.95rem;
  line-height: 1;
  padding: 2px 4px;
  border-radius: 4px;
  cursor: pointer;
  vertical-align: middle;
}
.ia-randomize-btn:hover,
.ia-clear-tracks-btn:hover {
  color: var(--ia-text-strong);
  background: var(--ia-bg-row-hover);
}
.ia-randomize-btn:focus-visible,
.ia-clear-tracks-btn:focus-visible {
  outline: 2px solid var(--ia-accent);
  outline-offset: 1px;
}
/* Clear-tracklist applies only to the Library view's ephemeral queue
   (see updateViewClass / the click handler in ia3.js). Hide the header
   button outside that view so the affordance matches the behavior. */
.ia-player-app:not(.viewing-library) .ia-clear-tracks-btn { display: none; }

.ia-track-row {
  cursor: pointer;
  outline: none;
}
.ia-track-row td {
  padding: 4px 10px;
  border-bottom: 1px solid var(--ia-bg-panel-strong);
  color: var(--ia-text-soft);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ia-track-row:nth-child(even) td { background: var(--ia-bg-row-alt); }
.ia-track-row:hover td { background: var(--ia-bg-row-hover); }
.ia-track-row:focus td { background: var(--ia-bg-row-focus); }
.ia-track-row.selected td {
  background: var(--ia-bg-row-selected);
  color: var(--ia-text-strong);
}
.ia-track-row.dragging td { opacity: 0.5; }
.ia-sources .ia-listbox-item.drop-target {
  outline: 2px dashed var(--ia-accent);
  outline-offset: -2px;
  background: var(--ia-bg-drop);
}
.ia-track-row.selected.playing td {
  background: var(--ia-bg-row-playing-sel);
  /* Strong (ink) text, not accent-pale: on the accent-heavy playing-sel
     background, pale accent text collapses to ~zero contrast in light mode
     (it's a light tan on light tan). The row still reads as playing via its
     distinct background + bold weight + accent track number. */
  color: var(--ia-text-strong);
}
.ia-track-row.playing td {
  background: var(--ia-bg-row-playing);
  color: var(--ia-accent-soft);
  font-weight: 500;
}
.ia-track-row.playing .col-num { color: var(--ia-accent); }
.ia-track-row.selected .ia-track-remove-btn { visibility: visible; }

/* \u2606 communal-favourite toggle, prepended in the title cell. */
.ia-track-fav-btn {
  background: transparent; border: none; cursor: pointer; padding: 0 .35em 0 0;
  color: var(--ia-text-faint, #888); font-size: .95em; line-height: 1;
}
.ia-track-fav-btn:hover { color: #e6b800; }
.ia-track-fav-btn.on { color: #e6b800; }

.ia-track-fav-btn {
  background: transparent;
  border: none;
  color: var(--ia-text-fainter);
  font-size: 1.1rem;
  cursor: pointer;
  padding: 0;
}
.ia-track-fav-btn:hover,
.ia-track-fav-btn:focus-visible {
  color: var(--ia-star);
  outline: none;
}
.ia-track-fav-btn.active { color: var(--ia-star); }

.ia-track-remove-btn {
  background: transparent;
  border: none;
  color: var(--ia-text-fainter);
  font-size: 0.95rem;
  cursor: pointer;
  padding: 0;
  visibility: hidden;
}
.ia-track-row:hover .ia-track-remove-btn,
.ia-track-row:focus-within .ia-track-remove-btn { visibility: visible; }
/* In the Favorites view the \u2715 IS the owner's "remove from the wall" control \u2014
   keep it visible so the moderation affordance is discoverable, not hover-only. */
.ia-player-app.source-favorites .ia-track-remove-btn { visibility: visible; }
.ia-track-remove-btn:hover,
.ia-track-remove-btn:focus-visible {
  color: var(--ia-error-soft);
  outline: none;
}

/* --- Status footer ---------------------------------------------- */

.ia-status {
  grid-area: status;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 6px 12px;
  background: var(--ia-bg-panel-strong);
  border-top: 1px solid var(--ia-border);
  color: var(--ia-text-muted);
  font-size: 0.88rem;
  min-height: 28px;
}
.ia-status-msg {
  flex: 1 1 auto;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ia-status-count {
  flex: 0 0 auto;
  color: var(--ia-text-dim);
  font-variant-numeric: tabular-nums;
}
.ia-status .ia-link {
  color: var(--ia-accent);
  text-decoration: none;
  margin-left: 6px;
  font-size: 0.85em;
}
.ia-status .ia-link:hover,
.ia-status .ia-link:focus-visible {
  text-decoration: underline;
  outline: none;
}

.error {
  color: var(--ia-error);
  text-align: center;
  padding: 40px 20px;
  font-size: 1.1rem;
}

.loading-screen {
  text-align: center;
  padding: 60px 20px;
  color: var(--ia-text-muted);
  font-size: 1.2rem;
}

.rdf-input {
  text-align: center;
  padding: 40px 20px;
}

.rdf-input input {
  width: 100%;
  max-width: 600px;
  padding: 12px 16px;
  font-size: 1rem;
  border: 2px solid var(--ia-border-strong);
  border-radius: 6px;
  background: var(--ia-bg-elev);
  color: var(--ia-text-strong);
  margin-bottom: 15px;
}

.rdf-input button {
  padding: 12px 30px;
  font-size: 1rem;
  background: var(--ia-accent);
  color: var(--ia-text-strong);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s ease;
}

.rdf-input button:hover,
.rdf-input button:focus {
  background: var(--ia-accent-hover);
  outline: 2px solid var(--ia-accent);
  outline-offset: 2px;
}

.about-modal {
  position: fixed;
  inset: 0;
  background: var(--ia-overlay);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--ia-z-modal);
}

.about-modal-content {
  position: relative;
  max-width: var(--ia-modal-width);
  width: calc(100% - var(--ia-modal-gutter));
  max-height: var(--ia-modal-max-height);
  overflow-y: auto;
  background: var(--ia-bg-elev);
  border: 1px solid var(--ia-border-strong);
  border-radius: var(--ia-radius-lg);
  padding: 24px 24px 20px;
  color: var(--ia-text);
  font-size: 0.95rem;
  line-height: 1.5;
}

/* Large-size variant used by the Help modal: wide enough for a reference
   table to breathe, tall enough to read a section without immediately
   scrolling. */
.about-modal-content.about-modal-large {
  max-width: var(--ia-modal-width-large);
  width: calc(100% - var(--ia-modal-gutter-large));
  max-height: var(--ia-modal-max-height-large);
}

.about-modal-content a {
  color: var(--ia-accent);
}

.about-modal-title {
  margin: 0 0 12px;
  font-size: 1.2rem;
  color: var(--ia-text-strong);
}

.about-buttons {
  width: 100%;
  border-collapse: collapse;
  margin: 14px 0;
  font-size: 0.9rem;
}

.about-buttons th,
.about-buttons td {
  text-align: left;
  padding: 6px 10px;
  border-bottom: 1px solid var(--ia-border-strong);
}

.about-buttons th {
  color: var(--ia-text-muted);
  font-weight: 600;
}

.about-buttons td:first-child {
  width: 70px;
  text-align: center;
  font-size: 1.05rem;
  color: var(--ia-star);
  white-space: nowrap;
}

.manage-modal {
  position: fixed;
  inset: 0;
  background: var(--ia-overlay-strong);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: 20px;
}

.manage-modal-content {
  position: relative;
  width: 100%;
  max-width: 740px;
  max-height: calc(100vh - 40px);
  overflow-y: auto;
  background: var(--ia-bg-panel);
  border: 1px solid var(--ia-border-strong);
  border-radius: 8px;
  padding: 20px 24px;
  color: var(--ia-text);
}
.separator {
  display:inline-block;
  margin-left:1rem;
  margin-right:1rem;
}
.manage-modal-content h2 {
  margin: 0 0 12px;
  font-size: 1.2rem;
  color: var(--ia-text-strong);
}

.manage-modal-close {
  position: absolute;
  top: 6px;
  right: 10px;
  background: transparent;
  color: var(--ia-text-muted);
  border: none;
  font-size: 1.6rem;
  line-height: 1;
  cursor: pointer;
  padding: 4px 8px;
}

.manage-modal-close:hover,
.manage-modal-close:focus {
  color: var(--ia-accent);
  outline: none;
}

.manage-add-genre {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.manage-add-genre input {
  flex: 1;
  padding: 8px 12px;
  background: var(--ia-bg-elev);
  color: var(--ia-text-strong);
  border: 1px solid var(--ia-border-strong);
  border-radius: 4px;
  font-size: 0.95rem;
}

.manage-add-genre button {
  padding: 8px 14px;
  background: var(--ia-accent);
  color: var(--ia-text-strong);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
}

.manage-add-genre button:hover { background: var(--ia-accent-hover); }

.manage-genre {
  border: 1px solid var(--ia-border);
  border-radius: 6px;
  margin-bottom: 12px;
  background: var(--ia-bg-section);
  transition: border-color 0.15s ease, background 0.15s ease;
}

.manage-genre.drop-hover {
  border-color: var(--ia-accent);
  background: var(--ia-bg-drop);
}

.manage-genre-head {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-bottom: 1px solid var(--ia-border);
}

.manage-genre-label {
  flex: 1;
  font-weight: 600;
  color: var(--ia-text-strong);
  cursor: text;
}

.manage-genre-head button {
  background: transparent;
  border: 1px solid var(--ia-border-strong);
  color: var(--ia-text-muted);
  border-radius: 4px;
  padding: 2px 8px;
  cursor: pointer;
  font-size: 0.95rem;
}

.manage-genre-head button:hover {
  color: var(--ia-text-strong);
  border-color: var(--ia-accent);
}

.manage-artist-list {
  list-style: none;
  margin: 0;
  padding: 6px 8px;
  min-height: 24px;
}

.manage-artist {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  border-radius: 4px;
  cursor: grab;
}

.manage-artist:hover { background: var(--ia-bg-section-hover); }

.manage-artist.dragging {
  opacity: 0.4;
}

.manage-artist-label {
  flex: 1;
  color: var(--ia-text);
  cursor: grab;
  user-select: none;
}

.manage-artist.dragging .manage-artist-label { cursor: grabbing; }

.manage-artist-delete {
  background: transparent;
  border: 1px solid var(--ia-border-strong);
  color: var(--ia-text-muted);
  border-radius: 4px;
  padding: 2px 6px;
  cursor: pointer;
}

.manage-artist-delete:hover,
.manage-artist-delete:focus-visible {
  color: var(--ia-text-strong);
  border-color: var(--ia-error);
  outline: none;
}

.manage-artist-move {
  background: var(--ia-bg-elev);
  color: var(--ia-text);
  border: 1px solid var(--ia-border-strong);
  border-radius: 4px;
  padding: 2px 4px;
  font-size: 0.85rem;
  cursor: pointer;
}

.manage-artist-move:hover,
.manage-artist-move:focus-visible {
  border-color: var(--ia-accent);
  outline: none;
}

/* Visible focus indicators everywhere */
button:focus-visible,
select:focus-visible,
input:focus-visible,
a:focus-visible,
[tabindex]:focus-visible {
  outline: 2px solid var(--ia-accent);
  outline-offset: 2px;
}

.manage-add-artist-row {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.manage-add-artist-row input {
  flex: 1;
  padding: 8px 12px;
  background: var(--ia-bg-elev);
  color: var(--ia-text-strong);
  border: 1px solid var(--ia-border-strong);
  border-radius: 4px;
  font-size: 0.95rem;
  min-width: 0;
}

.manage-add-artist-row select {
  padding: 8px 10px;
  background: var(--ia-bg-elev);
  color: var(--ia-text-strong);
  border: 1px solid var(--ia-border-strong);
  border-radius: 4px;
  font-size: 0.95rem;
  max-width: 40%;
}

.manage-add-artist-row input:focus,
.manage-add-artist-row select:focus {
  border-color: var(--ia-accent);
  outline: none;
}

.manage-add-artist-row button {
  padding: 8px 14px;
  background: var(--ia-accent);
  color: var(--ia-text-strong);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  white-space: nowrap;
}

.manage-add-artist-row button:hover { background: var(--ia-accent-hover); }

.manage-artist-actions {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.inline-confirm-text {
  color: var(--ia-accent-soft);
  font-size: 0.85rem;
}

.inline-confirm-yes,
.inline-confirm-no {
  background: transparent;
  border: 1px solid var(--ia-border-strong);
  color: var(--ia-text-muted);
  border-radius: 4px;
  padding: 2px 6px;
  cursor: pointer;
}

.inline-confirm-yes:hover {
  color: var(--ia-text-strong);
  border-color: var(--ia-error);
  background: var(--ia-bg-danger);
}

.inline-confirm-no:hover {
  color: var(--ia-text-strong);
  border-color: var(--ia-text-dim);
}

.manage-hint {
  margin-top: 12px;
  font-size: 0.85rem;
  color: var(--ia-text-dim);
}

.manage-hint code {
  background: var(--ia-bg-elev);
  padding: 1px 5px;
  border-radius: 3px;
  font-size: 0.85rem;
}

/* Filters modal form (lives inside .about-modal-content). */
.filters-form { display: flex; flex-direction: column; gap: 10px; margin-top: 8px; }
.filters-hint { color: var(--ia-text-dim); font-size: 0.85rem; margin: 0 0 4px; }
.filters-row {
  display: flex;
  align-items: center;
  gap: 12px;
}
.filters-row .filters-label { flex: 1 1 auto; color: var(--ia-text); }
.filters-row input[type="text"],
.filters-row input[type="number"] {
  flex: 0 0 9rem;
  padding: 4px 6px;
  background: var(--ia-bg);
  color: var(--ia-text-strong);
  border: 1px solid var(--ia-border-strong);
  border-radius: var(--ia-radius-sm);
  font: inherit;
}
.filters-row-check { gap: 8px; }
.filters-row-check input { flex: 0 0 auto; }
.filters-actions { display: flex; gap: 8px; align-items: center; margin-top: 8px; }
.filters-actions button {
  background: var(--ia-bg-btn);
  color: var(--ia-text);
  border: 1px solid var(--ia-border-btn);
  border-radius: var(--ia-radius-sm);
  padding: 5px 12px;
  cursor: pointer;
}
.filters-actions button:hover { background: var(--ia-bg-btn-hover); }
.filters-actions .filters-save { background: var(--ia-accent); border-color: var(--ia-accent); color: var(--ia-text-strong); }
.filters-actions .filters-danger { border-color: var(--ia-danger, #c0392b); color: var(--ia-danger, #e74c3c); }
.filters-actions .filters-danger:hover { background: var(--ia-danger, #c0392b); color: #fff; }

.about-modal-close {
  position: absolute;
  top: 6px;
  right: 10px;
  background: transparent;
  color: var(--ia-text-muted);
  border: none;
  font-size: 1.6rem;
  line-height: 1;
  cursor: pointer;
  padding: 4px 8px;
}

.about-modal-close:hover,
.about-modal-close:focus {
  color: var(--ia-accent);
  outline: none;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: var(--ia-bg);
}

::-webkit-scrollbar-thumb {
  background: var(--ia-border-strong);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--ia-text-fainter);
}

p {
  margin-bottom:1em;
}
`;var Wi=`This Player provides access to thousands of free recordings
of performances and broadcasts from the fabulous Internet Archive
Live Music collections.  It stores Linked Data which can be edited
with a form supporting customized genres and artists. All materials
are downloadable from the <a href="https://archive.org/">Internet Archive</a>, please use the provided <a href="">[IA]</a> link to view licensing information on each item.

<table class="about-buttons">
  <thead>
    <tr><th>Button</th><th>Action</th></tr>
  </thead>
  <tbody>
    <tr><td>\u23EE</td><td>Previous track (back through history)</td></tr>
    <tr><td>\u25B6 / \u23F8</td><td>Play / pause</td></tr>
    <tr><td>\u23ED</td><td>Next track (or pick another random track)</td></tr>
    <tr><td>\u{1F500}</td><td>Shuffle / random play</td></tr>
    <tr><td>\u{1F501}</td><td>Repeat \u2014 off / all / one (click to cycle)</td></tr>
    <tr><td>\u2606 / \u2605</td><td>Add / remove the track from Favorites (in each track row)</td></tr>
    <tr><td>\u22EE</td><td>Menu \u2014 open the library manager or this About panel</td></tr>
    <tr><td>[IA]</td><td>Open the Internet Archive page for the current item in a new tab</td></tr>
  </tbody>
</table>

A <a href="jeff-zucker.github.io">Jeff Zucker</a> hack.
`;var Vi=`<!-- ia-player shell \u2014 the full player layout (toolbar, sources column,
     three-column browser, tracklist, status bar, media element, film intro).
     Imported as text by ia-ui.js (esbuild '.html': 'text') and instantiated
     by createPlayerUI(), which substitutes the {{\u2026}} label tokens for the
     media type (music vs movies) and removes .menu-item-sollogin when the
     player runs as an embedded panel. -->

<div class="ia-toolbar" role="toolbar" aria-label="Playback controls">
  <button type="button" class="ia-btn ia-prev" aria-label="Previous track" title="Previous"><span class="ia-icon" aria-hidden="true">\u23EE</span><span class="ia-blabel">Prev</span></button>
  <button type="button" class="ia-btn ia-play" aria-label="Play" title="Play"><span class="ia-icon" aria-hidden="true">\u25B6</span><span class="ia-blabel">Play</span></button>
  <button type="button" class="ia-btn ia-next" aria-label="Next track" title="Next"><span class="ia-icon" aria-hidden="true">\u23ED</span><span class="ia-blabel">Next</span></button>
  <div class="ia-seek-wrap">
    <input class="ia-seek" type="range" min="0" max="1000" value="0" step="1" aria-label="Seek" disabled>
    <span class="ia-time" aria-hidden="true"><span class="ia-time-cur">0:00</span> / <span class="ia-time-dur">0:00</span></span>
  </div>
  <div class="ia-volume-wrap" role="group" aria-label="Volume">
    <span class="ia-volume-icon" aria-hidden="true">\u{1F50A}</span>
    <input class="ia-volume" type="range" min="0" max="1" step="0.01" value="1" aria-label="Volume">
  </div>
  <form class="ia-artist-search" role="search">
    <input class="ia-artist-search-input" type="search" placeholder="{{find}}" aria-label="Find by name (creator search)">
  </form>
  <span class="gear-wrap">
    <button type="button" class="ia-btn manage-btn" aria-haspopup="menu" aria-expanded="false" aria-label="Open menu" title="Menu"><span class="ia-icon" aria-hidden="true">\u22EE</span><span class="ia-blabel">Menu</span></button>
    <div class="gear-menu" role="menu" hidden>
      <!-- Sign-in lives at the top of the menu. <sol-login> hosts its
           own button + WebID popover; isn't a .menu-item because it's
           not arrow-key navigable in the same way (its inner button
           handles focus). The menu button turns green and adopts the
           WebID as its title when sol-login reports a session.
           createPlayerUI removes this block in embedded-panel mode. -->
      <div class="menu-item-sollogin" role="none">
        <sol-login class="ia-sol-login" issuers="https://solidcommunity.net,https://login.inrupt.com"></sol-login>
      </div>
      <!-- Clear tracklist now lives as a button at the far right of the
           tracklist header row; the menu entry is retired. -->
      <!-- Appearance: light/dark toggle + text-size stepper. Both write
           document-level attributes (data-theme / data-fontsize) so the
           two library panels stay in sync. -->
      <button type="button" class="menu-item gear-theme" role="menuitemcheckbox" aria-checked="false"><span class="gear-theme-ico" aria-hidden="true">\u{1F319}</span> <span class="menu-label gear-theme-label">Dark mode</span></button>
      <button type="button" class="menu-item gear-fontsize" role="menuitem"><span class="gear-fontsize-ico" aria-hidden="true">A</span> <span class="menu-label gear-fontsize-label">Text size: Medium</span></button>
      <!-- Save as playlist parked \u2014 restore when the workflow returns.
      <button type="button" class="menu-item gear-save-playlist" role="menuitem"><span aria-hidden="true">\u{1F4BE}</span> <span class="menu-label">Save as playlist\u2026</span></button>
      -->
      <button type="button" class="menu-item gear-filters" role="menuitem"><span aria-hidden="true">\u{1F50E}</span> <span class="menu-label">Filters\u2026</span></button>
      <button type="button" class="menu-item gear-view-deleted" role="menuitem"><span aria-hidden="true">\u{1F5D1}</span> <span class="menu-label">View deleted</span></button>
      <button type="button" class="menu-item gear-import-music" role="menuitem"><span aria-hidden="true">\u{1F4C2}</span> <span class="menu-label">Import music folder\u2026</span></button>
      <button type="button" class="menu-item gear-help-link" role="menuitem"><span aria-hidden="true">\u{1F4D6}</span> <span class="menu-label">Help</span></button>
      <button type="button" class="menu-item gear-login-help" role="menuitem"><span aria-hidden="true">\u{1F511}</span> <span class="menu-label">Solid login help</span></button>
      <button type="button" class="menu-item gear-install-pod" role="menuitem"><span aria-hidden="true">\u{1F4E1}</span> <span class="menu-label">Install on my Pod\u2026</span></button>
      <button type="button" class="menu-item gear-update-app" role="menuitem"><span aria-hidden="true">\u{1F4F2}</span> <span class="menu-label">Update app on Pod\u2026</span></button>
      <button type="button" class="menu-item gear-help" role="menuitem"><span aria-hidden="true">?</span> <span class="menu-label">About</span></button>
    </div>
  </span>
</div>

<div class="ia-nowplaying"><span class="ia-nowplaying-text" role="status" aria-live="polite" aria-atomic="true"></span></div>

<div class="ia-sources" data-column="source">
  <h3 class="ia-column-header" id="ia-h-libs">Libraries</h3>
  <ul class="ia-listbox ia-libraries-list" role="listbox" aria-multiselectable="true" aria-labelledby="ia-h-libs" tabindex="0"></ul>
  <h3 class="ia-column-header" id="ia-h-sources">Playlists</h3>
  <ul class="ia-listbox ia-sources-list" role="listbox" aria-labelledby="ia-h-sources" tabindex="0"></ul>
  <h3 class="ia-column-header" id="ia-h-favs">Community Favorites</h3>
  <ul class="ia-listbox ia-favourites-list" role="listbox" aria-labelledby="ia-h-favs" tabindex="0"></ul>
  <div class="ia-sources-actions">
    <button type="button" class="ia-add-source-btn">+ Library</button>
    <button type="button" class="ia-add-playlist-btn">+ Playlist</button>
  </div>
  <div class="ia-sources-resize" role="separator" aria-orientation="vertical" aria-label="Resize sources column" title="Drag to resize"></div>
</div>

<div class="ia-browser">
  <div class="ia-column" data-column="genre">
    <h3 class="ia-column-header" id="ia-h-genre">{{genre}}</h3>
    <ul class="ia-listbox" role="listbox" aria-multiselectable="true" aria-labelledby="ia-h-genre" tabindex="0"></ul>
    <div class="ia-column-footer">
      <button type="button" class="ia-add-genre-btn">{{addGenre}}</button>
    </div>
  </div>
  <div class="ia-column" data-column="artist">
    <h3 class="ia-column-header" id="ia-h-artist">{{artist}}</h3>
    <ul class="ia-listbox" role="listbox" aria-multiselectable="true" aria-labelledby="ia-h-artist" tabindex="0"></ul>
    <div class="ia-column-footer">
      <button type="button" class="ia-add-artist-btn">{{addArtist}}</button>
    </div>
  </div>
  <div class="ia-column" data-column="album">
    <h3 class="ia-column-header" id="ia-h-album">{{album}}</h3>
    <ul class="ia-listbox" role="listbox" aria-multiselectable="true" aria-labelledby="ia-h-album" tabindex="0"></ul>
  </div>
  <div class="ia-browser-resize" role="separator" aria-orientation="horizontal" aria-label="Resize browser" title="Drag to resize"></div>
</div>

<div class="ia-tracklist-wrap">
  <table class="ia-tracklist" role="grid" aria-label="Tracks">
    <colgroup>
      <col data-col="num" class="col-num">
      <col data-col="title" class="col-title">
      <col data-col="artist" class="col-artist">
      <col data-col="album" class="col-album">
      <col data-col="time" class="col-time">
      <col data-col="remove" class="col-remove">
      <!-- favorites column disabled for now; re-enable when that feature returns.
      <col data-col="fav" class="col-fav">
      -->
    </colgroup>
    <thead>
      <tr>
        <th scope="col" data-col="num" class="col-num"><button type="button" class="ia-randomize-btn" aria-label="Randomize tracklist order" title="Randomize"><span aria-hidden="true">\u{1F3B2}</span></button><span class="th-label">#</span><span class="resize-handle" aria-hidden="true"></span></th>
        <th scope="col" data-col="title" data-sort="name" class="col-title"><span class="th-label">Title</span><span class="sort-arrow" aria-hidden="true"></span><span class="resize-handle" aria-hidden="true"></span></th>
        <th scope="col" data-col="artist" data-sort="artist" class="col-artist"><span class="th-label">Artist</span><span class="sort-arrow" aria-hidden="true"></span><span class="resize-handle" aria-hidden="true"></span></th>
        <th scope="col" data-col="album" data-sort="album" class="col-album"><span class="th-label">Album</span><span class="sort-arrow" aria-hidden="true"></span><span class="resize-handle" aria-hidden="true"></span></th>
        <th scope="col" data-col="time" data-sort="time" class="col-time"><span class="th-label">Time</span><span class="sort-arrow" aria-hidden="true"></span><span class="resize-handle" aria-hidden="true"></span></th>
        <th scope="col" data-col="remove" class="col-remove" aria-label="Remove"><button type="button" class="ia-clear-tracks-btn" aria-label="Clear tracklist" title="Clear tracklist"><span aria-hidden="true">\u{1F9F9}</span></button></th>
        <!--
        <th scope="col" data-col="fav" data-sort="fav" class="col-fav" aria-label="Favorite"><span class="th-label" aria-hidden="true">\u2605</span><span class="sort-arrow" aria-hidden="true"></span><span class="resize-handle" aria-hidden="true"></span></th>
        -->
      </tr>
    </thead>
    <tbody></tbody>
  </table>
  <div class="ia-tracklist-empty">Choose an album to see tracks.</div>
</div>

<div class="ia-status" role="status" aria-live="polite" aria-atomic="true"><span class="ia-status-msg"></span><span class="ia-status-count" aria-live="off"></span></div>

<!-- ONE media element for every library type \u2014 a <video> plays audio files
     fine, so this single element handles both music and movies and can switch
     media type at runtime without being recreated. Kept on the .ia-audio
     class so all existing transport wiring is unchanged. -->
<video class="ia-audio ia-video" aria-label="Media player" playsinline controls></video>

<!-- Film intro overlay (movies): shown over the player area when a film
     is selected but not yet started. Click (or Enter/Space) to play. -->
<div class="ia-film-intro" role="button" tabindex="0" aria-label="Play film">
  <div class="ia-film-intro-card">
    <h2 class="ia-film-intro-title"></h2>
    <p class="ia-film-intro-length"></p>
    <p class="ia-film-intro-about"></p>
    <p class="ia-film-intro-rights"></p>
    <p class="ia-film-intro-hint">Click to play. Move the mouse to the lower right of the film to enlarge to full screen.</p>
  </div>
</div>
`;var Yi=`<!-- About / content modal scaffold. ia-ui.js showAboutModal() sets the
     title text and fills .about-modal-body with the page content. -->
<div class="about-modal-content" role="dialog" aria-modal="true" aria-labelledby="about-modal-title">
  <button type="button" class="about-modal-close" aria-label="Close">\xD7</button>
  <h2 id="about-modal-title" class="about-modal-title"></h2>
  <div class="about-modal-body"></div>
</div>
`;var Ji=`<!-- Quality-filters modal. ia-ui.js showFiltersModal() seeds the field
     values from the current filter config and wires reset/cancel/save. -->
<div class="about-modal-content" role="dialog" aria-modal="true" aria-labelledby="filters-modal-title">
  <button type="button" class="about-modal-close" aria-label="Close">\xD7</button>
  <h2 id="filters-modal-title" class="about-modal-title">Filters</h2>
  <form class="filters-form">
    <p class="filters-hint">Hides low-quality archive.org results before they reach the album / track lists. Catalog artists (specific IA collections) are not filtered by default.</p>
    <label class="filters-row">
      <span class="filters-label">Min track length (mm:ss)</span>
      <input type="text" name="minTrack" placeholder="3:00" inputmode="numeric">
    </label>
    <label class="filters-row">
      <span class="filters-label">Min item runtime (mm:ss)</span>
      <input type="text" name="minItem" placeholder="0:00" inputmode="numeric">
    </label>
    <label class="filters-row">
      <span class="filters-label">Min track bitrate (kbps)</span>
      <input type="number" name="minBitrate" min="0" step="1">
    </label>
    <label class="filters-row">
      <span class="filters-label">Min item downloads</span>
      <input type="number" name="minDownloads" min="0" step="1">
    </label>
    <label class="filters-row">
      <span class="filters-label">Blocked collections (comma-sep)</span>
      <input type="text" name="blocked" placeholder="podcasts, spokenword">
    </label>
    <label class="filters-row filters-row-check">
      <input type="checkbox" name="applyCatalog">
      <span class="filters-label">Also apply to catalog artists (/details/ URLs)</span>
    </label>
    <div class="filters-actions">
      <button type="button" class="filters-reset">Reset to defaults</button>
      <span style="flex:1"></span>
      <button type="button" class="filters-cancel">Cancel</button>
      <button type="submit" class="filters-save">Save</button>
    </div>
  </form>
</div>
`;var Xi=`<!-- Playlist create/edit modal. ia-ui.js showPlaylistEditModal() sets the
     title, seeds name/maker/description, and prepends any extra action
     buttons into .filters-actions. -->
<div class="about-modal-content" role="dialog" aria-modal="true" aria-labelledby="pl-modal-title">
  <button type="button" class="about-modal-close" aria-label="Close">\xD7</button>
  <h2 id="pl-modal-title" class="about-modal-title"></h2>
  <form class="filters-form">
    <label class="filters-row">
      <span class="filters-label">Name</span>
      <input type="text" name="name" required autocomplete="off">
    </label>
    <label class="filters-row">
      <span class="filters-label">Maker</span>
      <input type="text" name="maker" autocomplete="off" placeholder="(optional)">
    </label>
    <label class="filters-row">
      <span class="filters-label">Description</span>
      <input type="text" name="description" autocomplete="off" placeholder="(optional, shows on hover)">
    </label>
    <div class="filters-actions">
      <span style="flex:1"></span>
      <button type="button" class="filters-cancel">Cancel</button>
      <button type="submit" class="filters-save">Save</button>
    </div>
  </form>
</div>
`;var Qi=`<!-- Library editor modal (label + URL, optional delete). ia-ui.js
     showLibraryEditModal() sets the title, seeds the fields, and removes
     .filters-danger when deletion isn't offered. -->
<div class="about-modal-content" role="dialog" aria-modal="true" aria-labelledby="lib-modal-title">
  <button type="button" class="about-modal-close" aria-label="Close">\xD7</button>
  <h2 id="lib-modal-title" class="about-modal-title"></h2>
  <form class="filters-form">
    <label class="filters-row">
      <span class="filters-label">Name</span>
      <input type="text" name="label" required autocomplete="off">
    </label>
    <label class="filters-row">
      <span class="filters-label">Library URL</span>
      <input type="text" name="url" required autocomplete="off">
    </label>
    <div class="filters-actions">
      <button type="button" class="filters-extra filters-danger" data-action-idx="0">Delete library</button>
      <span style="flex:1"></span>
      <button type="button" class="filters-cancel">Cancel</button>
      <button type="submit" class="filters-save">Save</button>
    </div>
  </form>
</div>
`;var Zi=`<!-- Track editor modal (title / artist / album). ia-ui.js
     showTrackEditModal() seeds the fields, appends the shared-album note to
     the album label, and prepends any extra action buttons. -->
<div class="about-modal-content" role="dialog" aria-modal="true" aria-labelledby="tk-modal-title">
  <button type="button" class="about-modal-close" aria-label="Close">\xD7</button>
  <h2 id="tk-modal-title" class="about-modal-title">Edit track</h2>
  <form class="filters-form">
    <label class="filters-row">
      <span class="filters-label">Title</span>
      <input type="text" name="title" required autocomplete="off">
    </label>
    <label class="filters-row">
      <span class="filters-label">Artist</span>
      <input type="text" name="artist" autocomplete="off" placeholder="(optional)">
    </label>
    <label class="filters-row">
      <span class="filters-label filters-album-label">Album</span>
      <input type="text" name="album" autocomplete="off" placeholder="(optional)">
    </label>
    <div class="filters-actions">
      <span style="flex:1"></span>
      <button type="button" class="filters-cancel">Cancel</button>
      <button type="submit" class="filters-save">Save</button>
    </div>
  </form>
</div>
`;var en=`<!-- Standalone library-loader form (ia-ui.js showRDFInput) \u2014 shown when the
     player starts with no library source. -->
<h1>Open Media Player</h1>
<div class="rdf-input">
  <input type="text" class="rdf-uri" placeholder="Enter RDF file URI" value="./plugins/ia-player/libraries/internet_archive_music/index.ttl" aria-label="RDF file URI">
  <br>
  <button class="load-btn">Load Music Library</button>
</div>
`;function rn({mediaType:e="audio",panel:a=!1}={}){let r=e==="video",i=r?{genre:"Film Types",artist:"Collections",album:"Movies",find:"Find a film\u2026",addGenre:"+ Add film type",addArtist:"+ Add collection"}:{genre:"Genres",artist:"Artists",album:"Albums",find:"Search the Internet Archive\u2026",addGenre:"+ Add genre",addArtist:"+ Add artist"},n=document.createElement("div");n.className="ia-player-app"+(r?" media-video":" media-audio"),n.setAttribute("role","region"),n.setAttribute("aria-label",r?"Open Media Player (movies)":"Open Media Player"),n.innerHTML=Vi.replace(/\{\{(\w+)\}\}/g,(m,y)=>i[y]??""),a&&n.querySelector(".menu-item-sollogin")?.remove();let l=n.querySelector(".manage-btn"),s=n.querySelector(".gear-menu"),d=()=>Array.from(s.querySelectorAll(".menu-item"));function f(m,y={}){if(s.hidden=!m,l.setAttribute("aria-expanded",m?"true":"false"),m){let b=d();(y.focusLast?b[b.length-1]:b[0])?.focus()}else y.returnFocus!==!1&&l.focus()}l.addEventListener("click",m=>{m.stopPropagation(),f(s.hidden,{returnFocus:!1})}),l.addEventListener("keydown",m=>{m.key==="ArrowDown"||m.key==="Enter"||m.key===" "?(m.preventDefault(),f(!0)):m.key==="ArrowUp"&&(m.preventDefault(),f(!0,{focusLast:!0}))}),s.addEventListener("keydown",m=>{let y=d(),b=y.indexOf(document.activeElement);m.key==="ArrowDown"?(m.preventDefault(),y[(b+1)%y.length]?.focus()):m.key==="ArrowUp"?(m.preventDefault(),y[(b-1+y.length)%y.length]?.focus()):m.key==="Home"?(m.preventDefault(),y[0]?.focus()):m.key==="End"?(m.preventDefault(),y[y.length-1]?.focus()):m.key==="Tab"&&f(!1,{returnFocus:!1})}),document.addEventListener("click",m=>{!s.contains(m.target)&&m.target!==l&&(s.hidden||f(!1,{returnFocus:!1}))}),document.addEventListener("keydown",m=>{m.key==="Escape"&&!s.hidden&&f(!1)});function v(m){let y=n.querySelector(".ia-play .ia-blabel");y&&(y.textContent=m==="playing"?"Pause":"Play")}return{container:n,audio:n.querySelector(".ia-audio"),status:n.querySelector(".ia-status-msg"),trackCount:n.querySelector(".ia-status-count"),nowPlaying:n.querySelector(".ia-nowplaying-text"),filmIntro:n.querySelector(".ia-film-intro"),filmIntroTitle:n.querySelector(".ia-film-intro-title"),filmIntroLength:n.querySelector(".ia-film-intro-length"),filmIntroAbout:n.querySelector(".ia-film-intro-about"),filmIntroRights:n.querySelector(".ia-film-intro-rights"),prevBtn:n.querySelector(".ia-prev"),playBtn:n.querySelector(".ia-play"),nextBtn:n.querySelector(".ia-next"),seekSlider:n.querySelector(".ia-seek"),timeCur:n.querySelector(".ia-time-cur"),timeDur:n.querySelector(".ia-time-dur"),volumeSlider:n.querySelector(".ia-volume"),sourcesList:n.querySelector(".ia-sources-list"),favouritesList:n.querySelector(".ia-favourites-list"),librariesList:n.querySelector(".ia-libraries-list"),addSourceBtn:n.querySelector(".ia-add-source-btn"),addPlaylistBtn:n.querySelector(".ia-add-playlist-btn"),genreList:n.querySelector('[data-column="genre"] .ia-listbox'),artistList:n.querySelector('[data-column="artist"] .ia-listbox'),albumList:n.querySelector('[data-column="album"] .ia-listbox'),addGenreBtn:n.querySelector(".ia-add-genre-btn"),addArtistBtn:n.querySelector(".ia-add-artist-btn"),genreColumnFooter:n.querySelector('[data-column="genre"] .ia-column-footer'),artistColumnFooter:n.querySelector('[data-column="artist"] .ia-column-footer'),trackTable:n.querySelector(".ia-tracklist"),trackHead:n.querySelector(".ia-tracklist thead"),trackBody:n.querySelector(".ia-tracklist tbody"),trackEmpty:n.querySelector(".ia-tracklist-empty"),randomizeBtn:n.querySelector(".ia-randomize-btn"),clearTracksBtn:n.querySelector(".ia-clear-tracks-btn"),manageButton:l,gearMenu:s,helpMenuItem:n.querySelector(".gear-help"),helpLinkMenuItem:n.querySelector(".gear-help-link"),loginHelpMenuItem:n.querySelector(".gear-login-help"),installPodMenuItem:n.querySelector(".gear-install-pod"),updateAppMenuItem:n.querySelector(".gear-update-app"),themeToggle:n.querySelector(".gear-theme"),fontSizeBtn:n.querySelector(".gear-fontsize"),filtersMenuItem:n.querySelector(".gear-filters"),viewDeletedMenuItem:n.querySelector(".gear-view-deleted"),importMusicMenuItem:n.querySelector(".gear-import-music"),savePlaylistMenuItem:n.querySelector(".gear-save-playlist"),setMenuOpen:f,setPlayLabel:v}}function $t(e,{onChange:a,allLabel:r="(All)",showAll:i=!0,multiSelect:n=!0,mode:l="select",allowDeselect:s=!1,renderItemActions:d=null,onItemAction:f=null,onItemDrop:v=null}={}){let m=[],y=new Set,b=null,h=null;function p(){return new Set(y)}function S(){return m.slice()}function M(I){m=I.slice(),h=null;for(let G of[...y])m.some(ae=>ae.id===G)||y.delete(G);b&&!m.some(G=>G.id===b)&&(b=null),ue()}function P(I){h=I||null,ue()}function j(I,G={}){y=new Set(I||[]);for(let ae of[...y])m.some(L=>L.id===ae)||y.delete(ae);ue(),G.notify!==!1&&a?.(p())}function q(I){return I?"\u2611":"\u2610"}function ue(){if(h!==null){e.innerHTML=`<li class="ia-listbox-message" aria-disabled="true">${se(h)}</li>`;return}let I=y.size===0,G="";i&&(G+=`<li role="option" class="ia-listbox-item ia-listbox-all${I?" selected":""}" data-id="" tabindex="-1" aria-selected="${I}">${se(r)}</li>`);for(let ae of m){ae.section&&(G+=`<li class="ia-listbox-divider" role="presentation">${se(ae.section)}</li>`);let L=y.has(ae.id),R=l==="checkbox"?`<span class="ia-listbox-checkbox" aria-hidden="true">${q(L)}</span>`:"",W=d?.(ae)??"",Q=ae.title?` title="${se(ae.title)}"`:"",de=`ia-listbox-item${L?" selected":""}${ae.className?" "+ae.className:""}`,pe=ae.ariaLabel?` aria-label="${se(ae.ariaLabel)}"`:"";G+=`<li role="option" class="${de}" data-id="${se(ae.id)}" tabindex="-1" aria-selected="${L}"${Q}${pe}>${R}<span class="ia-listbox-label">${se(ae.label)}</span>${W}</li>`}e.innerHTML=G}function ne(I){y.clear(),I&&y.add(I),b=I||null,ue(),a?.(p())}function Se(I){I?y.has(I)?y.delete(I):y.add(I):y.clear(),b=I||null,ue(),a?.(p())}function qe(I){if(!b||!I)return ne(I);let G=m.map(Q=>Q.id),ae=G.indexOf(b),L=G.indexOf(I);if(ae<0||L<0)return ne(I);let R=Math.min(ae,L),W=Math.max(ae,L);y=new Set(G.slice(R,W+1)),ue(),a?.(p())}e.addEventListener("click",I=>{let G=I.target.closest("[data-action]");if(G){I.stopPropagation();let R=G.closest(".ia-listbox-item");f?.(G.dataset.action,R?.dataset.id??null,G);return}let ae=I.target.closest(".ia-listbox-item");if(!ae)return;let L=ae.dataset.id;l==="checkbox"&&L?Se(L):n&&I.shiftKey&&L?qe(L):n&&(I.ctrlKey||I.metaKey)?Se(L):!n&&s&&L&&y.has(L)?(y.clear(),b=null,ue(),a?.(p())):ne(L),ae.focus()}),v&&(e.addEventListener("dragover",I=>{let G=I.target.closest(".ia-listbox-item");!G||!G.dataset.id||(I.preventDefault(),I.dataTransfer.dropEffect="copy",G.classList.add("drop-target"))}),e.addEventListener("dragleave",I=>{I.target.closest(".ia-listbox-item")?.classList.remove("drop-target")}),e.addEventListener("drop",I=>{let G=I.target.closest(".ia-listbox-item");!G||!G.dataset.id||(I.preventDefault(),G.classList.remove("drop-target"),v(G.dataset.id,I.dataTransfer))})),e.addEventListener("keydown",I=>{let G=Array.from(e.querySelectorAll(".ia-listbox-item"));if(!G.length)return;let ae=e.querySelector(".ia-listbox-item:focus")||G[0],L=G.indexOf(ae),R=L;if(I.key==="ArrowDown")R=Math.min(L+1,G.length-1),I.preventDefault();else if(I.key==="ArrowUp")R=Math.max(L-1,0),I.preventDefault();else if(I.key==="Home")R=0,I.preventDefault();else if(I.key==="End")R=G.length-1,I.preventDefault();else if(I.key===" "||I.key==="Enter"){I.preventDefault();let Q=ae.dataset.id;n&&(I.ctrlKey||I.metaKey)?Se(Q):n&&I.shiftKey&&Q?qe(Q):ne(Q);return}else return;let W=G[R];if(W){W.focus();let Q=W.dataset.id;n&&I.shiftKey&&Q&&b?qe(Q):(!n||!I.ctrlKey&&!I.metaKey)&&ne(Q)}}),ue();function We(I){I&&I!==r&&(r=I,ue())}return{setItems:M,setSelection:j,getSelection:p,getItems:S,setMessage:P,setAllLabel:We}}function nn(e,a){let r=new Set,i=null;function n(){return Array.from(e.querySelectorAll(".ia-track-row"))}function l(){return new Set(r)}function s(){let h=n(),p=new Set(h.map(S=>S.dataset.trackId));for(let S of[...r])p.has(S)||r.delete(S);i&&!p.has(i)&&(i=null),h.forEach(S=>{let M=r.has(S.dataset.trackId);S.classList.toggle("selected",M),S.setAttribute("aria-selected",M?"true":"false")})}function d(){r.clear(),i=null,s()}function f(h){r.clear(),h?(r.add(h),i=h):i=null,s()}function v(h){h&&(r.has(h)?r.delete(h):(r.add(h),i=h),s())}function m(h){if(!i||!h)return f(h);let p=n().map(q=>q.dataset.trackId),S=p.indexOf(i),M=p.indexOf(h);if(S<0||M<0)return f(h);let P=Math.min(S,M),j=Math.max(S,M);r=new Set(p.slice(P,j+1)),s()}function y(){r=new Set(n().map(h=>h.dataset.trackId)),r.size&&(i=[...r][0]),s()}function b(h){h.length&&(r.clear(),i=null,a.onRemove?.(h))}return e.addEventListener("click",h=>{let p=h.target.closest(".ia-track-fav-btn");if(p){h.stopPropagation(),a.onFavourite?.({url:p.dataset.url,name:p.dataset.name,artist:p.dataset.artist,album:p.dataset.album});return}let S=h.target.closest(".ia-track-remove-btn"),M=h.target.closest(".ia-track-kebab"),P=h.target.closest(".ia-track-row");if(!P)return;let j=P.dataset.trackId;if(M){a.onEdit?.(j,M);return}if(S){r.delete(j),i===j&&(i=null),a.onRemove?.([j],{fromButton:!0});return}h.shiftKey?m(j):h.ctrlKey||h.metaKey?v(j):f(j),P.focus()}),e.addEventListener("dragstart",h=>{let p=h.target.closest(".ia-track-row");if(!p)return;let S=p.dataset.trackId,M=r.has(S)?[...r]:[S];r.has(S)||f(S),h.dataTransfer.setData("application/x-ia-tracks",JSON.stringify(M)),h.dataTransfer.setData("text/plain",`${M.length} track${M.length===1?"":"s"}`),h.dataTransfer.effectAllowed="copy",p.classList.add("dragging")}),e.addEventListener("dragend",h=>{h.target.closest(".ia-track-row")?.classList.remove("dragging")}),e.addEventListener("dblclick",h=>{let p=h.target.closest(".ia-track-row");p&&(h.target.closest(".ia-track-remove-btn,.ia-track-kebab")||a.onPlay?.(p.dataset.trackId))}),e.addEventListener("keydown",h=>{let p=n();if(!p.length)return;let S=e.querySelector(".ia-track-row:focus")||p[0],M=p.indexOf(S),P=M;if(h.key==="ArrowDown")P=Math.min(M+1,p.length-1),h.preventDefault();else if(h.key==="ArrowUp")P=Math.max(M-1,0),h.preventDefault();else if(h.key==="Home")P=0,h.preventDefault();else if(h.key==="End")P=p.length-1,h.preventDefault();else if(h.key==="Enter"){h.preventDefault(),a.onPlay?.(S.dataset.trackId);return}else if(h.key===" "){h.preventDefault(),h.ctrlKey||h.metaKey?v(S.dataset.trackId):a.onPlay?.(S.dataset.trackId);return}else if(h.key==="Delete"){h.preventDefault();let q=r.size?[...r]:S?[S.dataset.trackId]:[];b(q);return}else if((h.ctrlKey||h.metaKey)&&(h.key==="a"||h.key==="A")){h.preventDefault(),y();return}else if(h.key==="Escape"){r.size&&(h.preventDefault(),d());return}else return;let j=p[P];if(j){j.focus();let q=j.dataset.trackId;h.shiftKey&&i?m(q):!h.ctrlKey&&!h.metaKey&&f(q)}}),{getSelection:l,clearSelection:d,applySelection:s}}function on(e){e.addEventListener("mousedown",a=>{let r=a.target.closest(".resize-handle");if(!r)return;a.preventDefault(),a.stopPropagation();let i=r.closest("th");if(!i)return;let n=i.dataset.col,l=e.querySelector(`col[data-col="${n}"]`);if(!l)return;let s=a.clientX,d=i.offsetWidth,f=m=>{let y=Math.max(30,d+(m.clientX-s));l.style.width=y+"px"},v=()=>{document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",v),e.classList.remove("resizing")};document.addEventListener("mousemove",f),document.addEventListener("mouseup",v),e.classList.add("resizing")})}function sn(e,a){let r=null,i="asc";function n(){if(Array.from(e.querySelectorAll("th")).forEach(d=>{d.classList.remove("sorted"),d.removeAttribute("aria-sort");let f=d.querySelector(".sort-arrow");f&&(f.textContent="")}),!r)return;let l=e.querySelector(`th[data-sort="${r}"]`);if(!l)return;l.classList.add("sorted"),l.setAttribute("aria-sort",i==="asc"?"ascending":"descending");let s=l.querySelector(".sort-arrow");s&&(s.textContent=i==="asc"?"\u25B2":"\u25BC")}return e.addEventListener("click",l=>{if(l.target.closest(".resize-handle"))return;let s=l.target.closest("th[data-sort]");if(!s)return;let d=s.dataset.sort;r===d?i=i==="asc"?"desc":"asc":(r=d,i="asc"),n(),a.onSort?.(r,i)}),{applyIndicator:n,getSort:()=>({col:r,dir:i}),setSort:(l,s)=>{r=l||null,i=s==="desc"?"desc":"asc",n()},clear:()=>{r=null,i="asc",n()}}}function ln(e,a,r,{currentTrackId:i,isFav:n,emptyMessage:l,useKebab:s,favouritable:d,wallDelete:f}){if(!r.length){e.innerHTML="",l&&(a.textContent=l),a.hidden=!1;return}a.hidden=!0;let v=typeof s=="function"?S=>!!S.node&&s(S)!==!1:S=>!!S.node,m=S=>`<button type="button" class="ia-track-fav-btn${n&&n(S)?" on":""}" data-url="${se(S.url||"")}" data-name="${se(S.name||"")}" data-artist="${se(S.artist||"")}" data-album="${se(S.album||"")}" title="Add to favourites" aria-label="Favourite" tabindex="-1">${n&&n(S)?"\u2605":"\u2606"}</button>`,y='<button type="button" class="ia-src-edit ia-row-kebab ia-track-kebab" aria-haspopup="menu" aria-label="Track actions" title="Track actions" tabindex="-1">\u22EF</button>',b='<button type="button" class="ia-track-remove-btn" aria-label="Remove from favourites" title="Remove from favourites">\u2715</button>',h=S=>{if(f)return b;let M=d?m(S):"";return v(S)&&(M+=y),!d&&!v(S)&&(M+=b),M},p=r.map((S,M)=>{let P=S.id===i;return`<tr class="ia-track-row${P?" playing":""}" draggable="true" data-track-id="${se(S.id)}" data-album-url="${se(S.albumUrl||"")}" tabindex="-1" aria-current="${P?"true":"false"}">
      <td class="col-num">${P?'<span aria-hidden="true">\u25B8</span>':M+1}</td>
      <td class="col-title">${se(S.name)}</td>
      <td class="col-artist">${se(S.artist||"")}</td>
      <td class="col-album">${se(S.album||"")}</td>
      <td class="col-time">${se(S.time||"")}</td>
      <td class="col-remove">${h(S)}</td>
    </tr>`});e.innerHTML=p.join("")}function $r(e){if(!isFinite(e)||e<0)return"0:00";let a=Math.floor(e/60),r=Math.floor(e%60);return`${a}:${r.toString().padStart(2,"0")}`}function cn(e,a){let{audio:r,playBtn:i,prevBtn:n,nextBtn:l,seekSlider:s,timeCur:d,timeDur:f,volumeSlider:v}=e;i.addEventListener("click",()=>a.onPlayToggle?.()),n.addEventListener("click",()=>a.onPrev?.()),l.addEventListener("click",()=>a.onNext?.());let m=!1;s.addEventListener("input",()=>{m=!0}),s.addEventListener("change",()=>{m=!1,isFinite(r.duration)&&(r.currentTime=parseFloat(s.value)/1e3*r.duration)}),v.addEventListener("input",()=>{r.volume=parseFloat(v.value)}),r.addEventListener("timeupdate",()=>{m||!isFinite(r.duration)||r.duration===0||(s.value=String(r.currentTime/r.duration*1e3),d.textContent=$r(r.currentTime))}),r.addEventListener("loadedmetadata",()=>{s.disabled=!isFinite(r.duration),f.textContent=$r(r.duration||0),d.textContent=$r(r.currentTime||0)}),r.addEventListener("emptied",()=>{s.value="0",s.disabled=!0,d.textContent="0:00",f.textContent="0:00"});let y=i.querySelector(".ia-icon"),b=i.querySelector(".ia-blabel");r.addEventListener("play",()=>{y?y.textContent="\u23F8":i.textContent="\u23F8",b&&(b.textContent="Pause"),i.setAttribute("aria-label","Pause"),i.title="Pause"}),r.addEventListener("pause",()=>{y?y.textContent="\u25B6":i.textContent="\u25B6",b&&(b.textContent="Play"),i.setAttribute("aria-label","Play"),i.title="Play"})}function da(e,a,r){document.querySelectorAll(".ia-floating-menu").forEach(p=>p.remove());let i=document.createElement("div");i.className="ia-floating-menu",i.setAttribute("role","menu"),i.innerHTML=a.map(p=>`<button type="button" class="ia-floating-menu-item" role="menuitem" data-id="${se(p.id)}">${se(p.label)}</button>`).join(""),document.body.appendChild(i);let n=e.getBoundingClientRect();i.style.position="fixed";let l=i.offsetWidth,s=i.offsetHeight,d=8,f=n.left;f+l+d>window.innerWidth&&(f=Math.max(d,n.right-l));let v=n.bottom+4;v+s+d>window.innerHeight&&(v=Math.max(d,n.top-s-4)),i.style.left=`${f}px`,i.style.top=`${v}px`;let m=()=>{i.remove(),document.removeEventListener("mousedown",y,!0),document.removeEventListener("keydown",b)},y=p=>{!i.contains(p.target)&&p.target!==e&&m()},b=p=>{if(p.key==="Escape"&&(p.preventDefault(),m(),e.focus?.()),p.key==="ArrowDown"||p.key==="ArrowUp"){p.preventDefault();let S=Array.from(i.querySelectorAll(".ia-floating-menu-item")),M=S.indexOf(document.activeElement);(p.key==="ArrowDown"?S[(M+1)%S.length]:S[(M-1+S.length)%S.length])?.focus()}};i.addEventListener("click",p=>{let S=p.target.closest(".ia-floating-menu-item");S&&(m(),r?.(S.dataset.id))}),setTimeout(()=>{document.addEventListener("mousedown",y,!0),document.addEventListener("keydown",b)},0);let h=i.querySelector(".ia-floating-menu-item");return h&&h.focus(),m}var Tr=null;function dn({css:e,aboutHtml:a}={}){if(e&&!document.getElementById("ia-player-styles")){let r=document.createElement("style");r.id="ia-player-styles",r.textContent=e,document.head.appendChild(r)}a&&(Tr=a)}var Fs='a[href], button:not([disabled]), input:not([disabled]):not([type=hidden]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';function ua(e){let a=document.activeElement,r=()=>Array.from(e.querySelectorAll(Fs)).filter(n=>!n.closest("[hidden]")),i=r()[0];return i&&i.focus(),e.addEventListener("keydown",n=>{if(n.key!=="Tab")return;let l=r();if(!l.length)return;let s=l[0],d=l[l.length-1];n.shiftKey&&document.activeElement===s?(n.preventDefault(),d.focus()):!n.shiftKey&&document.activeElement===d&&(n.preventDefault(),s.focus())}),()=>{a?.focus?.()}}function Fa(e,a){e.innerHTML=a}function se(e){return String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a])}async function za(e={}){typeof e=="string"&&(e={url:e});let{url:a="./assets/ia-about.html",title:r="About",useBundle:i=!0,size:n="normal"}=e,l=document.querySelector(".about-modal");l&&l.remove();let s;if(i&&Tr)s=Tr;else try{s=await(await fetch(a)).text()}catch(m){s=`Could not load content: ${m.message}`}let d=document.createElement("div");d.className="about-modal",d.innerHTML=Yi,n==="large"&&d.querySelector(".about-modal-content").classList.add("about-modal-large"),d.querySelector(".about-modal-title").textContent=r,d.querySelector(".about-modal-body").innerHTML=s,document.body.appendChild(d);let f=ua(d),v=()=>{d.remove(),f()};d.querySelector(".about-modal-close").addEventListener("click",v),d.addEventListener("click",m=>{m.target===d&&v()}),document.addEventListener("keydown",function m(y){y.key==="Escape"&&(v(),document.removeEventListener("keydown",m))})}function un({filter:e,onSave:a}){let r=document.querySelector(".about-modal");r&&r.remove();let i=e||{},n=(i.blockedCollections||[]).join(", "),l=tn(i.minTrackDurationSec||0),s=tn(i.minItemRuntimeSec||0),d=document.createElement("div");d.className="about-modal",d.innerHTML=Ji;let f=d.querySelector("form").elements;f.minTrack.value=l,f.minItem.value=s,f.minBitrate.value=i.minTrackBitrateKbps||0,f.minDownloads.value=i.minDownloads||0,f.blocked.value=n,f.applyCatalog.checked=!!i.applyToCatalogArtists,document.body.appendChild(d);let v=ua(d),m=d.querySelector("form"),y=()=>{d.remove(),v()};d.querySelector(".about-modal-close").addEventListener("click",y),d.querySelector(".filters-cancel").addEventListener("click",y),d.addEventListener("click",b=>{b.target===d&&y()}),document.addEventListener("keydown",function b(h){h.key==="Escape"&&(y(),document.removeEventListener("keydown",b))}),d.querySelector(".filters-reset").addEventListener("click",()=>{a?.(null),y()}),m.addEventListener("submit",b=>{b.preventDefault();let h={minTrackDurationSec:an(m.elements.minTrack.value),minTrackBitrateKbps:Math.max(0,parseInt(m.elements.minBitrate.value,10)||0),minItemRuntimeSec:an(m.elements.minItem.value),minDownloads:Math.max(0,parseInt(m.elements.minDownloads.value,10)||0),blockedCollections:m.elements.blocked.value.split(",").map(p=>p.trim()).filter(Boolean),applyToCatalogArtists:m.elements.applyCatalog.checked};a?.(h),y()})}function tn(e){let a=Math.max(0,Math.floor(e||0));if(!a)return"";let r=Math.floor(a/60),i=a%60;return`${r}:${String(i).padStart(2,"0")}`}function an(e){let a=String(e||"").trim();if(!a)return 0;if(/^\d+$/.test(a))return Math.max(0,parseInt(a,10));let r=a.match(/^(\d+):(\d{1,2})$/);return r?parseInt(r[1],10)*60+parseInt(r[2],10):0}function fn(e){return!e||!e.length?"":e.map((a,r)=>`<button type="button" class="filters-extra${a.danger?" filters-danger":""}" data-action-idx="${r}">${se(a.label)}</button>`).join("")}function pn(e,a,r){a&&e.querySelectorAll(".filters-extra").forEach(i=>{i.addEventListener("click",async()=>{await a[Number(i.dataset.actionIdx)]?.onClick?.()!==!1&&r()})})}function Er({title:e="Playlist",values:a={},actions:r,onSave:i}){let n=document.querySelector(".about-modal");n&&n.remove();let l=a||{},s=document.createElement("div");s.className="about-modal",s.innerHTML=Xi,s.querySelector(".about-modal-title").textContent=e;let d=s.querySelector("form").elements;d.name.value=l.name||"",d.maker.value=l.maker||"",d.description.value=l.description||"",s.querySelector(".filters-actions").insertAdjacentHTML("afterbegin",fn(r)),document.body.appendChild(s);let f=ua(s),v=s.querySelector("form"),m=()=>{s.remove(),f()};s.querySelector(".about-modal-close").addEventListener("click",m),s.querySelector(".filters-cancel").addEventListener("click",m),s.addEventListener("click",y=>{y.target===s&&m()}),document.addEventListener("keydown",function y(b){b.key==="Escape"&&(m(),document.removeEventListener("keydown",y))}),pn(s,r,m),v.addEventListener("submit",y=>{y.preventDefault();let b=v.elements.name.value.trim();if(!b){v.elements.name.focus();return}i?.({name:b,maker:v.elements.maker.value.trim(),description:v.elements.description.value.trim()}),m()}),v.elements.name.focus(),v.elements.name.select()}function mn({title:e="Edit library",values:a={},canDelete:r=!1,onSave:i,onDelete:n}){let l=document.querySelector(".about-modal");l&&l.remove();let s=a||{},d=document.createElement("div");d.className="about-modal",d.innerHTML=Qi,d.querySelector(".about-modal-title").textContent=e;let f=d.querySelector("form").elements;f.label.value=s.label||"",f.url.value=s.url||"",r||d.querySelector(".filters-danger").remove(),document.body.appendChild(d);let v=ua(d),m=d.querySelector("form"),y=()=>{d.remove(),v()};d.querySelector(".about-modal-close").addEventListener("click",y),d.querySelector(".filters-cancel").addEventListener("click",y),d.addEventListener("click",b=>{b.target===d&&y()}),document.addEventListener("keydown",function b(h){h.key==="Escape"&&(y(),document.removeEventListener("keydown",b))}),r&&d.querySelector(".filters-extra").addEventListener("click",async()=>{await n?.()!==!1&&y()}),m.addEventListener("submit",b=>{b.preventDefault();let h=m.elements.label.value.trim(),p=m.elements.url.value.trim();if(!h||!p){m.elements[h?"url":"label"].focus();return}i?.({label:h,url:p}),y()}),m.elements.label.focus(),m.elements.label.select()}function hn({values:e={},siblingCount:a=0,actions:r,onSave:i}){let n=document.querySelector(".about-modal");n&&n.remove();let l=e||{},s=a>0?` (also updates ${a} other track${a===1?"":"s"} from this source)`:"",d=document.createElement("div");d.className="about-modal",d.innerHTML=Zi;let f=d.querySelector("form").elements;f.title.value=l.title||"",f.artist.value=l.artist||"",f.album.value=l.album||"",s&&(d.querySelector(".filters-album-label").textContent="Album"+s),d.querySelector(".filters-actions").insertAdjacentHTML("afterbegin",fn(r)),document.body.appendChild(d);let v=ua(d),m=d.querySelector("form"),y=()=>{d.remove(),v()};d.querySelector(".about-modal-close").addEventListener("click",y),d.querySelector(".filters-cancel").addEventListener("click",y),d.addEventListener("click",b=>{b.target===d&&y()}),document.addEventListener("keydown",function b(h){h.key==="Escape"&&(y(),document.removeEventListener("keydown",b))}),pn(d,r,y),m.addEventListener("submit",b=>{b.preventDefault();let h=m.elements.title.value.trim();if(!h){m.elements.title.focus();return}i?.({title:h,artist:m.elements.artist.value.trim(),album:m.elements.album.value.trim()}),y()}),m.elements.title.focus(),m.elements.title.select()}function A(e,a){e.textContent=a}function bn(e,a){e.innerHTML="";let r=document.createElement("div");r.className="music-player",r.innerHTML=en,e.appendChild(r);let i=r.querySelector(".rdf-uri"),n=r.querySelector(".load-btn"),l=()=>{let s=i.value.trim();s&&a(s)};n.addEventListener("click",l),i.addEventListener("keypress",s=>{s.key==="Enter"&&l()})}function gn(e){e.innerHTML='<div class="loading-screen">Loading music library...</div>'}function yn(e,a){e.innerHTML=`<div class="error">Error loading music player: ${a}</div>`}function vn(e,a){e.innerHTML="",e.appendChild(a)}dn({css:Ki,aboutHtml:Wi});import*as qs from"rdflib";var wn=Object.freeze({READY:"swc:ready",CAPABILITY:"swc:capability",OFFER:"swc:offer",LOGIN:"sol-login",LOGOUT:"sol-logout",AUTH_NEEDED:"sol-auth-needed",DEFAULT_CHANGE:"sol-default-change",COMMAND:"sol-command",ERROR:"sol-error",FORM_SAVE:"sol-form-save"});function zs(){let e=new Map,a=new Map;return{register(r,i){e.set(r,i);let n=a.get(r);n&&(a.delete(r),n.forEach(l=>l(i)))},get(r){return e.get(r)},has(r){return e.has(r)},names(){return Array.from(e.keys())},whenReady(r){return e.has(r)?Promise.resolve(e.get(r)):new Promise(i=>{let n=a.get(r)||[];n.push(i),a.set(r,n)})}}}var xn=null;function Cr(){if(typeof window<"u"){let e=window.ComponentInterop||window.SolidWebComponents||{};return window.ComponentInterop=e,window.SolidWebComponents=e,e}return xn=xn||{}}function js(){let e=Cr();return e.services||(e.services=zs()),e.EVENTS||(e.EVENTS=wn),e.services}function Sn(e,a){return js().register(e,a)}function kn(e,a){let r=Cr();return r.adoptedFetch=typeof e=="function"?e:null,a&&a.webId&&(r.adoptedWebId=a.webId),r.adoptedFetch}if(typeof window<"u"){let e=Cr();e.adoptFetch||(e.adoptFetch=kn),typeof e.registerConsumer=="function"&&e.registerConsumer("adoptFetch",a=>kn(a))}var be=qs,ja=class{constructor(){this._store=null,this._fetcher=null,this._adopted=!1,this._loaded=new Set,this._changeSubs=new Set,this._wiredStore=null,this._flushPending=!1}markLoaded(a){this._loaded.add(a)}isLoaded(a){return this._loaded.has(a)}sym(a){return be.sym(a)}literal(a,r,i){return i!==void 0?be.literal(a,r,i):be.literal(a,r)}blankNode(a){return be.blankNode(a)}graph(){return be.graph()}parse(a,r,i,n){return be.parse(a,r,i,n)}st(a,r,i,n){return be.st(a,r,i,n)}get store(){if(this._adopted&&this._store)return this._store;let a=typeof window<"u"&&(window[Symbol.for("solid-logic-singleton")]||window.SolidLogic);return a?.store?(this._store=a.store,a.store):(this._store||(this._store=be.graph()),this._store)}useStore(a){return!a||typeof a.match!="function"?!1:(this._store=a,this._fetcher=a.fetcher||null,this._adopted=!0,this._loaded.clear(),this._wireChange(a),!0)}onChange(a,r,i,n){let l={pattern:{subject:a,predicate:r,object:i},cb:n,dirty:!1};return this._changeSubs.add(l),this._wireChange(this.store),()=>this._changeSubs.delete(l)}_matchesPattern(a,r){return(!a.subject||r.subject&&r.subject.equals(a.subject))&&(!a.predicate||r.predicate&&r.predicate.equals(a.predicate))&&(!a.object||r.object&&r.object.equals(a.object))}_wireChange(a){if(!a||this._wiredStore===a)return;this._wiredStore=a;let r=i=>{let n=!1;for(let l of this._changeSubs)!l.dirty&&this._matchesPattern(l.pattern,i)&&(l.dirty=!0,n=!0);n&&this._scheduleFlush()};typeof a.addDataCallback=="function"&&a.addDataCallback(r),typeof a.addDataRemovalCallback=="function"&&a.addDataRemovalCallback(r)}_scheduleFlush(){this._flushPending||(this._flushPending=!0,queueMicrotask(()=>{this._flushPending=!1;for(let a of this._changeSubs)if(a.dirty){a.dirty=!1;try{a.cb()}catch(r){console.error("[rdf] onChange subscriber failed",r)}}}))}get storeFetcher(){return this._fetcher?this._fetcher:this.store.fetcher?(this._fetcher=this.store.fetcher,this._fetcher):(this._fetcher=new be.Fetcher(this.store),this.store.fetcher=this._fetcher,this._fetcher)}async load(a){let r=String(a).split("#")[0];return this.isLoaded(r)||(await this.storeFetcher.load(r),this.markLoaded(r)),this.store}fetcher(a,r){return new be.Fetcher(a,r)}sparqlToQuery(a,r,i){return be.SPARQLToQuery(a,r,i)}sparqlQuery(a,r){return be.sparqlQuery(a,r)}isReady(){return!!be&&typeof be.graph=="function"}hasSparqlEngine(){return typeof be.SPARQLToQuery=="function"}hasRemoteSparql(){return typeof be.sparqlQuery=="function"}serialize(a,r,i,n){return be.serialize(a,r,i,n)}get UpdateManager(){return be.UpdateManager}get SPARQLToQuery(){return be.SPARQLToQuery}get Fetcher(){return be.Fetcher}get NamedNode(){return be.NamedNode}get BlankNode(){return be.BlankNode}get Literal(){return be.Literal}get Collection(){return be.Collection}get Statement(){return be.Statement}},Ln=Symbol.for("sol-components:rdf-singleton"),V=typeof window<"u"?window[Ln]||(window[Ln]=new ja):new ja,ke=V;Sn("rdf",V);typeof window<"u"&&window.SolidWebComponents&&typeof window.SolidWebComponents.registerConsumer=="function"&&window.SolidWebComponents.registerConsumer("rdf.useStore",function(e){V.useStore(e)});var fe={rdf:"http://www.w3.org/1999/02/22-rdf-syntax-ns#",schema:"http://schema.org/",dcat:"http://www.w3.org/ns/dcat#",dct:"http://purl.org/dc/terms/",skos:"http://www.w3.org/2004/02/skos/core#"},ze=e=>V.sym(e),qt=e=>V.literal(String(e)),Bs=ze(fe.rdf+"type");function _n(e,a){let r=ze(a.iri);return e.add(r,Bs,ze(fe.schema+"ImageObject")),a.thumb&&e.add(r,ze(fe.schema+"thumbnailUrl"),ze(a.thumb)),a.full&&e.add(r,ze(fe.schema+"contentUrl"),ze(a.full)),a.width&&e.add(r,ze(fe.schema+"width"),qt(a.width)),a.height&&e.add(r,ze(fe.schema+"height"),qt(a.height)),a.caption&&e.add(r,ze(fe.schema+"caption"),qt(a.caption)),a.license&&e.add(r,ze(fe.schema+"license"),qt(a.license)),a.author&&e.add(r,ze(fe.schema+"author"),qt(a.author)),a.detailUrl&&e.add(r,ze(fe.schema+"mainEntityOfPage"),ze(a.detailUrl)),a.position!=null&&e.add(r,ze(fe.schema+"position"),qt(a.position)),r}var Os="https://commons.wikimedia.org/w/api.php";function An(e){return e?(new DOMParser().parseFromString(String(e),"text/html").body.textContent||"").replace(/\s+/g," ").trim():""}function Hs(e){if(!e)return"";let a="";try{let r=new URL(e),i=r.pathname.match(/\/wiki\/(.+)$/);a=i?i[1]:r.searchParams.get("title")||""}catch{let r=String(e).match(/Category:[^?#]+/);a=r?r[0]:""}try{a=decodeURIComponent(a)}catch{}return a=a.replace(/_/g," ").trim(),/^Category:/i.test(a)?a:""}async function $n(e,a={}){let{thumbWidth:r=300,limit:i=60,cont:n,signal:l}=a,s=Hs(e);if(!s)throw new Error("Not a Commons category URL");let d=new URLSearchParams({action:"query",format:"json",origin:"*",generator:"categorymembers",gcmtitle:s,gcmtype:"file",gcmlimit:String(i),prop:"imageinfo",iiprop:"url|size|extmetadata",iiurlwidth:String(r),iiextmetadatafilter:"Artist|LicenseShortName"});n&&d.set("gcmcontinue",n);let f=await fetch(`${Os}?${d}`,{signal:l});if(!f.ok)throw new Error(`HTTP ${f.status} from Commons`);let v=await f.json();if(v.error)throw new Error(v.error.info||"Commons API error");let m=v.query&&v.query.pages?Object.values(v.query.pages):[];m.sort((h,p)=>(h.index||0)-(p.index||0));let y=[];for(let h of m){let p=h.imageinfo&&h.imageinfo[0];if(!p||!p.thumburl)continue;let S=p.extmetadata||{};y.push({title:(h.title||"").replace(/^File:/,""),name:h.title||"",thumb:p.thumburl,full:p.url,width:p.thumbwidth||0,height:p.thumbheight||0,descUrl:p.descriptionurl||"",artist:An(S.Artist&&S.Artist.value),license:An(S.LicenseShortName&&S.LicenseShortName.value)})}let b=v.continue&&v.continue.gcmcontinue?v.continue.gcmcontinue:null;return{images:y,cont:b}}function Gs(e,{startIndex:a=0}={}){let r=V.graph();return e.forEach((i,n)=>{let l=a+n,s=i.descUrl||i.full||`urn:commons:image:${l}`;_n(r,{iri:s,thumb:i.thumb,full:i.full,width:i.width,height:i.height,caption:i.title,license:i.license,author:i.artist,detailUrl:i.descUrl,position:l})}),r}async function*Tn(e,{pageSize:a=60,thumbWidth:r=300,signal:i}={}){let n,l=0;do{let{images:s,cont:d}=await $n(e,{thumbWidth:r,limit:a,cont:n,signal:i});yield Gs(s,{startIndex:l}),l+=s.length,n=d}while(n)}var _e={rdf:"http://www.w3.org/1999/02/22-rdf-syntax-ns#",schema:"http://schema.org/",dct:"http://purl.org/dc/terms/",dcat:"http://www.w3.org/ns/dcat#",dctype:"http://purl.org/dc/dcmitype/",ldp:"http://www.w3.org/ns/ldp#",xsd:"http://www.w3.org/2001/XMLSchema#"},En=e=>{if(!e)throw new Error("favouritesUrl: a library base URL is required");return new URL("favourites/",new URL(e,document.baseURI)).href},Ir=e=>JSON.stringify(String(e));function Ks(e){let a=e.created||new Date().toISOString(),r=`<${e.item}> a dctype:${e.bucket}, schema:${e.schemaType} ;
   schema:name ${Ir(e.name)}`;return e.thumbnail&&(r+=` ;
   schema:thumbnailUrl <${e.thumbnail}>`),e.link&&(r+=` ;
   ${e.download?"dcat:downloadURL":"dcat:landingPage"} <${e.link}>`),r+=" .",`@prefix schema: <${_e.schema}> .
@prefix dct: <${_e.dct}> .
@prefix dcat: <${_e.dcat}> .
@prefix dctype: <${_e.dctype}> .
@prefix xsd: <${_e.xsd}> .

<> a schema:BookmarkAction ;
   dct:creator ${Ir(e.contributor)} ;
   dct:title ${Ir(e.title||e.name)} ;
   dct:created "${a}"^^xsd:dateTime ;
   dct:references <${e.item}> .

${r}
`}async function Cn(e,a){let r=En(a),i=await fetch(r,{method:"POST",headers:{"Content-Type":"text/turtle"},body:Ks(e)});if(!i.ok)throw new Error(`Couldn't save favourite (HTTP ${i.status}).`);let n=i.headers.get("Location");return n?new URL(n,r).href:null}async function fa(e){let a=await fetch(e,{method:"DELETE"});if(!a.ok)throw new Error(`Couldn't remove favourite (HTTP ${a.status}).`)}function Ws(e,a){let r=V.graph();try{V.parse(a,r,e,"text/turtle")}catch{return null}let i=r.each(void 0,V.sym(_e.rdf+"type"),V.sym(_e.schema+"BookmarkAction"))[0];if(!i)return null;let n=r.any(i,V.sym(_e.dct+"references"))?.value;if(!n)return null;let l=V.sym(n),s=r.each(l,V.sym(_e.rdf+"type")).map(v=>v.value),d=s.find(v=>v.startsWith(_e.dctype))||"",f=s.find(v=>v.startsWith(_e.schema))||"";return{file:e,item:n,contributor:r.any(i,V.sym(_e.dct+"creator"))?.value||"anonymous",customTitle:r.any(i,V.sym(_e.dct+"title"))?.value||"",created:r.any(i,V.sym(_e.dct+"created"))?.value||"",canonicalTitle:r.any(l,V.sym(_e.schema+"name"))?.value||n,thumbnail:r.any(l,V.sym(_e.schema+"thumbnailUrl"))?.value||"",link:r.any(l,V.sym(_e.dcat+"downloadURL"))?.value||r.any(l,V.sym(_e.dcat+"landingPage"))?.value||n,bucket:d.replace(_e.dctype,"")||"Collection",schemaType:f.replace(_e.schema,"")}}async function qa(e){let a=En(e),r;try{let d=await fetch(a,{headers:{Accept:"text/turtle"},cache:"no-store"});if(!d.ok)return[];r=await d.text()}catch{return[]}let i=V.graph();try{V.parse(r,i,a,"text/turtle")}catch{return[]}let n=i.each(V.sym(a),V.sym(_e.ldp+"contains")).map(d=>d.value).filter(d=>!d.endsWith("/")),l=[];await Promise.all(n.map(async d=>{try{let f=await fetch(d,{cache:"no-store"});if(!f.ok)return;let v=Ws(d,await f.text());v&&l.push(v)}catch{}}));let s=new Map;for(let d of l){s.has(d.item)||s.set(d.item,{item:d.item,canonicalTitle:d.canonicalTitle,thumbnail:d.thumbnail,link:d.link,bucket:d.bucket,schemaType:d.schemaType,created:d.created,contributors:[]});let f=s.get(d.item);f.contributors.some(v=>v.name===d.contributor)||f.contributors.push({name:d.contributor,customTitle:d.customTitle,file:d.file}),d.created>f.created&&(f.created=d.created),!f.thumbnail&&d.thumbnail&&(f.thumbnail=d.thumbnail)}return[...s.values()].map(d=>({...d,count:d.contributors.length}))}var In=`<!-- "\u2605 Add to favourites" prompt. omp-favourites-ui.js favouritePrompt()
     seeds the title input and wires add/cancel; styles in
     favourite-prompt.css (both inlined at build time as text imports). -->
<div class="omp-fav-modal" role="dialog" aria-modal="true" aria-label="Add to favourites">
  <h2>\u2605 Add to favourites</h2>
  <label>Name this favourite<input class="omp-fav-title" type="text"></label>
  <p class="omp-fav-note">Favourites are a shared, public wall \u2014 anyone can add; only the owner can remove.</p>
  <div class="omp-fav-row">
    <button class="omp-fav-cancel" type="button">Cancel</button>
    <button class="omp-fav-add primary" type="button">Add \u2605</button>
  </div>
</div>
`;var Pn=`/* Styles for the "\u2605 Add to favourites" prompt (modal-favourite-prompt.html),
   injected with the overlay by omp-favourites-ui.js. */
.omp-fav-overlay { position: fixed; inset: 0; z-index: 1100; background: rgba(0,0,0,.55);
  display: flex; align-items: flex-start; justify-content: center; padding: 12vh 16px; }
.omp-fav-modal { width: min(420px, 100%); background: var(--ia-bg, #15161a); color: var(--ia-text, #e7e7ea);
  border: 1px solid var(--ia-border, #2a2d33); border-radius: 14px; padding: 18px 20px 16px;
  box-shadow: 0 24px 60px -16px rgba(0,0,0,.7); font-family: var(--ia-font-body, system-ui, sans-serif); }
.omp-fav-modal h2 { margin: 0 0 .6em; font-size: 1.1rem; }
.omp-fav-modal label { display: block; font-size: .82rem; margin: .5em 0 .15em; color: var(--ia-text-soft, #c8c8cc); }
.omp-fav-modal input { width: 100%; box-sizing: border-box; font: inherit; padding: .4em .55em;
  border: 1px solid var(--ia-border, #2a2d33); border-radius: 7px; background: var(--ia-bg-elev, #1c1d22); color: inherit; }
.omp-fav-note { font-size: .74rem; color: var(--ia-text-muted, #9aa0a6); margin: .8em 0 0; line-height: 1.4; }
.omp-fav-row { display: flex; justify-content: flex-end; gap: .5em; margin-top: 1em; }
.omp-fav-row button { font: inherit; font-size: .85rem; padding: .4em .9em; border-radius: 8px; cursor: pointer;
  border: 1px solid var(--ia-border, #2a2d33); background: var(--ia-bg-btn, #2a2a2a); color: inherit; }
.omp-fav-row button.primary { background: var(--ia-accent, #e6b800); color: #1a1a1a; border-color: transparent; font-weight: 600; }
`;var Js="omp:fav-contributor",Xs=()=>{try{return localStorage.getItem(Js)||""}catch{return""}};function Qs(e){return new Promise(a=>{let r=document.createElement("div");r.className="omp-fav-overlay",r.innerHTML=`<style>${Pn}</style>${In}`,document.body.appendChild(r);let i=r.querySelector(".omp-fav-title");i.value=e||"",i.focus(),i.select?.();let n=s=>{r.remove(),a(s)},l=()=>{let s=i.value.trim();n({contributor:Xs()||"anonymous",title:s||e})};r.querySelector(".omp-fav-cancel").addEventListener("click",()=>n(null)),r.querySelector(".omp-fav-add").addEventListener("click",l),r.addEventListener("click",s=>{s.target===r&&n(null)}),r.addEventListener("keydown",s=>{s.key==="Escape"?n(null):s.key==="Enter"&&(s.preventDefault(),l())})})}async function Pr(e,a){let r=await Qs(e.name);if(!r)return null;let i={...e,contributor:r.contributor,title:r.title};return await Cn(i,a),document.dispatchEvent(new CustomEvent("omp:favourited",{detail:i})),i}function Dn(){window.__ompFavRouter||(window.__ompFavRouter=!0,document.addEventListener("item-favourite",e=>{let a=e.detail;a&&a.bucket&&a.item&&Pr(a,a.libraryBase).catch(r=>console.warn("[favourite]",r.message))}))}var Mn=`/* omp-images shadow styles \u2014 imported as text by omp-images.js (esbuild
   '.css': 'text') and installed into the component's shadow root. */

  :host { display: flex !important; flex-direction: row !important; height: 100%; min-height: 0; overflow: hidden;
          font-family: var(--font-ui, system-ui, sans-serif); font-size: var(--font-size, 20px);
          color: var(--text, #212121); background: var(--bg, #f5f5f5); }
  :host([hidden]) { display: none; }
  * { box-sizing: border-box; }

  .fav-col { flex: 0 0 13rem; display: flex; flex-direction: column; min-height: 0;
             background: var(--surface, #fff); border-right: 1px solid var(--border, #d0d0d0); }
  .right { flex: 1 1 auto; display: flex; flex-direction: column; min-width: 0; min-height: 0; }
  .browser { flex: 0 0 42%; display: flex; min-height: 8rem;
             background: var(--surface, #fff); border-bottom: 1px solid var(--border, #d0d0d0); }

  .pane { display: flex; flex-direction: column; min-height: 0; min-width: 0; overflow: hidden; }
  .browser .pane { flex: 1 1 0; }
  .browser .pane + .pane { border-left: 1px solid var(--border, #d0d0d0); }
  .pane-head { flex: 0 0 auto; padding: .45rem .6rem .3rem; font-size: .68em; font-weight: 700;
               text-transform: uppercase; letter-spacing: .05em; color: var(--text-muted, #7f8c8d); }
  .list { list-style: none; margin: 0; padding: 0 .35rem .4rem; overflow: auto; min-height: 0; flex: 1 1 auto; }
  .hint { padding: .35rem .5rem; font-size: .72em; font-style: italic; color: var(--text-muted, #7f8c8d); }

  .row { display: block; width: 100%; text-align: left; font: inherit; font-size: .78em;
         padding: .35rem .5rem; margin: 0; border: none; border-radius: 6px; background: transparent;
         color: var(--text, #212121); cursor: pointer; line-height: 1.3; }
  .row:hover { background: var(--hover, #eaf2fb); }
  .row.selected { background: var(--focus-bg, #ebf5fb); color: var(--selected-fg, var(--link, #2980b9)); font-weight: 600; }
  .row:focus-visible { outline: 2px solid var(--accent, #3498db); outline-offset: -2px; }
  .coll, .fav-link { color: var(--link, var(--accent, #2980b9)); }

  /* collection row = label button + a \u2605 favourite toggle */
  li.has-star { display: flex; align-items: center; gap: .1rem; }
  li.has-star .row { flex: 1 1 auto; min-width: 0; }
  .star { flex: 0 0 auto; background: transparent; border: none; cursor: pointer; padding: 0 .25rem;
          font-size: .95em; line-height: 1; color: var(--text-muted, #9aa0a6); }
  .star:hover { color: var(--accent, #e6b800); }
  .star.on { color: #e6b800; }
  /* owner-only "remove from the communal wall" control on a favourite row */
  .fav-x { flex: 0 0 auto; background: transparent; border: none; cursor: pointer; padding: 0 .3rem;
           color: var(--text-muted, #9aa0a6); font-size: .8em; display: none; }
  :host(.owner) .fav-x { display: inline-block; }
  .fav-x:hover { color: var(--error, #e74c3c); }

  /* owner-only add controls (hidden unless :host(.owner)) */
  .add { flex: 0 0 auto; border-top: 1px solid var(--border, #d0d0d0); padding: .35rem; display: none; }
  :host(.owner) .add { display: block; }
  .add-btn { width: 100%; font: inherit; font-size: .74em; padding: .3rem .5rem; cursor: pointer;
             border: 1px dashed var(--border, #c0c0c0); border-radius: 6px; background: transparent; color: var(--text-muted, #555); }
  .add-btn:hover:not(:disabled) { background: var(--hover, #eaf2fb); color: var(--text, #111); }
  .add-btn:disabled { opacity: .5; cursor: default; }
  .add-form { display: flex; flex-direction: column; gap: .3rem; }
  .add-form input { font: inherit; font-size: .76em; padding: .3rem .4rem; border: 1px solid var(--border, #c0c0c0);
                    border-radius: 6px; background: var(--bg, #fff); color: var(--text, #111); }
  .add-form .add-row { display: flex; gap: .3rem; }
  .add-form button { font: inherit; font-size: .74em; padding: .28rem .6rem; border-radius: 6px;
                     border: 1px solid var(--border, #c0c0c0); cursor: pointer; background: var(--surface, #fff); color: inherit; }
  .add-form button.primary { background: var(--accent, #3498db); color: #fff; border-color: transparent; }
  .add-err { font-size: .7em; color: var(--error, #e74c3c); padding: 0 .2rem; }

  sol-gallery { flex: 1 1 auto; min-width: 0; min-height: 0; }
`;var Dr=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._loaded=!1,this._favColls=[],this._favLandings=new Set}connectedCallback(){if(this._built)return;this._built=!0,this.source=this.getAttribute("source")||"";let a=document.createElement("style");a.textContent=Mn,this._favPane=this._pane("Community Favorites","fav-col");let r=document.createElement("div");r.className="right";let i=document.createElement("div");i.className="browser",this._libPane=this._pane("Library"),this._topicPane=this._pane("Topic"),this._collPane=this._pane("Collection"),i.append(this._libPane.pane,this._topicPane.pane,this._collPane.pane),this._gallery=document.createElement("sol-gallery"),this._gallery.addEventListener("load-more",()=>this._pump&&this._pump()),r.append(i,this._gallery),this.shadowRoot.append(a,this._favPane.pane,r),this._buildAddControls(),this._syncOwner(),this._onGating=()=>this._syncOwner(),document.addEventListener("omp:reapply-gating",this._onGating),this._onFav=()=>this._loadCommunalFavs(),document.addEventListener("omp:favourited",this._onFav),this._renderFavourites(),this._loadCommunalFavs()}disconnectedCallback(){document.removeEventListener("omp:reapply-gating",this._onGating),document.removeEventListener("omp:favourited",this._onFav)}_pane(a,r){let i=document.createElement("div");i.className="pane"+(r?" "+r:"");let n=document.createElement("div");n.className="pane-head",n.textContent=a;let l=document.createElement("ul");return l.className="list",i.append(n,l),{pane:i,list:l}}ensureLoaded(){this._loaded||this._loading||this._load().catch(a=>console.warn("[omp-images] load failed:",a.message))}async reload(){return this._loaded=!1,this._load()}async _load(){this._loading=!0;try{let a=this._docUrl(),r=await fetch(a);if(!r.ok)throw new Error(`HTTP ${r.status} for ${a}`);let i=V.graph();V.parse(await r.text(),i,a,"text/turtle"),this._readModel(i),this._renderLibraries(),this._renderFavourites(),this._restoreSelection(),this._loaded=!0}finally{this._loading=!1}}_readModel(a){let r=V.sym(fe.rdf+"type"),i=l=>a.any(l,V.sym(fe.skos+"prefLabel"))?.value||l.value,n=V.sym(this._schemeIri());this._libraries=a.each(void 0,V.sym(fe.skos+"topConceptOf"),n).map(l=>({iri:l.value,label:this._libLabel(i(l))})).sort((l,s)=>l.label.localeCompare(s.label)),this._topicsByLib=new Map,this._topicByIri=new Map,this._topicLib=new Map;for(let l of this._libraries){let s=a.each(void 0,V.sym(fe.skos+"broader"),V.sym(l.iri)).map(d=>({iri:d.value,label:i(d)})).sort((d,f)=>d.label.localeCompare(f.label));this._topicsByLib.set(l.iri,s);for(let d of s)this._topicByIri.set(d.iri,d),this._topicLib.set(d.iri,l.iri)}this._collsByTopic=new Map,this._collByIri=new Map;for(let l of a.each(void 0,r,V.sym(fe.dcat+"Dataset"))){let s=a.any(l,V.sym(fe.dcat+"theme"))?.value;if(!s)continue;let d={iri:l.value,title:a.any(l,V.sym(fe.dct+"title"))?.value||"(untitled)",landingPage:a.any(l,V.sym(fe.dcat+"landingPage"))?.value||"",theme:s};this._collsByTopic.has(s)||this._collsByTopic.set(s,[]),this._collsByTopic.get(s).push(d),this._collByIri.set(l.value,d)}for(let l of this._collsByTopic.values())l.sort((s,d)=>s.title.localeCompare(d.title))}_libLabel(a){return a.replace(/^Images\s*-\s*/i,"").trim()||a}_renderLibraries(){this._libPane.list.replaceChildren(),this._libBtns=new Map;for(let a of this._libraries){let r=this._row(this._libPane.list,"lib",a.label);r.addEventListener("click",()=>this._selectLibrary(a)),this._libBtns.set(a.iri,r)}this._libraries.length||this._hint(this._libPane.list,"No libraries")}_selectLibrary(a){this._activeLibrary=a,this._mark(this._libBtns,this._libBtns.get(a.iri)),this._renderTopics(a),this._activeTopic=null,this._collPane.list.replaceChildren(),this._hint(this._collPane.list,"Select a topic"),this._addCollBtn.disabled=!0,this._addTopicBtn.disabled=!1}_renderTopics(a){this._topicPane.list.replaceChildren(),this._topicBtns=new Map;let r=this._topicsByLib.get(a.iri)||[];for(let i of r){let n=this._row(this._topicPane.list,"topic",i.label);n.addEventListener("click",()=>this._selectTopic(i)),this._topicBtns.set(i.iri,n)}r.length||this._hint(this._topicPane.list,"No topics in this library yet")}_selectTopic(a){this._activeTopic=a,this._mark(this._topicBtns,this._topicBtns.get(a.iri)),this._renderColls(a),this._addCollBtn.disabled=!1}_renderColls(a){this._collPane.list.replaceChildren(),this._collBtns=new Map,this._starByIri=new Map;let r=this._collsByTopic.get(a.iri)||[];for(let i of r){let n=document.createElement("li");n.className="has-star";let l=document.createElement("button");l.type="button",l.className="row coll",l.textContent=i.title,l.addEventListener("click",()=>this._openCollection(i));let s=this._starButton(i);n.append(l,s),this._collPane.list.appendChild(n),this._collBtns.set(i.iri,l)}r.length||this._hint(this._collPane.list,"No collections in this topic yet"),this._activeCollIri&&this._collBtns.has(this._activeCollIri)&&this._collBtns.get(this._activeCollIri).classList.add("selected")}_starButton(a){let r=this._favLandings.has(a.landingPage),i=document.createElement("button");return i.type="button",i.className="star"+(r?" on":""),i.textContent=r?"\u2605":"\u2606",i.title="Add to the communal favourites",i.setAttribute("aria-label","Favourite"),i.addEventListener("click",n=>{n.stopPropagation(),this._favourite(a)}),this._starByIri.set(a.iri,i),i}async _loadCommunalFavs(){try{let a=await qa(this._docUrl());this._favColls=a.filter(r=>r.bucket==="Collection"||r.schemaType==="ImageGallery"),this._favLandings=new Set(this._favColls.map(r=>r.link||r.item))}catch{this._favColls=[],this._favLandings=new Set}this._renderFavourites(),this._refreshStars()}_refreshStars(){for(let[a,r]of this._starByIri||new Map){let i=this._collByIri?.get(a),n=i&&this._favLandings.has(i.landingPage);r.classList.toggle("on",!!n),r.textContent=n?"\u2605":"\u2606"}}_renderFavourites(){let a=this._favPane.list;a.replaceChildren();let r=[...this._favColls].sort((i,n)=>i.canonicalTitle.localeCompare(n.canonicalTitle));if(!r.length){this._hint(a,"Star a collection \u2014 it joins the \u2605 Favourites wall");return}for(let i of r){let n=document.createElement("li");n.className="has-star";let l=document.createElement("button");l.type="button",l.className="row fav-link",l.textContent=i.canonicalTitle+(i.count>1?`  \xB7  \u2605${i.count}`:""),l.title=`Favourited by ${i.contributors.map(s=>s.name).join(", ")}`,l.addEventListener("click",()=>this.openByRef(i.link||i.item)),n.append(l,this._favDeleteButton(i)),a.appendChild(n)}}_favDeleteButton(a){let r=document.createElement("button");return r.type="button",r.className="fav-x",r.textContent="\u2715",r.title="Remove from the communal favourites",r.setAttribute("aria-label","Remove favourite"),r.addEventListener("click",async i=>{if(i.stopPropagation(),!!confirm(`Remove \u201C${a.canonicalTitle}\u201D from the communal favourites?`)){for(let n of a.contributors||[])if(n.file)try{await fa(n.file)}catch(l){console.warn("[fav delete]",l.message)}document.dispatchEvent(new CustomEvent("omp:favourited"))}}),r}async _favourite(a){if(this._favLandings.has(a.landingPage)){let r=this._favColls.find(i=>(i.link||i.item)===a.landingPage);for(let i of r?.contributors||[])if(i.file)try{await fa(i.file)}catch(n){console.warn("[fav delete]",n.message)}document.dispatchEvent(new CustomEvent("omp:favourited"));return}try{await Pr({item:a.landingPage,bucket:"Collection",schemaType:"ImageGallery",name:a.title,link:a.landingPage,download:!1},this._docUrl())&&this._loadCommunalFavs()}catch(r){console.warn("[favourite]",r.message)}}openByRef(a){for(let r of this._collByIri?.values()||[])if(r.landingPage===a){this._jumpToCollection(r.iri);return}}_jumpToCollection(a){let r=this._collByIri?.get(a);if(!r)return;let i=this._topicLib.get(r.theme),n=this._libraries.find(s=>s.iri===i),l=this._topicByIri.get(r.theme);n&&this._selectLibrary(n),l&&this._selectTopic(l),this._openCollection(r),requestAnimationFrame(()=>{this._libBtns.get(i)?.scrollIntoView({block:"nearest"}),this._topicBtns.get(r.theme)?.scrollIntoView({block:"nearest"}),this._collBtns.get(a)?.scrollIntoView({block:"nearest"})})}_openCollection(a){this._activeCollIri=a.iri,this._collBtns&&this._mark(this._collBtns,this._collBtns.get(a.iri));try{localStorage.setItem(this._selKey(),a.landingPage)}catch{}let r=a.landingPage;if(!r){this._gallery.clear(),this._gallery.end();return}this._abort?.abort(),this._abort=new AbortController;let i=this._abort.signal;this._gallery.clear();let n=Tn(r,{signal:i})[Symbol.asyncIterator](),l=!1,s=!1;this._pump=async()=>{if(!(l||s)){s=!0;try{let{value:d,done:f}=await n.next();if(i.aborted)return;if(f){l=!0,this._gallery.end();return}this._gallery.add(d)}catch(d){l=!0,d.name!=="AbortError"&&(this._gallery.end(),console.warn("[omp-images]",d.message))}finally{s=!1}}},this._pump()}_restoreSelection(){let a=null;try{a=localStorage.getItem(this._selKey())}catch{}if(a){for(let r of this._collByIri.values())if(r.landingPage===a){this._jumpToCollection(r.iri);return}}}_row(a,r,i){let n=document.createElement("li"),l=document.createElement("button");return l.type="button",l.className=`row ${r}`,l.textContent=i,n.appendChild(l),a.appendChild(n),l}_hint(a,r){if(!r){a.replaceChildren();return}let i=document.createElement("li");i.className="hint",i.textContent=r,a.replaceChildren(i)}_mark(a,r){for(let i of a.values()){let n=i===r;i.classList.toggle("selected",n),n?i.setAttribute("aria-current","true"):i.removeAttribute("aria-current")}}_buildAddControls(){let a=document.createElement("div");a.className="add",this._addTopicBtn=this._mkAddBtn("+ Add topic",()=>this._openAddTopic(a)),this._addTopicBtn.disabled=!0,a.appendChild(this._addTopicBtn),this._topicPane.pane.appendChild(a);let r=document.createElement("div");r.className="add",this._addCollBtn=this._mkAddBtn("+ Add collection",()=>this._openAddCollection(r)),this._addCollBtn.disabled=!0,r.appendChild(this._addCollBtn),this._collPane.pane.appendChild(r)}_mkAddBtn(a,r){let i=document.createElement("button");return i.type="button",i.className="add-btn",i.textContent=a,i.addEventListener("click",r),i}_openAddTopic(a){if(!this._activeLibrary)return;this._addTopicBtn.style.display="none";let{form:r,inputs:i,ok:n,err:l,reset:s}=this._addForm(a,[{ph:"Topic name"}],this._addTopicBtn);r.addEventListener("submit",async d=>{d.preventDefault();let f=i[0].value.trim();if(f){n.disabled=!0,l.textContent="";try{await this._addTopic(f,this._activeLibrary.iri);let v=this._activeLibrary.iri;s(),await this.reload();let m=this._libraries.find(y=>y.iri===v);m&&this._selectLibrary(m)}catch(v){l.textContent=v.message,n.disabled=!1}}})}_openAddCollection(a){if(!this._activeTopic)return;this._addCollBtn.style.display="none";let{form:r,inputs:i,ok:n,err:l,reset:s}=this._addForm(a,[{ph:"Collection title"},{ph:"Commons category URL",value:"https://commons.wikimedia.org/wiki/Category:"}],this._addCollBtn);r.addEventListener("submit",async d=>{d.preventDefault();let f=i[0].value.trim(),v=i[1].value.trim();if(!(!f||!v)){n.disabled=!0,l.textContent="";try{await this._addCollection(f,v,this._activeTopic.iri);let m=this._activeTopic.iri,y=this._activeLibrary.iri;s(),await this.reload();let b=this._libraries.find(p=>p.iri===y);b&&this._selectLibrary(b);let h=this._topicByIri.get(m);h&&this._selectTopic(h)}catch(m){l.textContent=m.message,n.disabled=!1}}})}_addForm(a,r,i){let n=document.createElement("form");n.className="add-form";let l=r.map(y=>{let b=document.createElement("input");return b.placeholder=y.ph,b.required=!0,y.value&&(b.value=y.value),n.appendChild(b),b}),s=document.createElement("div");s.className="add-row";let d=document.createElement("button");d.type="submit",d.className="primary",d.textContent="Add";let f=document.createElement("button");f.type="button",f.textContent="Cancel";let v=document.createElement("div");v.className="add-err",s.append(d,f),n.append(s,v),a.appendChild(n),l[0].focus();let m=()=>{n.remove(),i.style.display=""};return f.addEventListener("click",m),{form:n,inputs:l,ok:d,err:v,reset:m}}async _addTopic(a,r){let i=this._mintIri(a);await this._patch(`<${i}> a skos:Concept, schema:DefinedTerm ; skos:prefLabel ${JSON.stringify(a)} ; skos:broader <${r}> .`)}async _addCollection(a,r,i){let n=this._mintIri(a,"coll");await this._patch(`<${n}> a <${fe.dcat}Dataset>, <${fe.schema}ImageGallery> ; dct:title ${JSON.stringify(a)} ; dcat:landingPage <${r}> ; dcat:theme <${i}> .`)}async _patch(a){let r=`PREFIX skos: <${fe.skos}>
PREFIX schema: <${fe.schema}>
PREFIX dct: <${fe.dct}>
PREFIX dcat: <${fe.dcat}>
INSERT DATA {
${a}
}
`,i=await fetch(this._docUrl(),{method:"PATCH",headers:{"Content-Type":"application/sparql-update"},body:r});if(!i.ok)throw new Error(`Save failed (HTTP ${i.status}). The file must be on a Solid pod you own.`)}_docUrl(){return new URL(this.source,document.baseURI).href.split("#")[0]}_schemeIri(){let a=this.source.split("#")[1]||"Images";return`${this._docUrl()}#${a}`}_selKey(){return`omp-images:collection:${this.source}`}_mintIri(a,r){let i=(r?r+"-":"")+a.trim().replace(/[^A-Za-z0-9]+/g,"_").replace(/^_+|_+$/g,"").slice(0,40),n=i||"item",l=this._docUrl(),s=f=>this._topicByIri.has(`${l}#${f}`)||this._libraries.some(v=>v.iri===`${l}#${f}`)||this._collByIri.has(`${l}#${f}`),d=2;for(;s(n);)n=`${i}_${d++}`;return`${l}#${n}`}_syncOwner(){let a=!!document.querySelector("sol-default")?.hasAttribute("solid-kitchen")||!!document.querySelector("sol-login")?.isLoggedIn;this.classList.toggle("owner",a)}};customElements.get("omp-images")||customElements.define("omp-images",Dr);function Mr(e){if(!e)return null;let a;try{a=new URL(e)}catch{return null}let r=a.pathname.match(/\/details\/([^/?]+)/);if(r)return`collection:${r[1]}`;if(a.pathname==="/search"||a.pathname==="/search.php"){let i=[],n=(a.searchParams.get("query")||"").trim();n&&i.push(n);for(let l of a.searchParams.getAll("and[]")){let s=l.trim();s&&i.push(s)}return i.length?i.join(" AND "):null}return null}function Rn(e){if(e==null)return NaN;if(typeof e=="number")return e;let a=String(e).trim();if(!a)return NaN;if(/^[0-9.]+$/.test(a))return parseFloat(a);let r=a.split(":").map(Number);return r.some(i=>!Number.isFinite(i))?NaN:r.length===3?r[0]*3600+r[1]*60+r[2]:r.length===2?r[0]*60+r[1]:r[0]}function el(e){return/^collection:/.test(e)}function tl(e){return e==="video"?"movies":"audio"}async function Ur(e,a=null,r={}){if(!e)return[];let i=tl(r.mediaType),n=e,l=a&&(!el(e)||a.applyToCatalogArtists);if(l){let y=[];e.includes("mediatype:")||y.push(`mediatype:"${i}"`),a.minDownloads>0&&y.push(`downloads:[${a.minDownloads} TO *]`);for(let b of a.blockedCollections||[]){let h=String(b).trim();h&&y.push(`-collection:"${h}"`)}y.length&&(n=`(${e}) AND ${y.join(" AND ")}`)}let s=new URLSearchParams({q:n,output:"json",rows:1e4});for(let y of["identifier","title","downloads","runtime","collection","creator","format","licenseurl","rights","possible-copyright-status"])s.append("fl[]",y);let d=`https://archive.org/advancedsearch.php?${s}`,f=await fetch(d);if(!f.ok)throw new Error(`HTTP error! status: ${f.status}`);let v=await f.json(),m=[];if(v.response&&v.response.docs)for(let y of v.response.docs)y.identifier&&m.push({name:y.title||y.identifier,url:`https://archive.org/details/${y.identifier}`,_downloads:y.downloads,_runtime:y.runtime,_collection:y.collection,_creator:y.creator,_format:y.format,_rights:Nn(y),_detailUrl:`https://archive.org/details/${y.identifier}`});if(l){let y=(a.blockedCollections||[]).map(b=>String(b).trim()).filter(Boolean);m=m.filter(b=>{if(a.minItemRuntimeSec>0&&b._runtime!=null){let h=Rn(b._runtime);if(Number.isFinite(h)&&h<a.minItemRuntimeSec)return!1}return!(y.length&&b._collection&&(Array.isArray(b._collection)?b._collection:[b._collection]).some(p=>y.includes(p)))})}return r.mediaType==="video"&&(m=m.filter(y=>{let b=Array.isArray(y._format)?y._format:y._format?[y._format]:[];return!b.length||b.some(h=>ol.test(h))}),m=al(m)),m}function al(e){let a=n=>{let l=parseInt(n._downloads,10);return Number.isFinite(l)?l:0},r=new Map,i=[];for(let n of e){let l=String(n.name||"").toLowerCase().replace(/\s+/g," ").trim();if(!l){i.push(n);continue}let s=r.get(l);(!s||a(n)>a(s))&&r.set(l,n)}return[...r.values(),...i].sort((n,l)=>a(l)-a(n))}var rl="https://archive.org/metadata/",il=[".mp3",".m4a",".aac",".ogg",".oga",".opus",".webm",".weba",".flac",".wav"],nl=[".mp4",".m4v",".ogv",".webm",".mov"],ol=/(h\.?264|mpeg-?4|ogg\s*video|web ?m|quicktime|matroska)/i,sl=e=>e==="video"?nl:il,ll=e=>new RegExp("("+e.map(a=>"\\"+a).join("|")+")$","i");function cl(e){return e.source==="derivative"&&e.original?e.original:e.name}function dl(e,a){for(let r of a){let i=e.find(n=>n.name&&n.name.toLowerCase().endsWith(r));if(i)return i}return null}var Un={NOT_IN_COPYRIGHT:"Public domain",PUBLIC_DOMAIN:"Public domain",IN_COPYRIGHT:"In copyright",UNKNOWN:"Rights unknown"};function ul(e){let a=/creativecommons\.org\/(licenses|publicdomain)\/([a-z0-9-]+)(?:\/([0-9.]+))?/i.exec(e||"");if(!a)return"";let r=a[2].toLowerCase();return a[1].toLowerCase()==="publicdomain"||r==="zero"||r==="mark"?"Public domain (CC)":`CC ${r.toUpperCase()}${a[3]?" "+a[3]:""}`}function fl(e,a,r){let i=ul(e);return i||(r&&Un[r]?Un[r]:a?a.length>70?a.slice(0,67)+"\u2026":a:r?r.replace(/_/g," ").toLowerCase():e?"Licensed (see IA)":"")}function Nn(e){if(!e)return null;let a=s=>Array.isArray(s)?s[0]:s,r=a(e.licenseurl)||"",i=(a(e.rights)||"").toString().trim(),n=a(e["possible-copyright-status"])||"",l=fl(r,i,n);return l?{label:l,licenseUrl:r,rights:i,status:n}:null}async function Fn(e,a=null,r={}){if(!e)return[];let i=sl(r.mediaType),n=ll(i),l=await fetch(`${rl}${e}`);if(!l.ok)throw new Error(`IA metadata ${l.status} for ${e}`);let s=await l.json();if(!s.metadata)throw new Error(`Empty metadata for ${e}`);let d=s.metadata||{};if(d["access-restricted-item"]==="true"||d["access-restricted"]==="true"||d.is_dark==="true")return[];let v=Nn(d),m=`https://archive.org/details/${e}`,y=s.files||[],b=new Map;for(let j of y){if(!j.name||!n.test(j.name)||j.private==="true")continue;let q=cl(j);b.has(q)||b.set(q,[]),b.get(q).push(j)}let h=Array.isArray(d.creator)?d.creator[0]:d.creator,p=h?String(h).trim():"",M=/^(various(\s+artists?)?|v\.?a\.?)$/i.test(p)?"":p,P=[];for(let j of b.values()){let q=dl(j,i);if(!q)continue;let ue=q.length||j.find(I=>I.length)?.length,ne=q.title||j.find(I=>I.title)?.title,Se=q.bitrate||j.find(I=>I.bitrate)?.bitrate,qe=q.artist||q.creator||j.find(I=>I.artist)?.artist||j.find(I=>I.creator)?.creator||"",We=String(qe).trim()||M;P.push({url:`https://archive.org/download/${e}/${encodeURIComponent(q.name)}`,name:ne||q.name.replace(/\.[^.]+$/,""),time:pl(ue),artist:We,_rights:v,_detailUrl:m,_lengthSec:Rn(ue),_bitrate:Se!=null?parseFloat(Se):NaN})}return a?P.filter(j=>!(a.minTrackDurationSec>0&&Number.isFinite(j._lengthSec)&&j._lengthSec<a.minTrackDurationSec||a.minTrackBitrateKbps>0&&Number.isFinite(j._bitrate)&&j._bitrate<a.minTrackBitrateKbps)):P}function pl(e){if(!e)return"";if(/^\d+:\d+/.test(e))return e.split(":").slice(-2).join(":");let a=parseFloat(e);if(!isFinite(a))return"";let r=Math.floor(a/60),i=Math.floor(a%60);return`${r}:${i.toString().padStart(2,"0")}`}var zn="Unknown Artist",ml="Unsorted";function rt(e){return'"'+String(e).replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t")+'"'}function Rr(e){return String(e||"").toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"")||"untitled"}function hl(e){return"file://"+String(e).split("/").map(encodeURIComponent).join("/")}function bl(e,a){let r=e,i=1;for(;a.has(r);)i+=1,r=`${e}-${i}`;return a.add(r),r}function jn(e){let a=new Set,r=new Map,i=new Map,n=new Map,l=d=>{let f=d||ml;return i.has(f)||i.set(f,{name:f,slug:Rr(f)}),i.get(f)},s=(d,f)=>{let v=d||zn;return r.has(v)||r.set(v,{name:v,slug:"artist_"+Rr(v),genreName:f||null}),r.get(v)};for(let d of e||[]){if(!d||d.error)continue;let f=d.albumArtist||d.artist||zn,v=l(d.genre),m=s(f,d.genre),y=d.album||null,b=y?`${f}\0${y}`:`\0single\0${d.absPath}`,h=n.get(b);if(!h){let p=y||d.title||"Untitled";h={slug:bl(Rr(`${f}_${p}`),a),title:p,artist:m,genre:v,year:d.year!=null?String(d.year):null,tracks:[],artFromAbsPath:null},n.set(b,h)}h.tracks.push({title:d.title||d.absPath.split("/").pop(),trackNo:Number.isFinite(d.trackNo)?d.trackNo:null,durationSec:Number.isFinite(d.durationSec)?d.durationSec:null,absPath:d.absPath,artist:m}),!h.artFromAbsPath&&d.hasPicture&&(h.artFromAbsPath=d.absPath)}for(let d of n.values())d.tracks.sort((f,v)=>(f.trackNo??1e9)-(v.trackNo??1e9)||f.title.localeCompare(v.title));return{releases:[...n.values()],artists:[...r.values()],genres:[...i.values()]}}function qn(e,{title:a="My Music",covers:r=new Map}={}){let{releases:i,artists:n,genres:l}=e,s={};s["index.ttl"]=`@prefix dct: <http://purl.org/dc/terms/> .
@prefix dcat: <http://www.w3.org/ns/dcat#> .

<>
    a <#Library>, dcat:Catalog ;
    dct:title ${rt(a)} .

<#it>
    a dcat:Catalog ;
    dct:title ${rt(a)} ;
    dcat:catalog <./releases.ttl#it>, <./playlists.ttl#it> ;
    dcat:dataset <./agents.ttl#it> ;
    dcat:themeTaxonomy <./genres.ttl#Music> .
`,s["genres.ttl"]=`@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix mo: <http://purl.org/ontology/mo/> .

<#Music>
    a skos:ConceptScheme ;
    skos:prefLabel "Music" .
`+l.map(f=>`
<#${f.slug}>
    a skos:Concept, mo:Genre ;
    skos:prefLabel ${rt(f.name)} ;
    skos:topConceptOf <#Music> .
`).join("");let d=new Map(l.map(f=>[f.name,f.slug]));s["agents.ttl"]=`@prefix dct: <http://purl.org/dc/terms/> .
@prefix dcat: <http://www.w3.org/ns/dcat#> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix mo: <http://purl.org/ontology/mo/> .

<#it>
    a dcat:Dataset ;
    dct:title "Artists" .
`+n.map(f=>{let v=f.genreName?d.get(f.genreName):null,m=v?` ;
    mo:genre <./genres.ttl#${v}>`:"";return`
<#${f.slug}>
    a foaf:Agent, mo:MusicArtist ;
    foaf:name ${rt(f.name)}${m} .
`}).join(""),s["releases.ttl"]=`@prefix dct: <http://purl.org/dc/terms/> .
@prefix dcat: <http://www.w3.org/ns/dcat#> .

<#it>
    a dcat:Catalog ;
    dct:title ${rt(a+" \u2014 releases")} ;
    dcat:dataset ${i.map(f=>`<./releases/${f.slug}#it>`).join(", ")||"<#it>"} .
`,s["playlists.ttl"]=`@prefix dct: <http://purl.org/dc/terms/> .
@prefix dcat: <http://www.w3.org/ns/dcat#> .

<#it>
    a dcat:Catalog ;
    dct:title ${rt(a+" \u2014 playlists")} .
`;for(let f of i){let v=r.get(f.slug),m=v?`
    foaf:depiction <./${v.file}> ;`:"",y=f.year?`
    dct:date ${rt(f.year)} ;`:"",b=f.tracks.map((p,S)=>`<#t${String(S+1).padStart(2,"0")}>`).join(", "),h=`@prefix dct: <http://purl.org/dc/terms/> .
@prefix mo: <http://purl.org/ontology/mo/> .
@prefix dcat: <http://www.w3.org/ns/dcat#> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<#it>
    a mo:Release, dcat:Dataset ;
    dct:title ${rt(f.title)} ;
    dct:identifier ${rt(f.slug)} ;
    dct:isPartOf <../releases.ttl#it> ;
    foaf:maker <../agents.ttl#${f.artist.slug}> ;
    mo:genre <../genres.ttl#${f.genre.slug}> ;${y}${m}
    mo:track ${b} .
`;f.tracks.forEach((p,S)=>{let M=`t${String(S+1).padStart(2,"0")}`,P=p.trackNo!=null?p.trackNo:S+1,j=p.durationSec!=null?`
    mo:duration ${p.durationSec}.0 ;`:"";h+=`
<#${M}>
    a mo:Track ;
    dct:title ${rt(p.title)} ;
    dct:isPartOf <#it> ;
    foaf:maker <../agents.ttl#${p.artist.slug}> ;
    mo:track_number ${P} ;${j}
    mo:item <${hl(p.absPath)}> .
`}),s[`releases/${f.slug}`]=h}return s}var Bn=`<!-- Inline add-genre form shown in the genre column footer (ia3.js
     openAddGenreForm). -->
<form class="ia-column-addform" autocomplete="off">
  <input type="text" class="ia-column-addinput" placeholder="Genre name" aria-label="New genre name" required>
  <button type="submit" class="ia-column-addsave" aria-label="Add">\u2713</button>
  <button type="button" class="ia-column-addcancel" aria-label="Cancel">\u2717</button>
</form>
`;var On=`<!-- Inline add-artist form shown in the artist column footer (ia3.js
     openAddArtistForm). The genre <select> options are data-driven and
     populated by ia3 after parse. -->
<form class="ia-column-addform ia-column-addartist" autocomplete="off">
  <input type="text" class="ia-column-addinput" placeholder="archive.org URL or ID" aria-label="Artist URL or ID" required>
  <select class="ia-column-addselect" aria-label="Genre"></select>
  <button type="submit" class="ia-column-addsave" aria-label="Add">\u2713</button>
  <button type="button" class="ia-column-addcancel" aria-label="Cancel">\u2717</button>
</form>
`;var Hn=`<!-- Dismissible failure banner (ia3.js showNotice) \u2014 for things the user
     must not miss, chiefly "this media can't play". -->
<span class="ia-notice-icon" aria-hidden="true">\u26A0</span><span class="ia-notice-msg"></span><button type="button" class="ia-notice-close" aria-label="Dismiss">\u2715</button>
`;import{Namespace as je,graph as Tt,Fetcher as Nr,sym as z,st as D,literal as te,UpdateManager as Gn,parse as Bt}from"rdflib";function Ba(e,a={}){let r=a.element||wl(),i=a.tag||a.element&&typeof a.element.getAttribute=="function"&&a.element.getAttribute("side")||"default";if(r&&typeof r.fetchFor=="function")try{let l=r.fetchFor(e,i);if(typeof l=="function")return l}catch{}let n=typeof window<"u"&&window.SolidWebComponents?.adoptedFetch;return typeof n=="function"?n:typeof globalThis.fetch=="function"?globalThis.fetch.bind(globalThis):void 0}function wl(){return typeof document>"u"?null:document.querySelector("sol-login")}var Wc=300*1e3;var ct=je("http://www.w3.org/2004/02/skos/core#"),dt=je("http://www.w3.org/2000/01/rdf-schema#"),le=je("http://www.w3.org/1999/02/22-rdf-syntax-ns#"),ht=je("http://www.w3.org/2001/XMLSchema#"),O=je("http://purl.org/dc/terms/"),we=je("http://xmlns.com/foaf/0.1/"),X=je("http://purl.org/ontology/mo/"),ce=je("http://www.w3.org/ns/dcat#"),B=je("http://schema.org/"),jr=je("http://www.w3.org/ns/oa#"),Xe=je("http://www.w3.org/ns/solid/terms#"),xl=je("http://purl.org/dc/dcmitype/"),Br=X("MusicArtist"),Ot=X("Release"),Fr=X("Track"),Ht=B("MusicPlaylist"),kl=X("Genre");function Te(e){let a=new URL("./",e);return{libraryDoc:z(e),agentsDoc:z(new URL("agents.ttl",a).href),genresDoc:z(new URL("genres.ttl",a).href),releasesDoc:z(new URL("releases.ttl",a).href),releasesIndexDoc:z(new URL("releases.ttl",a).href),releasesCatalog:z(new URL("releases.ttl",a).href+"#it"),playlistsDoc:z(new URL("playlists.ttl",a).href),playlistsCatalog:z(new URL("playlists.ttl",a).href+"#it"),releasesDirUrl:new URL("releases/",a).href,playlistsDirUrl:new URL("playlists/",a).href,musicRootUri:new URL("genres.ttl",a).href+"#Music"}}function Or(e){return String(e).trim().replace(/[^\w]+/g,"_").replace(/^_+|_+$/g,"").slice(0,80)||"Playlist"}function Sl(e,a,r){let i=Te(a),n=i.libraryDoc,l=new Set;for(let v of e.match(i.playlistsCatalog,ce("dataset"),null))l.add(v.object.value.split("#")[0]);for(let v of e.match(n,dt("seeAlso"),null))l.add(v.object.value);let s=Or(r),d=i.playlistsDirUrl+s,f=1;for(;l.has(d);)d=i.playlistsDirUrl+s+"_"+f,f++;return d.slice(i.playlistsDirUrl.length)}function Ll(e,a,r,i){let n=new Set(i||[]);for(let f of e.match(a.releasesCatalog,ce("dataset"),null))n.add(f.object.value.split("#")[0]);for(let f of e.match(a.releasesDoc,dt("seeAlso"),null))n.add(f.object.value);let l=Or(r).toLowerCase()||"release",s=a.releasesDirUrl+l,d=1;for(;n.has(s);)s=a.releasesDirUrl+l+"_"+d++;return s}function Ga(e,a,r){let i="/"+String(a)+"/",n=(String(r).match(/\//g)||[]).length,l=n?"../".repeat(n):"./";return String(e).replace(/<(https?:\/\/[^>\s]+)>/g,(s,d)=>{let f=d.indexOf(i);if(f<0)return s;let v=d.slice(f+i.length);return v?`<${l}${v}>`:s})}var Hr="omp-spine-v1",_l=10080*60*1e3,Ka=()=>typeof caches<"u";async function Al(e){if(!Ka())return null;try{let a=await caches.open(Hr),r=await a.match(e);if(!r)return null;let i=Number(r.headers.get("x-omp-cached-at")||0);return i&&Date.now()-i>_l?(a.delete(e),null):await r.text()}catch{return null}}async function $l(e,a,r="text/turtle"){if(!(!Ka()||a==null))try{await(await caches.open(Hr)).put(e,new Response(a,{headers:{"Content-Type":r,"x-omp-cached-at":String(Date.now())}}))}catch{}}function qr(...e){Ka()&&caches.open(Hr).then(a=>{for(let r of e)r&&a.delete(String(r).split("#")[0]).catch(()=>{})}).catch(()=>{})}async function Wn(e,{shared:a=!1,lazyReleases:r=!1,lazyPlaylists:i=!1}={}){let n=a?ke.store:Tt(),l=a?ke.storeFetcher:new Nr(n),s=new URL(e,window.location.href).href,d=(()=>{try{let y=Te(s);return{releases:y.releasesDoc.value,playlists:y.playlistsDoc.value}}catch{return{}}})(),f=d.releases||null,v=a&&Ka();async function m(y){let b=String(y).split("#")[0];if(!(a&&ke.isLoaded(b))){if(v){let h=await Al(b);if(h!=null)try{Bt(h,n,b,"text/turtle"),ke.markLoaded(b);return}catch{}}if(await l.load(b),a&&ke.markLoaded(b),v)try{let h=ke.serialize(z(b),n,b,"text/turtle");typeof h=="string"&&h.length&&await $l(b,h)}catch{}}}try{await m(s);let y=8,b=new Set([s]),h=M=>{let P=[z(M),z(M.split("#")[0]+"#it")],j=M.split("#")[0],ue=r&&f&&j===f||i&&d.playlists&&j===d.playlists?[ce("catalog"),ce("themeTaxonomy")]:[dt("seeAlso"),ce("dataset"),ce("catalog"),ce("themeTaxonomy")],ne=[];for(let Se of P)for(let qe of ue)for(let We of n.match(Se,qe,null))try{ne.push(new URL(We.object.value,M).href.split("#")[0])}catch{}return ne.filter(Se=>Se&&!b.has(Se)&&!/\.(meta|acl)$/i.test(Se))},p=h(s);for(;p.length;){let M=[];for(let P=0;P<p.length;P+=y){let j=p.slice(P,P+y).filter(q=>b.has(q)?!1:(b.add(q),!0));await Promise.all(j.map(async q=>{try{await m(q),M.push(...h(q))}catch(ue){console.warn("seeAlso load failed:",q,ue)}}))}p=M.filter(P=>!b.has(P))}return{store:n,baseURI:s,fetcher:l,loadDocs:async M=>{let P=[...new Set((M||[]).map(q=>q&&q.split("#")[0]))].filter(q=>q&&(a?!ke.isLoaded(q):!b.has(q))),j=0;for(let q=0;q<P.length;q+=y){let ue=P.slice(q,q+y).filter(ne=>b.has(ne)?!1:(b.add(ne),!0));await Promise.all(ue.map(async ne=>{try{a&&ke.isLoaded(ne)||(await l.load(ne),a&&ke.markLoaded(ne)),j++}catch(Se){console.warn("lazy doc load failed:",ne,Se)}}))}return j}}}catch(y){throw console.error("Error loading RDF:",y),y}}async function Vn(e,a){let r=Tt(),i=async l=>{let s=await e(l,{headers:{Accept:"text/turtle"}});if(!s||s.ok===!1)throw new Error(`fetch ${l} \u2192 ${s&&s.status}`);let d=await s.text(),f=(s.headers?.get?.("Content-Type")||"text/turtle").split(";")[0].trim();Bt(d,r,l.split("#")[0],f||"text/turtle")};await i(a);let n=r.any(z(a),Xe("publicTypeIndex"))?.value||r.match(null,Xe("publicTypeIndex"),null)[0]?.object?.value||null;if(!n)return{url:null,typeIndex:null,reason:"no solid:publicTypeIndex on profile"};await i(n);for(let l of r.match(null,Xe("forClass"),X("Release"))){let s=r.any(l.subject,Xe("instance"))?.value;if(s)return{url:s,typeIndex:n};let d=r.any(l.subject,Xe("instanceContainer"))?.value;if(d)return{url:new URL("index.ttl",d).href,typeIndex:n}}return{url:null,typeIndex:n,reason:"no mo:Release TypeRegistration"}}async function Gr(e,a){let r=Tt(),i=await e(a,{headers:{Accept:"text/turtle"}});if(i&&i.ok!==!1){let d=(i.headers?.get?.("Content-Type")||"text/turtle").split(";")[0].trim();Bt(await i.text(),r,a.split("#")[0],d||"text/turtle")}let n=je("http://www.w3.org/ns/pim/space#"),l=[],s=d=>{if(!d)return;let f=d.endsWith("/")?d:d+"/";l.includes(f)||l.push(f)};for(let d of r.match(z(a),n("storage"),null))s(d.object?.value);for(let d of r.match(null,n("storage"),null))s(d.object?.value);return s(new URL("/",a).href),l}async function Oa(e,a,r){let i=await e(a,{method:"PATCH",headers:{"Content-Type":"application/sparql-update"},body:r});if(!i||i.ok===!1)throw new Error(`PATCH ${a} \u2192 ${i&&i.status}`)}async function Yn(e,a){let r="http://www.w3.org/ns/solid/terms#",i=je("http://www.w3.org/ns/pim/space#"),n=Tt();try{let v=await e(a,{headers:{Accept:"text/turtle"}});if(v&&v.ok!==!1){let m=(v.headers?.get?.("Content-Type")||"text/turtle").split(";")[0].trim();Bt(await v.text(),n,a.split("#")[0],m||"text/turtle")}}catch{}let l=n.any(z(a),Xe("publicTypeIndex"))?.value||n.match(null,Xe("publicTypeIndex"),null)[0]?.object?.value||null;if(l)return l;let s=n.any(z(a),i("storage"))?.value||n.match(null,i("storage"),null)[0]?.object?.value||new URL("/",a).href,d=s.endsWith("/")?s:s+"/",f=new URL("settings/publicTypeIndex.ttl",d).href;try{let v=await e(f,{method:"PUT",headers:{"Content-Type":"text/turtle"},body:`@prefix solid: <${r}>.
<${f}> a solid:TypeIndex, solid:ListedDocument.
`});return!v||v.ok===!1?null:(await Oa(e,a.split("#")[0],`INSERT DATA { <${a}> <${r}publicTypeIndex> <${f}> . }`),f)}catch{return null}}function Jn(e,a){let r=String(a||"").replace(/[^A-Za-z0-9_-]/g,"-")||"lib";return`${e.split("#")[0]}#omp-lib-${r}`}async function Xn(e,a){let r=Tt(),i=async d=>{let f=await e(d,{headers:{Accept:"text/turtle"}});if(!f||f.ok===!1)throw new Error(`fetch ${d} \u2192 ${f&&f.status}`);let v=(f.headers?.get?.("Content-Type")||"text/turtle").split(";")[0].trim();Bt(await f.text(),r,d.split("#")[0],v||"text/turtle")};await i(a);let n=r.any(z(a),Xe("publicTypeIndex"))?.value||r.match(null,Xe("publicTypeIndex"),null)[0]?.object?.value||null;if(!n)return{typeIndex:null,libraries:[]};await i(n);let l=[],s=new Set;for(let d of r.match(null,Xe("forClass"),X("Release"))){let f=r.any(d.subject,Xe("instance"))?.value;if(!f||s.has(f))continue;s.add(f);let v=r.any(d.subject,dt("label"))?.value||r.any(d.subject,O("title"))?.value||"";l.push({url:f,label:v,reg:d.subject.value})}return{typeIndex:n,libraries:l}}async function Wa(e,a,{id:r,url:i,label:n}){if(!a||!i)throw new Error("registerPodLibrary: typeIndex and url required");let l="http://www.w3.org/ns/solid/terms#",s=Jn(a,r),d=(n||"").replace(/[\\"]/g,"\\$&");await Oa(e,a,`DELETE { <${s}> ?p ?o } INSERT { <${s}> a <${l}TypeRegistration> ; <${l}forClass> <http://purl.org/ontology/mo/Release> ; <${l}instance> <${i}> ; <http://www.w3.org/2000/01/rdf-schema#label> "${d}" . } WHERE { OPTIONAL { <${s}> ?p ?o } }`)}async function Qn(e,a,{id:r,url:i}){if(!a)throw new Error("unregisterPodLibrary: typeIndex required");let n="http://www.w3.org/ns/solid/terms#",l=Jn(a,r);await Oa(e,a,`DELETE { <${l}> ?p ?o } WHERE { <${l}> ?p ?o }`),i&&await Oa(e,a,`DELETE { ?r ?p ?o } WHERE { ?r <${n}forClass> <http://purl.org/ontology/mo/Release> ; <${n}instance> <${i}> ; ?p ?o . }`)}function Kr(e){return e+"#Favorites"}var Wr=[Br,X("MusicGroup"),X("SoloMusicArtist"),X("Label"),we("Agent"),we("Organization"),we("Person"),we("Group")],Kn={audio:{nodeTypes:Wr,nameProp:we("name"),genreProp:X("genre")},video:{nodeTypes:[B("Collection")],nameProp:B("name"),genreProp:B("genre")}},Tl=e=>Kn[e]||Kn.audio;function Zn(e,a){let r=z(a.split("#")[0]+"#it"),i=e.any(r,O("type"))||e.any(z(a),O("type"));return i&&i.value===xl("MovingImage").value?"video":"audio"}function El(e,a=Wr){let r=new Set,i=[];for(let n of a)for(let l of e.match(null,le("type"),n)){let s=l.subject.value;r.has(s)||(r.add(s),i.push(l.subject))}return i}function Vr(e,a,r="audio"){let i=Te(a),n=Tl(r),l=z(a.split("#")[0]+"#it"),d=e.any(l,ce("themeTaxonomy"))||e.any(z(a),ce("themeTaxonomy"))||z(i.musicRootUri),f=e.match(null,ct("topConceptOf"),d).map(m=>({id:m.subject.value,label:e.any(m.subject,ct("prefLabel"))?.value||"Unnamed Genre"})),v=[];for(let m of El(e,n.nodeTypes)){let y=e.any(m,n.genreProp)?.value;if(!y)continue;let b=e.any(m,O("source")),h=e.any(m,ce("landingPage"))?.value||null;v.push({node:m,label:e.any(m,n.nameProp)?.value||"Untitled",topic:y,url:h,source:null,sourcePlaylist:b?b.value:null,localData:!!b||!h})}for(let m of e.match(null,le("type"),Ht)){let y=m.subject,b=e.match(y,B("itemListElement"),null).map(h=>{let p=parseInt(e.any(h.object,B("position"))?.value,10);return{track:e.any(h.object,B("item")),pos:Number.isFinite(p)?p:Number.MAX_SAFE_INTEGER}}).filter(h=>h.track).sort((h,p)=>h.pos-p.pos);for(let{track:h}of b){let p=e.any(h,O("isPartOf"))||null,S=e.any(h,O("title"))?.value||"",M=p&&e.any(p,O("title"))?.value||"",P=e.any(h,we("maker"))||(p?e.any(p,we("maker")):null),j=P?P.termType==="Literal"?P.value:e.any(P,we("name"))?.value||"":"",q=e.any(h,X("item"))?.value,ue=p&&e.any(p,ce("landingPage"))?.value||null,ne=[j,M,S].filter(Boolean),Se=ne.length?ne.join(" \u2014 "):S||"Untitled";v.push({node:h,label:Se,topic:y.value,url:q||null,source:ue,artist:j,album:M,name:S})}}return{genres:f,bookmarks:v}}function Yr(e,a){let r=a?new URL("./",a).href:null,i=new Set,n=[];for(let l of e.match(null,le("type"),Ht)){let s=l.subject;if(r&&!s.value.startsWith(r)||i.has(s.value))continue;i.add(s.value);let d=e.any(s,O("title"))?.value||e.any(s,dt("label"))?.value||s.value.replace(/^.*\//,"")||"Untitled playlist",f=e.any(s,we("maker"))?.value||"",v=e.any(s,O("description"))?.value||"",m=e.any(s,jr("styleClass")),y=e.match(null,O("source"),s)[0]?.subject;n.push({id:s.value,name:d,maker:f,description:v,hidden:m?m.value==="hidden":!1,artistNode:y||null,label:f?`${d} (${f})`:d})}return n}var Et=!1;function Jr(e){Et=!!e;try{console.info("[omp] setSolidWriteAuthed \u2192",Et)}catch{}}try{typeof globalThis<"u"&&(globalThis.__OMP=globalThis.__OMP||{},globalThis.__OMP.writeAuthed=()=>Et,globalThis.__OMP.isRdfStore=e=>e===ke.store)}catch{}function Cl(e){if(e===ke.store&&ke.storeFetcher&&e.fetcher!==ke.storeFetcher&&(e.fetcher=ke.storeFetcher),!e.updater)try{new Gn(e)}catch{}return e.updater}async function Ae(e,a,r,i){r=r||[],i=i||[];try{console.info("[omp] runUpdate path:",e===ke.store&&Et?"pod-bypass":e===ke.store?"UpdateManager (rdf.store but NOT authed-flag)":"UpdateManager (private store)","\xB7 isRdfStore="+(e===ke.store)+" solidWriteAuthed="+Et)}catch{}if(e===ke.store&&Et){let d=new Map,f=(m,y)=>{let b=m&&m.why&&m.why.value;b&&(d.has(b)||d.set(b,{del:[],ins:[]}),d.get(b)[y].push(m))};for(let m of r)f(m,"del");for(let m of i)f(m,"ins");if(!d.size)return{ok:!0,err:null};let v=m=>`${m.subject.toNT()} ${m.predicate.toNT()} ${m.object.toNT()} .`;for(let[m,y]of d){let b=[];y.del.length&&b.push(`DELETE DATA {
${y.del.map(v).join(`
`)}
}`),y.ins.length&&b.push(`INSERT DATA {
${y.ins.map(v).join(`
`)}
}`);let h=b.join(` ;
`);try{let S=await Ba(m)(m,{method:"PATCH",headers:{"Content-Type":"application/sparql-update"},body:h});if(!S||S.ok===!1){let M=`PATCH ${m} \u2192 ${S&&S.status}`;return console.warn("Persistence failed (store NOT updated):",M),{ok:!1,err:M}}}catch(p){let S=p&&(p.message||String(p));return console.warn("Persistence failed (store NOT updated):",S),{ok:!1,err:S}}qr(m);for(let p of y.del)e.remove(p);for(let p of y.ins)e.add(p.subject,p.predicate,p.object,p.why)}return{ok:!0,err:null}}let n=Cl(e);if(!n)return{ok:!1,err:"no UpdateManager available"};let l=()=>new Promise(d=>{try{n.update(r,i,(f,v,m)=>{d({ok:v,err:v?null:m})})}catch(f){d({ok:!1,err:f.message})}}),s=await l();if(!s.ok&&/uneditable|editing protocol|make changes/i.test(String(s.err))){let d=pa(e),f=new Set;for(let v of[...r,...i]){let m=v&&v.why;m&&m.value&&f.add(m.value)}for(let v of f)try{await d.load(v,{force:!0})}catch(m){console.warn("force-load failed",v,m?.message||m)}s=await l()}if(s.ok){let d=new Set;for(let f of[...r,...i]){let v=f&&f.why&&f.why.value;v&&d.add(v)}qr(...d)}else console.warn("Persistence failed (store NOT updated):",s.err);return s}function pa(e){return e===ke.store?ke.storeFetcher:(e.fetcher||(e.fetcher=new Nr(e)),e.fetcher)}async function eo(e,a,r,{body:i,contentType:n}={}){try{let l;if(e===ke.store&&Et){let d={method:a};i!=null&&(d.body=i),n&&(d.headers={"Content-Type":n}),l=await Ba(r)(r,d)}else{let d=i!=null?{body:i,contentType:n}:{};l=await pa(e).webOperation(a,r,d)}let s=l.ok!==!1;return s&&qr(r),{ok:s,err:s?null:`${a} ${l.status}`}}catch(l){return{ok:!1,err:l.message||String(l)}}}async function Va(e,a,r,i="text/turtle"){return eo(e,"PUT",a,{body:r,contentType:i})}async function ma(e,a){return eo(e,"DELETE",a)}function Ke(e){return'"'+String(e).replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"'}async function to(e,{title:a="New library"}={}){let r=e.endsWith("/")?e:e+"/",i=Tt(),n={"index.ttl":`@prefix dct: <http://purl.org/dc/terms/> .
@prefix dcat: <http://www.w3.org/ns/dcat#> .

<>
    a <#Library>, dcat:Catalog ;
    dct:title ${Ke(a)} .

<#it>
    a dcat:Catalog ;
    dct:title ${Ke(a)} ;
    dcat:catalog <./releases.ttl#it>, <./playlists.ttl#it> ;
    dcat:dataset <./agents.ttl#it> ;
    dcat:themeTaxonomy <./genres.ttl#Music> .
`,"agents.ttl":`@prefix dct: <http://purl.org/dc/terms/> .
@prefix dcat: <http://www.w3.org/ns/dcat#> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<#it>
    a dcat:Dataset ;
    dct:title "Artists" .
`,"genres.ttl":`@prefix skos: <http://www.w3.org/2004/02/skos/core#> .

<#Music>
    a skos:ConceptScheme ;
    skos:prefLabel "Music" .
`,"releases.ttl":`@prefix dct: <http://purl.org/dc/terms/> .
@prefix dcat: <http://www.w3.org/ns/dcat#> .

<#it>
    a dcat:Catalog ;
    dct:title ${Ke(a+" \u2014 releases")} .
`,"playlists.ttl":`@prefix dct: <http://purl.org/dc/terms/> .
@prefix dcat: <http://www.w3.org/ns/dcat#> .

<#it>
    a dcat:Catalog ;
    dct:title ${Ke(a+" \u2014 playlists")} .
`};for(let[l,s]of Object.entries(n)){let d=await Va(i,r+l,s);if(!d.ok)return{ok:!1,err:`PUT ${l}: ${d.err}`,url:r+"index.ttl"}}return{ok:!0,url:r+"index.ttl"}}function ao(e,a){let r=a?Gt(a):null,i=new Set;for(let n of e.match(null,le("type"),Ht)){let l=n.subject.value.split("#")[0];l&&l!==r&&i.add(l)}return[...i]}function Ya(e,a){let r=new Set((a||[]).map(n=>n.split("#")[0])),i=new Set;for(let n of e.match(null,B("item"),null)){let l=n.why&&n.why.value;if(!l||!r.has(l.split("#")[0]))continue;let s=n.object&&n.object.value;s&&i.add(s.split("#")[0])}return[...i]}function ro(e,a){let r=Te(a),i=new Set;for(let n of e.match(r.releasesCatalog,ce("dataset"),null))n.object?.value&&i.add(n.object.value.split("#")[0]);for(let n of e.match(r.releasesDoc,dt("seeAlso"),null))n.object?.value&&i.add(n.object.value.split("#")[0]);return[...i]}function Xr(e,a){let r=Te(a),i=new Set;for(let n of e.match(r.playlistsCatalog,ce("dataset"),null))n.object?.value&&i.add(n.object.value.split("#")[0]);for(let n of e.match(r.playlistsDoc,dt("seeAlso"),null))n.object?.value&&i.add(n.object.value.split("#")[0]);return[...i]}async function Qr(e,a,r,i){let n=a.endsWith("/")?a:a+"/",l=0,s=0,d=[],f=0;for(let v of r){f++,i?.(f,r.length,v.relPath);let m=n+v.relPath;if(v.skipIfExists)try{let y=await e(m,{method:"HEAD"});if(y&&y.status===200){s++;continue}}catch{}try{let y=await e(m,{method:"PUT",headers:{"Content-Type":v.contentType||"text/turtle"},body:v.body}),b=!!y&&y.ok===!0,h=b?"2xx":"";if(!b&&y)try{let p=await e(m,{method:"GET",headers:{Accept:"*/*"}});b=!!p&&(p.ok===!0||p.status===304),h=`verified-get(${p?p.status:"no-resp"})`}catch(p){h=`verify-threw(${p.message||p})`}if(b)l++;else{let p="";try{p=(await y.text()).slice(0,120)}catch{}let S=`${v.relPath} \u2192 ${y?`${y.status} ${y.type||""}`:"no response"} [${h}] ${p}`.trim();d.push(S),console.warn("[install] PUT FAIL",S)}}catch(y){let b=`${v.relPath}: ${y.message||y}`;d.push(b),console.warn("[install] PUT THREW",b)}}return{ok:d.length===0,put:l,skipped:s,failed:d}}function Ha(e,a,r){return(e.statementsMatching(a,null,null)[0]||e.statementsMatching(null,null,a)[0])?.why||r}function io(e,a){if(!a)return null;for(let r of e.match(null,we("name"),te(a)))for(let i of Wr)if(e.holds(r.subject,le("type"),i))return r.subject;return null}async function no(e,a,r){let i=Te(a),n=i.genresDoc,l=Or(r),s=n.value+"#"+l,d=1;for(;e.any(z(s),null,null);)s=n.value+"#"+l+"_"+d,d++;let f=z(s),v=z(i.musicRootUri),m=[D(f,le("type"),ct("Concept"),n),D(f,le("type"),kl,n),D(f,ct("prefLabel"),te(r),n),D(f,ct("topConceptOf"),v,n)];return{...await Ae(e,n.value,[],m),id:s,label:r}}async function oo(e,a,r){let i=Te(a),n=i.genresDoc,l=i.agentsDoc,s=z(r),d=e.match(s,null,null).map(m=>D(m.subject,m.predicate,m.object,n)),f=await Ae(e,n.value,d,[]);if(!f.ok)return f;let v=e.match(null,X("genre"),s).map(m=>m.subject);if(v.length){let m=[];for(let b of v)for(let h of e.match(b,null,null))m.push(D(h.subject,h.predicate,h.object,l));let y=await Ae(e,l.value,m,[]);if(!y.ok)return y}return{ok:!0}}async function so(e,a,r,i){let l=Te(a).genresDoc,s=z(r),d=e.any(s,ct("prefLabel")),f=d?[D(s,ct("prefLabel"),d,l)]:[],v=[D(s,ct("prefLabel"),te(i),l)];return Ae(e,l.value,f,v)}async function lo(e,a,r,i,n){let s=Te(a).agentsDoc,d=crypto.randomUUID?.()??`${Date.now()}-${Math.random().toString(36).slice(2)}`,f=z(`urn:uuid:${d}`),v=[D(f,le("type"),Br,s),D(f,we("name"),te(i),s),D(f,X("genre"),z(r),s)];return n&&v.push(D(f,ce("landingPage"),z(n),s)),{...await Ae(e,s.value,[],v),node:f}}async function co(e,a,r){let n=Te(a).agentsDoc,l=e.match(r,null,null).map(s=>D(s.subject,s.predicate,s.object,n));return Ae(e,n.value,l,[])}async function Zr(e,a,r,i){let l=Te(a).agentsDoc,s=e.any(r,we("name")),d=s?[D(r,we("name"),s,l)]:[],f=[D(r,we("name"),te(i),l)];return Ae(e,l.value,d,f)}async function ei(e,a,r){typeof r=="string"&&(r={name:r});let{name:i="Untitled playlist",maker:n="",description:l=""}=r||{},s=Te(a),d=Sl(e,a,i),f=s.playlistsDirUrl+d,v=["@prefix dct: <http://purl.org/dc/terms/> .","@prefix dcat: <http://www.w3.org/ns/dcat#> .","@prefix foaf: <http://xmlns.com/foaf/0.1/> .","@prefix schema: <http://schema.org/> .","","<>","    a schema:ItemList, schema:MusicPlaylist, dcat:Dataset ;","    dct:isPartOf <../playlists.ttl#it> ;","    schema:itemListOrder schema:ItemListOrderAscending ;",`    dct:title ${Ke(i)}`];n&&v.push(`    ; foaf:maker ${Ke(n)}`),l&&v.push(`    ; dct:description ${Ke(l)}`),v.push("    .","");let m=v.join(`
`),y=n?`${i} (${n})`:i,b=await Va(e,f,m);if(!b.ok)return{ok:!1,err:b.err,id:f,label:y};let h=D(s.playlistsCatalog,ce("dataset"),z(f),s.playlistsDoc),p=await Ae(e,s.playlistsDoc.value,[],[h]);if(!p.ok)return await ma(e,f),{...p,id:f,label:y};try{await pa(e).load(f,{force:!0})}catch(M){console.warn("Could not reload new playlist file for protocol detection:",M)}let S=z(f);return e.add(S,le("type"),B("ItemList"),S),e.add(S,le("type"),Ht,S),e.add(S,le("type"),ce("Dataset"),S),e.add(S,B("itemListOrder"),B("ItemListOrderAscending"),S),e.add(S,O("isPartOf"),s.playlistsCatalog,S),e.add(S,O("title"),te(i),S),n&&e.add(S,we("maker"),te(n),S),l&&e.add(S,O("description"),te(l),S),{ok:!0,id:f,label:y,name:i,maker:n,description:l}}function Gt(e){return Te(e).playlistsDirUrl+"deleted"}async function Il(e,a){let r=Te(a),i=Gt(a),n=z(i);if(e.holds(n,le("type"),Ht))return{ok:!0,id:i};let l=["@prefix dct: <http://purl.org/dc/terms/> .","@prefix dcat: <http://www.w3.org/ns/dcat#> .","@prefix schema: <http://schema.org/> .","","<>","    a schema:ItemList, schema:MusicPlaylist, dcat:Dataset ;","    dct:isPartOf <../playlists.ttl#it> ;","    schema:itemListOrder schema:ItemListOrderAscending ;",'    dct:title "Deleted" .',""].join(`
`),s=await Va(e,i,l);if(!s.ok)return{ok:!1,err:s.err,id:i};let d=D(r.playlistsCatalog,ce("dataset"),n,r.playlistsDoc),f=await Ae(e,r.playlistsDoc.value,[],[d]);if(!f.ok)return await ma(e,i).catch(()=>{}),{...f,id:i};try{await pa(e).load(i,{force:!0})}catch(v){console.warn("Could not reload Deleted-bin file for protocol detection:",v)}return e.add(n,le("type"),B("ItemList"),n),e.add(n,le("type"),Ht,n),e.add(n,le("type"),ce("Dataset"),n),e.add(n,B("itemListOrder"),B("ItemListOrderAscending"),n),e.add(n,O("isPartOf"),r.playlistsCatalog,n),e.add(n,O("title"),te("Deleted"),n),{ok:!0,id:i}}async function uo(e,a,r,i={}){let n=z(r),l=[],s=[];if(i.name!=null){for(let d of[O("title"),dt("label"),ct("prefLabel")]){let f=e.any(n,d);f&&l.push(D(n,d,f,n))}s.push(D(n,O("title"),te(i.name),n))}if(i.maker!=null){for(let d of e.match(n,we("maker"),null))l.push(D(d.subject,d.predicate,d.object,n));i.maker&&s.push(D(n,we("maker"),te(i.maker),n))}if(i.description!=null){for(let d of e.match(n,O("description"),null))l.push(D(d.subject,d.predicate,d.object,n));i.description&&s.push(D(n,O("description"),te(i.description),n))}return!l.length&&!s.length?{ok:!0}:Ae(e,n.value,l,s)}async function fo(e,a,r){let i=Te(a),n=z(r),l=Gt(a);if(r!==l){let f=[];for(let v of e.match(n,B("itemListElement"),null)){let m=e.any(v.object,B("item"));if(!m)continue;let y=e.any(m,X("item"))?.value;if(!y)continue;let b=e.any(m,O("isPartOf"))||e.match(null,X("track"),m)[0]?.subject;f.push({url:y,source:b&&e.any(b,ce("landingPage"))?.value||null,name:e.any(m,O("title"))?.value||"",album:b&&e.any(b,O("title"))?.value||""})}if(f.length){let v=await Il(e,a);if(!v.ok)return v;let m=await Ja(e,a,l,f);if(!m.ok)return m}}let s=D(i.playlistsCatalog,ce("dataset"),n,i.playlistsDoc),d=await Ae(e,i.playlistsDoc.value,[s],[]);if(!d.ok)return d;await ma(e,r).catch(()=>{});for(let f of e.match(n,null,null))e.remove(f);for(let f of e.match(null,null,n))e.remove(f);return{ok:!0}}async function Ja(e,a,r,i,n={}){if(!i||!i.length)return{ok:!0,nodes:[],skipped:0};let l=Te(a),s=z(r),d=!!n.inlineTracks,f=L=>String(L).padStart(2,"0"),v=new Set;for(let L of e.match(s,B("itemListElement"),null)){let R=e.any(L.object,B("item")),W=R&&e.any(R,X("item"))?.value;W&&v.add(W)}let m=new Set,y=i.filter(L=>!L||!L.url||v.has(L.url)||m.has(L.url)?!1:(m.add(L.url),!0)),b=i.length-y.length;if(!y.length)return{ok:!0,nodes:[],added:[],skipped:b};if(d){let pe=function(J,Ee,Be){if(!J&&!Ee)return null;if(J&&W.has(J))return W.get(J);if(J&&de.has(J))return de.get(J).node;R+=1;let Ce=z(`${s.value}#a${f(R)}`),Ve=[D(Ce,le("type"),Ot,s)];return Ee&&Ve.push(D(Ce,O("title"),te(Ee),s)),J&&Ve.push(D(Ce,ce("landingPage"),z(J),s)),Be&&Ve.push(D(Ce,we("maker"),te(Be),s)),de.set(J||`__nolp:${Ce.value}`,{node:Ce,inserts:Ve}),Ce},L=0,R=0,W=new Map,Q=J=>J&&J.value&&J.value.startsWith(s.value+"#");for(let J of e.match(s,B("itemListElement"),null)){let Ee=e.any(J.object,B("item"));if(Q(Ee)){let Ce=Ee.value.match(/#t(\d+)$/);Ce&&(L=Math.max(L,parseInt(Ce[1],10)))}let Be=Ee&&e.any(Ee,O("isPartOf"));if(Q(Be)){let Ce=Be.value.match(/#a(\d+)$/);Ce&&(R=Math.max(R,parseInt(Ce[1],10)));let Ve=e.any(Be,ce("landingPage"))?.value;Ve&&W.set(Ve,Be)}}let de=new Map,xe=0,Le=0;for(let J of e.match(s,B("itemListElement"),null)){let Ee=parseInt(e.any(J.object,B("position"))?.value,10);Number.isFinite(Ee)&&(xe=Math.max(xe,Ee));let Be=J.object.value.match(/#e(\d+)$/);Be&&(Le=Math.max(Le,parseInt(Be[1],10)))}let ge=[],ie=[],yt=[];y.forEach((J,Ee)=>{let Be=J.album||"",Ce=J.artist||"",Ve=J.source||null,ya=pe(Ve,Be,Ce);L+=1;let Qe=z(`${s.value}#t${f(L)}`);ge.push(D(Qe,le("type"),Fr,s)),J.name&&ge.push(D(Qe,O("title"),te(J.name),s)),Ce&&ge.push(D(Qe,we("maker"),te(Ce),s)),ge.push(D(Qe,X("item"),z(J.url),s));let Kt=zr(J.time);Number.isFinite(Kt)&&Kt>0&&ge.push(D(Qe,X("duration"),te(String(Kt),void 0,ht("decimal")),s)),ya&&ge.push(D(Qe,O("isPartOf"),ya,s));let ut=z(`${s.value}#e${f(Le+Ee+1)}`);ge.push(D(s,B("itemListElement"),ut,s),D(ut,le("type"),B("ListItem"),s),D(ut,B("position"),te(String(xe+Ee+1),void 0,ht("integer")),s),D(ut,B("item"),Qe,s)),ie.push(Qe),yt.push(J)});let it=[];for(let J of de.values())it.push(...J.inserts);let ba=[...it,...ge],ga=120;for(let J=0;J<ba.length;J+=ga){let Ee=await Ae(e,s.value,[],ba.slice(J,J+ga));if(!Ee.ok)return{...Ee,nodes:ie,added:yt,skipped:b}}return{ok:!0,nodes:ie,added:yt,skipped:b}}let h=new Map;for(let L of e.match(null,ce("landingPage"),null)){if(!e.holds(L.subject,le("type"),Ot))continue;let R=Ha(e,L.subject,l.releasesDoc);h.set(L.object.value,{releaseNode:L.subject,fileDoc:z(R.value)})}let p=new Map;for(let[L,R]of h)for(let W of e.match(R.releaseNode,X("track"),null)){let Q=e.any(W.object,X("item"))?.value;Q&&p.set(`${L}
${Q}`,W.object)}let S=new Set,M=(L,R)=>{let W=L&&L.match(/archive\.org\/details\/(.+?)\/?$/);return W?decodeURIComponent(W[1]):R.split("/").pop().replace(/\$?\.ttl$/,"")},P=new Map,j=L=>{let R=P.get(L.fileDoc.value);if(R==null){R=0;for(let W of e.match(L.releaseNode,X("track"),null)){let Q=W.object.value.match(/#t(\d+)$/);Q&&(R=Math.max(R,parseInt(Q[1],10)))}}return R+=1,P.set(L.fileDoc.value,R),L.fileDoc.value+"#t"+f(R)},q=new Map,ue=new Map,ne=[],Se=[];for(let L of y){let R=L.source||null,W=L.url,Q=R?`${R}
${W}`:null,de=Q?p.get(Q):null;if(!de&&R&&h.has(R)){let pe=h.get(R);de=z(j(pe));let xe=ue.get(pe.fileDoc.value)||{fileDoc:pe.fileDoc,inserts:[]};xe.inserts.push(D(de,le("type"),Fr,pe.fileDoc)),L.name&&xe.inserts.push(D(de,O("title"),te(L.name),pe.fileDoc)),xe.inserts.push(D(de,X("item"),z(W),pe.fileDoc));let Le=zr(L.time);Number.isFinite(Le)&&Le>0&&xe.inserts.push(D(de,X("duration"),te(String(Le),void 0,ht("decimal")),pe.fileDoc)),xe.inserts.push(D(de,O("isPartOf"),pe.releaseNode,pe.fileDoc)),xe.inserts.push(D(pe.releaseNode,X("track"),de,pe.fileDoc)),ue.set(pe.fileDoc.value,xe),Q&&p.set(Q,de)}if(!de){let pe=R||`urn:nolp:${W}`,xe=q.get(pe);if(!xe){let Le=Ll(e,l,L.album||L.name||"release",S);S.add(Le),xe={fileUrl:Le,lp:R,ident:M(R,Le),releaseNode:z(Le+"#it"),title:L.album||"(untitled album)",artist:L.artist||"",tracks:[]},q.set(pe,xe)}de=z(`${xe.fileUrl}#t${f(xe.tracks.length+1)}`),xe.tracks.push({node:de,name:L.name,dl:W,dur:zr(L.time)}),Q&&p.set(Q,de)}ne.push(de),Se.push(L)}let qe=L=>({...L,nodes:ne,added:Se,skipped:b});for(let L of q.values()){let R=L.artist?io(e,L.artist):null,W=L.artist?R?`<${R.value}>`:Ke(L.artist):null,Q=["a mo:Release, dcat:Dataset",`dct:title ${Ke(L.title)}`,`dct:identifier ${Ke(L.ident)}`,"dct:isPartOf <../releases.ttl#it>"];L.lp&&Q.push(`dcat:landingPage <${L.lp}>`),Q.push("mo:track "+L.tracks.map(ie=>`<#t${f(L.tracks.indexOf(ie)+1)}>`).join(", ")),W&&Q.push(`foaf:maker ${W}`);let de=["@prefix dct: <http://purl.org/dc/terms/> .","@prefix mo: <http://purl.org/ontology/mo/> .","@prefix dcat: <http://www.w3.org/ns/dcat#> .","@prefix foaf: <http://xmlns.com/foaf/0.1/> .","",`<#it>
    `+Q.join(` ;
    `)+" .",""];L.tracks.forEach((ie,yt)=>{let it=["a mo:Track",`dct:title ${Ke(ie.name||"")}`];Number.isFinite(ie.dur)&&ie.dur>0&&it.push(`mo:duration ${Ke(String(ie.dur))}`),it.push(`mo:item <${ie.dl}>`),it.push("dct:isPartOf <#it>"),de.push(`<#t${f(yt+1)}>
    `+it.join(` ;
    `)+" .","")});let pe=await Va(e,L.fileUrl,de.join(`
`));if(!pe.ok)return qe(pe);let xe=[D(l.releasesCatalog,ce("dataset"),L.releaseNode,l.releasesDoc)],Le=await Ae(e,l.releasesDoc.value,[],xe);if(!Le.ok)return await ma(e,L.fileUrl).catch(()=>{}),qe(Le);try{await pa(e).load(L.fileUrl,{force:!0})}catch(ie){console.warn("reload new release file failed:",ie?.message||ie)}let ge=z(L.fileUrl);e.add(L.releaseNode,le("type"),Ot,ge),e.add(L.releaseNode,le("type"),ce("Dataset"),ge),e.add(L.releaseNode,O("title"),te(L.title),ge),e.add(L.releaseNode,O("identifier"),te(L.ident),ge),e.add(L.releaseNode,O("isPartOf"),l.releasesCatalog,ge),L.lp&&e.add(L.releaseNode,ce("landingPage"),z(L.lp),ge),L.artist&&e.add(L.releaseNode,we("maker"),R||te(L.artist),ge);for(let ie of L.tracks)e.add(ie.node,le("type"),Fr,ge),ie.name&&e.add(ie.node,O("title"),te(ie.name),ge),e.add(ie.node,X("item"),z(ie.dl),ge),Number.isFinite(ie.dur)&&ie.dur>0&&e.add(ie.node,X("duration"),te(String(ie.dur),void 0,ht("decimal")),ge),e.add(ie.node,O("isPartOf"),L.releaseNode,ge),e.add(L.releaseNode,X("track"),ie.node,ge)}for(let L of ue.values()){let R=await Ae(e,L.fileDoc.value,[],L.inserts);if(!R.ok)return qe(R)}let We=0,I=0;for(let L of e.match(s,B("itemListElement"),null)){let R=parseInt(e.any(L.object,B("position"))?.value,10);Number.isFinite(R)&&(We=Math.max(We,R));let W=L.object.value.match(/#e(\d+)$/);W&&(I=Math.max(I,parseInt(W[1],10)))}let G=[];ne.forEach((L,R)=>{let W=z(`${s.value}#e${f(I+R+1)}`);G.push(D(s,B("itemListElement"),W,s),D(W,le("type"),B("ListItem"),s),D(W,B("position"),te(String(We+R+1),void 0,ht("integer")),s),D(W,B("item"),L,s))});let ae=160;for(let L=0;L<G.length;L+=ae){let R=await Ae(e,s.value,[],G.slice(L,L+ae));if(!R.ok)return qe(R)}return{ok:!0,nodes:ne,added:Se,skipped:b}}async function po(e,a,r,i){let n=z(r),l=[],s=null;for(let m of e.match(n,B("itemListElement"),null)){let y=m.object,b=e.any(y,B("item")),h=parseInt(e.any(y,B("position"))?.value,10);if((b&&e.any(b,X("item"))?.value)===i&&!s){s={ent:y,trk:b,pos:h};continue}l.push({ent:y,trk:b,pos:Number.isFinite(h)?h:Number.MAX_SAFE_INTEGER})}if(!s)return{ok:!0};let d=[D(n,B("itemListElement"),s.ent,n),D(s.ent,le("type"),B("ListItem"),n),D(s.ent,B("position"),te(String(s.pos),void 0,ht("integer")),n),D(s.ent,B("item"),s.trk,n)],f=[];l.sort((m,y)=>m.pos-y.pos).forEach((m,y)=>{let b=y+1;m.pos!==b&&(d.push(D(m.ent,B("position"),te(String(m.pos),void 0,ht("integer")),n)),f.push(D(m.ent,B("position"),te(String(b),void 0,ht("integer")),n)))});let v=await Ae(e,n.value,d,f);if(!v.ok)return v;if(a&&r===Gt(a))try{let m=Te(a),y=n,b=e.any(s.trk,O("isPartOf"))||e.match(null,X("track"),s.trk)[0]?.subject;if(b&&e.holds(b,le("type"),Ot)){let h=e.match(b,X("track"),null).map(S=>S.object),p=!1;e:for(let S of h)for(let M of e.match(null,B("item"),S)){let P=e.match(null,B("itemListElement"),M.subject)[0]?.subject;if(P&&P.value!==y.value){p=!0;break e}}if(!p){let S=Ha(e,b,m.releasesDoc),M=[];for(let P of e.match(m.releasesCatalog,ce("dataset"),b))M.push(D(P.subject,P.predicate,P.object,m.releasesDoc));for(let P of e.match(m.releasesDoc,dt("seeAlso"),null))P.object.value===S.value&&M.push(D(P.subject,P.predicate,P.object,m.releasesDoc));M.length&&await Ae(e,m.releasesDoc.value,M,[]),await ma(e,S.value).catch(()=>{});for(let P of h){for(let j of e.match(P,null,null))e.remove(j);for(let j of e.match(null,null,P))e.remove(j)}for(let P of e.match(b,null,null))e.remove(P);for(let P of e.match(null,null,b))e.remove(P)}}}catch(m){console.warn("Deleted-bin release GC failed (orphan left for sweep):",m?.message||m)}return{ok:!0}}async function mo(e,a,r,i={}){let n=Te(a),l=Ha(e,r,n.releasesDoc),s=[],d=[];if(i.title!=null){for(let f of e.match(r,O("title"),null))s.push(D(f.subject,f.predicate,f.object,l));i.title&&d.push(D(r,O("title"),te(i.title),l))}if(i.artist!=null){for(let f of e.match(r,we("maker"),null))s.push(D(f.subject,f.predicate,f.object,l));i.artist&&d.push(D(r,we("maker"),te(i.artist),l))}if(i.album!=null){let f=e.match(null,X("track"),r)[0]?.subject;if(f){let v=Ha(e,f,l);for(let m of e.match(f,O("title"),null))s.push(D(m.subject,m.predicate,m.object,v));i.album&&d.push(D(f,O("title"),te(i.album),v))}}return!s.length&&!d.length?{ok:!0}:Ae(e,l.value,s,d)}function ho(e,a){let r=e.match(null,X("track"),a)[0]?.subject;if(!r)return 0;let i=e.match(r,X("track"),null).length;return Math.max(0,i-1)}function ti(e,a){let r=[],i=new Set,n=s=>{e.holds(s,le("type"),Ot)&&(i.has(s.value)||(i.add(s.value),r.push({name:e.any(s,O("title"))?.value||e.any(s,ce("landingPage"))?.value||s.value,url:s.value,_local:!0,_releaseNode:s})))},l=e.any(a,O("source"));if(l){for(let s of e.match(l,B("itemListElement"),null)){let d=e.any(s.object,B("item")),f=d&&e.any(d,O("isPartOf"));f&&n(f)}return r}for(let s of e.match(null,we("maker"),a))n(s.subject);return r}function bo(e,a){let r=[];for(let i of e.match(a,X("track"),null)){let n=i.object,l=e.any(n,X("item"))?.value;if(!l)continue;let s=e.any(n,X("duration"))?.value;r.push({url:l,name:e.any(n,O("title"))?.value||n.value,time:Pl(s),node:n,_lengthSec:s!=null?parseFloat(s):NaN,_bitrate:NaN})}return r}function Pl(e){let a=parseFloat(e);if(!Number.isFinite(a)||a<=0)return"";let r=Math.floor(a/60),i=Math.floor(a%60);return`${r}:${String(i).padStart(2,"0")}`}async function go(e,a,r,i={}){let l=Te(a).agentsDoc,s=z(r),d=(i.name||e.any(s,O("title"))?.value||"Untitled Artist").trim(),f=i.genreId;if(!f)return{ok:!1,err:"a genre is required"};let v=new Set;for(let S of e.match(s,B("itemListElement"),null)){let M=e.any(S.object,B("item")),P=M&&e.any(M,O("isPartOf"));P&&e.holds(P,le("type"),Ot)&&v.add(P.value)}let m=e.match(null,O("source"),s)[0]?.subject||io(e,d),y=m||z(`urn:uuid:${crypto.randomUUID?.()??`${Date.now()}-${Math.random().toString(36).slice(2)}`}`),b=m?e.statementsMatching(m,null,null).filter(S=>(S.why?.value||l.value)===l.value):[],h=[D(y,le("type"),Br,l),D(y,we("name"),te(d),l),D(y,X("genre"),z(f),l),D(y,O("source"),s,l)],p=await Ae(e,l.value,b,h);return p.ok?{ok:!0,node:y,name:d,genreId:f,albumCount:v.size,relinked:!!m}:{...p,node:null}}async function ai(e,a,r){let n=Te(a).agentsDoc,l=z(r),s=e.match(null,O("source"),l)[0]?.subject;if(!s)return{ok:!0,node:null};let d=e.statementsMatching(s,null,null).filter(v=>(v.why?.value||n.value)===n.value),f=await Ae(e,n.value,d,[]);return f.ok?(await ri(e,a,r,!1).catch(()=>{}),{ok:!0,node:s}):{...f,node:s}}async function ri(e,a,r,i){let n=z(r),l=e.statementsMatching(n,jr("styleClass"),null),s=i?[D(n,jr("styleClass"),te("hidden"),n)]:[];return!l.length&&!s.length?{ok:!0}:Ae(e,n.value,l,s)}function zr(e){if(!e)return NaN;let a=String(e).trim();if(!a)return NaN;if(/^[0-9.]+$/.test(a))return parseFloat(a);let r=a.split(":").map(Number);return r.some(i=>!Number.isFinite(i))?NaN:r.length===3?r[0]*3600+r[1]*60+r[2]:r.length===2?r[0]*60+r[1]:r[0]}function yo(e){let a=String(e).trim();if(!a)return null;let r=a.match(/archive\.org\/details\/([^\/?\s#]+)/);return r?{id:r[1],url:`https://archive.org/details/${r[1]}`}:/^[a-zA-Z0-9._-]+$/.test(a)?{id:a,url:`https://archive.org/details/${a}`}:null}var hd=(()=>{try{return/[?&](code|state)=/.test(location.search)}catch{return!1}})();function Xa(e){return typeof e=="string"&&e.startsWith("file:")?"dkfile:"+e.slice(5):e}function Dl({libraryConfigs:e,libs:a,host:r}){let i=()=>xt()[0]?.mediaType||"audio",n=r?.getAttribute?.("storage-ns")||"",l=n?":"+n:"",s=!!n,d=!!r?.hasAttribute?.("favourites-only"),f=()=>i()==="video"?"MovingImage":"Sound",v=new Set,m=[],y=rn({mediaType:i(),panel:s}),{container:b,audio:h,status:p,trackCount:S,nowPlaying:M,filmIntro:P,filmIntroTitle:j,filmIntroLength:q,filmIntroAbout:ue,filmIntroRights:ne,prevBtn:Se,playBtn:qe,nextBtn:We,seekSlider:I,timeCur:G,timeDur:ae,volumeSlider:L,sourcesList:R,favouritesList:W,librariesList:Q,genreList:de,artistList:pe,albumList:xe,trackTable:Le,trackHead:ge,trackBody:ie,trackEmpty:yt,randomizeBtn:it,clearTracksBtn:ba,helpMenuItem:ga,helpLinkMenuItem:J,loginHelpMenuItem:Ee,filtersMenuItem:Be,savePlaylistMenuItem:Ce,installPodMenuItem:Ve,updateAppMenuItem:ya,viewDeletedMenuItem:Qe,importMusicMenuItem:Kt,addPlaylistBtn:ut,addSourceBtn:$o,addGenreBtn:er,addArtistBtn:tr,genreColumnFooter:Wt,artistColumnFooter:Ct,themeToggle:Vt,fontSizeBtn:va,setMenuOpen:Ze}=y,It=document.documentElement,wa=()=>document.querySelector("sol-default");function ar(){return It.getAttribute("data-theme")||wa()?.getAttribute("theme")||(matchMedia("(prefers-color-scheme: light)").matches?"light":"dark")}function rr(){return It.getAttribute("data-fontsize")||wa()?.getAttribute("fontsize")||"medium"}function di(){let t=ar()!=="light";if(Vt){Vt.setAttribute("aria-checked",t?"true":"false");let c=Vt.querySelector(".gear-theme-ico"),u=Vt.querySelector(".gear-theme-label");c&&(c.textContent=t?"\u{1F319}":"\u2600\uFE0F"),u&&(u.textContent=t?"Dark mode":"Light mode")}let o=rr();if(va){let c=va.querySelector(".gear-fontsize-label");c&&(c.textContent="Text size: "+o[0].toUpperCase()+o.slice(1));let u=va.querySelector(".gear-fontsize-ico");u&&(u.style.fontSize=o==="small"?"0.8rem":o==="large"?"1.2rem":"1rem")}}let ir=["small","medium","large"];function To(t){It.setAttribute("data-theme",t);try{localStorage.setItem("dk:theme",t)}catch{}document.dispatchEvent(new CustomEvent("omp:appearance"))}function Eo(t){It.setAttribute("data-fontsize",t);try{localStorage.setItem("dk:fontsize",t)}catch{}document.dispatchEvent(new CustomEvent("omp:appearance"))}wa()?.hasAttribute("theme")||It.setAttribute("data-theme",ar()),wa()?.hasAttribute("fontsize")||It.setAttribute("data-fontsize",rr()),Vt?.addEventListener("click",()=>To(ar()==="light"?"dark":"light")),va?.addEventListener("click",()=>{Eo(ir[(ir.indexOf(rr())+1)%ir.length])}),document.addEventListener("omp:appearance",di),di();function Co(){try{return!!document.querySelector("sol-default")?.hasAttribute("solid-kitchen")}catch{return!1}}function Yt(){return document.querySelector("sol-login")}function xa(){let t=Yt();return!!(t&&t.isLoggedIn)}function nt(){return xa()||Co()}function ka(){let t=!nt();b.classList.toggle("guest-mode",t);let o=xa(),c=o&&Yt()?.webId||"",u=b.querySelector(".manage-btn");u&&(u.classList.toggle("logged-in",o),u.title=c||"Menu");try{r?.dispatchEvent(new CustomEvent("omp:access",{detail:{guest:t,real:o,webId:c}}))}catch{}}function nr(t,o){return t.map(c=>({...c,_lib:o.config.id}))}let vt=[],re=[],Ne=[],De=new Set,wt=new Set;function xt(){return a.filter(t=>t.store&&e.find(o=>o.id===t.config.id)?.enabled)}function ot(){let t=xt();vt=t.flatMap(o=>nr(o.genres,o)),re=t.flatMap(o=>nr(o.bookmarks,o)),Ne=t.flatMap(o=>nr(o.playlists,o)),De=new Set(Ne.map(o=>o.id)),wt=new Set(t.map(o=>Kr(o.baseURI)))}function or(t=i()){return t==="video"?{genre:"Film Types",artist:"Collections",album:"Movies",addGenre:"+ Add film type",addArtist:"+ Add collection",allGenre:"(All film types)",allArtist:"(All collections)",allAlbum:"(All movies)",find:"Find a film\u2026",chooseArtist:"Choose a collection to see films.",loadingAlbums:"Loading films\u2026",noAlbums:"No films found."}:{genre:"Genres",artist:"Artists",album:"Albums",addGenre:"+ Add genre",addArtist:"+ Add artist",allGenre:"(All genres)",allArtist:"(All artists)",allAlbum:"(All albums)",find:"Search the Internet Archive\u2026",chooseArtist:"Choose an artist to see albums.",loadingAlbums:"Loading albums\u2026",noAlbums:"No albums found."}}function ui(){let t=i();b.classList.toggle("media-video",t==="video"),b.classList.toggle("media-audio",t!=="video");let o=or(t);for(let x of["genre","artist","album"]){let k=b.querySelector(`[data-column="${x}"] .ia-column-header`);k&&(k.textContent=o[x])}er&&(er.textContent=o.addGenre),tr&&(tr.textContent=o.addArtist),lt.setAllLabel(o.allGenre),tt.setAllLabel(o.allArtist),ye.setAllLabel(o.allAlbum);let c=b.querySelector(".ia-artist-search-input");c&&(c.placeholder=o.find);let u=b.querySelector(".ia-artist-search"),g=b.querySelector(".ia-nowplaying"),w=b.querySelector(".ia-toolbar");u&&(t==="video"&&g&&u.parentElement!==g?g.appendChild(u):t!=="video"&&w&&u.parentElement===g&&w.appendChild(u)),tt.getSelection().size===0&&!at&&U==="library"&&ye.setMessage(o.chooseArtist),b.classList.toggle("has-video",t==="video"&&Xt)}function et(t){if(!t?.store)return;let o=Vr(t.store,t.baseURI,t.mediaType);t.genres=o.genres,t.bookmarks=o.bookmarks,t.playlists=Yr(t.store,t.baseURI),ot()}async function Sa(t,o){if(!t?.store||typeof t.loadDocs!="function"||!o?.length)return!1;let c=0;try{c=await t.loadDocs(o)}catch(u){console.warn("[lazy] release load failed:",u?.message||u)}return c&&et(t),c>0}function Io(t,o){return t?.store?Ya(t.store,[String(o).split("#")[0]]):[]}function Fe(){return xt()[0]||null}function La(t){return a.find(o=>o.config.id===t)||null}let Ye=null,kt=!1,ft=!1,Pt=!1,Je=null;function sr(){ot(),Oe(),ve(),Ue(),Me(),pt(),U="library",mt("library")}function fi(){ot(),Oe(),ve(),Ue(),Me(),pt(),mt(U)}async function Po(t){for(let u=a.length-1;u>=0;u--)a[u].config.solid&&a.splice(u,1);for(let u=e.length-1;u>=0;u--)e[u].solid&&e.splice(u,1);Ye||(Ye=e.map(u=>[u.id,u.enabled])),e.forEach(u=>{u.enabled=!1});let o={id:"solid",label:"My Pod",url:t,enabled:!0,solid:!0};e.push(o);let c=await bt(o);if(!c.store){let u=e.indexOf(o);if(u>=0&&e.splice(u,1),Ye){for(let[g,w]of Ye){let x=e.find(k=>k.id===g);x&&(x.enabled=w)}Ye=null}for(let g of e){if(g.solid||!g.enabled||a.some(k=>k.config.id===g.id&&k.store))continue;let w=await bt(g),x=a.findIndex(k=>k.config.id===g.id);x>=0?a[x]=w:a.push(w)}return kt=!1,ft=!1,sr(),{ok:!1,err:c.error}}a.push(c);try{let u=new URL(t,location.href).href,g=w=>w&&!w.solid&&w.url&&(()=>{try{return new URL(w.url,location.href).href===u}catch{return!1}})();for(let w=a.length-1;w>=0;w--)g(a[w].config)&&a.splice(w,1);for(let w=e.length-1;w>=0;w--)g(e[w])&&e.splice(w,1);Ye&&(Ye=Ye.filter(([w])=>e.some(x=>x.id===w)))}catch(u){console.warn("[pod] self-hosted dedupe skipped:",u?.message||u)}return kt=!!(Ie&&Ie.isLoggedIn),ft=!kt,Pt=!1,sr(),{ok:!0,authed:kt}}function Gl(){So();for(let t=a.length-1;t>=0;t--)a[t].config.solid&&a.splice(t,1);for(let t=e.length-1;t>=0;t--)e[t].solid&&e.splice(t,1);if(Ye){for(let[t,o]of Ye){let c=e.find(u=>u.id===t);c&&(c.enabled=o)}Ye=null}else e.forEach(t=>{t.enabled=!0});kt=!1,ft=!1,Pt=!1,sr()}let Dt="random",Jt="off",Do=!1,lr=!1,U="library",Mt=[];ot();let pi="ia-player:state"+l;n&&b.classList.add("panel-instance"),e.length===1&&b.classList.add("single-library");let St=null,cr=!1;function Mo(){try{let t=localStorage.getItem(pi);return t?JSON.parse(t):null}catch(t){return console.warn("Could not read saved state:",t),null}}function mi(t){try{localStorage.setItem(pi,JSON.stringify(t))}catch(o){console.warn("Could not write state:",o)}}let hi=new Set(["title","artist","album"]);function Uo(){let t={};return Le&&Le.querySelectorAll("col").forEach(o=>{o.style.width&&!hi.has(o.dataset.col)&&(t[o.dataset.col]=o.style.width)}),t}function Ro(t){if(!(!t||!Le))for(let[o,c]of Object.entries(t)){if(hi.has(o))continue;let u=Le.querySelector(`col[data-col="${CSS.escape(o)}"]`);u&&(u.style.width=c)}}function bi(){let t=oa?.getSort?.()??{col:null,dir:"asc"};return{shuffle:Dt==="random",repeat:Jt,volume:h.volume,source:U,genreSel:[...lt.getSelection()],artistSel:[...tt.getSelection()],albumSel:[...ye.getSelection()],sortCol:t.col,sortDir:t.dir,columnWidths:Uo(),sourcesWidth:b.style.getPropertyValue("--ia-sources-width")||"",browserHeight:b.style.getPropertyValue("--ia-browser-height")||"",libraryTracks:oe.map(o=>({id:o.id,url:o.url,name:o.name,artist:o.artist||"",album:o.album||"",albumUrl:o.albumUrl||"",time:o.time||"",_lib:o._lib})),currentTrackUrl:Y?.url||null,currentTrack:Y?{id:Y.id,url:Y.url,name:Y.name,artist:Y.artist||"",album:Y.album||"",albumUrl:Y.albumUrl||"",time:Y.time||"",_lib:Y._lib}:null,currentTime:Y&&h.src===Xa(Y.url)&&Number.isFinite(h.currentTime)?h.currentTime:0}}function $e(){cr||(St&&clearTimeout(St),St=setTimeout(()=>{St=null,mi(bi())},400))}function No(){St&&(clearTimeout(St),St=null),mi(bi())}window.addEventListener("beforeunload",No);async function Fo(){let t=Mo();if(t){cr=!0;try{typeof t.volume=="number"&&(h.volume=Math.min(1,Math.max(0,t.volume)),L.value=String(h.volume)),Lr(t.shuffle?"random":"ordered"),Ri(t.repeat||"off"),Ro(t.columnWidths),t.sourcesWidth&&b.style.setProperty("--ia-sources-width",t.sourcesWidth),t.browserHeight&&b.style.setProperty("--ia-browser-height",t.browserHeight),t.sortCol&&oa.setSort&&oa.setSort(t.sortCol,t.sortDir),Array.isArray(t.genreSel)&&t.genreSel.length&&lt.setSelection(t.genreSel,{notify:!1}),ve(),Array.isArray(t.artistSel)&&t.artistSel.length&&tt.setSelection(t.artistSel,{notify:!1});let o=new Set(e.filter(u=>u.enabled).map(u=>u.id));Array.isArray(t.libraryTracks)&&t.libraryTracks.length&&(oe=t.libraryTracks.map(u=>({...u})).filter(u=>!u._lib||o.has(u._lib)));let c=t.source&&t.source!=="library"&&De.has(t.source);if(t.source==="favorites"?(U="favorites",st.setSelection(["favorites"],{notify:!1}),b.classList.add("source-favorites"),Pi(),Ia()):c?(U=t.source,st.setSelection([t.source],{notify:!1}),ra(t.source)):(t.source&&t.source!=="library"&&t.source!=="favorites"&&(Qt=t.source),U="library",N=oe,He=_t(),me()),ea(),c||(await Ue(),Array.isArray(t.albumSel)&&t.albumSel.length&&ye.setSelection(t.albumSel,{notify:!1})),t.currentTrackUrl){let u=oe.find(x=>x.url===t.currentTrackUrl)||N.find(x=>x.url===t.currentTrackUrl),g=!u&&t.currentTrack&&t.currentTrack.url===t.currentTrackUrl,w=u||(g?t.currentTrack:null);if(w&&(g||!w._lib||o.has(w._lib))){Y=w,Xt=i()==="video",b.classList.toggle("has-video",Xt),Fa(M,Ui(w)),me(),h.src=Xa(w.url);let x=Number.isFinite(t.currentTime)&&t.currentTime>0?t.currentTime:0;if(x>0){let k=()=>{h.removeEventListener("loadedmetadata",k);try{h.currentTime=x}catch{}};h.addEventListener("loadedmetadata",k)}h.load()}}}finally{cr=!1}}}let N=[],oe=[],Ut=null,_a=!1,Y=null,Xt=!1,Qt=null,Lt=new Map,Rt=new Map;function Aa(t){t&&Lt.delete(t)}function dr(t){let o=Ne.find(c=>c.id===t);o?.artistNode&&Aa(o.artistNode.value)}let gi="omp-player:quality-filter"+l,$a={minTrackDurationSec:180,minTrackBitrateKbps:0,minItemRuntimeSec:0,minDownloads:0,blockedCollections:[],applyToCatalogArtists:!1};function zo(){try{let t=localStorage.getItem(gi);if(!t)return{...$a};let o=JSON.parse(t);return{...$a,...o}}catch{return{...$a}}}function jo(t){try{localStorage.setItem(gi,JSON.stringify(t))}catch(o){console.warn("Could not persist filter:",o)}}let Nt=zo();function ur(t){return t[Math.floor(Math.random()*t.length)]}function qo(t){return t?.match(/(?:\/details\/|archive\.org\/details\/)([^/?]+)/)?.[1]??null}function Ft(t){return t.node?.value||t.url}function Zt(t,o){return t.label.localeCompare(o.label,void 0,{sensitivity:"base"})}function Bo(t){return/\b40[13]\b|unauthor|forbidden|not allowed|permission|credential/i.test(String(t||""))}function fr(){let t=Yt();if(!t)return!1;if(!s)try{Ze(!0)}catch{}try{t.scrollIntoView?.({block:"nearest",inline:"nearest"});let o=t.shadowRoot&&t.shadowRoot.querySelector(".auth-btn");if(o)return o.click(),!0;if(typeof t._handleClick=="function")return t._handleClick(),!0;if(t.issuers&&t.issuers[0])return t.login(t.issuers[0]),!0}catch{}return!1}function Oo(t){if(!ft)return!1;let o=!!(Ie&&Ie.isLoggedIn);return A(p,o?`"${t}" not saved \u2014 your pod denied the write (no permission). Changes stay in this browser only.`:`"${t}" not saved \u2014 log in to save to your pod. Changes stay in this browser only.`),Pt||o||(Pt=!0,confirm(`Couldn't save "${t}" to your pod.

You're in guest mode (not signed in). This change needs a Solid login to save \u2014 creating playlists works without one, but editing the library does not.

Log in now?

OK = Log in (you'll need to redo this change after signing in)
Cancel = keep working in this browser (changes won't be saved)`)&&(fr()||A(p,'Open the gear menu and click "Log in" to sign in to your pod.'))),!0}function Re(t,o){if(t&&t.ok)return!0;let c=t?.err||"persistence failed";return console.warn(`checkSaved: ${o}:`,t),ft&&Bo(c)?Oo(o):A(p,`Couldn't ${o}: ${c}. No changes saved.`),!1}function Ta(t){return`<button type="button" class="ia-src-edit ia-row-kebab" data-action="edit" aria-label="Edit ${se(t)}" aria-haspopup="menu" title="Edit" tabindex="-1">\u22EF</button>`}function yi(t,o,{onCommit:c}){if(!t)return;let u=t.innerHTML;t.innerHTML=`<input type="text" class="ia-row-rename" value="${se(o)}" aria-label="Rename" spellcheck="false">`;let g=t.querySelector("input");g.focus(),g.select();let w=!1,x=()=>{t.innerHTML=u},k=()=>{if(w)return;w=!0;let T=g.value.trim();T&&T!==o?c(T):x()},$=()=>{w||(w=!0,x())};g.addEventListener("keydown",T=>{T.stopPropagation(),T.key==="Enter"?(T.preventDefault(),k()):T.key==="Escape"&&(T.preventDefault(),$())}),g.addEventListener("click",T=>T.stopPropagation()),g.addEventListener("dblclick",T=>T.stopPropagation()),g.addEventListener("mousedown",T=>T.stopPropagation()),g.addEventListener("blur",k)}let vi=$t(Q,{onChange:t=>Go(t),showAll:!1,multiSelect:!1,allowDeselect:!1,renderItemActions:t=>Ta(t.label),onItemAction:(t,o,c)=>{t==="edit"&&Qo(o,c)}}),st=$t(R,{onChange:t=>mt([...t][0]||"library"),showAll:!1,multiSelect:!1,allowDeselect:!0,renderItemActions:t=>Ta(t.label),onItemAction:(t,o,c)=>{t==="edit"&&ki(o,c)},onItemDrop:(t,o)=>is(t,o)}),wi=$t(W,{onChange:t=>{let o=[...t][0];if(!o)return;let c=m.find(u=>(u.item||u.link)===o);c&&Ho(c)},showAll:!1,multiSelect:!1,allowDeselect:!0,renderItemActions:()=>nt()?'<button type="button" class="ia-row-favdel" data-action="favdel" title="Remove from the communal favourites" aria-label="Remove favourite" tabindex="-1">\u2715</button>':"",onItemAction:(t,o)=>{t==="favdel"&&confirm("Remove this favourite from the communal wall?")&&Da(o)}});function xi(){let t=m.map(o=>({id:o.item||o.link,label:o.canonicalTitle||"Untitled",title:o.contributors?.length?`Favourited by ${o.contributors.map(c=>c.name).join(", ")}`:"",_fav:o})).sort((o,c)=>o.label.localeCompare(c.label,void 0,{sensitivity:"base"}));wi.setItems(t),wi.setMessage(t.length?null:i()==="video"?"No favourite films yet \u2014 tap \u2606 on a film.":"No favourites yet \u2014 tap \u2606 on a track.")}function Ho(t){let o=t.link||t.item,c=t.canonicalTitle||"Untitled";if(i()==="video"){Ai({url:o,name:c});return}Ge({id:o,url:o,name:c,album:"Community Favorites",albumUrl:"",time:"",artist:""})}function pt(){let t=c=>c==="video"?"\u{1F3AC}":"\u{1F3B5}";vi.setItems(e.map(c=>{let u=a.find(w=>w.config.id===c.id),g=u&&u.mediaType||c.mediaType||"audio";return{id:c.id,label:`${t(g)} ${c.label}`}}));let o=e.filter(c=>c.enabled).map(c=>c.id);vi.setSelection(o,{notify:!1})}pt();function Me(){let t=Ne.filter(o=>!o.hidden&&!o.id.endsWith("/playlists/deleted")).map(o=>({id:o.id,label:o.label,title:o.description||""}));st.setItems(t),t.some(o=>o.id===U)?st.setSelection([U],{notify:!1}):(U==="favorites"&&(U="library"),st.setSelection([],{notify:!1})),ea()}function ea(){b.classList.toggle("viewing-playlist",De.has(U)),b.classList.toggle("viewing-library",U==="library")}Me(),xi(),d&&(b.classList.add("favourites-only"),ut&&(ut.hidden=!0));function zt(){if(!n){ci(e);for(let t of e)t.url&&!t.solid&&Nl(t.url,t.enabled)}}async function Go(t){e.forEach(o=>{o.enabled=t.has(o.id)}),zt();for(let o of e){if(!o.enabled)continue;let c=a.findIndex(u=>u.config.id===o.id);c>=0&&a[c].unloaded&&(A(p,`Loading "${o.label}"\u2026`),a[c]=await bt(o),A(p,a[c].error?`Could not load "${o.label}": ${a[c].error}`:`Loaded "${o.label}".`))}ot(),ui(),U!=="library"&&U!=="favorites"&&!De.has(U)&&(U="library"),lt.setSelection([],{notify:!1}),tt.setSelection([],{notify:!1}),ye.setSelection([],{notify:!1}),N=oe,Oe(),ve(),Ue(),Me(),U==="library"?(N=oe,He=_t(),me()):U==="favorites"?Ii():ra(U)}async function pr(t){if(!(!Je||!Je.typeIndex||!t||t.solid||!t.url))try{await Wa(Je.authedFetch,Je.typeIndex,{id:t.id,url:new URL(t.url,location.href).href,label:t.label})}catch(o){console.warn("type-index register failed (kept locally):",o?.message||o)}}async function Ko(t){if(!(!Je||!Je.typeIndex||!t))try{await Qn(Je.authedFetch,Je.typeIndex,{id:t.id,url:t.url?new URL(t.url,location.href).href:null})}catch(o){console.warn("type-index unregister failed:",o?.message||o)}}async function Kl(t,o){let c;try{c=await Xn(t,o)}catch(k){console.warn("listRegisteredLibraries failed:",k?.message||k);return}let u=c.typeIndex;if(Je=u?{authedFetch:t,webId:o,typeIndex:u}:null,!u)return;let g=new Set(c.libraries.map(k=>k.url));for(let k of e){if(k.solid||!k.url)continue;let $=new URL(k.url,location.href).href;if(!g.has($))try{await Wa(t,u,{id:k.id,url:$,label:k.label})}catch(T){console.warn("push register failed:",T?.message||T)}}let w=new Set(e.filter(k=>k.url).map(k=>new URL(k.url,location.href).href)),x=!1;for(let k of c.libraries){if(w.has(k.url))continue;let $={id:vo(),label:k.label||k.url,url:k.url,enabled:_o(k.url,!1)},T=await bt($);if(T.error){console.warn("discovered library failed to load:",k.url,T.error);continue}a.push(T),e.push($),x=!0}x&&(zt(),ot(),pt(),Me(),Oe(),ve(),Ue(),U==="library"&&(N=oe,me()))}async function mr(t,o){let u={id:vo(),label:t,url:o,enabled:!0};A(p,`Loading "${t}"\u2026`);let g=await bt(u);if(g.error){A(p,`Could not load "${t}": ${g.error}`);return}a.push(g),e.push(u),zt(),ot(),pt(),Me(),Oe(),ve(),Ue(),await pr(u),A(p,Je?`Added "${t}" (registered on your pod).`:`Added "${t}".`)}async function Wo(t){let o=e.find($=>!$.solid&&gt($.url)),u=new URL(o?o.url:"./dk-pod/dk/plugins/ia-player/libraries/_/index.ttl",location.href).href.match(/^(.*\/libraries\/)/)?.[1];if(!u){A(p,"Could not locate the libraries/ root.");return}let g=new Set(e.map($=>($.url||"").match(/\/libraries\/([^/]+)\//)?.[1]).filter(Boolean)),w=wo(t);for(let $=2;g.has(w);$++)w=`${wo(t)}_${$}`;let x=u+w+"/";A(p,`Creating library "${t}"\u2026`);let k=await to(x,{title:t});if(!k.ok){A(p,`Couldn't create "${t}": ${k.err}`);return}await mr(t,k.url)}async function Vo(){Ze(!1);let t=window.dkElectron;if(!t||typeof t.importMusic!="function"){A(p,"Importing local music is only available in the Data Kitchen desktop app.");return}let o;try{o=await t.importMusic()}catch(E){A(p,`Import failed: ${E.message}`);return}if(!o||o.status==="cancelled")return;if(o.status==="error"){A(p,`Import failed: ${o.message||"scan error"}`);return}let c=jn(o.tracks||[]);if(!c.releases.length){A(p,"No tagged audio files were found in that folder.");return}let u=e.find(E=>!E.solid&&gt(E.url)),w=new URL(u?u.url:"./dk-pod/dk/plugins/ia-player/libraries/_/index.ttl",location.href).href.match(/^(.*\/libraries\/)/)?.[1];if(!w){A(p,"Could not locate the libraries/ root.");return}let x=new Set(e.map(E=>(E.url||"").match(/\/libraries\/([^/]+)\//)?.[1]).filter(Boolean)),k="my_music";for(let E=2;x.has(k);E++)k=`my_music_${E}`;let $=w+k+"/",T=E=>(E=String(E||"").toLowerCase(),E.includes("png")?"png":E.includes("jpeg")||E.includes("jpg")?"jpg":E.includes("webp")?"webp":E.includes("gif")?"gif":"img"),_=E=>String(E||"").includes("/")?E:`image/${T(E)}`,C=E=>{let H=atob(E),he=new Uint8Array(H.length);for(let Pe=0;Pe<H.length;Pe++)he[Pe]=H.charCodeAt(Pe);return he},F=async(E,H,he)=>{let Pe=await fetch(E,{method:"PUT",headers:{"content-type":he},body:H});if(!Pe.ok)throw new Error(`PUT ${E} \u2192 ${Pe.status}`)},Z=new Map,K=[];for(let E of c.releases){if(!E.artFromAbsPath)continue;let H;try{H=await t.readCover(E.artFromAbsPath)}catch{H=null}if(!H||!H.base64)continue;let he=`art-${E.slug}.${T(H.format)}`;Z.set(E.slug,{file:he}),K.push({url:$+"releases/"+he,mime:_(H.format),base64:H.base64})}let ee=qn(c,{title:"My Music",covers:Z});A(p,`Importing ${c.releases.length} album(s), ${o.count} track(s)\u2026`);try{for(let[Pe,Ar]of Object.entries(ee))await F($+Pe,Ar,"text/turtle");for(let Pe of K)await F(Pe.url,C(Pe.base64),Pe.mime);let E=w+"imported.ttl",H=[];try{let Pe=await fetch(E,{headers:{accept:"text/turtle"}});Pe.ok&&(H=[...(await Pe.text()).matchAll(/<([^>]*index\.ttl[^>]*)>/g)].map(Ar=>Ar[1]))}catch{}H=[...new Set([...H,`./${k}/index.ttl#it`])];let he=`@prefix dct: <http://purl.org/dc/terms/> .
@prefix dcat: <http://www.w3.org/ns/dcat#> .

<#it>
    a dcat:Catalog ;
    dct:title "Imported libraries" ;
    dcat:catalog ${H.map(Pe=>`<${Pe}>`).join(", ")} .
`;await F(E,he,"text/turtle")}catch(E){A(p,`Import write failed: ${E.message}`);return}await mr("My Music",$+"index.ttl")}function Yo(t,o){let c=e.find(u=>u.id===t);c&&(c.label=o,zt(),pt(),pr(c))}async function Jo(t,o){let c=e.find(w=>w.id===t);if(!c)return;c.url=o,zt(),A(p,`Reloading "${c.label}" from ${o}\u2026`);let u=await bt(c),g=a.findIndex(w=>w.config.id===t);g>=0?a[g]=u:a.push(u),ot(),pt(),Me(),Oe(),ve(),Ue(),U==="library"&&(N=oe,me()),await pr(c),u.error?A(p,`Could not load: ${u.error}`):A(p,`Reloaded "${c.label}".`)}function Xo(t){let o=e.findIndex(g=>g.id===t);if(o<0)return;let c=e[o];Ko(c),e.splice(o,1);let u=a.findIndex(g=>g.config.id===t);u>=0&&a.splice(u,1),zt(),oe=oe.filter(g=>g._lib!==t),ot(),pt(),Me(),Oe(),ve(),Ue(),U==="library"&&(N=oe,me())}function Qo(t,o){let c=e.find(u=>u.id===t);c&&mn({title:"Edit library",values:{label:c.label,url:c.url},canDelete:e.length>1,onSave:async({label:u,url:g})=>{u!==c.label&&Yo(t,u),g!==c.url&&await Jo(t,g)},onDelete:()=>{if(!confirm(`Delete library "${c.label}"?
Its contents stay on disk; only this player will forget about it.`))return!1;Xo(t)}})}function ki(t,o){if(!De.has(t))return;let c=Ne.find(_=>_.id===t);if(!c)return;let u=jt(t);if(!u)return;function g(_,C,F){for(let Z=re.length-1;Z>=0;Z--)re[Z].node&&re[Z].node.value===_.value&&re.splice(Z,1);re.push({node:_,label:C,topic:F,url:null,source:null,localData:!0,sourcePlaylist:t,_lib:u.config.id})}async function w(){let _=vt.filter(E=>!wt.has(E.id));if(!_.length){A(p,"Add a genre first \u2014 a converted artist needs one.");return}let C=(prompt("Artist name:",c.name)||"").trim();if(!C)return;let F=_.slice().sort(Zt),Z=prompt(`Genre? Enter a number:
`+F.map((E,H)=>`  ${H+1}. ${E.label}`).join(`
`),"1");if(Z==null)return;let K=F[parseInt(Z,10)-1];if(!K){A(p,"Conversion cancelled \u2014 no valid genre picked.");return}let ee=await go(u.store,u.baseURI,t,{name:C,genreId:K.id});Re(ee,`convert "${c.name}" to an artist`)&&(c.artistNode=ee.node,g(ee.node,C,K.id),Aa(ee.node.value),ve(),Ue(),A(p,`${ee.relinked?"Relinked":"Converted"} "${c.name}" \u2192 artist "${C}" (${ee.albumCount} album${ee.albumCount===1?"":"s"}). Playlist kept.`))}async function x(){if(!confirm(`Unlink the artist from "${c.name}"?
The playlist and its tracks stay; it just stops also appearing as an artist.`))return!1;let _=await ai(u.store,u.baseURI,t);if(Re(_,`unlink artist from "${c.name}"`)){if(_.node){for(let C=re.length-1;C>=0;C--)re[C].node&&re[C].node.value===_.node.value&&re.splice(C,1);Aa(_.node.value)}c.artistNode=null,c.hidden=!1,ve(),Ue(),Me(),A(p,`Unlinked artist from "${c.name}". Playlist kept.`)}}async function k(){if(!confirm(`Delete playlist "${c.name}"?`))return!1;let _=await fo(u.store,u.baseURI,t);if(!Re(_,`delete playlist "${c.name}"`))return;for(let F=re.length-1;F>=0;F--)re[F].topic===t&&re.splice(F,1);let C=Ne.findIndex(F=>F.id===t);C>=0&&Ne.splice(C,1),De.delete(t),U===t&&(U="library",mt("library")),Me()}let T=!nt()?[]:[c.artistNode?{label:"Unlink artist",onClick:x}:{label:"Convert to artist\u2026",onClick:w},{label:"Remove playlist",danger:!0,onClick:k}];Er({title:"Edit playlist",values:{name:c.name,maker:c.maker,description:c.description},actions:T,onSave:async({name:_,maker:C,description:F})=>{let Z=await uo(u.store,u.baseURI,t,{name:_,maker:C,description:F});if(!Re(Z,`edit playlist "${c.name}"`))return;if(c.artistNode&&_&&_!==c.name){let ee=await Zr(u.store,u.baseURI,c.artistNode,_);if(!Re(ee,`update linked artist "${c.name}" \u2192 "${_}"`))return}let K=C?`${_} (${C})`:_;et(u),Me(),ve(),A(p,`Updated "${K}".`)}})}function Zo(t){return de.querySelector(`.ia-listbox-item[data-id="${CSS.escape(t)}"]`)}function es(t){return pe.querySelector(`.ia-listbox-item[data-id="${CSS.escape(t)}"]`)}function ts(t){return re.find(o=>Ft(o)===t)}function as(t,o){let c=vt.find(u=>u.id===t);c&&da(o,[{id:"rename",label:"Rename"},{id:"delete",label:"Delete"}],async u=>{let g=ss(t);if(g){if(u==="rename")yi(Zo(t),c.label,{onCommit:async w=>{let x=await so(g.store,g.baseURI,t,w);if(!Re(x,`rename genre "${c.label}"`)){Oe();return}et(g),Oe(),ve()}});else if(u==="delete"){let w=re.filter($=>$.topic===t&&Ea($)).length,x=w?`Delete genre "${c.label}" and its ${w} artist${w===1?"":"s"}?`:`Delete genre "${c.label}"?`;if(!confirm(x))return;let k=await oo(g.store,g.baseURI,t);if(!Re(k,`delete genre "${c.label}"`))return;et(g),Oe(),ve(),Ue()}}})}function rs(t,o){let c=ts(t);if(!c)return;if(c.sourcePlaylist&&De.has(c.sourcePlaylist)){let w=c.sourcePlaylist,x=Ne.find(_=>_.id===w),k=jt(w),$=br(c),T=[{id:"edit",label:"Edit playlist\u2026"},{id:"toggle-hide",label:x?.hidden?"Show in Playlists":"Hide from Playlists"},{id:"unlink",label:"Unlink artist"},{id:"visit-ia",label:"Visit on the Internet Archive"}];da(o,T,async _=>{if(_==="visit-ia"){window.open($,"_blank","noopener");return}if(_==="edit"){ki(w);return}if(k){if(_==="toggle-hide"){let C=!x?.hidden,F=await ri(k.store,k.baseURI,w,C);if(!Re(F,`${C?"hide":"show"} playlist "${x?.name||""}"`))return;x&&(x.hidden=C),C&&U===w&&(U="library",mt("library")),Me(),A(p,C?`"${x?.name}" hidden from Playlists (still an artist).`:`"${x?.name}" shows in Playlists again.`)}else if(_==="unlink"){if(!confirm(`Unlink the artist from "${x?.name}"?
The playlist and its tracks stay; it just stops appearing as an artist.`))return;let C=await ai(k.store,k.baseURI,w);if(!Re(C,`unlink artist from "${x?.name||""}"`))return;let F=re.indexOf(c);F>=0&&re.splice(F,1),C.node&&Aa(C.node.value),x&&(x.artistNode=null,x.hidden=!1),ve(),Ue(),Me(),A(p,`Unlinked artist from "${x?.name}". Playlist kept.`)}}});return}let u=br(c);da(o,[{id:"rename",label:"Rename"},{id:"delete",label:"Delete"},{id:"visit-ia",label:"Visit on the Internet Archive"}],async w=>{if(w==="visit-ia"){window.open(u,"_blank","noopener");return}let x=Ca(c);if(x){if(w==="rename")yi(es(t),c.label,{onCommit:async k=>{let $=await Zr(x.store,x.baseURI,c.node,k);if(!Re($,`rename artist "${c.label}"`)){ve();return}et(x),ve()}});else if(w==="delete"){if(!confirm(`Delete artist "${c.label}"?`))return;let k=await co(x.store,x.baseURI,c.node);if(!Re(k,`delete artist "${c.label}"`))return;et(x),ve(),Ue()}}})}function Si(){if(Wt.querySelector(".ia-column-addform"))return;Wt.innerHTML=Bn;let t=Wt.querySelector("form"),o=t.querySelector("input"),c=()=>Li();o.focus(),t.addEventListener("submit",async u=>{u.preventDefault();let g=o.value.trim();if(!g){c();return}let w=Fe();if(!w){A(p,"Enable a library first."),c();return}let x=await no(w.store,w.baseURI,g);Li(),Re(x,`add genre "${g}"`)&&(vt.push({id:x.id,label:g,_lib:w.config.id}),Oe())}),t.querySelector(".ia-column-addcancel").addEventListener("click",c),o.addEventListener("keydown",u=>{u.key==="Escape"&&c()})}function Li(){Wt.innerHTML='<button type="button" class="ia-add-genre-btn">+ Add genre</button>',Wt.querySelector(".ia-add-genre-btn").addEventListener("click",Si)}er.addEventListener("click",Si);function _i(){if(Ct.querySelector(".ia-column-addform"))return;let t=vt.filter(k=>!wt.has(k.id));if(!t.length){A(p,"Add a genre first.");return}Ct.innerHTML=On;let o=Ct.querySelector(".ia-column-addselect");for(let k of t.slice().sort(Zt)){let $=document.createElement("option");$.value=k.id,$.textContent=k.label,o.appendChild($)}let c=Ct.querySelector("form"),u=c.querySelector("input"),g=c.querySelector("select"),w=[...lt.getSelection()];w.length===1&&t.some(k=>k.id===w[0])&&(g.value=w[0]);let x=()=>hr();u.focus(),c.addEventListener("submit",async k=>{k.preventDefault();let $=u.value.trim();if(!$){x();return}let T=yo($),_;if(T)_=T.url;else try{_=new URL($).href}catch{A(p,`Not a valid URL: "${$}". Enter a full http(s) URL or an archive.org item id.`),u.focus(),u.select();return}let C=T?T.id:(prompt("Display name for this artist:","")||"").trim();if(!C){x();return}let F=g.value,Z=Fe();if(!Z){A(p,"Enable a library first."),x();return}let K;try{K=await lo(Z.store,Z.baseURI,F,C,_)}catch(ee){hr(),A(p,`Couldn't add artist "${C}": ${ee.message||ee}`);return}hr(),Re(K,`add artist "${C}"`)&&(re.push({node:K.node,label:C,topic:F,url:_,source:null,_lib:Z.config.id}),ve())}),c.querySelector(".ia-column-addcancel").addEventListener("click",x),u.addEventListener("keydown",k=>{k.key==="Escape"&&x()})}function hr(){Ct.innerHTML='<button type="button" class="ia-add-artist-btn">+ Add artist</button>',Ct.querySelector(".ia-add-artist-btn").addEventListener("click",_i)}tr.addEventListener("click",_i),$o.addEventListener("click",async()=>{let t=prompt(`Add a library:

  1 = create a new empty library
  2 = add an existing one by URL`,"1");if(t!=null)if(t.trim()==="1"){let o=prompt("New library name:");if(!o||!o.trim())return;await Wo(o.trim())}else{let o=prompt("Library RDF URL (its index.ttl):");if(!o||!o.trim())return;let c=o.trim().split("/").filter(Boolean).pop()||"Library",u=prompt("Display name:",c);if(!u||!u.trim())return;await mr(u.trim(),o.trim())}});async function is(t,o){if(!De.has(t))return;let c=o.getData("application/x-ia-tracks");if(!c)return;let u;try{u=JSON.parse(c)}catch{return}if(!Array.isArray(u)||!u.length)return;let g=u.map(C=>N.find(F=>F.id===C)).filter(Boolean);if(!g.length)return;let w=jt(t);if(!w)return;A(p,`Adding ${g.length} track${g.length===1?"":"s"} to playlist\u2026`);let x=g.map(C=>({label:[C.artist,C.album,C.name].filter(Boolean).join(" \u2014 ")||C.name,url:C.url,source:C.albumUrl,artist:C.artist,album:C.album,name:C.name,time:C.time})),k=!nt(),$=await Ja(w.store,w.baseURI,t,x,{inlineTracks:k}),T=$.added||[];T.forEach((C,F)=>{re.push({node:$.nodes?.[F],label:C.label,topic:t,url:C.url,source:C.source,_lib:w.config.id})});let _=$.skipped||0;if($.ok)T.length?A(p,`Added ${T.length} track${T.length===1?"":"s"}`+(_?` (${_} already in playlist)`:"")+"."):A(p,_?`All ${_} track${_===1?"":"s"} already in this playlist.`:"Nothing to add.");else{let C=$.err||"persistence failed";A(p,T.length?`Saved ${T.length} track${T.length===1?"":"s"}, then the server failed: ${C}. Retry to add the rest.`:`Couldn't add tracks to playlist: ${C}. No changes saved.`),console.warn("add tracks to playlist (partial/failed):",$)}T.length&&dr(t),U===t&&ra(t)}ut.addEventListener("click",()=>{if(!nt()){A(p,"Sign in to create playlists.");return}let t=Fe();if(!t){A(p,"Enable a library to add playlists.");return}Er({title:"New playlist",values:{name:`Playlist ${Ne.length+1}`,maker:"jeffz",description:""},onSave:async({name:o,maker:c,description:u})=>{let g=await ei(t.store,t.baseURI,{name:o,maker:c,description:u});Re(g,`add playlist "${o}"`)&&(Ne.push({id:g.id,name:g.name,maker:g.maker,description:g.description,label:g.label,_lib:t.config.id}),De.add(g.id),Me(),A(p,`Added playlist "${g.label}". Drag tracks onto it to fill it.`))}})});function mt(t){U=t,Ut=null,_a=!1,b.classList.remove("source-no-browser"),b.classList.remove("source-favorites"),t==="library"?(N=oe,He=_t(),me()):t==="favorites"?(b.classList.add("source-favorites"),Ii()):De.has(t)?(ra(t),A(p,"Tip: select tracks (Shift/Ctrl-click) and press Delete to remove them.")):(U="library",Me(),N=oe,me()),ea(),$e()}let lt=$t(de,{onChange:ms,allLabel:"(All genres)",renderItemActions:t=>wt.has(t.id)?"":Ta(t.label),onItemAction:(t,o,c)=>{t==="edit"&&as(o,c)}});function br(t){let o=t.url||"";if(/(?:^|\/\/)(?:www\.)?archive\.org\//.test(o))return o;let c=`${t.label||""} AND mediatype:${i()==="video"?"movies":"audio"}`;return`https://archive.org/search?query=${encodeURIComponent(c)}`}function ns(t){let o=br(t),c="Visit on the Internet Archive",u=`<button type="button" class="ia-row-ialink" data-action="ialink" data-url="${se(o)}" title="${c}" aria-label="${c}" tabindex="-1">\u2197</button>`;return Ta(t.label)+u}let tt=$t(pe,{onChange:hs,allLabel:"(All artists)",renderItemActions:ns,onItemAction:(t,o,c)=>{if(t==="edit")rs(o,c);else if(t==="ialink"){let u=c?.dataset?.url;u&&window.open(u,"_blank","noopener")}}}),ye=$t(xe,{onChange:bs,allLabel:"(All albums)",renderItemActions:t=>{if(i()!=="video")return"";let o=!!t._album&&v.has(t._album.url);return`<button type="button" class="ia-row-fav${o?" on":""}" data-action="fav" title="Add to the communal favourites" aria-label="Favourite" tabindex="-1">${o?"\u2605":"\u2606"}</button>`},onItemAction:(t,o)=>{t==="fav"&&ds(o)}});function Oe(){let t=vt.filter(o=>!wt.has(o.id)).map(o=>({id:o.id,label:o.label,title:o.label})).sort(Zt);lt.setItems(t)}function Ea(t){return!wt.has(t.topic)&&!De.has(t.topic)}function os(t){return wt.has(t.topic)}function ss(t){let o=vt.find(c=>c.id===t);return o?La(o._lib):Fe()}function Ca(t){return t._lib?La(t._lib):Fe()}function jt(t){let o=Ne.find(c=>c.id===t);return o?La(o._lib):Fe()}function ls(t){let o=re.find(c=>os(c)&&c.url===t);return o?La(o._lib):Fe()}async function Ia(){try{m=(await qa(Fe()?.baseURI)).filter(o=>o.bucket===f()),v=new Set(m.flatMap(o=>[o.item,o.link].filter(Boolean)))}catch{}try{me(),cs(),xi()}catch{}}function cs(){i()==="video"&&ye.setItems(ye.getItems())}function ds(t){let c=ye.getItems().find(u=>u.id===t)?._album;if(c){if(v.has(c.url)){Da(c.url);return}r?.dispatchEvent(new CustomEvent("item-favourite",{detail:{item:c.url,bucket:"MovingImage",schemaType:"VideoObject",name:c.name||c.url,link:c.url,download:!1,thumbnail:c.thumbnail||"",libraryBase:Fe()?.baseURI},bubbles:!0,composed:!0}))}}async function Ai(t){let o=t.url||"";if(/\/download\//.test(o)||/\.(mp4|m4v|ogv|ogg|webm|mov|mkv|avi|mpe?g)(\?|#|$)/i.test(o)){let w={id:o,url:o,name:t.name||o,time:"",artist:"",album:t.name||"",albumUrl:""};Ge(w,{autoplay:!1}),vr(w,{name:t.name});return}let u={url:o,name:t.name};A(p,"Loading film\u2026");let g=null;try{g=Di(await ta(u))}catch{}if(!g){A(p,""),na(`Can't play \u201C${t.name}\u201D \u2014 no playable video found at the Internet Archive.`);return}A(p,""),Ge(g,{autoplay:!1}),vr(g,u)}function us(t){if(!t||!t.url)return;if(Pa(t.url)){Da(t.url);return}let o=i()==="video";r?.dispatchEvent(new CustomEvent("item-favourite",{detail:{item:t.url,bucket:o?"MovingImage":"Sound",schemaType:o?"VideoObject":"AudioObject",name:t.name||t.url,link:t.url,download:!0,libraryBase:Fe()?.baseURI},bubbles:!0,composed:!0}))}function Pa(t){return v.has(t)}async function Da(t){let o=m.find(u=>u.item===t||u.link===t);if(!o)return!1;let c=0;for(let u of o.contributors||[])if(u.file)try{await fa(u.file),c++}catch(g){A(p,`Couldn't remove favourite: ${g.message}`)}return c&&document.dispatchEvent(new CustomEvent("omp:favourited")),c>0}function gr(){let t=lt.getSelection();return t.size===0?re.filter(Ea):re.filter(o=>t.has(o.topic)&&Ea(o))}function yr(t){if(!t)return!1;if(t.sourcePlaylist)return!0;let o=u=>(u||"").trim().toLowerCase(),c=o(t.label);for(let u of Ne)if(u.name&&o(u.name)===c||u.maker&&o(u.maker)===c)return!0;if(t.localData&&t.node){let u=Ca(t);try{return!!u?.store&&ti(u.store,t.node).length>0}catch{return!1}}return!1}function ve(){let o=gr().map(w=>({id:Ft(w),label:w.label,title:w.label,url:w.url,_b:w})),c=o.filter(w=>yr(w._b)).sort(Zt),u=o.filter(w=>!yr(w._b)).sort(Zt),g=i()==="video";u.forEach((w,x)=>{w.className="ia-item-raw",w.ariaLabel=`${w.label} \u2014 raw archive.org search, not curated`,x===0&&!g&&(w.section="Raw \u2014 uncurated archive.org searches")}),tt.setItems([...c,...u])}async function $i(t){let o=Ft(t);if(Lt.has(o))return Lt.get(o);if(t.localData&&t.node){let g=Ca(t);if(g?.store){let w=(async()=>{let x=t.sourcePlaylist?Ya(g.store,[String(t.sourcePlaylist).split("#")[0]]):ro(g.store,g.baseURI);return await Sa(g,x)&&ve(),ti(g.store,t.node).map($=>({...$,_artist:t}))})();return Lt.set(o,w),w}}let c=Mr(t.url);if(!c){let g=Promise.resolve([]);return Lt.set(o,g),g}let u=Ur(c,Nt,{mediaType:i()}).then(g=>g.map(w=>({...w,_artist:t}))).catch(g=>(console.error("getAlbums",g),[]));return Lt.set(o,u),u}let Ma=0,at=null;function fs(){return xe.closest(".ia-column")}function Ua(t){let o=fs();if(!o)return;let c=o.querySelector(".ia-album-note");if(!t){c?.remove();return}c||(c=document.createElement("div"),c.className="ia-album-note",o.querySelector(".ia-column-header")?.after(c)),c.textContent=t}function Ti(){at&&(at=null,Ua(""))}function Ei(){ye.setItems(at.map(t=>{let o=i()==="video"?t.name:`${t._artist.label} \u2014 ${t.name}`;return{id:t.url,label:o,title:o,_album:t}}))}async function Ue(){if(U==="favorites")return;if(at){Ei(),At();return}let t=or(),o=tt.getSelection();if(o.size===0){ye.setMessage(t.chooseArtist),At();return}let c=++Ma;ye.setMessage(t.loadingAlbums);let g=gr().filter(k=>o.has(Ft(k))),w=await Promise.all(g.map($i));if(c!==Ma)return;let x=w.flat();if(!x.length){ye.setMessage(t.noAlbums),At();return}ye.setItems(x.map(k=>{let $=i()==="video"?k.name:`${k._artist.label} \u2014 ${k.name}`;return{id:k.url,label:$,title:$,_album:k}})),(Ut||_a)&&i()!=="video"&&ye.setSelection(x.map(k=>k.url),{notify:!1}),At()}async function ta(t){let o=t.url;if(Rt.has(o))return Rt.get(o);if(t._local&&t._releaseNode){let T=Ca(t._artist);if(T?.store){let _=String(t._releaseNode.value||t._releaseNode).split("#")[0],C=(async()=>(await Sa(T,[_]),bo(T.store,t._releaseNode).map(F=>({id:F.url,url:F.url,name:F.name,time:F.time||"",artist:t._artist?.label||"",album:t.name,albumUrl:t.url,node:F.node||null,_lib:t._artist?._lib}))))();return Rt.set(o,C),C}}let c=qo(t.url);if(!c)return Promise.resolve([]);let u=Array.isArray(t._creator)?t._creator[0]:t._creator,g=u?String(u).trim():"",x=/^(various(\s+artists?)?|v\.?a\.?)$/i.test(g)?"":g,k=t._artist?.label||"",$=Fn(c,Nt,{mediaType:i()}).then(T=>(T||[]).map(_=>({id:_.url,url:_.url,name:_.name,time:_.time||"",artist:_.artist||x||k,album:t.name,albumUrl:t.url,_lib:t._artist?._lib,_rights:_._rights||t._rights||null,_detailUrl:_._detailUrl||t._detailUrl||t.url||""}))).catch(T=>(console.error("getTracks",T),[]));return Rt.set(o,$),$}let Ci=0,He="Choose an album to add tracks.";function _t(){return tt.getSelection().size===0?"Choose an artist to see albums.":ye.getSelection().size===0?"Choose an album to add tracks.":"No tracks in selected album(s)."}async function At(){if(U!=="library"||i()==="video")return;let t=ye.getSelection();if(!t.size){N=oe,He=_t(),me();return}let o=++Ci;oe.length||(He="Loading tracks\u2026",N=oe,me());let u=ye.getItems().filter(k=>t.has(k.id)).map(k=>k._album),g=await Promise.all(u.map(ta));if(o!==Ci)return;let w=new Set(oe.map(k=>k.id)),x=g.flat().filter(k=>!w.has(k.id));x.length&&(oe=oe.concat(x),$e()),N=oe,He=_t(),la(),me()}function Ii(){if(i()==="video"){wr(),b.classList.remove("has-video");try{h.pause()}catch{}}Pi(),Ia()}function Pi(){let t=new Map(oe.map(o=>[o.url,o]));N=m.map(o=>{let c=o.item||o.link,u=t.get(c)||o.link&&t.get(o.link)||o.item&&t.get(o.item);return u||{id:c,url:o.link||o.item,name:o.canonicalTitle||"Untitled",time:"",artist:"",album:"Favorites",albumUrl:"",thumbnail:o.thumbnail||""}}),He=d?"No favourite films yet \u2014 tap \u2606 on a film to add one.":"No favourites yet \u2014 tap \u2606 on a track to add one.",la(),me()}function ps(t){let o=t.name||"",c=t.artist||"",u=t.album||"";if(!o&&!c&&!u){let g=(t.label||"").split(" \u2014 ");g.length>=3?(c=g[0],u=g[1],o=g.slice(2).join(" \u2014 ")):g.length===2?(u=g[0],o=g[1]):o=t.label||""}return{id:t.url,url:t.url,name:o||t.label,artist:c,album:u,albumUrl:t.source||"",time:"",node:t.node||null,_lib:t._lib}}let aa=0;function ra(t){let o=++aa,c=jt(t);if(c?.loadDocs){let u=Io(c,t),g=re.some(w=>w.topic===t&&w.url);if(u.length&&!g){N=[],He="Loading playlist\u2026",me(),Sa(c,u).then(()=>{o!==aa||U!==t||(Ra(t,o),ve())}).catch(()=>{o===aa&&U===t&&Ra(t,o)});return}u.length&&Sa(c,u).then(w=>{w&&o===aa&&U===t&&Ra(t,o)}).catch(()=>{})}Ra(t,o)}function Ra(t,o){N=re.filter(g=>g.topic===t).map(ps),He="This playlist is empty.",la(),me();let u=new Map;for(let g of N)g.albumUrl&&(u.has(g.albumUrl)||u.set(g.albumUrl,[]),u.get(g.albumUrl).push(g));for(let[g,w]of u){let x={url:g,name:w[0].album||"",_artist:{label:w[0].artist||""}};ta(x).then(k=>{if(o!==aa)return;let $=new Map(k.map(_=>[_.url,_])),T=!1;for(let _ of w){let C=$.get(_.url);C&&(C.time&&!_.time&&(_.time=C.time,T=!0),C.name&&_.name!==C.name&&(_.name=C.name,T=!0))}T&&U===t&&(la(),me())}).catch(()=>{})}}function me(){if(Y&&!N.includes(Y)){let c=N.find(u=>u.url===Y.url);c&&(Y=c)}let t=U==="favorites",o=nt();if(ln(ie,yt,N,{currentTrackId:Y?.id,isFav:c=>Pa(c.url),favouritable:!0,wallDelete:t&&o,emptyMessage:He,useKebab:c=>t||!c.node?!1:ji(c)?!0:!!(c.albumUrl&&/(?:^|\/\/)(?:www\.)?archive\.org\//.test(c.albumUrl))}),zi?.applySelection(),S){let c=N.length;if(!c)S.textContent="";else{let u=0;for(let $ of N)u+=sa($.time);let g=Math.round(u/60),w=Math.floor(g/60),x=g%60,k=u>0?w>0?` \xB7 ${w}h ${String(x).padStart(2,"0")}m`:` \xB7 ${x}m`:"";S.textContent=`${c} track${c===1?"":"s"}${k}`}}}function ia(){return U==="library"?!1:(U="library",st.setSelection([],{notify:!1}),ea(),!0)}function ms(t){ia(),Ti(),ve(),Ue(),$e()}function hs(t){if(ia(),Ti(),Ut=null,_a=!1,t&&t.size===1){let o=gr().filter(c=>t.has(Ft(c)));o.length===1&&(_a=yr(o[0]),o[0].sourcePlaylist&&(Ut=o[0].sourcePlaylist))}Ue(),$e()}function bs(t){if(i()==="video"){gs(t);return}ia()&&(oe=[]),At(),$e()}function Di(t){if(!t||!t.length)return null;let o=t[0],c=sa(o.time);for(let u of t){let g=sa(u.time);g>c&&(o=u,c=g)}return o}let Mi=0;async function gs(t){ia();let o=[...t],c=o[o.length-1];if(!c){N=[],me(),$e();return}ye.setSelection([c],{notify:!1});let g=ye.getItems().find($=>$.id===c)?._album;if(!g)return;let w=++Mi;A(p,"Loading film\u2026");let x=await ta(g);if(w!==Mi)return;let k=Di(x);if(!k){A(p,""),na(`Can't play \u201C${g.name}\u201D \u2014 no playable video found at the Internet Archive.`);return}N=[k],A(p,""),Ge(k,{autoplay:!1}),vr(k,g),$e()}let ys=null;function vr(t,o){if(!P)return;j.textContent=o?.name||t.album||t.name||"Untitled",q.textContent=t.time?`Running time: ${t.time}`:"";let c=t.albumUrl||o?.url||"";if(ue.innerHTML=c?`See more about this film at the <a href="${se(c)}" target="_blank" rel="noopener">Internet Archive</a>`:"",ne){let u=t._rights||o?._rights||null;ne.textContent=`\u2696 ${u?u.label:"Rights unknown"}`}ys={track:t,album:o},b.classList.add("film-intro")}function wr(){b.classList.remove("film-intro")}if(P){let t=()=>{wr(),h.play().catch(()=>{})};P.addEventListener("click",t),P.addEventListener("keydown",o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),t())}),h.addEventListener("play",wr)}function vs(){Y&&(Mt.push({track:Y}),Mt.length>200&&Mt.shift())}let xr=null;function na(t,o={}){let c=b.querySelector(".ia-notice");c||(c=document.createElement("div"),c.className="ia-notice",c.setAttribute("role","alert"),c.innerHTML=Hn,c.querySelector(".ia-notice-close").addEventListener("click",()=>kr()),b.appendChild(c)),c.querySelector(".ia-notice-msg").textContent=t,c.classList.add("show"),clearTimeout(xr),o.sticky||(xr=setTimeout(kr,o.duration||4e3))}function kr(){clearTimeout(xr),b.querySelector(".ia-notice")?.classList.remove("show")}function Ge(t,o={}){if(!t)return;kr();let c=o.autoplay!==!1;Y&&Y.id!==t.id&&!o.fromHistory&&vs(),Y=t,c&&(Do=!0),h.src=Xa(t.url),h.load(),Xt=i()==="video",b.classList.toggle("has-video",Xt),Fa(M,Ui(t)),A(p,""),$e(),me(),c&&h.play().catch(u=>{if(u.name==="NotAllowedError"||u.name==="AbortError"){console.warn("Playback deferred:",u.name),A(p,"Press \u25B6 to start playback");return}A(p,`Error playing ${t.name}`),na(`Can't play \u201C${t.name}\u201D. The media may be unavailable or in an unsupported format.`),console.error("Playback error:",u)})}function Ui(t){let o=t.albumUrl?` <a class="ia-link" href="${se(t.albumUrl)}" target="_blank" rel="noopener">[IA]</a>`:"",c=t._rights?` \xB7 <span class="ia-np-rights">\u2696 ${se(t._rights.label)}</span>`:"";if(i()==="video")return`Now playing: ${se(t.album||t.name||"Untitled")}${c}${o}`;let u=[t.artist,t.album,t.name].filter(Boolean).map(se),g=N.findIndex(x=>x.id===t.id),w=g>=0&&N.length>1?` (${g+1}/${N.length})`:"";return`Now playing: ${u.join(" \u2014 ")}${w}${c}${o}`}async function Na(){let t=re.filter(o=>Ea(o)&&o.url);if(!(!t.length||lr)){lr=!0;try{for(let o=0;o<6;o++){let c=ur(t),u=await $i(c);if(!u.length)continue;let g=ur(u),w=await ta(g);if(!w.length)continue;let x=ur(w);U!=="library"&&(st.setSelection(["library"],{notify:!1}),mt("library")),lt.setSelection([c.topic],{notify:!1}),ve(),tt.setSelection([Ft(c)],{notify:!1}),await Ue(),ye.setSelection([g.url],{notify:!1}),await At(),Ge(x);return}A(p,"Could not find a random track to play")}finally{lr=!1}}}function ws(){return Y?N.findIndex(t=>t.id===Y.id):-1}function Sr(){if(Dt==="random"){Na();return}if(Jt==="one"&&Y){h.currentTime=0,h.play().catch(()=>{});return}let t=ws();if(t<0){N[0]&&Ge(N[0]);return}if(t+1<N.length){Ge(N[t+1]);return}if(Jt==="all"&&N[0]){Ge(N[0]);return}A(p,"Reached the end of the list")}function xs(){if(!Mt.length){A(p,"No previous track");return}let t=Mt.pop();Ge(t.track,{fromHistory:!0})}function Lr(t){Dt=t,$e()}function Ri(t){Jt=t,$e()}on(Le),Le.addEventListener("mouseup",()=>$e());let Ni=b.querySelector(".ia-sources-resize");Ni&&Ni.addEventListener("mousedown",t=>{t.preventDefault();let o=t.clientX,c=b.querySelector(".ia-sources")?.offsetWidth||260,u=w=>{let x=Math.max(140,Math.min(600,c+(w.clientX-o)));b.style.setProperty("--ia-sources-width",x+"px")},g=()=>{document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",g),b.classList.remove("resizing-sources"),$e()};document.addEventListener("mousemove",u),document.addEventListener("mouseup",g),b.classList.add("resizing-sources")});let Fi=b.querySelector(".ia-browser-resize");Fi&&Fi.addEventListener("mousedown",t=>{t.preventDefault();let o=t.clientY,c=b.querySelector(".ia-browser")?.offsetHeight||220,u=w=>{let x=Math.max(120,Math.min(640,c+(w.clientY-o)));b.style.setProperty("--ia-browser-height",x+"px")},g=()=>{document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",g),b.classList.remove("resizing-browser"),$e()};document.addEventListener("mousemove",u),document.addEventListener("mouseup",g),b.classList.add("resizing-browser")});let Ie=Yt();if(Ie){let t=!Lo;Lo=!0,t&&(Ie._manualInit=!0,Ie.addEventListener("click",()=>{try{Ie.isLoggedIn||ii()}catch{}},!0)),document.addEventListener("omp:reapply-gating",ka);let o=!1,c=async u=>{A(p,"Loading library from your pod\u2026");let g=await Po(u);return g.ok||A(p,`Couldn't load the pod library: ${g.err}. Staying on the local library.`),!!g.ok};document.addEventListener("sol-login",async u=>{let g=u.detail?.webId||Ie.webId||"";if(!g)return;let w=jl();if(w){try{let x=(w.search||"")+(w.hash||"");x&&location.search+location.hash!==x&&Mt.replaceState(null,"",location.pathname+x)}catch{}So()}console.info("[omp] sol-login handler upgrade fired: webId=",g);try{Jr(!0),kt=!0,ft=!1,Pt=!1;let x=xt().find(k=>k.store&&!k.config.solid&&gt(k.config.url));if(x){try{ko(g,new URL(x.config.url,location.href).href)}catch{}et(x)}fi(),ka(),A(p,`Signed in: ${g} \u2014 your library is now writable.`)}catch(x){console.warn("[omp] pod login upgrade failed:",x),A(p,`Signed in, but: ${x.message}.`)}if(t&&!o&&Bl()){o=!0,setTimeout(async()=>{try{await Hi()}finally{o=!1}},1500);return}if(t&&!o&&Hl()){o=!0,setTimeout(async()=>{try{await Gi()}finally{o=!1}},1500);return}}),document.addEventListener("sol-logout",()=>{Je=null,Jr(!1),kt=!1,ft=!0,Pt=!1;let u=xt().find(g=>g.store&&!g.config.solid&&gt(g.config.url));u&&et(u),fi(),ka(),A(p,"Signed out. Viewing in guest mode \u2014 you may browse, search, listen, and favourite anything.")}),t&&Promise.resolve().then(()=>Ie.initialize()).then(()=>document.dispatchEvent(new CustomEvent("omp:reapply-gating"))).catch(u=>console.warn("sol-login init skipped (no auth library?):",u?.message||u)),Ie.isLoggedIn||(ft=!0,A(p,"Viewing in guest mode. You may browse, search, listen, and favourite anything."))}let _r=b.querySelector(".ia-artist-search");if(_r){let t=_r.querySelector("input");_r.addEventListener("submit",async o=>{o.preventDefault();let c=t.value.trim();if(!c)return;let u=Fe(),g=new URL("https://archive.org/search");g.searchParams.set("query",`creator:"${c}"`),g.searchParams.append("and[]",`mediatype:"${i()==="video"?"movies":"audio"}"`),ia(),lt.setSelection([],{notify:!1}),tt.setSelection([],{notify:!1}),st.setSelection([],{notify:!1}),ea(),at=[],Ua(`Searching \u201C${c}\u201D\u2026`),ye.setMessage("Searching\u2026");let w=++Ma,x=[];try{x=await Ur(Mr(g.href),Nt,{mediaType:i()})}catch($){console.error("find-artist search",$)}if(w!==Ma)return;let k={label:c,_lib:u?.config.id};if(at=x.map($=>({...$,_artist:k})),!at.length){Ua(""),ye.setMessage(`No audio results for \u201C${c}\u201D.`);return}Ua("Temporary search results \u2014 add tracks to a playlist to keep them."),Ei(),At(),A(p,`${at.length} result${at.length===1?"":"s"} for \u201C${c}\u201D.`)})}let oa=sn(ge,{onSort:()=>{la(),me(),$e()}});function sa(t){if(!t)return 0;let o=String(t).split(":").map(Number);if(o.length===2)return o[0]*60+o[1];if(o.length===3)return o[0]*3600+o[1]*60+o[2];let c=parseFloat(t);return isFinite(c)?c:0}function ks(t,o,c){if(c==="time")return sa(t.time)-sa(o.time);if(c==="fav"){let w=Pa(t.url)?1:0,x=Pa(o.url)?1:0;return w-x}let u=(t[c]||"").toString(),g=(o[c]||"").toString();return u.localeCompare(g,void 0,{sensitivity:"base",numeric:!0})}function la(){let{col:t,dir:o}=oa.getSort();if(!t)return;let c=o==="asc"?1:-1;N=N.slice().sort((u,g)=>c*ks(u,g,t)),U==="library"&&(oe=N)}let zi=nn(ie,{onPlay:t=>{let o=N.find(c=>c.id===t);if(o){if(Dt==="random"&&Lr("ordered"),i()==="video"){Ai(o);return}Ge(o)}},onRemove:(t,o)=>{qi(t,o)},onEdit:(t,o)=>{Ss(t,o)},onFavourite:t=>us(t)});Ia(),document.addEventListener("omp:favourited",Ia);function ji(t){return!t||!t.node?!1:nt()?!0:U&&De.has(U)?t.node.value.startsWith(U+"#"):!1}function Ss(t,o){let c=N.find($=>$.id===t);if(!c)return;let u=c.albumUrl||"",g=/(?:^|\/\/)(?:www\.)?archive\.org\//.test(u),w=U&&De.has(U),x=[];ji(c)&&x.push({id:"edit",label:"Edit\u2026"}),g&&x.push({id:"visit",label:"Visit on the Internet Archive"}),x.push({id:"remove",label:w?"Remove from playlist":"Remove from list",danger:!0});let k=$=>{if($==="visit"){u&&window.open(u,"_blank","noopener");return}if($==="remove"){qi([t],{fromButton:!0});return}if($==="edit"){Ls(t);return}};if(x.length<=1){k(x[0]?.id||"remove");return}da(o,x,k)}async function Ls(t){let o=N.find(w=>w.id===t);if(!o||!o.node){A(p,"Can't edit this track (no RDF node).");return}let c=jt(U)||Fe();if(!c)return;let u=ho(c.store,o.node),g=U&&De.has(U);hn({values:{title:o.name,artist:o.artist,album:o.album},siblingCount:u,actions:[],onSave:async({title:w,artist:x,album:k})=>{let $=await mo(c.store,c.baseURI,o.node,{title:w,artist:x,album:k});if(!Re($,`edit "${o.name}"`))return;let T=re.find(_=>_.node&&_.node.value===o.node.value);if(T&&(T.name=w,T.artist=x,T.album=k,T.label=[x,k,w].filter(Boolean).join(" \u2014 ")||w),k!=null)for(let _ of re)_.source&&o.albumUrl&&_.source===o.albumUrl&&(_.album=k,_.label=[_.artist,_.album,_.name].filter(Boolean).join(" \u2014 ")||_.name);if(g)dr(U),ra(U);else{for(let _ of N)_.node&&_.node.value===o.node.value&&(_.name=w,_.artist=x),k!=null&&o.albumUrl&&_.albumUrl===o.albumUrl&&(_.album=k);o.albumUrl&&Rt.delete(o.albumUrl),me()}A(p,`Updated "${w}".`)}})}async function qi(t,o={}){if(!t||!t.length)return;let c=new Set(t);if(U==="library"&&!Ut){oe=oe.filter(T=>!c.has(T.id)),N=oe,He=_t(),me(),$e();return}if(U==="favorites"){if((o.fromButton||t.length>1)&&!confirm(t.length===1?"Remove this favourite from the communal wall?":`Remove ${t.length} favourites from the communal wall?`))return;let _=N.filter(C=>c.has(C.id));for(let C of _)await Da(C.url);return}let u=U==="library"?Ut:null;if(o.fromButton||t.length>1){let T=u||U,_=Ne.find(F=>F.id===T)?.label||(U==="favorites"?"Favorites":"this playlist"),C=t.length===1?`Remove this track from "${_}"?`:`Remove ${t.length} tracks from "${_}"?`;if(!confirm(C))return}let w=N.filter(T=>c.has(T.id)),x=U==="favorites"?Kr(Fe()?.baseURI):u||U,k=[];for(let T of w){let _=U==="favorites"?ls(T.url):jt(x);if(!_)continue;let C=await po(_.store,_.baseURI,x,T.url);if(Re(C,`remove "${T.name}" from playlist`)){k.push(T);for(let F=re.length-1;F>=0;F--)if(re[F].url===T.url&&re[F].topic===x){re.splice(F,1);break}}}let $=new Set(k.map(T=>T.id));N=N.filter(T=>!$.has(T.id)),u&&(oe=oe.filter(T=>!$.has(T.id))),k.length&&U!=="favorites"&&dr(x),me()}cn({audio:h,playBtn:qe,prevBtn:Se,nextBtn:We,seekSlider:I,timeCur:G,timeDur:ae,volumeSlider:L},{onPlayToggle:()=>{if(!Y){N[0]?Ge(N[0]):Na();return}if(!h.src||h.src!==Xa(Y.url)){Ge(Y);return}h.paused?h.play().catch(()=>{}):h.pause()},onPrev:()=>xs(),onNext:()=>Sr()}),h.addEventListener("volumechange",()=>$e());let Bi=0;h.addEventListener("timeupdate",()=>{let t=Date.now();t-Bi<5e3||(Bi=t,$e())}),h.addEventListener("pause",()=>$e());let ca=0,_s=5;h.addEventListener("playing",()=>{ca=0}),h.addEventListener("error",()=>{if(!h.src||!Y)return;let t=h.error;if(console.warn("Audio error",t?.code,t?.message,"for",Y.url),ca++,ca>=_s){A(p,`Stopped: ${ca} tracks in a row couldn't be played.`),na(`Stopped \u2014 ${ca} items in a row couldn't be played. The source may be offline.`,{sticky:!0});return}A(p,`Skipped (couldn't play "${Y.name}")`),i()==="video"&&na(`Can't play \u201C${Y.name}\u201D. The media may be unavailable or in an unsupported format.`),Dt==="random"?Na():Sr()}),h.addEventListener("ended",()=>{if(Jt==="one"){h.currentTime=0,h.play().catch(()=>{});return}if(Dt==="random"){Na();return}Sr()}),ga.addEventListener("click",()=>{Ze(!1),za()}),J?.addEventListener("click",()=>{Ze(!1),za({url:"./assets/ia-help.html",title:"Help",useBundle:!1,size:"large"})}),Ee?.addEventListener("click",()=>{Ze(!1),za({url:"./assets/ia-login-help.html",title:"Solid login help",useBundle:!1,size:"large"})}),Qe?.addEventListener("click",()=>{Ze(!1);let t=Fe();if(!t?.store){A(p,"Enable a library to view deleted items.");return}for(let c of xt())et(c);let o=Gt(t.baseURI);if(!De.has(o)){A(p,"Nothing has been deleted yet.");return}mt(o)});async function Oi(){let t=location.href.split("#")[0].split("?")[0],o=/\/[^/]*\.[^/]+$/.test(t)?t:new URL("index.html",t.endsWith("/")?t:t+"/").href,c=await fetch(o),u=await c.text();if(!c.ok||!/<html[\s>]|<ia-player[\s>]|<script[\s>]/i.test(u))throw new Error(`won't install: ${o} returned ${c.status} and not HTML (${u.length} bytes). The app page must be reachable as a file, not a container listing.`);u=u.replace(/(?:\.?\/)?(?:dist\/)?ia-player(?:\.esm)?\.js/g,"./ia-player.js"),u=u.replace(/(<sol-default\b[^>]*?)\s+solid-kitchen\b(\s*=\s*(?:"[^"]*"|'[^']*'|\S+))?/gi,"$1").replace(/<script\b[^>]*>(?:(?!<\/script>)[\s\S])*?window\.SolidKitchen(?:(?!<\/script>)[\s\S])*?<\/script>\s*/gi,"").replace(/window\.SolidKitchen\s*=\s*true/gi,"window.SolidKitchen = false");let g="";for(let k of document.querySelectorAll("script[src]")){let $=k.getAttribute("src")||"";if(/ia-player(?:\.esm)?\.js(?:[?#]|$)/.test($)){g=k.src;break}}g||(g=new URL("dist/ia-player.js",o).href);let w=await fetch(g),x=await w.text();if(!w.ok||x.length<1e3||!/customElements|function|=>/.test(x))throw new Error(`won't install: ${g} returned ${w.status} and not the JS bundle (${x.length} bytes).`);return[{relPath:"index.html",body:u,contentType:"text/html"},{relPath:"ia-player.js",body:x,contentType:"text/javascript"}]}async function As(t){let o=t.baseURI,c=o.slice(0,o.lastIndexOf("/")+1),u=c.replace(/\/$/,"").split("/").pop()||"library",g=`libraries/${u}/`,w=t.config?.label||u;if(t.loadDocs)try{await t.loadDocs(Xr(t.store,t.baseURI))}catch(K){console.warn("[install] playlist force-load failed",K?.message||K)}let x=[],k=[],$=[];for(let K of ao(t.store,t.baseURI)){if(!K.startsWith(c)){console.warn("[install] SKIP playlist outside library",K);continue}let ee=K.slice(c.length);try{let E=await fetch(K),H=Ga(await E.text(),u,ee);x.push({relPath:g+ee,body:H,contentType:"text/turtle",skipIfExists:!0}),k.push(`<./${ee}>`),$.push(K)}catch(E){console.warn("[install] gather playlist FAILED",K,E?.message||E)}}let T=[];for(let K of Ya(t.store,$)){if(!K.startsWith(c)){console.warn("[install] SKIP release outside library",K);continue}let ee=K.slice(c.length);try{let E=await fetch(K),H=Ga(await E.text(),u,ee);x.push({relPath:g+ee,body:H,contentType:"text/turtle",skipIfExists:!0}),T.push(`<./${ee}>`)}catch(E){console.warn("[install] gather release FAILED",K,E?.message||E)}}let _=T.map(K=>K.replace(/>$/,"#it>")),C=`@prefix dct: <http://purl.org/dc/terms/>.
@prefix dcat: <http://www.w3.org/ns/dcat#>.
<#it>
    a dcat:Catalog ;
    dct:title ${JSON.stringify(w+" \u2014 releases")}${_.length?` ;
    dcat:dataset ${_.join(`,
                 `)}`:""} .
`,F=`@prefix dct: <http://purl.org/dc/terms/>.
@prefix dcat: <http://www.w3.org/ns/dcat#>.
<#it>
    a dcat:Catalog ;
    dct:title ${JSON.stringify(w+" \u2014 playlists")}${k.length?` ;
    dcat:dataset ${k.join(`,
                 `)}`:""} .
`,Z=[{relPath:g+"releases.ttl",body:C,contentType:"text/turtle"},{relPath:g+"playlists.ttl",body:F,contentType:"text/turtle"}];for(let K of["index.ttl","agents.ttl","genres.ttl"]){let ee=await fetch(c+K);if(!ee.ok)throw new Error(`couldn't read ${K} (${ee.status})`);let E=Ga(await ee.text(),u,K);Z.push({relPath:g+K,body:E,contentType:"text/turtle"})}return{files:[...Z,...x],podLibPrefix:g,title:w}}function $s(){let t=[...document.querySelectorAll("ia-player[src]")].map(o=>{try{return new URL(o.getAttribute("src"),location.href).href}catch{return null}}).filter(o=>o&&gt(o));if(!t.length){let o=e.find(c=>!c.solid&&gt(c.url));o&&t.push(new URL(o.url,location.href).href)}return[...new Set(t)]}async function Hi(){if(Ze(!1),!Ie||!Ie.isLoggedIn){ql(),ii(),A(p,"Choose your Solid provider to sign in \u2014 the install resumes automatically once you\u2019re signed in."),fr()||A(p,'Open the gear menu and click "Log in" to sign in, then choose Install on my Pod again.');return}let t=Ie.webId,o=Ie.fetchFor(t),c=$s();if(!c.length){A(p,"No local library available to install.");return}let u=[];try{u=await Gr(o,t)}catch{}u.length||(u=[new URL("/",t).href]);let g=u.map((E,H)=>`  ${H+1}. ${E}`).join(`
`),w=prompt(`Install Open Media Player \u2014 choose where it goes.

Enter a number, or type a full container URL:

`+g,"1");if(w==null||!w.trim())return;let x,k=parseInt(w,10);if(Number.isInteger(k)&&u[k-1]?x=u[k-1]:/^https?:\/\/.+/.test(w.trim())&&(x=w.trim()),!x){A(p,"Install cancelled \u2014 no valid location chosen.");return}let $=x.endsWith("/")?x:x+"/",T=prompt("Confirm or edit the install location:",new URL("open_media_player/",$).href);if(!T||!T.trim())return;let _=T.trim();_.endsWith("/")||(_+="/");let C=[];try{C=await Oi()}catch(E){A(p,`Couldn't read the app files to install: ${E.message}`);return}let F=[];for(let E of c){let H=a.find(he=>he.baseURI===E&&he.store);if(!H)try{H=await bt({id:E,url:E,enabled:!0})}catch{H=null}if(!H||!H.store){console.warn("[install] skipping unreadable library",E);continue}try{let he=await As(H);C.push(...he.files),F.push({podLibPrefix:he.podLibPrefix,title:he.title})}catch(he){A(p,`Couldn't prepare ${E} to install: ${he.message}`);return}}if(!F.length){A(p,"No readable libraries to install.");return}console.info(`[install] writing ${C.length} files (${F.length} libraries) to ${_}`),A(p,`Installing ${C.length} files to ${_}\u2026`);let Z=await Qr(o,_,C,(E,H,he)=>{(E===H||E%10===0)&&A(p,`Installing ${E}/${H}: ${he}`)}),K=!1;try{let E=(await Vn(o,t)).typeIndex;if(E||(E=await Yn(o,t)),E){for(let H of F){let he=_+H.podLibPrefix+"index.ttl";await Wa(o,E,{id:"omp-pod-"+H.podLibPrefix.replace(/[^a-z0-9]+/gi,"-").replace(/-+$/,""),url:he,label:`${H.title} (my pod)`}),ko(t,he)}K=!0}}catch(E){console.warn("type-index record skipped:",E?.message||E)}let ee=K?" Registered in your type index.":" (type index not updated).";A(p,Z.ok?`Installed ${F.length} ${F.length===1?"library":"libraries"} \u2014 open ${_}index.html (${Z.put} written${Z.skipped?`, ${Z.skipped} kept`:""}).${ee}`:`Installed ${Z.put} files with ${Z.failed.length} problem(s): ${Z.failed.slice(0,3).join("; ")}${ee}`)}Ve?.addEventListener("click",Hi),Kt?.addEventListener("click",Vo);async function Gi(){if(Ze(!1),!Ie||!Ie.isLoggedIn){Ol(),ii(),A(p,"Choose your Solid provider to sign in \u2014 the app update resumes automatically once you\u2019re signed in."),fr()||A(p,'Open the gear menu and click "Log in" to sign in, then choose Update app on Pod again.');return}let t=Ie.webId,o=Ie.fetchFor(t),c="",u=Fl();if(u){let E=u.indexOf("libraries/");E>0&&(c=u.slice(0,E))}let g=[];try{g=await Gr(o,t)}catch{}g.length||(g=[new URL("/",t).href]);let w=g.map((E,H)=>`  ${H+1}. ${E}`).join(`
`),x=prompt(`Update app on Pod \u2014 choose where the app lives.

Enter a number, or type a full container URL:

`+w,"1");if(x==null||!x.trim())return;let k,$=parseInt(x,10);if(Number.isInteger($)&&g[$-1]?k=g[$-1]:/^https?:\/\/.+/.test(x.trim())&&(k=x.trim()),!k){A(p,"Update cancelled \u2014 no valid location chosen.");return}let T=k.endsWith("/")?k:k+"/",_=(()=>{let E=location.href.split("#")[0].split("?")[0];return E.endsWith("/")?E:E.slice(0,E.lastIndexOf("/")+1)})(),C=(()=>{try{if(new URL(_).origin===new URL(T).origin&&!/^https?:\/\/(localhost|127\.0\.0\.1)/.test(_))return _}catch{}if(c)try{if(new URL(c).origin===new URL(T).origin)return c}catch{}return new URL("open_media_player/",T).href})(),F=prompt("Confirm the existing install location to overwrite:",C);if(!F||!F.trim())return;let Z=F.trim();Z.endsWith("/")||(Z+="/");let K;try{K=await Oi()}catch(E){A(p,`Couldn't read the app files: ${E.message}`);return}A(p,`Updating app (${K.length} files) at ${Z}\u2026`);let ee=await Qr(o,Z,K,(E,H,he)=>A(p,`Updating ${E}/${H}: ${he}`));A(p,ee.ok?`App updated \u2014 hard-reload ${Z}index.html (${ee.put} files written).`:`App update: ${ee.put} written, ${ee.failed.length} problem(s): ${ee.failed.slice(0,3).join("; ")}`)}ya?.addEventListener("click",Gi),Be?.addEventListener("click",()=>{Ze(!1),un({filter:Nt,onSave:t=>{Nt=t===null?{...$a}:t,jo(Nt),Lt.clear(),Rt.clear(),Ue(),A(p,"Filter updated.")}})}),it?.addEventListener("click",t=>{if(t.stopPropagation(),!N.length){A(p,"Nothing to randomize \u2014 the tracklist is empty.");return}let o=N;for(let c=o.length-1;c>0;c--){let u=Math.floor(Math.random()*(c+1));[o[c],o[u]]=[o[u],o[c]]}oa?.clear?.(),me(),A(p,`Randomized ${o.length} track${o.length===1?"":"s"}.`),$e()}),ba?.addEventListener("click",t=>{if(t.stopPropagation(),U!=="library"){A(p,"Clear tracklist only applies to the Library view. Use the playlist menu to delete a playlist.");return}h.pause(),h.removeAttribute("src"),h.load(),oe=[],N=[],Y=null,ye.setSelection([],{notify:!1}),zi?.clearSelection?.(),He=_t(),me(),Fa(M,""),A(p,"Library queue cleared."),$e()}),Ce?.addEventListener("click",async()=>{if(Ze(!1),!N.length){A(p,"Nothing to save \u2014 pick some albums first.");return}let t=Fe();if(!t){A(p,"Enable a library to save playlists.");return}let o=`Playlist ${Ne.length+1}`,c=prompt("Save current tracks as a playlist named:",o);if(!c||!c.trim())return;let u=c.trim();A(p,`Saving playlist "${u}"\u2026`);try{let w=(await ei(t.store,t.baseURI,u)).id;Ne.push({id:w,label:u,_lib:t.config.id}),De.add(w);let x=N.map($=>({label:[$.artist,$.album,$.name].filter(Boolean).join(" \u2014 ")||$.name,url:$.url,source:$.albumUrl})),k=await Ja(t.store,t.baseURI,w,x,{inlineTracks:!nt()});N.forEach(($,T)=>{re.push({node:k.nodes?.[T],label:x[T].label,topic:w,url:$.url,source:$.albumUrl,_lib:t.config.id})}),A(p,`Saved playlist "${u}" (${N.length} track${N.length===1?"":"s"}). Click it in Sources to view.`),Me()}catch(g){console.error("Save playlist failed:",g),A(p,`Could not save playlist: ${g.message}`)}}),Lr("ordered"),Ri("off"),ui(),Oe(),ve(),ye.setMessage(or().chooseArtist),me(),ka(),Fo();function Ts(){for(let t of xt()){if(!t.loadDocs)continue;let o=Xr(t.store,t.baseURI);o.length&&t.loadDocs(o).then(c=>{if(c&&(et(t),Me(),ve(),Qt&&De.has(Qt)&&U==="library")){let u=Qt;Qt=null,st.setSelection([u],{notify:!1}),mt(u)}}).catch(c=>console.warn("background playlist load failed:",c))}}return(window.requestIdleCallback||(t=>setTimeout(t,300)))(()=>Ts()),r.appAction=t=>{let o={help:".gear-help-link",about:".gear-help",loginHelp:".gear-login-help",filters:".gear-filters",viewDeleted:".gear-view-deleted",installPod:".gear-install-pod",updateApp:".gear-update-app",importMusic:".gear-import-music"}[t];o&&b.querySelector(o)?.click()},r.appState=()=>({guest:!nt(),real:xa(),webId:xa()&&Yt()?.webId||"",mediaType:i()}),r.getMediaElement=()=>h,r.nowPlayingText=()=>Y?[Y.artist,Y.album,Y.name].filter(Boolean).join(" \u2014 "):"",b}var Qa="ia-player:libraries";function vo(){return"lib-"+(crypto.randomUUID?.()??Date.now().toString(36)+Math.random().toString(36).slice(2,6))}function wo(e){return String(e).toLowerCase().replace(/\s+/g,"_").replace(/[^a-z0-9_]/g,"").replace(/_+/g,"_").replace(/^_|_$/g,"")||"library"}function Ml(e){if(typeof e!="string")return e;let a=e.replace("/ia-music-library/","/plugins/ia-player/libraries/internet_archive_music/");return(a==="./ia-music.ttl"||a.endsWith("/ia-music.ttl"))&&(a=a.replace(/(^|\/)ia-music\.ttl$/,(r,i)=>`${i}plugins/ia-player/libraries/internet_archive_music/index.ttl`)),a.includes("/plugins/ia-player/libraries/")||(a=a.replace(/(^|\/)libraries\/(internet_archive_music|internet_archive_movies)\//,(r,i,n)=>`${i}plugins/ia-player/libraries/${n}/`)),a}function gt(e){try{return new URL(e,location.href).origin===location.origin}catch{return!1}}function Ul(e){try{let a=localStorage.getItem(Qa);if(a){let r=JSON.parse(a),i=Array.isArray(r)?r.filter(n=>n&&!n.solid):[];if(i.length){let n=!1;for(let l of i){let s=Ml(l.url);s!==l.url&&(l.url=s,n=!0),l.id==="default"&&l.label==="Internet Archive"&&(l.label="Internet Archive Music",n=!0),l.enabled=gt(l.url)}return n&&ci(i),i}}}catch(a){console.warn("Could not read library configs from localStorage:",a)}return[{id:"default",label:"Internet Archive Music",url:e,enabled:!0}]}async function Rl(e){let a=String(e||"").match(/^(.*\/libraries\/)/)?.[1];if(!a)return[];let r;try{let l=await fetch(new URL("imported.ttl",new URL(a,location.href)).href,{headers:{accept:"text/turtle"}});if(!l.ok)return[];r=await l.text()}catch{return[]}let i=[],n=new Set;for(let l of r.matchAll(/<([^>]*index\.ttl[^>]*)>/g)){let s;try{s=new URL(l[1],new URL(a,location.href)).href.split("#")[0]}catch{continue}let d=s.match(/\/libraries\/([^/]+)\//)?.[1];if(!d||n.has(s)||d==="internet_archive_music"||d==="internet_archive_movies")continue;n.add(s);let f=d.replace(/_/g," ").replace(/\b\w/g,v=>v.toUpperCase());i.push({id:"imported-"+d,label:f,url:s,enabled:!1})}return i}function ci(e){try{localStorage.setItem(Qa,JSON.stringify((e||[]).filter(a=>a&&!a.solid)))}catch(a){console.warn("Could not write library configs to localStorage:",a)}}var ni="omp:lib-enabled";function Nl(e,a){if(e)try{let r=JSON.parse(localStorage.getItem(ni)||"{}");r[e]=!!a,localStorage.setItem(ni,JSON.stringify(r))}catch(r){console.warn("rememberLibEnabled failed:",r)}}function _o(e,a){try{let r=JSON.parse(localStorage.getItem(ni)||"{}");return e in r?!!r[e]:a}catch{return a}}var xo="omp:pod-library",Ao="omp:pod-library:last";function ko(e,a){try{let r=JSON.parse(localStorage.getItem(xo)||"{}");r[e]=a,localStorage.setItem(xo,JSON.stringify(r))}catch(r){console.warn("podLibRemember failed:",r)}try{localStorage.setItem(Ao,a)}catch{}}function Fl(){try{return localStorage.getItem(Ao)||null}catch{return null}}var Za="omp:auth-inflight",zl=12e4;function ii(){try{localStorage.setItem(Za,JSON.stringify({search:location.search,hash:location.hash,t:Date.now()}))}catch{}}function jl(){try{let e=JSON.parse(localStorage.getItem(Za)||"null");return e?Date.now()-(e.t||0)>zl?(localStorage.removeItem(Za),null):e:null}catch{return null}}function So(){try{localStorage.removeItem(Za)}catch{}}var oi="omp:install-pending";function ql(){try{localStorage.setItem(oi,"1")}catch{}}function Bl(){try{let e=localStorage.getItem(oi);return e&&localStorage.removeItem(oi),!!e}catch{return!1}}var si="omp:updateapp-pending";function Ol(){try{localStorage.setItem(si,"1")}catch{}}function Hl(){try{let e=localStorage.getItem(si);return e&&localStorage.removeItem(si),!!e}catch{return!1}}async function bt(e){try{let a=!!e.solid||gt(e.url),{store:r,baseURI:i,loadDocs:n}=await Wn(e.url,{shared:a,lazyReleases:!0,lazyPlaylists:!0}),l=Zn(r,i),{genres:s,bookmarks:d}=Vr(r,i,l),f=Yr(r,i);return{config:e,store:r,baseURI:i,loadDocs:n,mediaType:l,genres:s,bookmarks:d,playlists:f,error:null}}catch(a){return console.error("Failed to load library",e.url,a),{config:e,store:null,baseURI:null,loadDocs:null,mediaType:"audio",genres:[],bookmarks:[],playlists:[],error:a.message}}}var Lo=!1;async function ha(e,a){try{console.info("[omp] BUILD","omp 0.1.0 2026-07-02T23:44:16.077Z")}catch{}if(gn(e),a.length>1){let r=a.map(i=>_o(i.url,i.enabled));r.filter(Boolean).length===1&&a.forEach((i,n)=>{i.enabled=r[n]})}try{let r=l=>({config:l,store:null,baseURI:null,genres:[],bookmarks:[],playlists:[],error:null,unloaded:!0}),i=await Promise.all(a.map(l=>l.enabled?bt(l):Promise.resolve(r(l)))),n=Dl({libraryConfigs:a,libs:i,host:e});vn(e,n)}catch(r){console.error("Initialization error:",r),yn(e,r.message)}}var li=class extends HTMLElement{static get observedAttributes(){return["src","source"]}connectedCallback(){this._mounted||(this._mounted=!0,!this.hasAttribute("defer")&&this.ensureLoaded())}ensureLoaded(){this._loaded||(this._loaded=!0,this._loadFromConfig())}attributeChangedCallback(a,r,i){!this._mounted||a!=="src"&&a!=="source"||r===i||localStorage.getItem(Qa)||this._loadFromConfig()}_loadFromConfig(){let a=this.getAttribute("src")||this.getAttribute("source"),r=this.getAttribute("storage-ns");if(r&&a){let n=[{id:r,label:r,url:a,enabled:!0}];Rl(a).then(l=>ha(this,l.length?n.concat(l):n)).catch(()=>ha(this,n));return}if(!a&&!localStorage.getItem(Qa)){bn(this,n=>{let l=[{id:"default",label:"Internet Archive Music",url:n,enabled:!0}];ci(l),ha(this,l)});return}let i=Ul(a||"./dk-pod/dk/plugins/ia-player/libraries/internet_archive_music/index.ttl");ha(this,i)}reload(a){ha(this,a)}};customElements.get("ia-player")||customElements.define("ia-player",li);Dn();
