var en=`/* =====================================================================
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
  font-size: max(16px, 0.92rem);
  /* Cross-fade theme + library switches. */
  transition: background-color 0.35s ease, color 0.35s ease;
}

/* Form controls don't inherit fonts by default \u2014 the UA gives an
   unstyled <button>/<input> 13.33px, silently breaking the 16px floor
   (buttons with no font rule of their own, e.g. the modal Cancel/Save).
   Inherit everywhere in the player AND its body-appended surfaces
   (modals, floating menus). :where() keeps this at zero-class
   specificity: it beats only UA defaults, never a rule that declares
   its own (floored) size \u2014 e.g. the 1.6rem modal \xD7. */
:where(.ia-player-app, .about-modal, .ia-floating-menu) :where(button, input, select, textarea) {
  font: inherit;
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
  font-size: max(16px, .96rem);
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
.ia-film-intro-rights { margin: 0 0 1rem; font-size: max(16px, .9rem); color: #aeb9c4; }
.ia-film-intro-rights:empty { display: none; }
.ia-film-intro-hint { margin: 0; font-size: max(16px, .92rem); font-style: italic; color: #aeb9c4; }
/* Two hint wordings; the coarse-pointer block below swaps them. */
.ia-hint-phone { display: none; }
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
  font-size: max(16px, 0.95rem);
  line-height: 1.1;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}
.ia-btn .ia-icon { font-size: max(16px, 0.95rem); }
.ia-btn .ia-blabel {
  font-size: max(16px, 0.65rem);
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
  font-size: max(16px, 0.8rem);
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
  font-size: max(16px, 0.9rem);
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
  font-size: max(16px, 0.95rem);
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
  font-family: var(--ia-font-body); font-size: max(16px, 0.85rem); font-weight: 400;
}
.ia-nowplaying .ia-link {
  color: var(--ia-accent);
  text-decoration: none;
  margin-left: 6px;
  font-size: max(16px, 0.85em);
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
  font-size: max(16px, 0.68rem);
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
  font-size: max(16px, 0.92rem);
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
}
.ia-sources .ia-listbox-checkbox {
  font-size: max(16px, 0.95rem);
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
  font-size: max(16px, 0.9rem);
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
  font-size: max(16px, .9rem);
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
  font-size: max(16px, 0.85rem);
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
  font-size: max(16px, 0.82rem);
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
  font-size: max(16px, 0.88rem);
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
  font-size: max(16px, 0.95rem);
  font-weight: 600;
  letter-spacing: 0.01em;
  color: var(--ia-text-soft);
  background: var(--ia-bg-elev-2);
  border-bottom: 1px solid var(--ia-border);
}
.ia-album-note {
  padding: 5px 10px;
  font-size: max(16px, 0.72rem);
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
  font-size: max(16px, 0.72rem);
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
  font-size: max(16px, 0.88rem);
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
  font-size: max(16px, 0.92rem);
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
  font-size: max(16px, 0.78rem);
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
  font-size: max(16px, 0.7rem);
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
.ia-tracklist .col-time   { text-align: right; font-family: var(--ia-font-mono); font-size: max(16px, 0.82em); font-variant-numeric: tabular-nums; color: var(--ia-text-dim); }
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
  font-size: max(16px, 0.95rem);
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
  color: var(--ia-text-faint, #888); font-size: max(16px, .95em); line-height: 1;
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
  font-size: max(16px, 0.95rem);
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
  font-size: max(16px, 0.88rem);
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
  font-size: max(16px, 0.85em);
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
  font-size: max(16px, 0.95rem);
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
  font-size: max(16px, 0.9rem);
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
  font-size: max(16px, 0.95rem);
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
  font-size: max(16px, 0.95rem);
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
  font-size: max(16px, 0.85rem);
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
  font-size: max(16px, 0.95rem);
  min-width: 0;
}

.manage-add-artist-row select {
  padding: 8px 10px;
  background: var(--ia-bg-elev);
  color: var(--ia-text-strong);
  border: 1px solid var(--ia-border-strong);
  border-radius: 4px;
  font-size: max(16px, 0.95rem);
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
  font-size: max(16px, 0.85rem);
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
  font-size: max(16px, 0.85rem);
  color: var(--ia-text-dim);
}

.manage-hint code {
  background: var(--ia-bg-elev);
  padding: 1px 5px;
  border-radius: 3px;
  font-size: max(16px, 0.85rem);
}

/* Filters modal form (lives inside .about-modal-content). */
.filters-form { display: flex; flex-direction: column; gap: 10px; margin-top: 8px; }
.filters-hint { color: var(--ia-text-dim); font-size: max(16px, 0.85rem); margin: 0 0 4px; }
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

/* Track card \u2014 the consolidated per-track card. Structure top to bottom:
   title \xB7 action strip (favourite / visit, with Remove pushed to the far
   right so the destructive action stands apart) \xB7 hairline \xB7 editor form
   with a fixed label column so the three fields align as one block \xB7
   hairline \xB7 Cancel/Save. Wider than the base modal so the form breathes.
   (Kept AFTER the .filters-* styles above \u2014 same-specificity overrides
   here must win by order.) */
.about-modal-content.track-card {
  max-width: 680px;
  padding: 26px 30px 22px;
}
.track-card-actions {
  margin: 0 0 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--ia-border);
  flex-wrap: wrap;
}
.track-card-actions .filters-danger { margin-left: auto; }
.track-card .filters-form { gap: 12px; }
.track-card .filters-row { flex-wrap: wrap; }
.track-card .filters-row .filters-label {
  flex: 0 0 6.5rem;
  font-weight: 500;
}
.track-card .filters-row input[type="text"] {
  flex: 1 1 14rem;
  padding: 7px 10px;
  background: var(--ia-bg-elev-2);   /* a step lighter than the card \u2014 reads as a field */
}
.track-card .filters-row input[type="text"]:focus-visible {
  outline: 2px solid var(--ia-accent);
  outline-offset: 1px;
}
.track-card .filters-form .filters-actions {
  margin-top: 18px;
  padding-top: 14px;
  border-top: 1px solid var(--ia-border);
}
/* Shared-album note sits under the album input, aligned to the field
   column (label width + row gap). 16px floor. */
.track-card .track-album-note {
  margin: -6px 0 0 calc(6.5rem + 12px);
  font-size: max(16px, 0.85rem);
}

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

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   PHONE LAYER (Android) \u2014 everything below is scoped to a coarse pointer,
   so desktop cannot reach it by construction (same discipline as the dk
   shell). Structure on a phone:
     toolbar (search \xB7 Browse pill \xB7 \u22EE)  \u2192  tracklist (the whole stage)
     \u2192  status  \u2192  bottom dock (now-playing + transport, thumb zone).
   The sources column + browser cascade are hidden here \u2014 their live lists
   move into the <sol-sheet> behind the Browse pill (ia3.js phone branch).
   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

/* The Browse pill exists in the markup for every pointer; only the phone
   shows it. */
.ia-browse-btn { display: none; }

@media (hover: none) and (pointer: coarse) {
  /* Doubled class: the desktop layout has 0-2-0 state variants
     (.source-no-browser, .media-video, \u2026) that would out-rank a plain
     .ia-player-app phone override; this block must win them all. */
  .ia-player-app.ia-player-app {
    /* minmax(0,\u2026): a bare 1fr track's automatic minimum is its content's
       min-width, so one nowrap line (the now-playing marquee) silently
       inflated the whole column to ~1100px and pushed the Browse pill
       off-screen (measured on-device). */
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto minmax(0, 1fr) auto auto;
    grid-template-areas:
      "toolbar"
      "tracklist"
      "status"
      "dock";
  }
  .ia-player-app .ia-sources, .ia-player-app .ia-browser { display: none; }

  /* Toolbar slims to search \xB7 Browse \xB7 \u22EE (transport moved to the dock,
     volume is the phone's hardware buttons). */
  .ia-volume-wrap { display: none; }
  .ia-toolbar { gap: 8px; padding: 8px 10px; }
  /* flex-basis 0 (not auto): the input's desktop min-width/content size
     otherwise inflates the form's base size past the viewport (measured
     956px on-device) and shoves the Browse pill off-screen. */
  .ia-artist-search { flex: 1 1 0; min-width: 0; }
  .ia-artist-search-input { width: 100%; min-width: 0; min-height: 44px; }
  /* The Browse pill speaks the navigator-trigger dialect: round, roomy,
     icon beside a normal-case label (the desktop .ia-blabel micro-caps
     read cramped at this size). */
  .ia-browse-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-height: 44px;
    padding: 0 16px;
    border-radius: 999px;
    flex: 0 0 auto;
    flex-direction: row;
  }
  .ia-browse-btn .ia-blabel {
    font-size: inherit;
    text-transform: none;
    letter-spacing: normal;
    color: inherit;
  }
  /* \u22EE goes icon-only \u2014 its label steals pill room at 360px. */
  .manage-btn { min-width: 44px; min-height: 44px; }
  .manage-btn .ia-blabel { display: none; }

  /* Bottom dock: now-playing line + fat transport in the thumb zone. */
  .ia-phone-dock {
    grid-area: dock;
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 6px 10px calc(8px + env(safe-area-inset-bottom, 0px));
    border-top: 1px solid var(--ia-border);
    background: var(--ia-bg-elev);
  }
  /* Row 1: now-playing (ellipsized) + the time readout at the right \u2014
     the times live HERE so the seek strip below gets the whole row. */
  .ia-phone-npline {
    display: flex;
    align-items: baseline;
    gap: 10px;
  }
  .ia-phone-npline .ia-nowplaying {
    flex: 1 1 auto;
    min-width: 0;
    padding: 0 2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .ia-phone-npline .ia-time { flex: 0 0 auto; }
  .ia-phone-transport {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .ia-phone-transport .ia-btn {
    min-width: 48px;
    min-height: 48px;
    justify-content: center;
  }
  /* Icon-only transport buttons \u2014 the text labels are dock clutter at
     this size; the buttons keep their aria-labels. */
  .ia-phone-transport .ia-blabel { display: none; }
  .ia-phone-transport .ia-seek-wrap { flex: 1 1 auto; min-width: 0; }
  .ia-phone-transport .ia-seek {
    width: 100%;
    height: 28px;   /* fat touch strip */
  }
  /* .ia-time moved to the npline row above (ia-ui.js phone branch). */

  /* Tracklist is the stage. Phone rows leave the table grid behind: each
     row is a two-line entry (title over dim artist) with the time and the
     \u22EF on the right; the header row and the #/Album columns go away and
     nothing scrolls sideways. */
  .ia-tracklist-wrap { overflow-x: hidden; }
  .ia-tracklist { display: block; width: 100%; min-width: 0; }   /* drop the 500px desktop floor */
  .ia-tracklist colgroup, .ia-tracklist thead { display: none; }
  .ia-tracklist tbody { display: block; }
  .ia-track-row {
    display: grid;
    grid-template-columns: minmax(0, 1fr) max-content max-content;
    column-gap: 10px;
    align-items: center;
    padding: 10px;
    min-height: 56px;
    border-bottom: 1px solid var(--ia-border);
  }
  .ia-track-row td { display: block; padding: 0; border: none; }
  .ia-track-row .col-num, .ia-track-row .col-album { display: none; }
  .ia-track-row .col-title {
    grid-column: 1; grid-row: 1;
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    font-weight: 500;
  }
  .ia-track-row .col-artist {
    grid-column: 1; grid-row: 2;
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    color: var(--ia-text-dim);
  }
  .ia-track-row .col-time { grid-column: 2; grid-row: 1 / span 2; }
  .ia-track-row .col-remove { grid-column: 3; grid-row: 1 / span 2; }
  .ia-track-row.playing { box-shadow: inset 3px 0 0 var(--ia-accent); }

  /* The desktop rules paint row states on the TDs \u2014 on the phone grid
     (gaps + row padding) that reads as patchy stripes. Paint the ROW
     and clear the cells so zebra/selected/playing cover the full row. */
  .ia-track-row:nth-child(even) { background: var(--ia-bg-row-alt); }
  .ia-track-row:focus { background: var(--ia-bg-row-focus); }
  .ia-track-row.selected { background: var(--ia-bg-row-selected); }
  .ia-track-row.playing { background: var(--ia-bg-row-playing); }
  .ia-track-row.selected.playing { background: var(--ia-bg-row-playing-sel); }
  .ia-track-row td,
  .ia-track-row:nth-child(even) td,
  .ia-track-row:focus td,
  .ia-track-row.selected td,
  .ia-track-row.playing td,
  .ia-track-row.selected.playing td { background: transparent; }

  /* Browse sheet content (light DOM inside <sol-sheet>): the moved lists,
     grouped in native exclusive <details> sections. */
  .ia-browse-sheet .ia-sheet-section {
    border-bottom: 1px solid var(--ia-border);
  }
  .ia-browse-sheet summary {
    list-style: none;
    display: flex;
    align-items: center;
    min-height: 48px;
    padding: 0 12px;
    font-weight: 600;
    cursor: pointer;
  }
  .ia-browse-sheet summary::after {
    content: "\u25BE";
    margin-left: auto;
    color: var(--ia-text-dim);
    transition: transform 0.15s ease;
  }
  .ia-browse-sheet .ia-sheet-section[open] > summary::after { transform: rotate(180deg); }
  .ia-browse-sheet .ia-listbox {
    max-height: 38vh;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    margin: 0 8px 10px;
  }
  .ia-browse-sheet .ia-listbox li { min-height: 44px; }
  .ia-browse-sheet .ia-column-footer,
  .ia-browse-sheet .ia-add-playlist-btn { margin: 0 8px 10px; }
  .ia-browse-sheet .ia-add-playlist-btn,
  .ia-browse-sheet .ia-add-genre-btn,
  .ia-browse-sheet .ia-add-artist-btn { min-height: 44px; }

  /* \u2500\u2500 M2: Movies (media-video) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  /* Desktop movies hide the toolbar (films are picked in the browser
     columns) \u2014 the phone needs it back: it carries the Browse pill. */
  .ia-player-app.ia-player-app.media-video .ia-toolbar { display: flex; }
  /* The stage splits: video pinned on top (16:9 letterbox), the film
     list (Favorites view) beneath, dock in the thumb zone. The player
     row is auto-sized \u2014 an idle movies screen shows no black box (both
     the <video> and the intro stay display:none until .has-video /
     .film-intro). */
  .ia-player-app.ia-player-app.media-video {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto auto minmax(0, 1fr) auto auto;
    grid-template-areas:
      "toolbar"
      "player"
      "tracklist"
      "status"
      "dock";
  }
  .ia-player-app.ia-player-app.media-video.has-video .ia-video {
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    align-self: start;
  }
  /* Film intro: full-bleed over the same 16:9 stage; the card takes the
     whole width (its desktop 38rem max is wider than the phone). */
  .ia-player-app.ia-player-app.media-video.film-intro .ia-film-intro {
    aspect-ratio: 16 / 9;
    min-height: 0;
    padding: 12px;
    align-self: start;
    overflow: auto;
  }
  .ia-film-intro-card { max-width: 100%; }
  /* Favorites: the film list lives BENEATH the stage instead of sharing
     the desktop's one \`player\` cell (where the video paints over it). */
  .ia-player-app.ia-player-app.media-video.source-favorites .ia-tracklist-wrap {
    display: block;
    grid-area: tracklist;
  }
  /* Touch wording on the intro hint (no mouse, native fullscreen). */
  .ia-hint-desktop { display: none; }
  .ia-hint-phone { display: block; }
}
`;var tn=`This Player provides access to thousands of free recordings
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
`;var an=`<!-- ia-player shell \u2014 the full player layout (toolbar, sources column,
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
  <!-- Phone only (display:none on desktop \u2014 ia.css): opens the browse sheet
       that replaces the sources column + browser cascade on a coarse pointer. -->
  <button type="button" class="ia-btn ia-browse-btn" aria-haspopup="dialog" aria-expanded="false"><span class="ia-icon" aria-hidden="true">\u25A4</span><span class="ia-blabel">Browse</span></button>
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
      <!-- Local media import parked (LOCAL_MEDIA_IMPORT_PARKED in ia3.js) \u2014 restore by uncommenting.
      <button type="button" class="menu-item gear-import-music" role="menuitem"><span aria-hidden="true">\u{1F4C2}</span> <span class="menu-label">Import music folder\u2026</span></button>
      -->
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
    <!-- Local media import parked (LOCAL_MEDIA_IMPORT_PARKED in ia3.js) \u2014 restore by uncommenting.
    <button type="button" class="ia-add-source-btn">+ Library</button>
    -->
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
    <p class="ia-film-intro-hint ia-hint-desktop">Click to play. Move the mouse to the lower right of the film to enlarge to full screen.</p>
    <p class="ia-film-intro-hint ia-hint-phone">Tap to play. Rotate your phone or use the video's full-screen control to enlarge.</p>
  </div>
</div>
`;var rn=`<!-- About / content modal scaffold. ia-ui.js showAboutModal() sets the
     title text and fills .about-modal-body with the page content. -->
<div class="about-modal-content" role="dialog" aria-modal="true" aria-labelledby="about-modal-title">
  <button type="button" class="about-modal-close" aria-label="Close">\xD7</button>
  <h2 id="about-modal-title" class="about-modal-title"></h2>
  <div class="about-modal-body"></div>
</div>
`;var nn=`<!-- Quality-filters modal. ia-ui.js showFiltersModal() seeds the field
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
`;var on=`<!-- Playlist create/edit modal. ia-ui.js showPlaylistEditModal() sets the
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
`;var sn=`<!-- Library editor modal (label + URL, optional delete). ia-ui.js
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
`;var ln=`<!-- Track card. For playlist rows this is the ONE card holding every track
     option \u2014 the editor form plus the favourite / visit / remove buttons that
     showTrackEditModal() fills into .track-card-actions. Library rows use the
     same card as a pure editor (empty actions row stays hidden). -->
<div class="about-modal-content track-card" role="dialog" aria-modal="true" aria-labelledby="tk-modal-title">
  <button type="button" class="about-modal-close" aria-label="Close">\xD7</button>
  <h2 id="tk-modal-title" class="about-modal-title">Edit track</h2>
  <div class="filters-actions track-card-actions" hidden></div>
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
    <p class="filters-hint track-album-note" hidden></p>
    <div class="filters-actions">
      <span style="flex:1"></span>
      <button type="button" class="filters-cancel">Cancel</button>
      <button type="submit" class="filters-save">Save</button>
    </div>
  </form>
</div>
`;var cn=`<!-- Standalone library-loader form (ia-ui.js showRDFInput) \u2014 shown when the
     player starts with no library source. -->
<h1>Open Media Player</h1>
<div class="rdf-input">
  <input type="text" class="rdf-uri" placeholder="Enter RDF file URI" value="./plugins/ia-player/libraries/internet_archive_music/index.ttl" aria-label="RDF file URI">
  <br>
  <button class="load-btn">Load Music Library</button>
</div>
`;function pn({mediaType:e="audio",panel:t=!1}={}){let i=e==="video",r=i?{genre:"Film Types",artist:"Collections",album:"Movies",find:"Find a film\u2026",addGenre:"+ Add film type",addArtist:"+ Add collection"}:{genre:"Genres",artist:"Artists",album:"Albums",find:"Search the Internet Archive\u2026",addGenre:"+ Add genre",addArtist:"+ Add artist"},n=document.createElement("div");n.className="ia-player-app"+(i?" media-video":" media-audio"),n.setAttribute("role","region"),n.setAttribute("aria-label",i?"Open Media Player (movies)":"Open Media Player"),n.innerHTML=an.replace(/\{\{(\w+)\}\}/g,(g,b)=>r[b]??""),t&&n.querySelector(".menu-item-sollogin")?.remove();let l=typeof matchMedia=="function"&&matchMedia("(hover: none) and (pointer: coarse)").matches;if(l){let g=document.createElement("div");g.className="ia-phone-dock";let b=document.createElement("div");b.className="ia-phone-npline",b.append(n.querySelector(".ia-nowplaying"),n.querySelector(".ia-time"));let h=document.createElement("div");h.className="ia-phone-transport",h.append(n.querySelector(".ia-prev"),n.querySelector(".ia-play"),n.querySelector(".ia-next"),n.querySelector(".ia-seek-wrap")),g.append(b,h),n.appendChild(g)}let s=n.querySelector(".manage-btn"),c=n.querySelector(".gear-menu"),p=()=>Array.from(c.querySelectorAll(".menu-item"));function v(g,b={}){if(c.hidden=!g,s.setAttribute("aria-expanded",g?"true":"false"),g){let h=p();(b.focusLast?h[h.length-1]:h[0])?.focus()}else b.returnFocus!==!1&&s.focus()}s.addEventListener("click",g=>{g.stopPropagation(),v(c.hidden,{returnFocus:!1})}),s.addEventListener("keydown",g=>{g.key==="ArrowDown"||g.key==="Enter"||g.key===" "?(g.preventDefault(),v(!0)):g.key==="ArrowUp"&&(g.preventDefault(),v(!0,{focusLast:!0}))}),c.addEventListener("keydown",g=>{let b=p(),h=b.indexOf(document.activeElement);g.key==="ArrowDown"?(g.preventDefault(),b[(h+1)%b.length]?.focus()):g.key==="ArrowUp"?(g.preventDefault(),b[(h-1+b.length)%b.length]?.focus()):g.key==="Home"?(g.preventDefault(),b[0]?.focus()):g.key==="End"?(g.preventDefault(),b[b.length-1]?.focus()):g.key==="Tab"&&v(!1,{returnFocus:!1})}),document.addEventListener("click",g=>{!c.contains(g.target)&&g.target!==s&&(c.hidden||v(!1,{returnFocus:!1}))}),document.addEventListener("keydown",g=>{g.key==="Escape"&&!c.hidden&&v(!1)});function y(g){let b=n.querySelector(".ia-play .ia-blabel");b&&(b.textContent=g==="playing"?"Pause":"Play")}return{container:n,audio:n.querySelector(".ia-audio"),status:n.querySelector(".ia-status-msg"),trackCount:n.querySelector(".ia-status-count"),nowPlaying:n.querySelector(".ia-nowplaying-text"),filmIntro:n.querySelector(".ia-film-intro"),filmIntroTitle:n.querySelector(".ia-film-intro-title"),filmIntroLength:n.querySelector(".ia-film-intro-length"),filmIntroAbout:n.querySelector(".ia-film-intro-about"),filmIntroRights:n.querySelector(".ia-film-intro-rights"),prevBtn:n.querySelector(".ia-prev"),playBtn:n.querySelector(".ia-play"),nextBtn:n.querySelector(".ia-next"),seekSlider:n.querySelector(".ia-seek"),timeCur:n.querySelector(".ia-time-cur"),timeDur:n.querySelector(".ia-time-dur"),volumeSlider:n.querySelector(".ia-volume"),sourcesList:n.querySelector(".ia-sources-list"),favouritesList:n.querySelector(".ia-favourites-list"),librariesList:n.querySelector(".ia-libraries-list"),addSourceBtn:n.querySelector(".ia-add-source-btn"),addPlaylistBtn:n.querySelector(".ia-add-playlist-btn"),browseBtn:n.querySelector(".ia-browse-btn"),isPhone:l,genreList:n.querySelector('[data-column="genre"] .ia-listbox'),artistList:n.querySelector('[data-column="artist"] .ia-listbox'),albumList:n.querySelector('[data-column="album"] .ia-listbox'),addGenreBtn:n.querySelector(".ia-add-genre-btn"),addArtistBtn:n.querySelector(".ia-add-artist-btn"),genreColumnFooter:n.querySelector('[data-column="genre"] .ia-column-footer'),artistColumnFooter:n.querySelector('[data-column="artist"] .ia-column-footer'),trackTable:n.querySelector(".ia-tracklist"),trackHead:n.querySelector(".ia-tracklist thead"),trackBody:n.querySelector(".ia-tracklist tbody"),trackEmpty:n.querySelector(".ia-tracklist-empty"),randomizeBtn:n.querySelector(".ia-randomize-btn"),clearTracksBtn:n.querySelector(".ia-clear-tracks-btn"),manageButton:s,gearMenu:c,helpMenuItem:n.querySelector(".gear-help"),helpLinkMenuItem:n.querySelector(".gear-help-link"),loginHelpMenuItem:n.querySelector(".gear-login-help"),installPodMenuItem:n.querySelector(".gear-install-pod"),updateAppMenuItem:n.querySelector(".gear-update-app"),themeToggle:n.querySelector(".gear-theme"),fontSizeBtn:n.querySelector(".gear-fontsize"),filtersMenuItem:n.querySelector(".gear-filters"),viewDeletedMenuItem:n.querySelector(".gear-view-deleted"),importMusicMenuItem:n.querySelector(".gear-import-music"),savePlaylistMenuItem:n.querySelector(".gear-save-playlist"),setMenuOpen:v,setPlayLabel:y}}function Tt(e,{onChange:t,allLabel:i="(All)",showAll:r=!0,multiSelect:n=!0,mode:l="select",allowDeselect:s=!1,renderItemActions:c=null,onItemAction:p=null,onItemDrop:v=null}={}){let y=[],g=new Set,b=null,h=null;function f(){return new Set(g)}function _(){return y.slice()}function $(P){y=P.slice(),h=null;for(let K of[...g])y.some(ae=>ae.id===K)||g.delete(K);b&&!y.some(K=>K.id===b)&&(b=null),pe()}function D(P){h=P||null,pe()}function z(P,K={}){g=new Set(P||[]);for(let ae of[...g])y.some(S=>S.id===ae)||g.delete(ae);pe(),K.notify!==!1&&t?.(f())}function q(P){return P?"\u2611":"\u2610"}function pe(){if(h!==null){e.innerHTML=`<li class="ia-listbox-message" aria-disabled="true">${le(h)}</li>`;return}let P=g.size===0,K="";r&&(K+=`<li role="option" class="ia-listbox-item ia-listbox-all${P?" selected":""}" data-id="" tabindex="-1" aria-selected="${P}">${le(i)}</li>`);for(let ae of y){ae.section&&(K+=`<li class="ia-listbox-divider" role="presentation">${le(ae.section)}</li>`);let S=g.has(ae.id),N=l==="checkbox"?`<span class="ia-listbox-checkbox" aria-hidden="true">${q(S)}</span>`:"",V=c?.(ae)??"",Z=ae.title?` title="${le(ae.title)}"`:"",se=`ia-listbox-item${S?" selected":""}${ae.className?" "+ae.className:""}`,ue=ae.ariaLabel?` aria-label="${le(ae.ariaLabel)}"`:"";K+=`<li role="option" class="${se}" data-id="${le(ae.id)}" tabindex="-1" aria-selected="${S}"${Z}${ue}>${N}<span class="ia-listbox-label">${le(ae.label)}</span>${V}</li>`}e.innerHTML=K}function oe(P){g.clear(),P&&g.add(P),b=P||null,pe(),t?.(f())}function Se(P){P?g.has(P)?g.delete(P):g.add(P):g.clear(),b=P||null,pe(),t?.(f())}function Be(P){if(!b||!P)return oe(P);let K=y.map(Z=>Z.id),ae=K.indexOf(b),S=K.indexOf(P);if(ae<0||S<0)return oe(P);let N=Math.min(ae,S),V=Math.max(ae,S);g=new Set(K.slice(N,V+1)),pe(),t?.(f())}e.addEventListener("click",P=>{let K=P.target.closest("[data-action]");if(K){P.stopPropagation();let N=K.closest(".ia-listbox-item");p?.(K.dataset.action,N?.dataset.id??null,K);return}let ae=P.target.closest(".ia-listbox-item");if(!ae)return;let S=ae.dataset.id;l==="checkbox"&&S?Se(S):n&&P.shiftKey&&S?Be(S):n&&(P.ctrlKey||P.metaKey)?Se(S):!n&&s&&S&&g.has(S)?(g.clear(),b=null,pe(),t?.(f())):oe(S),ae.focus()}),v&&(e.addEventListener("dragover",P=>{let K=P.target.closest(".ia-listbox-item");!K||!K.dataset.id||(P.preventDefault(),P.dataTransfer.dropEffect="copy",K.classList.add("drop-target"))}),e.addEventListener("dragleave",P=>{P.target.closest(".ia-listbox-item")?.classList.remove("drop-target")}),e.addEventListener("drop",P=>{let K=P.target.closest(".ia-listbox-item");!K||!K.dataset.id||(P.preventDefault(),K.classList.remove("drop-target"),v(K.dataset.id,P.dataTransfer))})),e.addEventListener("keydown",P=>{let K=Array.from(e.querySelectorAll(".ia-listbox-item"));if(!K.length)return;let ae=e.querySelector(".ia-listbox-item:focus")||K[0],S=K.indexOf(ae),N=S;if(P.key==="ArrowDown")N=Math.min(S+1,K.length-1),P.preventDefault();else if(P.key==="ArrowUp")N=Math.max(S-1,0),P.preventDefault();else if(P.key==="Home")N=0,P.preventDefault();else if(P.key==="End")N=K.length-1,P.preventDefault();else if(P.key===" "||P.key==="Enter"){P.preventDefault();let Z=ae.dataset.id;n&&(P.ctrlKey||P.metaKey)?Se(Z):n&&P.shiftKey&&Z?Be(Z):oe(Z);return}else return;let V=K[N];if(V){V.focus();let Z=V.dataset.id;n&&P.shiftKey&&Z&&b?Be(Z):(!n||!P.ctrlKey&&!P.metaKey)&&oe(Z)}}),pe();function We(P){P&&P!==i&&(i=P,pe())}return{setItems:$,setSelection:z,getSelection:f,getItems:_,setMessage:D,setAllLabel:We}}function fn(e,t){let i=new Set,r=null;function n(){return Array.from(e.querySelectorAll(".ia-track-row"))}function l(){return new Set(i)}function s(){let h=n(),f=new Set(h.map(_=>_.dataset.trackId));for(let _ of[...i])f.has(_)||i.delete(_);r&&!f.has(r)&&(r=null),h.forEach(_=>{let $=i.has(_.dataset.trackId);_.classList.toggle("selected",$),_.setAttribute("aria-selected",$?"true":"false")})}function c(){i.clear(),r=null,s()}function p(h){i.clear(),h?(i.add(h),r=h):r=null,s()}function v(h){h&&(i.has(h)?i.delete(h):(i.add(h),r=h),s())}function y(h){if(!r||!h)return p(h);let f=n().map(q=>q.dataset.trackId),_=f.indexOf(r),$=f.indexOf(h);if(_<0||$<0)return p(h);let D=Math.min(_,$),z=Math.max(_,$);i=new Set(f.slice(D,z+1)),s()}function g(){i=new Set(n().map(h=>h.dataset.trackId)),i.size&&(r=[...i][0]),s()}function b(h){h.length&&(i.clear(),r=null,t.onRemove?.(h))}return e.addEventListener("click",h=>{let f=h.target.closest(".ia-track-fav-btn");if(f){h.stopPropagation(),t.onFavourite?.({url:f.dataset.url,name:f.dataset.name,artist:f.dataset.artist,album:f.dataset.album});return}let _=h.target.closest(".ia-track-remove-btn"),$=h.target.closest(".ia-track-kebab"),D=h.target.closest(".ia-track-row");if(!D)return;let z=D.dataset.trackId;if($){t.onEdit?.(z,$);return}if(_){i.delete(z),r===z&&(r=null),t.onRemove?.([z],{fromButton:!0});return}h.shiftKey?y(z):h.ctrlKey||h.metaKey?v(z):p(z),D.focus()}),e.addEventListener("dragstart",h=>{let f=h.target.closest(".ia-track-row");if(!f)return;let _=f.dataset.trackId,$=i.has(_)?[...i]:[_];i.has(_)||p(_),h.dataTransfer.setData("application/x-ia-tracks",JSON.stringify($)),h.dataTransfer.setData("text/plain",`${$.length} track${$.length===1?"":"s"}`),h.dataTransfer.effectAllowed="copy",f.classList.add("dragging")}),e.addEventListener("dragend",h=>{h.target.closest(".ia-track-row")?.classList.remove("dragging")}),e.addEventListener("dblclick",h=>{let f=h.target.closest(".ia-track-row");f&&(h.target.closest(".ia-track-remove-btn,.ia-track-kebab")||t.onPlay?.(f.dataset.trackId))}),e.addEventListener("keydown",h=>{let f=n();if(!f.length)return;let _=e.querySelector(".ia-track-row:focus")||f[0],$=f.indexOf(_),D=$;if(h.key==="ArrowDown")D=Math.min($+1,f.length-1),h.preventDefault();else if(h.key==="ArrowUp")D=Math.max($-1,0),h.preventDefault();else if(h.key==="Home")D=0,h.preventDefault();else if(h.key==="End")D=f.length-1,h.preventDefault();else if(h.key==="Enter"){h.preventDefault(),t.onPlay?.(_.dataset.trackId);return}else if(h.key===" "){h.preventDefault(),h.ctrlKey||h.metaKey?v(_.dataset.trackId):t.onPlay?.(_.dataset.trackId);return}else if(h.key==="Delete"){h.preventDefault();let q=i.size?[...i]:_?[_.dataset.trackId]:[];b(q);return}else if((h.ctrlKey||h.metaKey)&&(h.key==="a"||h.key==="A")){h.preventDefault(),g();return}else if(h.key==="Escape"){i.size&&(h.preventDefault(),c());return}else return;let z=f[D];if(z){z.focus();let q=z.dataset.trackId;h.shiftKey&&r?y(q):!h.ctrlKey&&!h.metaKey&&p(q)}}),{getSelection:l,clearSelection:c,applySelection:s}}function mn(e){e.addEventListener("mousedown",t=>{let i=t.target.closest(".resize-handle");if(!i)return;t.preventDefault(),t.stopPropagation();let r=i.closest("th");if(!r)return;let n=r.dataset.col,l=e.querySelector(`col[data-col="${n}"]`);if(!l)return;let s=t.clientX,c=r.offsetWidth,p=y=>{let g=Math.max(30,c+(y.clientX-s));l.style.width=g+"px"},v=()=>{document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",v),e.classList.remove("resizing")};document.addEventListener("mousemove",p),document.addEventListener("mouseup",v),e.classList.add("resizing")})}function hn(e,t){let i=null,r="asc";function n(){if(Array.from(e.querySelectorAll("th")).forEach(c=>{c.classList.remove("sorted"),c.removeAttribute("aria-sort");let p=c.querySelector(".sort-arrow");p&&(p.textContent="")}),!i)return;let l=e.querySelector(`th[data-sort="${i}"]`);if(!l)return;l.classList.add("sorted"),l.setAttribute("aria-sort",r==="asc"?"ascending":"descending");let s=l.querySelector(".sort-arrow");s&&(s.textContent=r==="asc"?"\u25B2":"\u25BC")}return e.addEventListener("click",l=>{if(l.target.closest(".resize-handle"))return;let s=l.target.closest("th[data-sort]");if(!s)return;let c=s.dataset.sort;i===c?r=r==="asc"?"desc":"asc":(i=c,r="asc"),n(),t.onSort?.(i,r)}),{applyIndicator:n,getSort:()=>({col:i,dir:r}),setSort:(l,s)=>{i=l||null,r=s==="desc"?"desc":"asc",n()},clear:()=>{i=null,r="asc",n()}}}function bn(e,t,i,{currentTrackId:r,isFav:n,emptyMessage:l,useKebab:s,favouritable:c,wallDelete:p}){if(!i.length){e.innerHTML="",l&&(t.textContent=l),t.hidden=!1;return}t.hidden=!0;let v=typeof s=="function"?$=>!!$.node&&s($)!==!1:$=>!!$.node,y=typeof c=="function"?$=>!!c($):()=>!!c,g=$=>`<button type="button" class="ia-track-fav-btn${n&&n($)?" on":""}" data-url="${le($.url||"")}" data-name="${le($.name||"")}" data-artist="${le($.artist||"")}" data-album="${le($.album||"")}" title="Add to favourites" aria-label="Favourite" tabindex="-1">${n&&n($)?"\u2605":"\u2606"}</button>`,b='<button type="button" class="ia-src-edit ia-row-kebab ia-track-kebab" aria-haspopup="menu" aria-label="Track actions" title="Track actions" tabindex="-1">\u22EF</button>',h='<button type="button" class="ia-track-remove-btn" aria-label="Remove from favourites" title="Remove from favourites">\u2715</button>',f=$=>{if(p)return h;let D=y($)?g($):"";return v($)&&(D+=b),!y($)&&!v($)&&(D+=h),D},_=i.map(($,D)=>{let z=$.id===r;return`<tr class="ia-track-row${z?" playing":""}" draggable="true" data-track-id="${le($.id)}" data-album-url="${le($.albumUrl||"")}" tabindex="-1" aria-current="${z?"true":"false"}">
      <td class="col-num">${z?'<span aria-hidden="true">\u25B8</span>':D+1}</td>
      <td class="col-title">${le($.name)}</td>
      <td class="col-artist">${le($.artist||"")}</td>
      <td class="col-album">${le($.album||"")}</td>
      <td class="col-time">${le($.time||"")}</td>
      <td class="col-remove">${f($)}</td>
    </tr>`});e.innerHTML=_.join("")}function Pi(e){if(!isFinite(e)||e<0)return"0:00";let t=Math.floor(e/60),i=Math.floor(e%60);return`${t}:${i.toString().padStart(2,"0")}`}function gn(e,t){let{audio:i,playBtn:r,prevBtn:n,nextBtn:l,seekSlider:s,timeCur:c,timeDur:p,volumeSlider:v}=e;r.addEventListener("click",()=>t.onPlayToggle?.()),n.addEventListener("click",()=>t.onPrev?.()),l.addEventListener("click",()=>t.onNext?.());let y=!1;s.addEventListener("input",()=>{y=!0}),s.addEventListener("change",()=>{y=!1,isFinite(i.duration)&&(i.currentTime=parseFloat(s.value)/1e3*i.duration)}),v.addEventListener("input",()=>{i.volume=parseFloat(v.value)}),i.addEventListener("timeupdate",()=>{y||!isFinite(i.duration)||i.duration===0||(s.value=String(i.currentTime/i.duration*1e3),c.textContent=Pi(i.currentTime))}),i.addEventListener("loadedmetadata",()=>{s.disabled=!isFinite(i.duration),p.textContent=Pi(i.duration||0),c.textContent=Pi(i.currentTime||0)}),i.addEventListener("emptied",()=>{s.value="0",s.disabled=!0,c.textContent="0:00",p.textContent="0:00"});let g=r.querySelector(".ia-icon"),b=r.querySelector(".ia-blabel");i.addEventListener("play",()=>{g?g.textContent="\u23F8":r.textContent="\u23F8",b&&(b.textContent="Pause"),r.setAttribute("aria-label","Pause"),r.title="Pause"}),i.addEventListener("pause",()=>{g?g.textContent="\u25B6":r.textContent="\u25B6",b&&(b.textContent="Play"),r.setAttribute("aria-label","Play"),r.title="Play"})}function ua(e,t,i){document.querySelectorAll(".ia-floating-menu").forEach(f=>f.remove());let r=document.createElement("div");r.className="ia-floating-menu",r.setAttribute("role","menu"),r.innerHTML=t.map(f=>`<button type="button" class="ia-floating-menu-item" role="menuitem" data-id="${le(f.id)}">${le(f.label)}</button>`).join(""),document.body.appendChild(r);let n=e.getBoundingClientRect();r.style.position="fixed";let l=r.offsetWidth,s=r.offsetHeight,c=8,p=n.left;p+l+c>window.innerWidth&&(p=Math.max(c,n.right-l));let v=n.bottom+4;v+s+c>window.innerHeight&&(v=Math.max(c,n.top-s-4)),r.style.left=`${p}px`,r.style.top=`${v}px`;let y=()=>{r.remove(),document.removeEventListener("mousedown",g,!0),document.removeEventListener("keydown",b)},g=f=>{!r.contains(f.target)&&f.target!==e&&y()},b=f=>{if(f.key==="Escape"&&(f.preventDefault(),y(),e.focus?.()),f.key==="ArrowDown"||f.key==="ArrowUp"){f.preventDefault();let _=Array.from(r.querySelectorAll(".ia-floating-menu-item")),$=_.indexOf(document.activeElement);(f.key==="ArrowDown"?_[($+1)%_.length]:_[($-1+_.length)%_.length])?.focus()}};r.addEventListener("click",f=>{let _=f.target.closest(".ia-floating-menu-item");_&&(y(),i?.(_.dataset.id))}),setTimeout(()=>{document.addEventListener("mousedown",g,!0),document.addEventListener("keydown",b)},0);let h=r.querySelector(".ia-floating-menu-item");return h&&h.focus(),y}var Di=null;function yn({css:e,aboutHtml:t}={}){if(e&&!document.getElementById("ia-player-styles")){let i=document.createElement("style");i.id="ia-player-styles",i.textContent=e,document.head.appendChild(i)}t&&(Di=t)}var Vs='a[href], button:not([disabled]), input:not([disabled]):not([type=hidden]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';function pa(e){let t=document.activeElement,i=()=>Array.from(e.querySelectorAll(Vs)).filter(n=>!n.closest("[hidden]")),r=i()[0];return r&&r.focus(),e.addEventListener("keydown",n=>{if(n.key!=="Tab")return;let l=i();if(!l.length)return;let s=l[0],c=l[l.length-1];n.shiftKey&&document.activeElement===s?(n.preventDefault(),c.focus()):!n.shiftKey&&document.activeElement===c&&(n.preventDefault(),s.focus())}),()=>{t?.focus?.()}}function za(e,t){e.innerHTML=t}function le(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function ja(e={}){typeof e=="string"&&(e={url:e});let{url:t="./assets/ia-about.html",title:i="About",useBundle:r=!0,size:n="normal"}=e,l=document.querySelector(".about-modal");l&&l.remove();let s;if(r&&Di)s=Di;else try{s=await(await fetch(t)).text()}catch(y){s=`Could not load content: ${y.message}`}let c=document.createElement("div");c.className="about-modal",c.innerHTML=rn,n==="large"&&c.querySelector(".about-modal-content").classList.add("about-modal-large"),c.querySelector(".about-modal-title").textContent=i,c.querySelector(".about-modal-body").innerHTML=s,document.body.appendChild(c);let p=pa(c),v=()=>{c.remove(),p()};c.querySelector(".about-modal-close").addEventListener("click",v),c.addEventListener("click",y=>{y.target===c&&v()}),document.addEventListener("keydown",function y(g){g.key==="Escape"&&(v(),document.removeEventListener("keydown",y))})}function vn({filter:e,onSave:t}){let i=document.querySelector(".about-modal");i&&i.remove();let r=e||{},n=(r.blockedCollections||[]).join(", "),l=dn(r.minTrackDurationSec||0),s=dn(r.minItemRuntimeSec||0),c=document.createElement("div");c.className="about-modal",c.innerHTML=nn;let p=c.querySelector("form").elements;p.minTrack.value=l,p.minItem.value=s,p.minBitrate.value=r.minTrackBitrateKbps||0,p.minDownloads.value=r.minDownloads||0,p.blocked.value=n,p.applyCatalog.checked=!!r.applyToCatalogArtists,document.body.appendChild(c);let v=pa(c),y=c.querySelector("form"),g=()=>{c.remove(),v()};c.querySelector(".about-modal-close").addEventListener("click",g),c.querySelector(".filters-cancel").addEventListener("click",g),c.addEventListener("click",b=>{b.target===c&&g()}),document.addEventListener("keydown",function b(h){h.key==="Escape"&&(g(),document.removeEventListener("keydown",b))}),c.querySelector(".filters-reset").addEventListener("click",()=>{t?.(null),g()}),y.addEventListener("submit",b=>{b.preventDefault();let h={minTrackDurationSec:un(y.elements.minTrack.value),minTrackBitrateKbps:Math.max(0,parseInt(y.elements.minBitrate.value,10)||0),minItemRuntimeSec:un(y.elements.minItem.value),minDownloads:Math.max(0,parseInt(y.elements.minDownloads.value,10)||0),blockedCollections:y.elements.blocked.value.split(",").map(f=>f.trim()).filter(Boolean),applyToCatalogArtists:y.elements.applyCatalog.checked};t?.(h),g()})}function dn(e){let t=Math.max(0,Math.floor(e||0));if(!t)return"";let i=Math.floor(t/60),r=t%60;return`${i}:${String(r).padStart(2,"0")}`}function un(e){let t=String(e||"").trim();if(!t)return 0;if(/^\d+$/.test(t))return Math.max(0,parseInt(t,10));let i=t.match(/^(\d+):(\d{1,2})$/);return i?parseInt(i[1],10)*60+parseInt(i[2],10):0}function wn(e){return!e||!e.length?"":e.map((t,i)=>`<button type="button" class="filters-extra${t.danger?" filters-danger":""}" data-action-idx="${i}">${le(t.label)}</button>`).join("")}function xn(e,t,i){t&&e.querySelectorAll(".filters-extra").forEach(r=>{r.addEventListener("click",async()=>{await t[Number(r.dataset.actionIdx)]?.onClick?.()!==!1&&i()})})}function Mi({title:e="Playlist",values:t={},actions:i,onSave:r}){let n=document.querySelector(".about-modal");n&&n.remove();let l=t||{},s=document.createElement("div");s.className="about-modal",s.innerHTML=on,s.querySelector(".about-modal-title").textContent=e;let c=s.querySelector("form").elements;c.name.value=l.name||"",c.maker.value=l.maker||"",c.description.value=l.description||"",s.querySelector(".filters-actions").insertAdjacentHTML("afterbegin",wn(i)),document.body.appendChild(s);let p=pa(s),v=s.querySelector("form"),y=()=>{s.remove(),p()};s.querySelector(".about-modal-close").addEventListener("click",y),s.querySelector(".filters-cancel").addEventListener("click",y),s.addEventListener("click",g=>{g.target===s&&y()}),document.addEventListener("keydown",function g(b){b.key==="Escape"&&(y(),document.removeEventListener("keydown",g))}),xn(s,i,y),v.addEventListener("submit",g=>{g.preventDefault();let b=v.elements.name.value.trim();if(!b){v.elements.name.focus();return}r?.({name:b,maker:v.elements.maker.value.trim(),description:v.elements.description.value.trim()}),y()}),v.elements.name.focus(),v.elements.name.select()}function kn({title:e="Edit library",values:t={},canDelete:i=!1,onSave:r,onDelete:n}){let l=document.querySelector(".about-modal");l&&l.remove();let s=t||{},c=document.createElement("div");c.className="about-modal",c.innerHTML=sn,c.querySelector(".about-modal-title").textContent=e;let p=c.querySelector("form").elements;p.label.value=s.label||"",p.url.value=s.url||"",i||c.querySelector(".filters-danger").remove(),document.body.appendChild(c);let v=pa(c),y=c.querySelector("form"),g=()=>{c.remove(),v()};c.querySelector(".about-modal-close").addEventListener("click",g),c.querySelector(".filters-cancel").addEventListener("click",g),c.addEventListener("click",b=>{b.target===c&&g()}),document.addEventListener("keydown",function b(h){h.key==="Escape"&&(g(),document.removeEventListener("keydown",b))}),i&&c.querySelector(".filters-extra").addEventListener("click",async()=>{await n?.()!==!1&&g()}),y.addEventListener("submit",b=>{b.preventDefault();let h=y.elements.label.value.trim(),f=y.elements.url.value.trim();if(!h||!f){y.elements[h?"url":"label"].focus();return}r?.({label:h,url:f}),g()}),y.elements.label.focus(),y.elements.label.select()}function Sn({values:e={},siblingCount:t=0,actions:i,onSave:r,title:n}){let l=document.querySelector(".about-modal");l&&l.remove();let s=e||{},c=document.createElement("div");c.className="about-modal",c.innerHTML=ln;let p=c.querySelector("form").elements;if(p.title.value=s.title||"",p.artist.value=s.artist||"",p.album.value=s.album||"",t>0){let h=c.querySelector(".track-album-note");h.textContent=`Also updates ${t} other track${t===1?"":"s"} from this source.`,h.hidden=!1}n&&(c.querySelector(".about-modal-title").textContent=n);let v=wn(i);if(v){let h=c.querySelector(".track-card-actions");h.innerHTML=v,h.hidden=!1}document.body.appendChild(c);let y=pa(c),g=c.querySelector("form"),b=()=>{c.remove(),y()};c.querySelector(".about-modal-close").addEventListener("click",b),c.querySelector(".filters-cancel").addEventListener("click",b),c.addEventListener("click",h=>{h.target===c&&b()}),document.addEventListener("keydown",function h(f){f.key==="Escape"&&(b(),document.removeEventListener("keydown",h))}),xn(c,i,b),g.addEventListener("submit",h=>{h.preventDefault();let f=g.elements.title.value.trim();if(!f){g.elements.title.focus();return}r?.({title:f,artist:g.elements.artist.value.trim(),album:g.elements.album.value.trim()}),b()}),g.elements.title.focus(),g.elements.title.select()}function E(e,t){e.textContent=t}function Ln(e,t){e.innerHTML="";let i=document.createElement("div");i.className="music-player",i.innerHTML=cn,e.appendChild(i);let r=i.querySelector(".rdf-uri"),n=i.querySelector(".load-btn"),l=()=>{let s=r.value.trim();s&&t(s)};n.addEventListener("click",l),r.addEventListener("keypress",s=>{s.key==="Enter"&&l()})}function _n(e){e.innerHTML='<div class="loading-screen">Loading music library...</div>'}function An(e,t){e.innerHTML=`<div class="error">Error loading music player: ${t}</div>`}function En(e,t){e.innerHTML="",e.appendChild(t)}yn({css:en,aboutHtml:tn});import*as Xs from"rdflib";var Tn=Object.freeze({READY:"swc:ready",CAPABILITY:"swc:capability",OFFER:"swc:offer",LOGIN:"sol-login",LOGOUT:"sol-logout",AUTH_NEEDED:"sol-auth-needed",DEFAULT_CHANGE:"sol-default-change",COMMAND:"sol-command",ERROR:"sol-error",FORM_SAVE:"sol-form-save"});function Ys(){let e=new Map,t=new Map;return{register(i,r){e.set(i,r);let n=t.get(i);n&&(t.delete(i),n.forEach(l=>l(r)))},get(i){return e.get(i)},has(i){return e.has(i)},names(){return Array.from(e.keys())},whenReady(i){return e.has(i)?Promise.resolve(e.get(i)):new Promise(r=>{let n=t.get(i)||[];n.push(r),t.set(i,n)})}}}var $n=null;function Ri(){if(typeof window<"u"){let e=window.ComponentInterop||window.SolidWebComponents||{};return window.ComponentInterop=e,window.SolidWebComponents=e,e}return $n=$n||{}}function Js(){let e=Ri();return e.services||(e.services=Ys()),e.EVENTS||(e.EVENTS=Tn),e.services}function In(e,t){return Js().register(e,t)}function Cn(e,t){let i=Ri();return i.adoptedFetch=typeof e=="function"?e:null,t&&t.webId&&(i.adoptedWebId=t.webId),i.adoptedFetch}if(typeof window<"u"){let e=Ri();e.adoptFetch||(e.adoptFetch=Cn),typeof e.registerConsumer=="function"&&e.registerConsumer("adoptFetch",t=>Cn(t))}var ge=Xs,Ba=class{constructor(){this._store=null,this._fetcher=null,this._adopted=!1,this._loaded=new Set,this._changeSubs=new Set,this._wiredStore=null,this._flushPending=!1}markLoaded(t){this._loaded.add(t)}isLoaded(t){return this._loaded.has(t)}sym(t){return ge.sym(t)}literal(t,i,r){return r!==void 0?ge.literal(t,i,r):ge.literal(t,i)}blankNode(t){return ge.blankNode(t)}graph(){return ge.graph()}parse(t,i,r,n){return ge.parse(t,i,r,n)}st(t,i,r,n){return ge.st(t,i,r,n)}get store(){if(this._adopted&&this._store)return this._store;let t=typeof window<"u"&&(window[Symbol.for("solid-logic-singleton")]||window.SolidLogic);return t?.store?(this._store=t.store,t.store):(this._store||(this._store=ge.graph()),this._store)}useStore(t){return!t||typeof t.match!="function"?!1:(this._store=t,this._fetcher=t.fetcher||null,this._adopted=!0,this._loaded.clear(),this._wireChange(t),!0)}onChange(t,i,r,n){let l={pattern:{subject:t,predicate:i,object:r},cb:n,dirty:!1};return this._changeSubs.add(l),this._wireChange(this.store),()=>this._changeSubs.delete(l)}_matchesPattern(t,i){return(!t.subject||i.subject&&i.subject.equals(t.subject))&&(!t.predicate||i.predicate&&i.predicate.equals(t.predicate))&&(!t.object||i.object&&i.object.equals(t.object))}_wireChange(t){if(!t||this._wiredStore===t)return;this._wiredStore=t;let i=r=>{let n=!1;for(let l of this._changeSubs)!l.dirty&&this._matchesPattern(l.pattern,r)&&(l.dirty=!0,n=!0);n&&this._scheduleFlush()};typeof t.addDataCallback=="function"&&t.addDataCallback(i),typeof t.addDataRemovalCallback=="function"&&t.addDataRemovalCallback(i)}_scheduleFlush(){this._flushPending||(this._flushPending=!0,queueMicrotask(()=>{this._flushPending=!1;for(let t of this._changeSubs)if(t.dirty){t.dirty=!1;try{t.cb()}catch(i){console.error("[rdf] onChange subscriber failed",i)}}}))}get storeFetcher(){return this._fetcher?this._fetcher:this.store.fetcher?(this._fetcher=this.store.fetcher,this._fetcher):(this._fetcher=new ge.Fetcher(this.store),this.store.fetcher=this._fetcher,this._fetcher)}async load(t){let i=String(t).split("#")[0];return this.isLoaded(i)||(await this.storeFetcher.load(i),this.markLoaded(i)),this.store}fetcher(t,i){return new ge.Fetcher(t,i)}sparqlToQuery(t,i,r){return ge.SPARQLToQuery(t,i,r)}sparqlQuery(t,i){return ge.sparqlQuery(t,i)}isReady(){return!!ge&&typeof ge.graph=="function"}hasSparqlEngine(){return typeof ge.SPARQLToQuery=="function"}hasRemoteSparql(){return typeof ge.sparqlQuery=="function"}serialize(t,i,r,n){return ge.serialize(t,i,r,n)}get UpdateManager(){return ge.UpdateManager}get SPARQLToQuery(){return ge.SPARQLToQuery}get Fetcher(){return ge.Fetcher}get NamedNode(){return ge.NamedNode}get BlankNode(){return ge.BlankNode}get Literal(){return ge.Literal}get Collection(){return ge.Collection}get Statement(){return ge.Statement}},Pn=Symbol.for("sol-components:rdf-singleton"),Y=typeof window<"u"?window[Pn]||(window[Pn]=new Ba):new Ba,ke=Y;In("rdf",Y);typeof window<"u"&&window.SolidWebComponents&&typeof window.SolidWebComponents.registerConsumer=="function"&&window.SolidWebComponents.registerConsumer("rdf.useStore",function(e){Y.useStore(e)});var me={rdf:"http://www.w3.org/1999/02/22-rdf-syntax-ns#",schema:"http://schema.org/",dcat:"http://www.w3.org/ns/dcat#",dct:"http://purl.org/dc/terms/",skos:"http://www.w3.org/2004/02/skos/core#"},ze=e=>Y.sym(e),qt=e=>Y.literal(String(e)),Qs=ze(me.rdf+"type");function Dn(e,t){let i=ze(t.iri);return e.add(i,Qs,ze(me.schema+"ImageObject")),t.thumb&&e.add(i,ze(me.schema+"thumbnailUrl"),ze(t.thumb)),t.full&&e.add(i,ze(me.schema+"contentUrl"),ze(t.full)),t.width&&e.add(i,ze(me.schema+"width"),qt(t.width)),t.height&&e.add(i,ze(me.schema+"height"),qt(t.height)),t.caption&&e.add(i,ze(me.schema+"caption"),qt(t.caption)),t.license&&e.add(i,ze(me.schema+"license"),qt(t.license)),t.author&&e.add(i,ze(me.schema+"author"),qt(t.author)),t.detailUrl&&e.add(i,ze(me.schema+"mainEntityOfPage"),ze(t.detailUrl)),t.position!=null&&e.add(i,ze(me.schema+"position"),qt(t.position)),i}var Zs="0.3.4",Mn=`open-media-player/${Zs} (+https://jeff-zucker.github.io/open-media-player/)`;var el="https://commons.wikimedia.org/w/api.php";function Rn(e){return e?(new DOMParser().parseFromString(String(e),"text/html").body.textContent||"").replace(/\s+/g," ").trim():""}function tl(e){if(!e)return"";let t="";try{let i=new URL(e),r=i.pathname.match(/\/wiki\/(.+)$/);t=r?r[1]:i.searchParams.get("title")||""}catch{let i=String(e).match(/Category:[^?#]+/);t=i?i[0]:""}try{t=decodeURIComponent(t)}catch{}return t=t.replace(/_/g," ").trim(),/^Category:/i.test(t)?t:""}async function Un(e,t={}){let{thumbWidth:i=300,limit:r=60,cont:n,signal:l}=t,s=tl(e);if(!s)throw new Error("Not a Commons category URL");let c=new URLSearchParams({action:"query",format:"json",origin:"*",generator:"categorymembers",gcmtitle:s,gcmtype:"file",gcmlimit:String(r),prop:"imageinfo",iiprop:"url|size|extmetadata",iiurlwidth:String(i),iiextmetadatafilter:"Artist|LicenseShortName"});n&&c.set("gcmcontinue",n);let p=await fetch(`${el}?${c}`,{signal:l,headers:{"Api-User-Agent":Mn}});if(!p.ok)throw new Error(`HTTP ${p.status} from Commons`);let v=await p.json();if(v.error)throw new Error(v.error.info||"Commons API error");let y=v.query&&v.query.pages?Object.values(v.query.pages):[];y.sort((h,f)=>(h.index||0)-(f.index||0));let g=[];for(let h of y){let f=h.imageinfo&&h.imageinfo[0];if(!f||!f.thumburl)continue;let _=f.extmetadata||{};g.push({title:(h.title||"").replace(/^File:/,""),name:h.title||"",thumb:f.thumburl,full:f.url,width:f.thumbwidth||0,height:f.thumbheight||0,descUrl:f.descriptionurl||"",artist:Rn(_.Artist&&_.Artist.value),license:Rn(_.LicenseShortName&&_.LicenseShortName.value)})}let b=v.continue&&v.continue.gcmcontinue?v.continue.gcmcontinue:null;return{images:g,cont:b}}function al(e,{startIndex:t=0}={}){let i=Y.graph();return e.forEach((r,n)=>{let l=t+n,s=r.descUrl||r.full||`urn:commons:image:${l}`;Dn(i,{iri:s,thumb:r.thumb,full:r.full,width:r.width,height:r.height,caption:r.title,license:r.license,author:r.artist,detailUrl:r.descUrl,position:l})}),i}async function*Nn(e,{pageSize:t=60,thumbWidth:i=300,signal:r}={}){let n,l=0;do{let{images:s,cont:c}=await Un(e,{thumbWidth:i,limit:t,cont:n,signal:r});yield al(s,{startIndex:l}),l+=s.length,n=c}while(n)}var _e={rdf:"http://www.w3.org/1999/02/22-rdf-syntax-ns#",schema:"http://schema.org/",dct:"http://purl.org/dc/terms/",dcat:"http://www.w3.org/ns/dcat#",dctype:"http://purl.org/dc/dcmitype/",ldp:"http://www.w3.org/ns/ldp#",xsd:"http://www.w3.org/2001/XMLSchema#"},Fn=e=>{if(!e)throw new Error("favouritesUrl: a library base URL is required");return new URL("favourites/",new URL(e,document.baseURI)).href},Ui=e=>JSON.stringify(String(e));function il(e){let t=e.created||new Date().toISOString(),i=`<${e.item}> a dctype:${e.bucket}, schema:${e.schemaType} ;
   schema:name ${Ui(e.name)}`;return e.thumbnail&&(i+=` ;
   schema:thumbnailUrl <${e.thumbnail}>`),e.link&&(i+=` ;
   ${e.download?"dcat:downloadURL":"dcat:landingPage"} <${e.link}>`),i+=" .",`@prefix schema: <${_e.schema}> .
@prefix dct: <${_e.dct}> .
@prefix dcat: <${_e.dcat}> .
@prefix dctype: <${_e.dctype}> .
@prefix xsd: <${_e.xsd}> .

<> a schema:BookmarkAction ;
   dct:creator ${Ui(e.contributor)} ;
   dct:title ${Ui(e.title||e.name)} ;
   dct:created "${t}"^^xsd:dateTime ;
   dct:references <${e.item}> .

${i}
`}async function zn(e,t){let i=Fn(t),r=await fetch(i,{method:"POST",headers:{"Content-Type":"text/turtle"},body:il(e)});if(!r.ok)throw new Error(`Couldn't save favourite (HTTP ${r.status}).`);let n=r.headers.get("Location");return n?new URL(n,i).href:null}async function fa(e){let t=await fetch(e,{method:"DELETE"});if(!t.ok)throw new Error(`Couldn't remove favourite (HTTP ${t.status}).`)}function rl(e,t){let i=Y.graph();try{Y.parse(t,i,e,"text/turtle")}catch{return null}let r=i.each(void 0,Y.sym(_e.rdf+"type"),Y.sym(_e.schema+"BookmarkAction"))[0];if(!r)return null;let n=i.any(r,Y.sym(_e.dct+"references"))?.value;if(!n)return null;let l=Y.sym(n),s=i.each(l,Y.sym(_e.rdf+"type")).map(v=>v.value),c=s.find(v=>v.startsWith(_e.dctype))||"",p=s.find(v=>v.startsWith(_e.schema))||"";return{file:e,item:n,contributor:i.any(r,Y.sym(_e.dct+"creator"))?.value||"anonymous",customTitle:i.any(r,Y.sym(_e.dct+"title"))?.value||"",created:i.any(r,Y.sym(_e.dct+"created"))?.value||"",canonicalTitle:i.any(l,Y.sym(_e.schema+"name"))?.value||n,thumbnail:i.any(l,Y.sym(_e.schema+"thumbnailUrl"))?.value||"",link:i.any(l,Y.sym(_e.dcat+"downloadURL"))?.value||i.any(l,Y.sym(_e.dcat+"landingPage"))?.value||n,bucket:c.replace(_e.dctype,"")||"Collection",schemaType:p.replace(_e.schema,"")}}async function qa(e){let t=Fn(e),i;try{let c=await fetch(t,{headers:{Accept:"text/turtle"},cache:"no-store"});if(!c.ok)return[];i=await c.text()}catch{return[]}let r=Y.graph();try{Y.parse(i,r,t,"text/turtle")}catch{return[]}let n=r.each(Y.sym(t),Y.sym(_e.ldp+"contains")).map(c=>c.value).filter(c=>!c.endsWith("/")),l=[];await Promise.all(n.map(async c=>{try{let p=await fetch(c,{cache:"no-store"});if(!p.ok)return;let v=rl(c,await p.text());v&&l.push(v)}catch{}}));let s=new Map;for(let c of l){s.has(c.item)||s.set(c.item,{item:c.item,canonicalTitle:c.canonicalTitle,thumbnail:c.thumbnail,link:c.link,bucket:c.bucket,schemaType:c.schemaType,created:c.created,contributors:[]});let p=s.get(c.item);p.contributors.some(v=>v.name===c.contributor)||p.contributors.push({name:c.contributor,customTitle:c.customTitle,file:c.file}),c.created>p.created&&(p.created=c.created),!p.thumbnail&&c.thumbnail&&(p.thumbnail=c.thumbnail)}return[...s.values()].map(c=>({...c,count:c.contributors.length}))}var jn=`<!-- "\u2605 Add to favourites" prompt. omp-favourites-ui.js favouritePrompt()
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
`;var Bn=`/* Styles for the "\u2605 Add to favourites" prompt (modal-favourite-prompt.html),
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
`;var sl="omp:fav-contributor",ll=()=>{try{return localStorage.getItem(sl)||""}catch{return""}};function cl(e){return new Promise(t=>{let i=document.createElement("div");i.className="omp-fav-overlay",i.innerHTML=`<style>${Bn}</style>${jn}`,document.body.appendChild(i);let r=i.querySelector(".omp-fav-title");r.value=e||"",r.focus(),r.select?.();let n=s=>{i.remove(),t(s)},l=()=>{let s=r.value.trim();n({contributor:ll()||"anonymous",title:s||e})};i.querySelector(".omp-fav-cancel").addEventListener("click",()=>n(null)),i.querySelector(".omp-fav-add").addEventListener("click",l),i.addEventListener("click",s=>{s.target===i&&n(null)}),i.addEventListener("keydown",s=>{s.key==="Escape"?n(null):s.key==="Enter"&&(s.preventDefault(),l())})})}async function Ni(e,t){let i=await cl(e.name);if(!i)return null;let r={...e,contributor:i.contributor,title:i.title};return await zn(r,t),document.dispatchEvent(new CustomEvent("omp:favourited",{detail:r})),r}function qn(){window.__ompFavRouter||(window.__ompFavRouter=!0,document.addEventListener("item-favourite",e=>{let t=e.detail;t&&t.bucket&&t.item&&Ni(t,t.libraryBase).catch(i=>console.warn("[favourite]",i.message))}))}var On=`/* omp-images shadow styles \u2014 imported as text by omp-images.js (esbuild
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
  .pane-head { flex: 0 0 auto; padding: .45rem .6rem .3rem; font-size: max(16px, .68em); font-weight: 700;
               text-transform: uppercase; letter-spacing: .05em; color: var(--text-muted, #7f8c8d); }
  .list { list-style: none; margin: 0; padding: 0 .35rem .4rem; overflow: auto; min-height: 0; flex: 1 1 auto; }
  .hint { padding: .35rem .5rem; font-size: max(16px, .72em); font-style: italic; color: var(--text-muted, #7f8c8d); }

  .row { display: block; width: 100%; text-align: left; font: inherit; font-size: max(16px, .78em);
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
          font-size: max(16px, .95em); line-height: 1; color: var(--text-muted, #9aa0a6); }
  .star:hover { color: var(--accent, #e6b800); }
  .star.on { color: #e6b800; }
  /* owner-only "remove from the communal wall" control on a favourite row */
  .fav-x { flex: 0 0 auto; background: transparent; border: none; cursor: pointer; padding: 0 .3rem;
           color: var(--text-muted, #9aa0a6); font-size: max(16px, .8em); display: none; }
  :host(.owner) .fav-x { display: inline-block; }
  .fav-x:hover { color: var(--error, #e74c3c); }

  /* owner-only add controls (hidden unless :host(.owner)) */
  .add { flex: 0 0 auto; border-top: 1px solid var(--border, #d0d0d0); padding: .35rem; display: none; }
  :host(.owner) .add { display: block; }
  .add-btn { width: 100%; font: inherit; font-size: max(16px, .74em); padding: .3rem .5rem; cursor: pointer;
             border: 1px dashed var(--border, #c0c0c0); border-radius: 6px; background: transparent; color: var(--text-muted, #555); }
  .add-btn:hover:not(:disabled) { background: var(--hover, #eaf2fb); color: var(--text, #111); }
  .add-btn:disabled { opacity: .5; cursor: default; }
  .add-form { display: flex; flex-direction: column; gap: .3rem; }
  .add-form input { font: inherit; font-size: max(16px, .76em); padding: .3rem .4rem; border: 1px solid var(--border, #c0c0c0);
                    border-radius: 6px; background: var(--bg, #fff); color: var(--text, #111); }
  .add-form .add-row { display: flex; gap: .3rem; }
  .add-form button { font: inherit; font-size: max(16px, .74em); padding: .28rem .6rem; border-radius: 6px;
                     border: 1px solid var(--border, #c0c0c0); cursor: pointer; background: var(--surface, #fff); color: inherit; }
  .add-form button.primary { background: var(--accent, #3498db); color: #fff; border-color: transparent; }
  .add-err { font-size: max(16px, .7em); color: var(--error, #e74c3c); padding: 0 .2rem; }

  sol-gallery { flex: 1 1 auto; min-width: 0; min-height: 0; }

  /* Chip switcher exists only on the phone (built in the coarse-pointer
     branch of connectedCallback); belt-and-braces hide elsewhere. */
  .oi-chips { display: none; }

  /* \u2500\u2500 Phone (M3): favourites column + 3-column browser give way to two
     snap-scrolling chip rows over a 2-column gallery. Same pill dialect
     as the navigator trigger and the player's Browse pill. \u2500\u2500 */
  @media (hover: none) and (pointer: coarse) {
    :host { flex-direction: column !important; }
    .fav-col, .browser { display: none; }
    .oi-chips {
      display: block;
      flex: 0 0 auto;
      background: var(--surface, #fff);
      border-bottom: 1px solid var(--border, #d0d0d0);
    }
    .oi-chip-row {
      display: flex;
      gap: 8px;
      padding: 8px 10px;
      overflow-x: auto;
      scroll-snap-type: x proximity;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
    }
    .oi-chip-row::-webkit-scrollbar { display: none; }
    .oi-chip-row + .oi-chip-row { padding-top: 0; }
    .oi-chip-row[hidden] { display: none; }
    .oi-chip {
      scroll-snap-align: start;
      flex: 0 0 auto;
      min-height: 44px;
      padding: 0 16px;
      border: 1px solid var(--border, #c0c0c0);
      border-radius: 999px;
      background: var(--surface, #fff);
      color: var(--text, #212121);
      font: inherit;
      font-size: max(16px, .8em);
      white-space: nowrap;
      cursor: pointer;
    }
    .oi-chip.active {
      background: var(--accent, #3498db);
      border-color: transparent;
      color: #fff;
      font-weight: 600;
    }
  }
`;var Fi=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._loaded=!1,this._favColls=[],this._favLandings=new Set}connectedCallback(){if(this._built)return;this._built=!0,this.source=this.getAttribute("source")||"";let t=document.createElement("style");t.textContent=On,this._favPane=this._pane("Community Favorites","fav-col");let i=document.createElement("div");i.className="right";let r=document.createElement("div");if(r.className="browser",this._libPane=this._pane("Library"),this._topicPane=this._pane("Topic"),this._collPane=this._pane("Collection"),r.append(this._libPane.pane,this._topicPane.pane,this._collPane.pane),this._gallery=document.createElement("sol-gallery"),this._gallery.addEventListener("load-more",()=>this._pump&&this._pump()),i.append(r,this._gallery),this._isPhone=typeof matchMedia=="function"&&matchMedia("(hover: none) and (pointer: coarse)").matches,this._isPhone){let n=document.createElement("div");n.className="oi-chips";let l=document.createElement("div");l.className="oi-chip-row oi-chip-topics";let s=document.createElement("div");s.className="oi-chip-row oi-chip-colls",n.append(l,s),i.insertBefore(n,r),this._chips={topicsRow:l,collsRow:s},this._chipMode="topics"}this.shadowRoot.append(t,this._favPane.pane,i),this._buildAddControls(),this._syncOwner(),this._onGating=()=>this._syncOwner(),document.addEventListener("omp:reapply-gating",this._onGating),this._onFav=()=>this._loadCommunalFavs(),document.addEventListener("omp:favourited",this._onFav),this._renderFavourites(),this._loadCommunalFavs()}disconnectedCallback(){document.removeEventListener("omp:reapply-gating",this._onGating),document.removeEventListener("omp:favourited",this._onFav)}_pane(t,i){let r=document.createElement("div");r.className="pane"+(i?" "+i:"");let n=document.createElement("div");n.className="pane-head",n.textContent=t;let l=document.createElement("ul");return l.className="list",r.append(n,l),{pane:r,list:l}}ensureLoaded(){this._loaded||this._loading||this._load().catch(t=>console.warn("[omp-images] load failed:",t.message))}async reload(){return this._loaded=!1,this._load()}async _load(){this._loading=!0;try{let t=this._docUrl(),i=await fetch(t);if(!i.ok)throw new Error(`HTTP ${i.status} for ${t}`);let r=Y.graph();Y.parse(await i.text(),r,t,"text/turtle"),this._readModel(r),this._renderLibraries(),this._renderFavourites(),this._restoreSelection(),this._renderChips(),this._loaded=!0}finally{this._loading=!1}}_readModel(t){let i=Y.sym(me.rdf+"type"),r=l=>t.any(l,Y.sym(me.skos+"prefLabel"))?.value||l.value,n=Y.sym(this._schemeIri());this._libraries=t.each(void 0,Y.sym(me.skos+"topConceptOf"),n).map(l=>({iri:l.value,label:this._libLabel(r(l))})).sort((l,s)=>l.label.localeCompare(s.label)),this._topicsByLib=new Map,this._topicByIri=new Map,this._topicLib=new Map;for(let l of this._libraries){let s=t.each(void 0,Y.sym(me.skos+"broader"),Y.sym(l.iri)).map(c=>({iri:c.value,label:r(c)})).sort((c,p)=>c.label.localeCompare(p.label));this._topicsByLib.set(l.iri,s);for(let c of s)this._topicByIri.set(c.iri,c),this._topicLib.set(c.iri,l.iri)}this._collsByTopic=new Map,this._collByIri=new Map;for(let l of t.each(void 0,i,Y.sym(me.dcat+"Dataset"))){let s=t.any(l,Y.sym(me.dcat+"theme"))?.value;if(!s)continue;let c={iri:l.value,title:t.any(l,Y.sym(me.dct+"title"))?.value||"(untitled)",landingPage:t.any(l,Y.sym(me.dcat+"landingPage"))?.value||"",theme:s};this._collsByTopic.has(s)||this._collsByTopic.set(s,[]),this._collsByTopic.get(s).push(c),this._collByIri.set(l.value,c)}for(let l of this._collsByTopic.values())l.sort((s,c)=>s.title.localeCompare(c.title))}_libLabel(t){return t.replace(/^Images\s*-\s*/i,"").trim()||t}_renderLibraries(){this._libPane.list.replaceChildren(),this._libBtns=new Map;for(let t of this._libraries){let i=this._row(this._libPane.list,"lib",t.label);i.addEventListener("click",()=>this._selectLibrary(t)),this._libBtns.set(t.iri,i)}this._libraries.length||this._hint(this._libPane.list,"No libraries")}_selectLibrary(t){this._activeLibrary=t,this._mark(this._libBtns,this._libBtns.get(t.iri)),this._renderTopics(t),this._activeTopic=null,this._collPane.list.replaceChildren(),this._hint(this._collPane.list,"Select a topic"),this._addCollBtn.disabled=!0,this._addTopicBtn.disabled=!1,this._renderChips()}_renderTopics(t){this._topicPane.list.replaceChildren(),this._topicBtns=new Map;let i=this._topicsByLib.get(t.iri)||[];for(let r of i){let n=this._row(this._topicPane.list,"topic",r.label);n.addEventListener("click",()=>this._selectTopic(r)),this._topicBtns.set(r.iri,n)}i.length||this._hint(this._topicPane.list,"No topics in this library yet")}_selectTopic(t){this._activeTopic=t,this._mark(this._topicBtns,this._topicBtns.get(t.iri)),this._renderColls(t),this._addCollBtn.disabled=!1,this._renderChips()}_renderColls(t){this._collPane.list.replaceChildren(),this._collBtns=new Map,this._starByIri=new Map;let i=this._collsByTopic.get(t.iri)||[];for(let r of i){let n=document.createElement("li");n.className="has-star";let l=document.createElement("button");l.type="button",l.className="row coll",l.textContent=r.title,l.addEventListener("click",()=>this._openCollection(r));let s=this._starButton(r);n.append(l,s),this._collPane.list.appendChild(n),this._collBtns.set(r.iri,l)}i.length||this._hint(this._collPane.list,"No collections in this topic yet"),this._activeCollIri&&this._collBtns.has(this._activeCollIri)&&this._collBtns.get(this._activeCollIri).classList.add("selected")}_starButton(t){let i=this._favLandings.has(t.landingPage),r=document.createElement("button");return r.type="button",r.className="star"+(i?" on":""),r.textContent=i?"\u2605":"\u2606",r.title="Add to the communal favourites",r.setAttribute("aria-label","Favourite"),r.addEventListener("click",n=>{n.stopPropagation(),this._favourite(t)}),this._starByIri.set(t.iri,r),r}async _loadCommunalFavs(){try{let t=await qa(this._docUrl());this._favColls=t.filter(i=>i.bucket==="Collection"||i.schemaType==="ImageGallery"),this._favLandings=new Set(this._favColls.map(i=>i.link||i.item))}catch{this._favColls=[],this._favLandings=new Set}this._renderFavourites(),this._refreshStars(),this._renderChips()}_refreshStars(){for(let[t,i]of this._starByIri||new Map){let r=this._collByIri?.get(t),n=r&&this._favLandings.has(r.landingPage);i.classList.toggle("on",!!n),i.textContent=n?"\u2605":"\u2606"}}_renderFavourites(){let t=this._favPane.list;t.replaceChildren();let i=[...this._favColls].sort((r,n)=>r.canonicalTitle.localeCompare(n.canonicalTitle));if(!i.length){this._hint(t,"Star a collection \u2014 it joins the \u2605 Favourites wall");return}for(let r of i){let n=document.createElement("li");n.className="has-star";let l=document.createElement("button");l.type="button",l.className="row fav-link",l.textContent=r.canonicalTitle+(r.count>1?`  \xB7  \u2605${r.count}`:""),l.title=`Favourited by ${r.contributors.map(s=>s.name).join(", ")}`,l.addEventListener("click",()=>this.openByRef(r.link||r.item)),n.append(l,this._favDeleteButton(r)),t.appendChild(n)}}_favDeleteButton(t){let i=document.createElement("button");return i.type="button",i.className="fav-x",i.textContent="\u2715",i.title="Remove from the communal favourites",i.setAttribute("aria-label","Remove favourite"),i.addEventListener("click",async r=>{if(r.stopPropagation(),!!confirm(`Remove \u201C${t.canonicalTitle}\u201D from the communal favourites?`)){for(let n of t.contributors||[])if(n.file)try{await fa(n.file)}catch(l){console.warn("[fav delete]",l.message)}document.dispatchEvent(new CustomEvent("omp:favourited"))}}),i}async _favourite(t){if(this._favLandings.has(t.landingPage)){let i=this._favColls.find(r=>(r.link||r.item)===t.landingPage);for(let r of i?.contributors||[])if(r.file)try{await fa(r.file)}catch(n){console.warn("[fav delete]",n.message)}document.dispatchEvent(new CustomEvent("omp:favourited"));return}try{await Ni({item:t.landingPage,bucket:"Collection",schemaType:"ImageGallery",name:t.title,link:t.landingPage,download:!1},this._docUrl())&&this._loadCommunalFavs()}catch(i){console.warn("[favourite]",i.message)}}openByRef(t){for(let i of this._collByIri?.values()||[])if(i.landingPage===t){this._jumpToCollection(i.iri);return}}_jumpToCollection(t){let i=this._collByIri?.get(t);if(!i)return;let r=this._topicLib.get(i.theme),n=this._libraries.find(s=>s.iri===r),l=this._topicByIri.get(i.theme);n&&this._selectLibrary(n),l&&this._selectTopic(l),this._openCollection(i),requestAnimationFrame(()=>{this._libBtns.get(r)?.scrollIntoView({block:"nearest"}),this._topicBtns.get(i.theme)?.scrollIntoView({block:"nearest"}),this._collBtns.get(t)?.scrollIntoView({block:"nearest"})})}_openCollection(t){this._activeCollIri=t.iri,this._collBtns&&this._mark(this._collBtns,this._collBtns.get(t.iri));try{localStorage.setItem(this._selKey(),t.landingPage)}catch{}let i=t.landingPage;if(!i){this._gallery.clear(),this._gallery.end();return}this._abort?.abort(),this._abort=new AbortController;let r=this._abort.signal;this._gallery.clear();let n=Nn(i,{signal:r})[Symbol.asyncIterator](),l=!1,s=!1;this._pump=async()=>{if(!(l||s)){s=!0;try{let{value:c,done:p}=await n.next();if(r.aborted)return;if(p){l=!0,this._gallery.end();return}this._gallery.add(c)}catch(c){l=!0,c.name!=="AbortError"&&(this._gallery.end(),console.warn("[omp-images]",c.message))}finally{s=!1}}},this._pump(),this._renderChips()}_renderChips(){if(!this._isPhone||!this._chips)return;let{topicsRow:t,collsRow:i}=this._chips;t.replaceChildren(),i.replaceChildren();let r=(n,l,s,c)=>{let p=document.createElement("button");p.type="button",p.className="oi-chip"+(s?" active":""),p.textContent=l,p.addEventListener("click",c),n.appendChild(p)};this._favColls?.length&&r(t,"\u2605 Favorites",this._chipMode==="favs",()=>{this._chipMode="favs",this._renderChips()});for(let n of this._libraries||[])for(let l of this._topicsByLib?.get(n.iri)||[])r(t,l.label,this._chipMode!=="favs"&&this._activeTopic?.iri===l.iri,()=>{this._chipMode="topics",this._activeLibrary?.iri!==n.iri&&this._selectLibrary(n),this._selectTopic(l)});if(this._chipMode==="favs"){let n=[...this._favColls||[]].sort((l,s)=>l.canonicalTitle.localeCompare(s.canonicalTitle));for(let l of n){let s=l.link||l.item,c=[...this._collByIri?.values()||[]].find(p=>p.landingPage===s);r(i,l.canonicalTitle,!!c&&this._activeCollIri===c.iri,()=>this.openByRef(s))}}else if(this._activeTopic)for(let n of this._collsByTopic?.get(this._activeTopic.iri)||[])r(i,n.title,this._activeCollIri===n.iri,()=>this._openCollection(n));i.hidden=i.children.length===0,requestAnimationFrame(()=>{t.querySelector(".active")?.scrollIntoView({inline:"nearest",block:"nearest"}),i.querySelector(".active")?.scrollIntoView({inline:"nearest",block:"nearest"})})}_restoreSelection(){let t=null;try{t=localStorage.getItem(this._selKey())}catch{}if(t){for(let i of this._collByIri.values())if(i.landingPage===t){this._jumpToCollection(i.iri);return}}}_row(t,i,r){let n=document.createElement("li"),l=document.createElement("button");return l.type="button",l.className=`row ${i}`,l.textContent=r,n.appendChild(l),t.appendChild(n),l}_hint(t,i){if(!i){t.replaceChildren();return}let r=document.createElement("li");r.className="hint",r.textContent=i,t.replaceChildren(r)}_mark(t,i){for(let r of t.values()){let n=r===i;r.classList.toggle("selected",n),n?r.setAttribute("aria-current","true"):r.removeAttribute("aria-current")}}_buildAddControls(){let t=document.createElement("div");t.className="add",this._addTopicBtn=this._mkAddBtn("+ Add topic",()=>this._openAddTopic(t)),this._addTopicBtn.disabled=!0,t.appendChild(this._addTopicBtn),this._topicPane.pane.appendChild(t);let i=document.createElement("div");i.className="add",this._addCollBtn=this._mkAddBtn("+ Add collection",()=>this._openAddCollection(i)),this._addCollBtn.disabled=!0,i.appendChild(this._addCollBtn),this._collPane.pane.appendChild(i)}_mkAddBtn(t,i){let r=document.createElement("button");return r.type="button",r.className="add-btn",r.textContent=t,r.addEventListener("click",i),r}_openAddTopic(t){if(!this._activeLibrary)return;this._addTopicBtn.style.display="none";let{form:i,inputs:r,ok:n,err:l,reset:s}=this._addForm(t,[{ph:"Topic name"}],this._addTopicBtn);i.addEventListener("submit",async c=>{c.preventDefault();let p=r[0].value.trim();if(p){n.disabled=!0,l.textContent="";try{await this._addTopic(p,this._activeLibrary.iri);let v=this._activeLibrary.iri;s(),await this.reload();let y=this._libraries.find(g=>g.iri===v);y&&this._selectLibrary(y)}catch(v){l.textContent=v.message,n.disabled=!1}}})}_openAddCollection(t){if(!this._activeTopic)return;this._addCollBtn.style.display="none";let{form:i,inputs:r,ok:n,err:l,reset:s}=this._addForm(t,[{ph:"Collection title"},{ph:"Commons category URL",value:"https://commons.wikimedia.org/wiki/Category:"}],this._addCollBtn);i.addEventListener("submit",async c=>{c.preventDefault();let p=r[0].value.trim(),v=r[1].value.trim();if(!(!p||!v)){n.disabled=!0,l.textContent="";try{await this._addCollection(p,v,this._activeTopic.iri);let y=this._activeTopic.iri,g=this._activeLibrary.iri;s(),await this.reload();let b=this._libraries.find(f=>f.iri===g);b&&this._selectLibrary(b);let h=this._topicByIri.get(y);h&&this._selectTopic(h)}catch(y){l.textContent=y.message,n.disabled=!1}}})}_addForm(t,i,r){let n=document.createElement("form");n.className="add-form";let l=i.map(g=>{let b=document.createElement("input");return b.placeholder=g.ph,b.required=!0,g.value&&(b.value=g.value),n.appendChild(b),b}),s=document.createElement("div");s.className="add-row";let c=document.createElement("button");c.type="submit",c.className="primary",c.textContent="Add";let p=document.createElement("button");p.type="button",p.textContent="Cancel";let v=document.createElement("div");v.className="add-err",s.append(c,p),n.append(s,v),t.appendChild(n),l[0].focus();let y=()=>{n.remove(),r.style.display=""};return p.addEventListener("click",y),{form:n,inputs:l,ok:c,err:v,reset:y}}async _addTopic(t,i){let r=this._mintIri(t);await this._patch(`<${r}> a skos:Concept, schema:DefinedTerm ; skos:prefLabel ${JSON.stringify(t)} ; skos:broader <${i}> .`)}async _addCollection(t,i,r){let n=this._mintIri(t,"coll");await this._patch(`<${n}> a <${me.dcat}Dataset>, <${me.schema}ImageGallery> ; dct:title ${JSON.stringify(t)} ; dcat:landingPage <${i}> ; dcat:theme <${r}> .`)}async _patch(t){let i=`PREFIX skos: <${me.skos}>
PREFIX schema: <${me.schema}>
PREFIX dct: <${me.dct}>
PREFIX dcat: <${me.dcat}>
INSERT DATA {
${t}
}
`,r=await fetch(this._docUrl(),{method:"PATCH",headers:{"Content-Type":"application/sparql-update"},body:i});if(!r.ok)throw new Error(`Save failed (HTTP ${r.status}). The file must be on a Solid pod you own.`)}_docUrl(){return new URL(this.source,document.baseURI).href.split("#")[0]}_schemeIri(){let t=this.source.split("#")[1]||"Images";return`${this._docUrl()}#${t}`}_selKey(){return`omp-images:collection:${this.source}`}_mintIri(t,i){let r=(i?i+"-":"")+t.trim().replace(/[^A-Za-z0-9]+/g,"_").replace(/^_+|_+$/g,"").slice(0,40),n=r||"item",l=this._docUrl(),s=p=>this._topicByIri.has(`${l}#${p}`)||this._libraries.some(v=>v.iri===`${l}#${p}`)||this._collByIri.has(`${l}#${p}`),c=2;for(;s(n);)n=`${r}_${c++}`;return`${l}#${n}`}_syncOwner(){let t=!!document.querySelector("sol-default")?.hasAttribute("solid-kitchen")||!!document.querySelector("sol-login")?.isLoggedIn;this.classList.toggle("owner",t)}};customElements.get("omp-images")||customElements.define("omp-images",Fi);function zi(e){if(!e)return null;let t;try{t=new URL(e)}catch{return null}let i=t.pathname.match(/\/details\/([^/?]+)/);if(i)return`collection:${i[1]}`;if(t.pathname==="/search"||t.pathname==="/search.php"){let r=[],n=(t.searchParams.get("query")||"").trim();n&&r.push(n);for(let l of t.searchParams.getAll("and[]")){let s=l.trim();s&&r.push(s)}return r.length?r.join(" AND "):null}return null}function Gn(e){if(e==null)return NaN;if(typeof e=="number")return e;let t=String(e).trim();if(!t)return NaN;if(/^[0-9.]+$/.test(t))return parseFloat(t);let i=t.split(":").map(Number);return i.some(r=>!Number.isFinite(r))?NaN:i.length===3?i[0]*3600+i[1]*60+i[2]:i.length===2?i[0]*60+i[1]:i[0]}function ul(e){return/^collection:/.test(e)}function pl(e){return e==="video"?"movies":"audio"}async function ji(e,t=null,i={}){if(!e)return[];let r=pl(i.mediaType),n=e,l=t&&(!ul(e)||t.applyToCatalogArtists);if(l){let g=[];e.includes("mediatype:")||g.push(`mediatype:"${r}"`),t.minDownloads>0&&g.push(`downloads:[${t.minDownloads} TO *]`);for(let b of t.blockedCollections||[]){let h=String(b).trim();h&&g.push(`-collection:"${h}"`)}g.length&&(n=`(${e}) AND ${g.join(" AND ")}`)}let s=new URLSearchParams({q:n,output:"json",rows:1e4});for(let g of["identifier","title","downloads","runtime","collection","creator","format","licenseurl","rights","possible-copyright-status"])s.append("fl[]",g);let c=`https://archive.org/advancedsearch.php?${s}`,p=await fetch(c);if(!p.ok)throw new Error(`HTTP error! status: ${p.status}`);let v=await p.json(),y=[];if(v.response&&v.response.docs)for(let g of v.response.docs)g.identifier&&y.push({name:g.title||g.identifier,url:`https://archive.org/details/${g.identifier}`,_downloads:g.downloads,_runtime:g.runtime,_collection:g.collection,_creator:g.creator,_format:g.format,_rights:Kn(g),_detailUrl:`https://archive.org/details/${g.identifier}`});if(l){let g=(t.blockedCollections||[]).map(b=>String(b).trim()).filter(Boolean);y=y.filter(b=>{if(t.minItemRuntimeSec>0&&b._runtime!=null){let h=Gn(b._runtime);if(Number.isFinite(h)&&h<t.minItemRuntimeSec)return!1}return!(g.length&&b._collection&&(Array.isArray(b._collection)?b._collection:[b._collection]).some(f=>g.includes(f)))})}return i.mediaType==="video"&&(y=y.filter(g=>{let b=Array.isArray(g._format)?g._format:g._format?[g._format]:[];return!b.length||b.some(h=>gl.test(h))}),y=fl(y)),y}function fl(e){let t=n=>{let l=parseInt(n._downloads,10);return Number.isFinite(l)?l:0},i=new Map,r=[];for(let n of e){let l=String(n.name||"").toLowerCase().replace(/\s+/g," ").trim();if(!l){r.push(n);continue}let s=i.get(l);(!s||t(n)>t(s))&&i.set(l,n)}return[...i.values(),...r].sort((n,l)=>t(l)-t(n))}var ml="https://archive.org/metadata/",hl=[".mp3",".m4a",".aac",".ogg",".oga",".opus",".webm",".weba",".flac",".wav"],bl=[".mp4",".m4v",".ogv",".webm",".mov"],gl=/(h\.?264|mpeg-?4|ogg\s*video|web ?m|quicktime|matroska)/i,yl=e=>e==="video"?bl:hl,vl=e=>new RegExp("("+e.map(t=>"\\"+t).join("|")+")$","i");function wl(e){return e.source==="derivative"&&e.original?e.original:e.name}function xl(e,t){for(let i of t){let r=e.find(n=>n.name&&n.name.toLowerCase().endsWith(i));if(r)return r}return null}var Hn={NOT_IN_COPYRIGHT:"Public domain",PUBLIC_DOMAIN:"Public domain",IN_COPYRIGHT:"In copyright",UNKNOWN:"Rights unknown"};function kl(e){let t=/creativecommons\.org\/(licenses|publicdomain)\/([a-z0-9-]+)(?:\/([0-9.]+))?/i.exec(e||"");if(!t)return"";let i=t[2].toLowerCase();return t[1].toLowerCase()==="publicdomain"||i==="zero"||i==="mark"?"Public domain (CC)":`CC ${i.toUpperCase()}${t[3]?" "+t[3]:""}`}function Sl(e,t,i){let r=kl(e);return r||(i&&Hn[i]?Hn[i]:t?t.length>70?t.slice(0,67)+"\u2026":t:i?i.replace(/_/g," ").toLowerCase():e?"Licensed (see IA)":"")}function Kn(e){if(!e)return null;let t=s=>Array.isArray(s)?s[0]:s,i=t(e.licenseurl)||"",r=(t(e.rights)||"").toString().trim(),n=t(e["possible-copyright-status"])||"",l=Sl(i,r,n);return l?{label:l,licenseUrl:i,rights:r,status:n}:null}async function Wn(e,t=null,i={}){if(!e)return[];let r=yl(i.mediaType),n=vl(r),l=await fetch(`${ml}${e}`);if(!l.ok)throw new Error(`IA metadata ${l.status} for ${e}`);let s=await l.json();if(!s.metadata)throw new Error(`Empty metadata for ${e}`);let c=s.metadata||{};if(c["access-restricted-item"]==="true"||c["access-restricted"]==="true"||c.is_dark==="true")return[];let v=Kn(c),y=`https://archive.org/details/${e}`,g=s.files||[],b=new Map;for(let z of g){if(!z.name||!n.test(z.name)||z.private==="true")continue;let q=wl(z);b.has(q)||b.set(q,[]),b.get(q).push(z)}let h=Array.isArray(c.creator)?c.creator[0]:c.creator,f=h?String(h).trim():"",$=/^(various(\s+artists?)?|v\.?a\.?)$/i.test(f)?"":f,D=[];for(let z of b.values()){let q=xl(z,r);if(!q)continue;let pe=q.length||z.find(P=>P.length)?.length,oe=q.title||z.find(P=>P.title)?.title,Se=q.bitrate||z.find(P=>P.bitrate)?.bitrate,Be=q.artist||q.creator||z.find(P=>P.artist)?.artist||z.find(P=>P.creator)?.creator||"",We=String(Be).trim()||$;D.push({url:`https://archive.org/download/${e}/${encodeURIComponent(q.name)}`,name:oe||q.name.replace(/\.[^.]+$/,""),time:Ll(pe),artist:We,_rights:v,_detailUrl:y,_lengthSec:Gn(pe),_bitrate:Se!=null?parseFloat(Se):NaN})}return t?D.filter(z=>!(t.minTrackDurationSec>0&&Number.isFinite(z._lengthSec)&&z._lengthSec<t.minTrackDurationSec||t.minTrackBitrateKbps>0&&Number.isFinite(z._bitrate)&&z._bitrate<t.minTrackBitrateKbps)):D}function Ll(e){if(!e)return"";if(/^\d+:\d+/.test(e))return e.split(":").slice(-2).join(":");let t=parseFloat(e);if(!isFinite(t))return"";let i=Math.floor(t/60),r=Math.floor(t%60);return`${i}:${r.toString().padStart(2,"0")}`}var Vn="Unknown Artist",_l="Unsorted";function it(e){return'"'+String(e).replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t")+'"'}function Bi(e){return String(e||"").toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"")||"untitled"}function Al(e){return"file://"+String(e).split("/").map(encodeURIComponent).join("/")}function El(e,t){let i=e,r=1;for(;t.has(i);)r+=1,i=`${e}-${r}`;return t.add(i),i}function Yn(e){let t=new Set,i=new Map,r=new Map,n=new Map,l=c=>{let p=c||_l;return r.has(p)||r.set(p,{name:p,slug:Bi(p)}),r.get(p)},s=(c,p)=>{let v=c||Vn;return i.has(v)||i.set(v,{name:v,slug:"artist_"+Bi(v),genreName:p||null}),i.get(v)};for(let c of e||[]){if(!c||c.error)continue;let p=c.albumArtist||c.artist||Vn,v=l(c.genre),y=s(p,c.genre),g=c.album||null,b=g?`${p}\0${g}`:`\0single\0${c.absPath}`,h=n.get(b);if(!h){let f=g||c.title||"Untitled";h={slug:El(Bi(`${p}_${f}`),t),title:f,artist:y,genre:v,year:c.year!=null?String(c.year):null,tracks:[],artFromAbsPath:null},n.set(b,h)}h.tracks.push({title:c.title||c.absPath.split("/").pop(),trackNo:Number.isFinite(c.trackNo)?c.trackNo:null,durationSec:Number.isFinite(c.durationSec)?c.durationSec:null,absPath:c.absPath,artist:y}),!h.artFromAbsPath&&c.hasPicture&&(h.artFromAbsPath=c.absPath)}for(let c of n.values())c.tracks.sort((p,v)=>(p.trackNo??1e9)-(v.trackNo??1e9)||p.title.localeCompare(v.title));return{releases:[...n.values()],artists:[...i.values()],genres:[...r.values()]}}function Jn(e,{title:t="My Music",covers:i=new Map}={}){let{releases:r,artists:n,genres:l}=e,s={};s["index.ttl"]=`@prefix dct: <http://purl.org/dc/terms/> .
@prefix dcat: <http://www.w3.org/ns/dcat#> .

<>
    a <#Library>, dcat:Catalog ;
    dct:title ${it(t)} .

<#it>
    a dcat:Catalog ;
    dct:title ${it(t)} ;
    dcat:catalog <./releases.ttl#it>, <./playlists.ttl#it> ;
    dcat:dataset <./agents.ttl#it> ;
    dcat:themeTaxonomy <./genres.ttl#Music> .
`,s["genres.ttl"]=`@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix mo: <http://purl.org/ontology/mo/> .

<#Music>
    a skos:ConceptScheme ;
    skos:prefLabel "Music" .
`+l.map(p=>`
<#${p.slug}>
    a skos:Concept, mo:Genre ;
    skos:prefLabel ${it(p.name)} ;
    skos:topConceptOf <#Music> .
`).join("");let c=new Map(l.map(p=>[p.name,p.slug]));s["agents.ttl"]=`@prefix dct: <http://purl.org/dc/terms/> .
@prefix dcat: <http://www.w3.org/ns/dcat#> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix mo: <http://purl.org/ontology/mo/> .

<#it>
    a dcat:Dataset ;
    dct:title "Artists" .
`+n.map(p=>{let v=p.genreName?c.get(p.genreName):null,y=v?` ;
    mo:genre <./genres.ttl#${v}>`:"";return`
<#${p.slug}>
    a foaf:Agent, mo:MusicArtist ;
    foaf:name ${it(p.name)}${y} .
`}).join(""),s["releases.ttl"]=`@prefix dct: <http://purl.org/dc/terms/> .
@prefix dcat: <http://www.w3.org/ns/dcat#> .

<#it>
    a dcat:Catalog ;
    dct:title ${it(t+" \u2014 releases")} ;
    dcat:dataset ${r.map(p=>`<./releases/${p.slug}#it>`).join(", ")||"<#it>"} .
`,s["playlists.ttl"]=`@prefix dct: <http://purl.org/dc/terms/> .
@prefix dcat: <http://www.w3.org/ns/dcat#> .

<#it>
    a dcat:Catalog ;
    dct:title ${it(t+" \u2014 playlists")} .
`;for(let p of r){let v=i.get(p.slug),y=v?`
    foaf:depiction <./${v.file}> ;`:"",g=p.year?`
    dct:date ${it(p.year)} ;`:"",b=p.tracks.map((f,_)=>`<#t${String(_+1).padStart(2,"0")}>`).join(", "),h=`@prefix dct: <http://purl.org/dc/terms/> .
@prefix mo: <http://purl.org/ontology/mo/> .
@prefix dcat: <http://www.w3.org/ns/dcat#> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<#it>
    a mo:Release, dcat:Dataset ;
    dct:title ${it(p.title)} ;
    dct:identifier ${it(p.slug)} ;
    dct:isPartOf <../releases.ttl#it> ;
    foaf:maker <../agents.ttl#${p.artist.slug}> ;
    mo:genre <../genres.ttl#${p.genre.slug}> ;${g}${y}
    mo:track ${b} .
`;p.tracks.forEach((f,_)=>{let $=`t${String(_+1).padStart(2,"0")}`,D=f.trackNo!=null?f.trackNo:_+1,z=f.durationSec!=null?`
    mo:duration ${f.durationSec}.0 ;`:"";h+=`
<#${$}>
    a mo:Track ;
    dct:title ${it(f.title)} ;
    dct:isPartOf <#it> ;
    foaf:maker <../agents.ttl#${f.artist.slug}> ;
    mo:track_number ${D} ;${z}
    mo:item <${Al(f.absPath)}> .
`}),s[`releases/${p.slug}`]=h}return s}var Xn=`<!-- Inline add-genre form shown in the genre column footer (ia3.js
     openAddGenreForm). -->
<form class="ia-column-addform" autocomplete="off">
  <input type="text" class="ia-column-addinput" placeholder="Genre name" aria-label="New genre name" required>
  <button type="submit" class="ia-column-addsave" aria-label="Add">\u2713</button>
  <button type="button" class="ia-column-addcancel" aria-label="Cancel">\u2717</button>
</form>
`;var Qn=`<!-- Inline add-artist form shown in the artist column footer (ia3.js
     openAddArtistForm). The genre <select> options are data-driven and
     populated by ia3 after parse. -->
<form class="ia-column-addform ia-column-addartist" autocomplete="off">
  <input type="text" class="ia-column-addinput" placeholder="archive.org URL or ID" aria-label="Artist URL or ID" required>
  <select class="ia-column-addselect" aria-label="Genre"></select>
  <button type="submit" class="ia-column-addsave" aria-label="Add">\u2713</button>
  <button type="button" class="ia-column-addcancel" aria-label="Cancel">\u2717</button>
</form>
`;var Zn=`<!-- Dismissible failure banner (ia3.js showNotice) \u2014 for things the user
     must not miss, chiefly "this media can't play". -->
<span class="ia-notice-icon" aria-hidden="true">\u26A0</span><span class="ia-notice-msg"></span><button type="button" class="ia-notice-close" aria-label="Dismiss">\u2715</button>
`;import{Namespace as je,graph as $t,Fetcher as qi,sym as F,st as M,literal as te,UpdateManager as eo,parse as Ot}from"rdflib";function Oa(e,t={}){let i=t.element||Il(),r=t.tag||t.element&&typeof t.element.getAttribute=="function"&&t.element.getAttribute("side")||"default";if(i&&typeof i.fetchFor=="function")try{let l=i.fetchFor(e,r);if(typeof l=="function")return l}catch{}let n=typeof window<"u"&&window.SolidWebComponents?.adoptedFetch;return typeof n=="function"?n:typeof globalThis.fetch=="function"?globalThis.fetch.bind(globalThis):void 0}function Il(){return typeof document>"u"?null:document.querySelector("sol-login")}var cd=300*1e3;var dt=je("http://www.w3.org/2004/02/skos/core#"),ut=je("http://www.w3.org/2000/01/rdf-schema#"),ce=je("http://www.w3.org/1999/02/22-rdf-syntax-ns#"),bt=je("http://www.w3.org/2001/XMLSchema#"),H=je("http://purl.org/dc/terms/"),xe=je("http://xmlns.com/foaf/0.1/"),X=je("http://purl.org/ontology/mo/"),de=je("http://www.w3.org/ns/dcat#"),O=je("http://schema.org/"),Gi=je("http://www.w3.org/ns/oa#"),Xe=je("http://www.w3.org/ns/solid/terms#"),Pl=je("http://purl.org/dc/dcmitype/"),Wi=X("MusicArtist"),Ht=X("Release"),Oi=X("Track"),Gt=O("MusicPlaylist"),Dl=X("Genre");function Te(e){let t=new URL("./",e);return{libraryDoc:F(e),agentsDoc:F(new URL("agents.ttl",t).href),genresDoc:F(new URL("genres.ttl",t).href),releasesDoc:F(new URL("releases.ttl",t).href),releasesIndexDoc:F(new URL("releases.ttl",t).href),releasesCatalog:F(new URL("releases.ttl",t).href+"#it"),playlistsDoc:F(new URL("playlists.ttl",t).href),playlistsCatalog:F(new URL("playlists.ttl",t).href+"#it"),releasesDirUrl:new URL("releases/",t).href,playlistsDirUrl:new URL("playlists/",t).href,musicRootUri:new URL("genres.ttl",t).href+"#Music"}}function Vi(e){return String(e).trim().replace(/[^\w]+/g,"_").replace(/^_+|_+$/g,"").slice(0,80)||"Playlist"}function Ml(e,t,i){let r=Te(t),n=r.libraryDoc,l=new Set;for(let v of e.match(r.playlistsCatalog,de("dataset"),null))l.add(v.object.value.split("#")[0]);for(let v of e.match(n,ut("seeAlso"),null))l.add(v.object.value);let s=Vi(i),c=r.playlistsDirUrl+s,p=1;for(;l.has(c);)c=r.playlistsDirUrl+s+"_"+p,p++;return c.slice(r.playlistsDirUrl.length)}function Rl(e,t,i,r){let n=new Set(r||[]);for(let p of e.match(t.releasesCatalog,de("dataset"),null))n.add(p.object.value.split("#")[0]);for(let p of e.match(t.releasesDoc,ut("seeAlso"),null))n.add(p.object.value);let l=Vi(i).toLowerCase()||"release",s=t.releasesDirUrl+l,c=1;for(;n.has(s);)s=t.releasesDirUrl+l+"_"+c++;return s}function Ka(e,t,i){let r="/"+String(t)+"/",n=(String(i).match(/\//g)||[]).length,l=n?"../".repeat(n):"./";return String(e).replace(/<(https?:\/\/[^>\s]+)>/g,(s,c)=>{let p=c.indexOf(r);if(p<0)return s;let v=c.slice(p+r.length);return v?`<${l}${v}>`:s})}var Yi="omp-spine-v1",Ul=10080*60*1e3,Wa=()=>typeof caches<"u";async function Nl(e){if(!Wa())return null;try{let t=await caches.open(Yi),i=await t.match(e);if(!i)return null;let r=Number(i.headers.get("x-omp-cached-at")||0);return r&&Date.now()-r>Ul?(t.delete(e),null):await i.text()}catch{return null}}async function Fl(e,t,i="text/turtle"){if(!(!Wa()||t==null))try{await(await caches.open(Yi)).put(e,new Response(t,{headers:{"Content-Type":i,"x-omp-cached-at":String(Date.now())}}))}catch{}}function Ki(...e){Wa()&&caches.open(Yi).then(t=>{for(let i of e)i&&t.delete(String(i).split("#")[0]).catch(()=>{})}).catch(()=>{})}async function ao(e,{shared:t=!1,lazyReleases:i=!1,lazyPlaylists:r=!1}={}){let n=t?ke.store:$t(),l=t?ke.storeFetcher:new qi(n),s=new URL(e,window.location.href).href,c=(()=>{try{let g=Te(s);return{releases:g.releasesDoc.value,playlists:g.playlistsDoc.value}}catch{return{}}})(),p=c.releases||null,v=t&&Wa();async function y(g){let b=String(g).split("#")[0];if(!(t&&ke.isLoaded(b))){if(v){let h=await Nl(b);if(h!=null)try{Ot(h,n,b,"text/turtle"),ke.markLoaded(b);return}catch{}}if(await l.load(b),t&&ke.markLoaded(b),v)try{let h=ke.serialize(F(b),n,b,"text/turtle");typeof h=="string"&&h.length&&await Fl(b,h)}catch{}}}try{await y(s);let g=8,b=new Set([s]),h=$=>{let D=[F($),F($.split("#")[0]+"#it")],z=$.split("#")[0],pe=i&&p&&z===p||r&&c.playlists&&z===c.playlists?[de("catalog"),de("themeTaxonomy")]:[ut("seeAlso"),de("dataset"),de("catalog"),de("themeTaxonomy")],oe=[];for(let Se of D)for(let Be of pe)for(let We of n.match(Se,Be,null))try{oe.push(new URL(We.object.value,$).href.split("#")[0])}catch{}return oe.filter(Se=>Se&&!b.has(Se)&&!/\.(meta|acl)$/i.test(Se))},f=h(s);for(;f.length;){let $=[];for(let D=0;D<f.length;D+=g){let z=f.slice(D,D+g).filter(q=>b.has(q)?!1:(b.add(q),!0));await Promise.all(z.map(async q=>{try{await y(q),$.push(...h(q))}catch(pe){console.warn("seeAlso load failed:",q,pe)}}))}f=$.filter(D=>!b.has(D))}return{store:n,baseURI:s,fetcher:l,loadDocs:async $=>{let D=[...new Set(($||[]).map(q=>q&&q.split("#")[0]))].filter(q=>q&&(t?!ke.isLoaded(q):!b.has(q))),z=0;for(let q=0;q<D.length;q+=g){let pe=D.slice(q,q+g).filter(oe=>b.has(oe)?!1:(b.add(oe),!0));await Promise.all(pe.map(async oe=>{try{t&&ke.isLoaded(oe)||(await l.load(oe),t&&ke.markLoaded(oe)),z++}catch(Se){console.warn("lazy doc load failed:",oe,Se)}}))}return z}}}catch(g){throw console.error("Error loading RDF:",g),g}}async function io(e,t){let i=$t(),r=async l=>{let s=await e(l,{headers:{Accept:"text/turtle"}});if(!s||s.ok===!1)throw new Error(`fetch ${l} \u2192 ${s&&s.status}`);let c=await s.text(),p=(s.headers?.get?.("Content-Type")||"text/turtle").split(";")[0].trim();Ot(c,i,l.split("#")[0],p||"text/turtle")};await r(t);let n=i.any(F(t),Xe("publicTypeIndex"))?.value||i.match(null,Xe("publicTypeIndex"),null)[0]?.object?.value||null;if(!n)return{url:null,typeIndex:null,reason:"no solid:publicTypeIndex on profile"};await r(n);for(let l of i.match(null,Xe("forClass"),X("Release"))){let s=i.any(l.subject,Xe("instance"))?.value;if(s)return{url:s,typeIndex:n};let c=i.any(l.subject,Xe("instanceContainer"))?.value;if(c)return{url:new URL("index.ttl",c).href,typeIndex:n}}return{url:null,typeIndex:n,reason:"no mo:Release TypeRegistration"}}async function Ji(e,t){let i=$t(),r=await e(t,{headers:{Accept:"text/turtle"}});if(r&&r.ok!==!1){let c=(r.headers?.get?.("Content-Type")||"text/turtle").split(";")[0].trim();Ot(await r.text(),i,t.split("#")[0],c||"text/turtle")}let n=je("http://www.w3.org/ns/pim/space#"),l=[],s=c=>{if(!c)return;let p=c.endsWith("/")?c:c+"/";l.includes(p)||l.push(p)};for(let c of i.match(F(t),n("storage"),null))s(c.object?.value);for(let c of i.match(null,n("storage"),null))s(c.object?.value);return s(new URL("/",t).href),l}async function Ha(e,t,i){let r=await e(t,{method:"PATCH",headers:{"Content-Type":"application/sparql-update"},body:i});if(!r||r.ok===!1)throw new Error(`PATCH ${t} \u2192 ${r&&r.status}`)}async function ro(e,t){let i="http://www.w3.org/ns/solid/terms#",r=je("http://www.w3.org/ns/pim/space#"),n=$t();try{let v=await e(t,{headers:{Accept:"text/turtle"}});if(v&&v.ok!==!1){let y=(v.headers?.get?.("Content-Type")||"text/turtle").split(";")[0].trim();Ot(await v.text(),n,t.split("#")[0],y||"text/turtle")}}catch{}let l=n.any(F(t),Xe("publicTypeIndex"))?.value||n.match(null,Xe("publicTypeIndex"),null)[0]?.object?.value||null;if(l)return l;let s=n.any(F(t),r("storage"))?.value||n.match(null,r("storage"),null)[0]?.object?.value||new URL("/",t).href,c=s.endsWith("/")?s:s+"/",p=new URL("settings/publicTypeIndex.ttl",c).href;try{let v=await e(p,{method:"PUT",headers:{"Content-Type":"text/turtle"},body:`@prefix solid: <${i}>.
<${p}> a solid:TypeIndex, solid:ListedDocument.
`});return!v||v.ok===!1?null:(await Ha(e,t.split("#")[0],`INSERT DATA { <${t}> <${i}publicTypeIndex> <${p}> . }`),p)}catch{return null}}function no(e,t){let i=String(t||"").replace(/[^A-Za-z0-9_-]/g,"-")||"lib";return`${e.split("#")[0]}#omp-lib-${i}`}async function oo(e,t){let i=$t(),r=async c=>{let p=await e(c,{headers:{Accept:"text/turtle"}});if(!p||p.ok===!1)throw new Error(`fetch ${c} \u2192 ${p&&p.status}`);let v=(p.headers?.get?.("Content-Type")||"text/turtle").split(";")[0].trim();Ot(await p.text(),i,c.split("#")[0],v||"text/turtle")};await r(t);let n=i.any(F(t),Xe("publicTypeIndex"))?.value||i.match(null,Xe("publicTypeIndex"),null)[0]?.object?.value||null;if(!n)return{typeIndex:null,libraries:[]};await r(n);let l=[],s=new Set;for(let c of i.match(null,Xe("forClass"),X("Release"))){let p=i.any(c.subject,Xe("instance"))?.value;if(!p||s.has(p))continue;s.add(p);let v=i.any(c.subject,ut("label"))?.value||i.any(c.subject,H("title"))?.value||"";l.push({url:p,label:v,reg:c.subject.value})}return{typeIndex:n,libraries:l}}async function Va(e,t,{id:i,url:r,label:n}){if(!t||!r)throw new Error("registerPodLibrary: typeIndex and url required");let l="http://www.w3.org/ns/solid/terms#",s=no(t,i),c=(n||"").replace(/[\\"]/g,"\\$&");await Ha(e,t,`DELETE { <${s}> ?p ?o } INSERT { <${s}> a <${l}TypeRegistration> ; <${l}forClass> <http://purl.org/ontology/mo/Release> ; <${l}instance> <${r}> ; <http://www.w3.org/2000/01/rdf-schema#label> "${c}" . } WHERE { OPTIONAL { <${s}> ?p ?o } }`)}async function so(e,t,{id:i,url:r}){if(!t)throw new Error("unregisterPodLibrary: typeIndex required");let n="http://www.w3.org/ns/solid/terms#",l=no(t,i);await Ha(e,t,`DELETE { <${l}> ?p ?o } WHERE { <${l}> ?p ?o }`),r&&await Ha(e,t,`DELETE { ?r ?p ?o } WHERE { ?r <${n}forClass> <http://purl.org/ontology/mo/Release> ; <${n}instance> <${r}> ; ?p ?o . }`)}function Xi(e){return e+"#Favorites"}var Qi=[Wi,X("MusicGroup"),X("SoloMusicArtist"),X("Label"),xe("Agent"),xe("Organization"),xe("Person"),xe("Group")],to={audio:{nodeTypes:Qi,nameProp:xe("name"),genreProp:X("genre")},video:{nodeTypes:[O("Collection")],nameProp:O("name"),genreProp:O("genre")}},zl=e=>to[e]||to.audio;function lo(e,t){let i=F(t.split("#")[0]+"#it"),r=e.any(i,H("type"))||e.any(F(t),H("type"));return r&&r.value===Pl("MovingImage").value?"video":"audio"}function jl(e,t=Qi){let i=new Set,r=[];for(let n of t)for(let l of e.match(null,ce("type"),n)){let s=l.subject.value;i.has(s)||(i.add(s),r.push(l.subject))}return r}function Zi(e,t,i="audio"){let r=Te(t),n=zl(i),l=F(t.split("#")[0]+"#it"),c=e.any(l,de("themeTaxonomy"))||e.any(F(t),de("themeTaxonomy"))||F(r.musicRootUri),p=e.match(null,dt("topConceptOf"),c).map(y=>({id:y.subject.value,label:e.any(y.subject,dt("prefLabel"))?.value||"Unnamed Genre"})),v=[];for(let y of jl(e,n.nodeTypes)){let g=e.any(y,n.genreProp)?.value;if(!g)continue;let b=e.any(y,H("source")),h=e.any(y,de("landingPage"))?.value||null;v.push({node:y,label:e.any(y,n.nameProp)?.value||"Untitled",topic:g,url:h,source:null,sourcePlaylist:b?b.value:null,localData:!!b||!h})}for(let y of e.match(null,ce("type"),Gt)){let g=y.subject,b=e.match(g,O("itemListElement"),null).map(h=>{let f=parseInt(e.any(h.object,O("position"))?.value,10);return{track:e.any(h.object,O("item")),pos:Number.isFinite(f)?f:Number.MAX_SAFE_INTEGER}}).filter(h=>h.track).sort((h,f)=>h.pos-f.pos);for(let{track:h}of b){let f=e.any(h,H("isPartOf"))||null,_=e.any(h,H("title"))?.value||"",$=f&&e.any(f,H("title"))?.value||"",D=e.any(h,xe("maker"))||(f?e.any(f,xe("maker")):null),z=D?D.termType==="Literal"?D.value:e.any(D,xe("name"))?.value||"":"",q=e.any(h,X("item"))?.value,pe=f&&e.any(f,de("landingPage"))?.value||null,oe=[z,$,_].filter(Boolean),Se=oe.length?oe.join(" \u2014 "):_||"Untitled";v.push({node:h,label:Se,topic:g.value,url:q||null,source:pe,artist:z,album:$,name:_})}}return{genres:p,bookmarks:v}}function er(e,t){let i=t?new URL("./",t).href:null,r=new Set,n=[];for(let l of e.match(null,ce("type"),Gt)){let s=l.subject;if(i&&!s.value.startsWith(i)||r.has(s.value))continue;r.add(s.value);let c=e.any(s,H("title"))?.value||e.any(s,ut("label"))?.value||s.value.replace(/^.*\//,"")||"Untitled playlist",p=e.any(s,xe("maker"))?.value||"",v=e.any(s,H("description"))?.value||"",y=e.any(s,Gi("styleClass")),g=e.match(null,H("source"),s)[0]?.subject;n.push({id:s.value,name:c,maker:p,description:v,hidden:y?y.value==="hidden":!1,artistNode:g||null,label:p?`${c} (${p})`:c})}return n}var Ct=!1;function tr(e){Ct=!!e;try{console.info("[omp] setSolidWriteAuthed \u2192",Ct)}catch{}}try{typeof globalThis<"u"&&(globalThis.__OMP=globalThis.__OMP||{},globalThis.__OMP.writeAuthed=()=>Ct,globalThis.__OMP.isRdfStore=e=>e===ke.store)}catch{}function Bl(e){if(e===ke.store&&ke.storeFetcher&&e.fetcher!==ke.storeFetcher&&(e.fetcher=ke.storeFetcher),!e.updater)try{new eo(e)}catch{}return e.updater}async function Ae(e,t,i,r){i=i||[],r=r||[];try{console.info("[omp] runUpdate path:",e===ke.store&&Ct?"pod-bypass":e===ke.store?"UpdateManager (rdf.store but NOT authed-flag)":"UpdateManager (private store)","\xB7 isRdfStore="+(e===ke.store)+" solidWriteAuthed="+Ct)}catch{}if(e===ke.store&&Ct){let c=new Map,p=(y,g)=>{let b=y&&y.why&&y.why.value;b&&(c.has(b)||c.set(b,{del:[],ins:[]}),c.get(b)[g].push(y))};for(let y of i)p(y,"del");for(let y of r)p(y,"ins");if(!c.size)return{ok:!0,err:null};let v=y=>`${y.subject.toNT()} ${y.predicate.toNT()} ${y.object.toNT()} .`;for(let[y,g]of c){let b=[];g.del.length&&b.push(`DELETE DATA {
${g.del.map(v).join(`
`)}
}`),g.ins.length&&b.push(`INSERT DATA {
${g.ins.map(v).join(`
`)}
}`);let h=b.join(` ;
`);try{let _=await Oa(y)(y,{method:"PATCH",headers:{"Content-Type":"application/sparql-update"},body:h});if(!_||_.ok===!1){let $=`PATCH ${y} \u2192 ${_&&_.status}`;return console.warn("Persistence failed (store NOT updated):",$),{ok:!1,err:$}}}catch(f){let _=f&&(f.message||String(f));return console.warn("Persistence failed (store NOT updated):",_),{ok:!1,err:_}}Ki(y);for(let f of g.del)e.remove(f);for(let f of g.ins)e.add(f.subject,f.predicate,f.object,f.why)}return{ok:!0,err:null}}let n=Bl(e);if(!n)return{ok:!1,err:"no UpdateManager available"};let l=()=>new Promise(c=>{try{n.update(i,r,(p,v,y)=>{c({ok:v,err:v?null:y})})}catch(p){c({ok:!1,err:p.message})}}),s=await l();if(!s.ok&&/uneditable|editing protocol|make changes/i.test(String(s.err))){let c=ma(e),p=new Set;for(let v of[...i,...r]){let y=v&&v.why;y&&y.value&&p.add(y.value)}for(let v of p)try{await c.load(v,{force:!0})}catch(y){console.warn("force-load failed",v,y?.message||y)}s=await l()}if(s.ok){let c=new Set;for(let p of[...i,...r]){let v=p&&p.why&&p.why.value;v&&c.add(v)}Ki(...c)}else console.warn("Persistence failed (store NOT updated):",s.err);return s}function ma(e){return e===ke.store?ke.storeFetcher:(e.fetcher||(e.fetcher=new qi(e)),e.fetcher)}async function co(e,t,i,{body:r,contentType:n}={}){try{let l;if(e===ke.store&&Ct){let c={method:t};r!=null&&(c.body=r),n&&(c.headers={"Content-Type":n}),l=await Oa(i)(i,c)}else{let c=r!=null?{body:r,contentType:n}:{};l=await ma(e).webOperation(t,i,c)}let s=l.ok!==!1;return s&&Ki(i),{ok:s,err:s?null:`${t} ${l.status}`}}catch(l){return{ok:!1,err:l.message||String(l)}}}async function Ya(e,t,i,r="text/turtle"){return co(e,"PUT",t,{body:i,contentType:r})}async function ha(e,t){return co(e,"DELETE",t)}function Ke(e){return'"'+String(e).replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"'}async function uo(e,{title:t="New library"}={}){let i=e.endsWith("/")?e:e+"/",r=$t(),n={"index.ttl":`@prefix dct: <http://purl.org/dc/terms/> .
@prefix dcat: <http://www.w3.org/ns/dcat#> .

<>
    a <#Library>, dcat:Catalog ;
    dct:title ${Ke(t)} .

<#it>
    a dcat:Catalog ;
    dct:title ${Ke(t)} ;
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
    dct:title ${Ke(t+" \u2014 releases")} .
`,"playlists.ttl":`@prefix dct: <http://purl.org/dc/terms/> .
@prefix dcat: <http://www.w3.org/ns/dcat#> .

<#it>
    a dcat:Catalog ;
    dct:title ${Ke(t+" \u2014 playlists")} .
`};for(let[l,s]of Object.entries(n)){let c=await Ya(r,i+l,s);if(!c.ok)return{ok:!1,err:`PUT ${l}: ${c.err}`,url:i+"index.ttl"}}return{ok:!0,url:i+"index.ttl"}}function po(e,t){let i=t?Kt(t):null,r=new Set;for(let n of e.match(null,ce("type"),Gt)){let l=n.subject.value.split("#")[0];l&&l!==i&&r.add(l)}return[...r]}function Ja(e,t){let i=new Set((t||[]).map(n=>n.split("#")[0])),r=new Set;for(let n of e.match(null,O("item"),null)){let l=n.why&&n.why.value;if(!l||!i.has(l.split("#")[0]))continue;let s=n.object&&n.object.value;s&&r.add(s.split("#")[0])}return[...r]}function fo(e,t){let i=Te(t),r=new Set;for(let n of e.match(i.releasesCatalog,de("dataset"),null))n.object?.value&&r.add(n.object.value.split("#")[0]);for(let n of e.match(i.releasesDoc,ut("seeAlso"),null))n.object?.value&&r.add(n.object.value.split("#")[0]);return[...r]}function ar(e,t){let i=Te(t),r=new Set;for(let n of e.match(i.playlistsCatalog,de("dataset"),null))n.object?.value&&r.add(n.object.value.split("#")[0]);for(let n of e.match(i.playlistsDoc,ut("seeAlso"),null))n.object?.value&&r.add(n.object.value.split("#")[0]);return[...r]}async function ir(e,t,i,r){let n=t.endsWith("/")?t:t+"/",l=0,s=0,c=[],p=0;for(let v of i){p++,r?.(p,i.length,v.relPath);let y=n+v.relPath;if(v.skipIfExists)try{let g=await e(y,{method:"HEAD"});if(g&&g.status===200){s++;continue}}catch{}try{let g=await e(y,{method:"PUT",headers:{"Content-Type":v.contentType||"text/turtle"},body:v.body}),b=!!g&&g.ok===!0,h=b?"2xx":"";if(!b&&g)try{let f=await e(y,{method:"GET",headers:{Accept:"*/*"}});b=!!f&&(f.ok===!0||f.status===304),h=`verified-get(${f?f.status:"no-resp"})`}catch(f){h=`verify-threw(${f.message||f})`}if(b)l++;else{let f="";try{f=(await g.text()).slice(0,120)}catch{}let _=`${v.relPath} \u2192 ${g?`${g.status} ${g.type||""}`:"no response"} [${h}] ${f}`.trim();c.push(_),console.warn("[install] PUT FAIL",_)}}catch(g){let b=`${v.relPath}: ${g.message||g}`;c.push(b),console.warn("[install] PUT THREW",b)}}return{ok:c.length===0,put:l,skipped:s,failed:c}}function Ga(e,t,i){return(e.statementsMatching(t,null,null)[0]||e.statementsMatching(null,null,t)[0])?.why||i}function mo(e,t){if(!t)return null;for(let i of e.match(null,xe("name"),te(t)))for(let r of Qi)if(e.holds(i.subject,ce("type"),r))return i.subject;return null}async function ho(e,t,i){let r=Te(t),n=r.genresDoc,l=Vi(i),s=n.value+"#"+l,c=1;for(;e.any(F(s),null,null);)s=n.value+"#"+l+"_"+c,c++;let p=F(s),v=F(r.musicRootUri),y=[M(p,ce("type"),dt("Concept"),n),M(p,ce("type"),Dl,n),M(p,dt("prefLabel"),te(i),n),M(p,dt("topConceptOf"),v,n)];return{...await Ae(e,n.value,[],y),id:s,label:i}}async function bo(e,t,i){let r=Te(t),n=r.genresDoc,l=r.agentsDoc,s=F(i),c=e.match(s,null,null).map(y=>M(y.subject,y.predicate,y.object,n)),p=await Ae(e,n.value,c,[]);if(!p.ok)return p;let v=e.match(null,X("genre"),s).map(y=>y.subject);if(v.length){let y=[];for(let b of v)for(let h of e.match(b,null,null))y.push(M(h.subject,h.predicate,h.object,l));let g=await Ae(e,l.value,y,[]);if(!g.ok)return g}return{ok:!0}}async function go(e,t,i,r){let l=Te(t).genresDoc,s=F(i),c=e.any(s,dt("prefLabel")),p=c?[M(s,dt("prefLabel"),c,l)]:[],v=[M(s,dt("prefLabel"),te(r),l)];return Ae(e,l.value,p,v)}async function yo(e,t,i,r,n){let s=Te(t).agentsDoc,c=crypto.randomUUID?.()??`${Date.now()}-${Math.random().toString(36).slice(2)}`,p=F(`urn:uuid:${c}`),v=[M(p,ce("type"),Wi,s),M(p,xe("name"),te(r),s),M(p,X("genre"),F(i),s)];return n&&v.push(M(p,de("landingPage"),F(n),s)),{...await Ae(e,s.value,[],v),node:p}}async function vo(e,t,i){let n=Te(t).agentsDoc,l=e.match(i,null,null).map(s=>M(s.subject,s.predicate,s.object,n));return Ae(e,n.value,l,[])}async function rr(e,t,i,r){let l=Te(t).agentsDoc,s=e.any(i,xe("name")),c=s?[M(i,xe("name"),s,l)]:[],p=[M(i,xe("name"),te(r),l)];return Ae(e,l.value,c,p)}async function nr(e,t,i){typeof i=="string"&&(i={name:i});let{name:r="Untitled playlist",maker:n="",description:l=""}=i||{},s=Te(t),c=Ml(e,t,r),p=s.playlistsDirUrl+c,v=["@prefix dct: <http://purl.org/dc/terms/> .","@prefix dcat: <http://www.w3.org/ns/dcat#> .","@prefix foaf: <http://xmlns.com/foaf/0.1/> .","@prefix schema: <http://schema.org/> .","","<>","    a schema:ItemList, schema:MusicPlaylist, dcat:Dataset ;","    dct:isPartOf <../playlists.ttl#it> ;","    schema:itemListOrder schema:ItemListOrderAscending ;",`    dct:title ${Ke(r)}`];n&&v.push(`    ; foaf:maker ${Ke(n)}`),l&&v.push(`    ; dct:description ${Ke(l)}`),v.push("    .","");let y=v.join(`
`),g=n?`${r} (${n})`:r,b=await Ya(e,p,y);if(!b.ok)return{ok:!1,err:b.err,id:p,label:g};let h=M(s.playlistsCatalog,de("dataset"),F(p),s.playlistsDoc),f=await Ae(e,s.playlistsDoc.value,[],[h]);if(!f.ok)return await ha(e,p),{...f,id:p,label:g};try{await ma(e).load(p,{force:!0})}catch($){console.warn("Could not reload new playlist file for protocol detection:",$)}let _=F(p);return e.add(_,ce("type"),O("ItemList"),_),e.add(_,ce("type"),Gt,_),e.add(_,ce("type"),de("Dataset"),_),e.add(_,O("itemListOrder"),O("ItemListOrderAscending"),_),e.add(_,H("isPartOf"),s.playlistsCatalog,_),e.add(_,H("title"),te(r),_),n&&e.add(_,xe("maker"),te(n),_),l&&e.add(_,H("description"),te(l),_),{ok:!0,id:p,label:g,name:r,maker:n,description:l}}function Kt(e){return Te(e).playlistsDirUrl+"deleted"}async function ql(e,t){let i=Te(t),r=Kt(t),n=F(r);if(e.holds(n,ce("type"),Gt))return{ok:!0,id:r};let l=["@prefix dct: <http://purl.org/dc/terms/> .","@prefix dcat: <http://www.w3.org/ns/dcat#> .","@prefix schema: <http://schema.org/> .","","<>","    a schema:ItemList, schema:MusicPlaylist, dcat:Dataset ;","    dct:isPartOf <../playlists.ttl#it> ;","    schema:itemListOrder schema:ItemListOrderAscending ;",'    dct:title "Deleted" .',""].join(`
`),s=await Ya(e,r,l);if(!s.ok)return{ok:!1,err:s.err,id:r};let c=M(i.playlistsCatalog,de("dataset"),n,i.playlistsDoc),p=await Ae(e,i.playlistsDoc.value,[],[c]);if(!p.ok)return await ha(e,r).catch(()=>{}),{...p,id:r};try{await ma(e).load(r,{force:!0})}catch(v){console.warn("Could not reload Deleted-bin file for protocol detection:",v)}return e.add(n,ce("type"),O("ItemList"),n),e.add(n,ce("type"),Gt,n),e.add(n,ce("type"),de("Dataset"),n),e.add(n,O("itemListOrder"),O("ItemListOrderAscending"),n),e.add(n,H("isPartOf"),i.playlistsCatalog,n),e.add(n,H("title"),te("Deleted"),n),{ok:!0,id:r}}async function wo(e,t,i,r={}){let n=F(i),l=[],s=[];if(r.name!=null){for(let c of[H("title"),ut("label"),dt("prefLabel")]){let p=e.any(n,c);p&&l.push(M(n,c,p,n))}s.push(M(n,H("title"),te(r.name),n))}if(r.maker!=null){for(let c of e.match(n,xe("maker"),null))l.push(M(c.subject,c.predicate,c.object,n));r.maker&&s.push(M(n,xe("maker"),te(r.maker),n))}if(r.description!=null){for(let c of e.match(n,H("description"),null))l.push(M(c.subject,c.predicate,c.object,n));r.description&&s.push(M(n,H("description"),te(r.description),n))}return!l.length&&!s.length?{ok:!0}:Ae(e,n.value,l,s)}async function xo(e,t,i){let r=Te(t),n=F(i),l=Kt(t);if(i!==l){let p=[];for(let v of e.match(n,O("itemListElement"),null)){let y=e.any(v.object,O("item"));if(!y)continue;let g=e.any(y,X("item"))?.value;if(!g)continue;let b=e.any(y,H("isPartOf"))||e.match(null,X("track"),y)[0]?.subject;p.push({url:g,source:b&&e.any(b,de("landingPage"))?.value||null,name:e.any(y,H("title"))?.value||"",album:b&&e.any(b,H("title"))?.value||""})}if(p.length){let v=await ql(e,t);if(!v.ok)return v;let y=await Xa(e,t,l,p);if(!y.ok)return y}}let s=M(r.playlistsCatalog,de("dataset"),n,r.playlistsDoc),c=await Ae(e,r.playlistsDoc.value,[s],[]);if(!c.ok)return c;await ha(e,i).catch(()=>{});for(let p of e.match(n,null,null))e.remove(p);for(let p of e.match(null,null,n))e.remove(p);return{ok:!0}}async function Xa(e,t,i,r,n={}){if(!r||!r.length)return{ok:!0,nodes:[],skipped:0};let l=Te(t),s=F(i),c=!!n.inlineTracks,p=S=>String(S).padStart(2,"0"),v=new Set;for(let S of e.match(s,O("itemListElement"),null)){let N=e.any(S.object,O("item")),V=N&&e.any(N,X("item"))?.value;V&&v.add(V)}let y=new Set,g=r.filter(S=>!S||!S.url||v.has(S.url)||y.has(S.url)?!1:(y.add(S.url),!0)),b=r.length-g.length;if(!g.length)return{ok:!0,nodes:[],added:[],skipped:b};if(c){let ue=function(Q,$e,qe){if(!Q&&!$e)return null;if(Q&&V.has(Q))return V.get(Q);if(Q&&se.has(Q))return se.get(Q).node;N+=1;let Ce=F(`${s.value}#a${p(N)}`),Ve=[M(Ce,ce("type"),Ht,s)];return $e&&Ve.push(M(Ce,H("title"),te($e),s)),Q&&Ve.push(M(Ce,de("landingPage"),F(Q),s)),qe&&Ve.push(M(Ce,xe("maker"),te(qe),s)),se.set(Q||`__nolp:${Ce.value}`,{node:Ce,inserts:Ve}),Ce},S=0,N=0,V=new Map,Z=Q=>Q&&Q.value&&Q.value.startsWith(s.value+"#");for(let Q of e.match(s,O("itemListElement"),null)){let $e=e.any(Q.object,O("item"));if(Z($e)){let Ce=$e.value.match(/#t(\d+)$/);Ce&&(S=Math.max(S,parseInt(Ce[1],10)))}let qe=$e&&e.any($e,H("isPartOf"));if(Z(qe)){let Ce=qe.value.match(/#a(\d+)$/);Ce&&(N=Math.max(N,parseInt(Ce[1],10)));let Ve=e.any(qe,de("landingPage"))?.value;Ve&&V.set(Ve,qe)}}let se=new Map,he=0,Le=0;for(let Q of e.match(s,O("itemListElement"),null)){let $e=parseInt(e.any(Q.object,O("position"))?.value,10);Number.isFinite($e)&&(he=Math.max(he,$e));let qe=Q.object.value.match(/#e(\d+)$/);qe&&(Le=Math.max(Le,parseInt(qe[1],10)))}let ye=[],re=[],vt=[];g.forEach((Q,$e)=>{let qe=Q.album||"",Ce=Q.artist||"",Ve=Q.source||null,va=ue(Ve,qe,Ce);S+=1;let Qe=F(`${s.value}#t${p(S)}`);ye.push(M(Qe,ce("type"),Oi,s)),Q.name&&ye.push(M(Qe,H("title"),te(Q.name),s)),Ce&&ye.push(M(Qe,xe("maker"),te(Ce),s)),ye.push(M(Qe,X("item"),F(Q.url),s));let Wt=Hi(Q.time);Number.isFinite(Wt)&&Wt>0&&ye.push(M(Qe,X("duration"),te(String(Wt),void 0,bt("decimal")),s)),va&&ye.push(M(Qe,H("isPartOf"),va,s));let nt=F(`${s.value}#e${p(Le+$e+1)}`);ye.push(M(s,O("itemListElement"),nt,s),M(nt,ce("type"),O("ListItem"),s),M(nt,O("position"),te(String(he+$e+1),void 0,bt("integer")),s),M(nt,O("item"),Qe,s)),re.push(Qe),vt.push(Q)});let rt=[];for(let Q of se.values())rt.push(...Q.inserts);let ga=[...rt,...ye],ya=120;for(let Q=0;Q<ga.length;Q+=ya){let $e=await Ae(e,s.value,[],ga.slice(Q,Q+ya));if(!$e.ok)return{...$e,nodes:re,added:vt,skipped:b}}return{ok:!0,nodes:re,added:vt,skipped:b}}let h=new Map;for(let S of e.match(null,de("landingPage"),null)){if(!e.holds(S.subject,ce("type"),Ht))continue;let N=Ga(e,S.subject,l.releasesDoc);h.set(S.object.value,{releaseNode:S.subject,fileDoc:F(N.value)})}let f=new Map;for(let[S,N]of h)for(let V of e.match(N.releaseNode,X("track"),null)){let Z=e.any(V.object,X("item"))?.value;Z&&f.set(`${S}
${Z}`,V.object)}let _=new Set,$=(S,N)=>{let V=S&&S.match(/archive\.org\/details\/(.+?)\/?$/);return V?decodeURIComponent(V[1]):N.split("/").pop().replace(/\$?\.ttl$/,"")},D=new Map,z=S=>{let N=D.get(S.fileDoc.value);if(N==null){N=0;for(let V of e.match(S.releaseNode,X("track"),null)){let Z=V.object.value.match(/#t(\d+)$/);Z&&(N=Math.max(N,parseInt(Z[1],10)))}}return N+=1,D.set(S.fileDoc.value,N),S.fileDoc.value+"#t"+p(N)},q=new Map,pe=new Map,oe=[],Se=[];for(let S of g){let N=S.source||null,V=S.url,Z=N?`${N}
${V}`:null,se=Z?f.get(Z):null;if(!se&&N&&h.has(N)){let ue=h.get(N);se=F(z(ue));let he=pe.get(ue.fileDoc.value)||{fileDoc:ue.fileDoc,inserts:[]};he.inserts.push(M(se,ce("type"),Oi,ue.fileDoc)),S.name&&he.inserts.push(M(se,H("title"),te(S.name),ue.fileDoc)),he.inserts.push(M(se,X("item"),F(V),ue.fileDoc));let Le=Hi(S.time);Number.isFinite(Le)&&Le>0&&he.inserts.push(M(se,X("duration"),te(String(Le),void 0,bt("decimal")),ue.fileDoc)),he.inserts.push(M(se,H("isPartOf"),ue.releaseNode,ue.fileDoc)),he.inserts.push(M(ue.releaseNode,X("track"),se,ue.fileDoc)),pe.set(ue.fileDoc.value,he),Z&&f.set(Z,se)}if(!se){let ue=N||`urn:nolp:${V}`,he=q.get(ue);if(!he){let Le=Rl(e,l,S.album||S.name||"release",_);_.add(Le),he={fileUrl:Le,lp:N,ident:$(N,Le),releaseNode:F(Le+"#it"),title:S.album||"(untitled album)",artist:S.artist||"",tracks:[]},q.set(ue,he)}se=F(`${he.fileUrl}#t${p(he.tracks.length+1)}`),he.tracks.push({node:se,name:S.name,dl:V,dur:Hi(S.time)}),Z&&f.set(Z,se)}oe.push(se),Se.push(S)}let Be=S=>({...S,nodes:oe,added:Se,skipped:b});for(let S of q.values()){let N=S.artist?mo(e,S.artist):null,V=S.artist?N?`<${N.value}>`:Ke(S.artist):null,Z=["a mo:Release, dcat:Dataset",`dct:title ${Ke(S.title)}`,`dct:identifier ${Ke(S.ident)}`,"dct:isPartOf <../releases.ttl#it>"];S.lp&&Z.push(`dcat:landingPage <${S.lp}>`),Z.push("mo:track "+S.tracks.map(re=>`<#t${p(S.tracks.indexOf(re)+1)}>`).join(", ")),V&&Z.push(`foaf:maker ${V}`);let se=["@prefix dct: <http://purl.org/dc/terms/> .","@prefix mo: <http://purl.org/ontology/mo/> .","@prefix dcat: <http://www.w3.org/ns/dcat#> .","@prefix foaf: <http://xmlns.com/foaf/0.1/> .","",`<#it>
    `+Z.join(` ;
    `)+" .",""];S.tracks.forEach((re,vt)=>{let rt=["a mo:Track",`dct:title ${Ke(re.name||"")}`];Number.isFinite(re.dur)&&re.dur>0&&rt.push(`mo:duration ${Ke(String(re.dur))}`),rt.push(`mo:item <${re.dl}>`),rt.push("dct:isPartOf <#it>"),se.push(`<#t${p(vt+1)}>
    `+rt.join(` ;
    `)+" .","")});let ue=await Ya(e,S.fileUrl,se.join(`
`));if(!ue.ok)return Be(ue);let he=[M(l.releasesCatalog,de("dataset"),S.releaseNode,l.releasesDoc)],Le=await Ae(e,l.releasesDoc.value,[],he);if(!Le.ok)return await ha(e,S.fileUrl).catch(()=>{}),Be(Le);try{await ma(e).load(S.fileUrl,{force:!0})}catch(re){console.warn("reload new release file failed:",re?.message||re)}let ye=F(S.fileUrl);e.add(S.releaseNode,ce("type"),Ht,ye),e.add(S.releaseNode,ce("type"),de("Dataset"),ye),e.add(S.releaseNode,H("title"),te(S.title),ye),e.add(S.releaseNode,H("identifier"),te(S.ident),ye),e.add(S.releaseNode,H("isPartOf"),l.releasesCatalog,ye),S.lp&&e.add(S.releaseNode,de("landingPage"),F(S.lp),ye),S.artist&&e.add(S.releaseNode,xe("maker"),N||te(S.artist),ye);for(let re of S.tracks)e.add(re.node,ce("type"),Oi,ye),re.name&&e.add(re.node,H("title"),te(re.name),ye),e.add(re.node,X("item"),F(re.dl),ye),Number.isFinite(re.dur)&&re.dur>0&&e.add(re.node,X("duration"),te(String(re.dur),void 0,bt("decimal")),ye),e.add(re.node,H("isPartOf"),S.releaseNode,ye),e.add(S.releaseNode,X("track"),re.node,ye)}for(let S of pe.values()){let N=await Ae(e,S.fileDoc.value,[],S.inserts);if(!N.ok)return Be(N)}let We=0,P=0;for(let S of e.match(s,O("itemListElement"),null)){let N=parseInt(e.any(S.object,O("position"))?.value,10);Number.isFinite(N)&&(We=Math.max(We,N));let V=S.object.value.match(/#e(\d+)$/);V&&(P=Math.max(P,parseInt(V[1],10)))}let K=[];oe.forEach((S,N)=>{let V=F(`${s.value}#e${p(P+N+1)}`);K.push(M(s,O("itemListElement"),V,s),M(V,ce("type"),O("ListItem"),s),M(V,O("position"),te(String(We+N+1),void 0,bt("integer")),s),M(V,O("item"),S,s))});let ae=160;for(let S=0;S<K.length;S+=ae){let N=await Ae(e,s.value,[],K.slice(S,S+ae));if(!N.ok)return Be(N)}return{ok:!0,nodes:oe,added:Se,skipped:b}}async function ko(e,t,i,r){let n=F(i),l=[],s=null;for(let y of e.match(n,O("itemListElement"),null)){let g=y.object,b=e.any(g,O("item")),h=parseInt(e.any(g,O("position"))?.value,10);if((b&&e.any(b,X("item"))?.value)===r&&!s){s={ent:g,trk:b,pos:h};continue}l.push({ent:g,trk:b,pos:Number.isFinite(h)?h:Number.MAX_SAFE_INTEGER})}if(!s)return{ok:!0};let c=[M(n,O("itemListElement"),s.ent,n),M(s.ent,ce("type"),O("ListItem"),n),M(s.ent,O("position"),te(String(s.pos),void 0,bt("integer")),n),M(s.ent,O("item"),s.trk,n)],p=[];l.sort((y,g)=>y.pos-g.pos).forEach((y,g)=>{let b=g+1;y.pos!==b&&(c.push(M(y.ent,O("position"),te(String(y.pos),void 0,bt("integer")),n)),p.push(M(y.ent,O("position"),te(String(b),void 0,bt("integer")),n)))});let v=await Ae(e,n.value,c,p);if(!v.ok)return v;if(t&&i===Kt(t))try{let y=Te(t),g=n,b=e.any(s.trk,H("isPartOf"))||e.match(null,X("track"),s.trk)[0]?.subject;if(b&&e.holds(b,ce("type"),Ht)){let h=e.match(b,X("track"),null).map(_=>_.object),f=!1;e:for(let _ of h)for(let $ of e.match(null,O("item"),_)){let D=e.match(null,O("itemListElement"),$.subject)[0]?.subject;if(D&&D.value!==g.value){f=!0;break e}}if(!f){let _=Ga(e,b,y.releasesDoc),$=[];for(let D of e.match(y.releasesCatalog,de("dataset"),b))$.push(M(D.subject,D.predicate,D.object,y.releasesDoc));for(let D of e.match(y.releasesDoc,ut("seeAlso"),null))D.object.value===_.value&&$.push(M(D.subject,D.predicate,D.object,y.releasesDoc));$.length&&await Ae(e,y.releasesDoc.value,$,[]),await ha(e,_.value).catch(()=>{});for(let D of h){for(let z of e.match(D,null,null))e.remove(z);for(let z of e.match(null,null,D))e.remove(z)}for(let D of e.match(b,null,null))e.remove(D);for(let D of e.match(null,null,b))e.remove(D)}}}catch(y){console.warn("Deleted-bin release GC failed (orphan left for sweep):",y?.message||y)}return{ok:!0}}async function So(e,t,i,r={}){let n=Te(t),l=Ga(e,i,n.releasesDoc),s=[],c=[];if(r.title!=null){for(let p of e.match(i,H("title"),null))s.push(M(p.subject,p.predicate,p.object,l));r.title&&c.push(M(i,H("title"),te(r.title),l))}if(r.artist!=null){for(let p of e.match(i,xe("maker"),null))s.push(M(p.subject,p.predicate,p.object,l));r.artist&&c.push(M(i,xe("maker"),te(r.artist),l))}if(r.album!=null){let p=e.match(null,X("track"),i)[0]?.subject;if(p){let v=Ga(e,p,l);for(let y of e.match(p,H("title"),null))s.push(M(y.subject,y.predicate,y.object,v));r.album&&c.push(M(p,H("title"),te(r.album),v))}}return!s.length&&!c.length?{ok:!0}:Ae(e,l.value,s,c)}function Lo(e,t){let i=e.match(null,X("track"),t)[0]?.subject;if(!i)return 0;let r=e.match(i,X("track"),null).length;return Math.max(0,r-1)}function or(e,t){let i=[],r=new Set,n=s=>{e.holds(s,ce("type"),Ht)&&(r.has(s.value)||(r.add(s.value),i.push({name:e.any(s,H("title"))?.value||e.any(s,de("landingPage"))?.value||s.value,url:s.value,_local:!0,_releaseNode:s})))},l=e.any(t,H("source"));if(l){for(let s of e.match(l,O("itemListElement"),null)){let c=e.any(s.object,O("item")),p=c&&e.any(c,H("isPartOf"));p&&n(p)}return i}for(let s of e.match(null,xe("maker"),t))n(s.subject);return i}function _o(e,t){if(!e||!t)return null;let i=e.match(null,X("item"),F(t));return i.length?i[0].subject:null}function Ao(e,t){let i=[];for(let r of e.match(t,X("track"),null)){let n=r.object,l=e.any(n,X("item"))?.value;if(!l)continue;let s=e.any(n,X("duration"))?.value;i.push({url:l,name:e.any(n,H("title"))?.value||n.value,time:Ol(s),node:n,_lengthSec:s!=null?parseFloat(s):NaN,_bitrate:NaN})}return i}function Ol(e){let t=parseFloat(e);if(!Number.isFinite(t)||t<=0)return"";let i=Math.floor(t/60),r=Math.floor(t%60);return`${i}:${String(r).padStart(2,"0")}`}async function Eo(e,t,i,r={}){let l=Te(t).agentsDoc,s=F(i),c=(r.name||e.any(s,H("title"))?.value||"Untitled Artist").trim(),p=r.genreId;if(!p)return{ok:!1,err:"a genre is required"};let v=new Set;for(let _ of e.match(s,O("itemListElement"),null)){let $=e.any(_.object,O("item")),D=$&&e.any($,H("isPartOf"));D&&e.holds(D,ce("type"),Ht)&&v.add(D.value)}let y=e.match(null,H("source"),s)[0]?.subject||mo(e,c),g=y||F(`urn:uuid:${crypto.randomUUID?.()??`${Date.now()}-${Math.random().toString(36).slice(2)}`}`),b=y?e.statementsMatching(y,null,null).filter(_=>(_.why?.value||l.value)===l.value):[],h=[M(g,ce("type"),Wi,l),M(g,xe("name"),te(c),l),M(g,X("genre"),F(p),l),M(g,H("source"),s,l)],f=await Ae(e,l.value,b,h);return f.ok?{ok:!0,node:g,name:c,genreId:p,albumCount:v.size,relinked:!!y}:{...f,node:null}}async function sr(e,t,i){let n=Te(t).agentsDoc,l=F(i),s=e.match(null,H("source"),l)[0]?.subject;if(!s)return{ok:!0,node:null};let c=e.statementsMatching(s,null,null).filter(v=>(v.why?.value||n.value)===n.value),p=await Ae(e,n.value,c,[]);return p.ok?(await lr(e,t,i,!1).catch(()=>{}),{ok:!0,node:s}):{...p,node:s}}async function lr(e,t,i,r){let n=F(i),l=e.statementsMatching(n,Gi("styleClass"),null),s=r?[M(n,Gi("styleClass"),te("hidden"),n)]:[];return!l.length&&!s.length?{ok:!0}:Ae(e,n.value,l,s)}function Hi(e){if(!e)return NaN;let t=String(e).trim();if(!t)return NaN;if(/^[0-9.]+$/.test(t))return parseFloat(t);let i=t.split(":").map(Number);return i.some(r=>!Number.isFinite(r))?NaN:i.length===3?i[0]*3600+i[1]*60+i[2]:i.length===2?i[0]*60+i[1]:i[0]}function To(e){let t=String(e).trim();if(!t)return null;let i=t.match(/archive\.org\/details\/([^\/?\s#]+)/);return i?{id:i[1],url:`https://archive.org/details/${i[1]}`}:/^[a-zA-Z0-9._-]+$/.test(t)?{id:t,url:`https://archive.org/details/${t}`}:null}function $o(e,t){if(typeof customElements>"u")return;let i=customElements.get(e);if(i){i!==t&&!window.__SolSuppressDefineWarn&&console.warn(`[sol-components] <${e}> already registered; keeping the existing definition.`);return}customElements.define(e,t)}var Qa=class extends HTMLElement{_on(t,i,r,n){return t.addEventListener(i,r,n),this.__cleanups||(this.__cleanups=[]),this.__cleanups.push(()=>t.removeEventListener(i,r,n)),r}_cleanup(t){return typeof t!="function"||(this.__cleanups||(this.__cleanups=[]),this.__cleanups.push(t)),t}disconnectedCallback(){let t=this.__cleanups;if(this.__cleanups=null,t)for(let i of t)try{i()}catch{}}};var Hl='a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';function cr(e){return e?Array.from(e.querySelectorAll(Hl)):[]}function dr(){let e=document.activeElement;for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}function Co(e,t,i){if(e.key!=="Tab"||!t)return!1;let r=i?i():cr(t);if(!r.length)return!1;let n=r[0],l=r[r.length-1],s=dr();return e.shiftKey&&s===n?(l.focus(),e.preventDefault(),!0):!e.shiftKey&&s===l||!t.contains(s)?(n.focus(),e.preventDefault(),!0):!1}var Gl=`
  :host { display: contents; }
  /* CLOSED = fully inert. The scrim spans the viewport even when the sheet
     is closed, so without pointer-events:none it silently swallows every
     tap in the app (found the hard way on-device). visibility rides the
     transition so the fade-out still shows. */
  .scrim {
    position: fixed; inset: 0;
    background: rgba(0, 0, 0, 0.45);
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: opacity 0.2s ease, visibility 0.2s;
  }
  .panel {
    position: fixed;
    left: 0; right: 0; bottom: 0;
    z-index: 1001;
    max-height: min(85vh, 44rem);
    display: flex;
    flex-direction: column;
    background: var(--menu-bg, var(--surface, #fff));
    color: var(--text, inherit);
    border: 1px solid var(--menu-popup-border, silver);
    border-bottom: none;
    border-radius: var(--radius, 6px) var(--radius, 6px) 0 0;
    box-shadow: var(--shadow-popup, 0 -8px 24px rgba(0, 0, 0, 0.28));
    padding-bottom: env(safe-area-inset-bottom, 0);
    transform: translateY(100%);
    visibility: hidden;
    pointer-events: none;
    transition: transform 0.2s ease-out, visibility 0.2s;
  }
  :host([open]) .scrim { opacity: 1; visibility: visible; pointer-events: auto; }
  :host([open]) .panel { transform: translateY(0); visibility: visible; pointer-events: auto; }
  @media (prefers-reduced-motion: reduce) {
    .scrim, .panel { transition: none; }
  }
  .grip {
    flex: 0 0 auto;
    width: 44px; height: 4px;
    margin: 8px auto 4px;
    border-radius: 2px;
    background: var(--text-muted, #999);
    opacity: 0.5;
  }
  .body {
    flex: 1 1 auto;
    min-height: 0;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    padding: var(--menu-popup-pad, 8px);
  }
`,ur=class extends Qa{constructor(){super(),this.attachShadow({mode:"open"})}get body(){return this.shadowRoot.querySelector(".body")}connectedCallback(){if(!this._rendered){this._rendered=!0;let r=document.createElement("style");r.textContent=Gl;let n=document.createElement("div");n.className="scrim",n.setAttribute("part","scrim");let l=document.createElement("div");l.className="panel",l.setAttribute("part","panel"),l.setAttribute("role","dialog"),l.setAttribute("aria-modal","true"),this.getAttribute("label")&&l.setAttribute("aria-label",this.getAttribute("label"));let s=document.createElement("div");s.className="grip",s.setAttribute("aria-hidden","true");let c=document.createElement("div");c.className="body",c.setAttribute("part","body"),c.appendChild(document.createElement("slot")),l.append(s,c),this.shadowRoot.append(r,n,l)}let t=this.shadowRoot.querySelector(".scrim"),i=this.shadowRoot.querySelector(".panel");this._on(t,"click",()=>this.hide()),this._on(document,"keydown",r=>{r.key==="Escape"&&this.hasAttribute("open")&&(r.stopPropagation(),this.hide())}),this._on(window,"popstate",()=>{this.hasAttribute("open")&&this._hide({fromPop:!0})}),this._on(i,"keydown",r=>Co(r,this,()=>this._visibleFocusables()))}_visibleFocusables(){return cr(this).filter(t=>t.offsetParent!==null)}show(){if(this.hasAttribute("open"))return;this._restoreFocus=dr(),this.setAttribute("open","");try{history.pushState({solSheet:!0},""),this._pushed=!0}catch{this._pushed=!1}let t=this._visibleFocusables()[0];t&&t.focus(),this.dispatchEvent(new CustomEvent("sol-ready",{bubbles:!0,composed:!0}))}hide(){this._hide({})}_hide({fromPop:t=!1}={}){if(this.hasAttribute("open")){if(this.removeAttribute("open"),this._pushed&&!t){this._pushed=!1;try{history.back()}catch{}}this._pushed=!1;try{this._restoreFocus?.focus?.()}catch{}this._restoreFocus=null,this.dispatchEvent(new CustomEvent("sol-close",{bubbles:!0,composed:!0}))}}};$o("sol-sheet",ur);var jd=(()=>{try{return/[?&](code|state)=/.test(location.search)}catch{return!1}})();function Za(e){return typeof e=="string"&&e.startsWith("file:")?"dkfile:"+e.slice(5):e}var Kl=!0;function Wl({libraryConfigs:e,libs:t,host:i}){let r=()=>pt()[0]?.mediaType||"audio",n=i?.getAttribute?.("storage-ns")||"",l=n?":"+n:"",s=!!n,c=!!i?.hasAttribute?.("favourites-only"),p=()=>r()==="video"?"MovingImage":"Sound",v=new Set,y=[],g=pn({mediaType:r(),panel:s}),{container:b,audio:h,status:f,trackCount:_,nowPlaying:$,filmIntro:D,filmIntroTitle:z,filmIntroLength:q,filmIntroAbout:pe,filmIntroRights:oe,prevBtn:Se,playBtn:Be,nextBtn:We,seekSlider:P,timeCur:K,timeDur:ae,volumeSlider:S,sourcesList:N,favouritesList:V,librariesList:Z,genreList:se,artistList:ue,albumList:he,trackTable:Le,trackHead:ye,trackBody:re,trackEmpty:vt,randomizeBtn:rt,clearTracksBtn:ga,helpMenuItem:ya,helpLinkMenuItem:Q,loginHelpMenuItem:$e,filtersMenuItem:qe,savePlaylistMenuItem:Ce,installPodMenuItem:Ve,updateAppMenuItem:va,viewDeletedMenuItem:Qe,importMusicMenuItem:Wt,addPlaylistBtn:nt,addSourceBtn:zo,addGenreBtn:ai,addArtistBtn:ii,genreColumnFooter:It,artistColumnFooter:wt,themeToggle:Vt,fontSizeBtn:wa,browseBtn:xa,isPhone:ri,setMenuOpen:Ze}=g;if(ri&&xa){let a=document.createElement("sol-sheet");a.setAttribute("label","Browse the library"),a.className="ia-browse-sheet";let o={},d=(m,w)=>b.querySelector(m)?.textContent?.trim()||w,u=(m,w,x)=>{let k=document.createElement("details");k.className="ia-sheet-section",k.name="ia-browse";let L=document.createElement("summary");L.textContent=w,k.append(L,...x.filter(Boolean)),a.appendChild(k),o[m]=k};u("libraries",d("#ia-h-libs","Libraries"),[Z]),c||u("playlists",d("#ia-h-sources","Playlists"),[N,nt]),u("favourites",d("#ia-h-favs","Community Favorites"),[V]),u("genres",d('[data-column="genre"] .ia-column-header',"Genres"),[se,It]),u("artists",d('[data-column="artist"] .ia-column-header',"Artists"),[ue,wt]),u("albums",d('[data-column="album"] .ia-column-header',"Albums"),[he]),o.genres.open=!0,b.appendChild(a),xa.addEventListener("click",()=>a.show()),a.addEventListener("sol-ready",()=>xa.setAttribute("aria-expanded","true")),a.addEventListener("sol-close",()=>xa.setAttribute("aria-expanded","false")),se.addEventListener("click",m=>{m.target.closest("li")&&setTimeout(()=>{o.artists.open=!0},200)}),ue.addEventListener("click",m=>{m.target.closest("li")&&setTimeout(()=>{o.albums.open=!0},200)}),he.addEventListener("click",m=>{m.target.closest("li")&&setTimeout(()=>a.hide(),250)})}let Pt=document.documentElement,ka=()=>document.querySelector("sol-default");function ni(){return Pt.getAttribute("data-theme")||ka()?.getAttribute("theme")||(matchMedia("(prefers-color-scheme: light)").matches?"light":"dark")}function oi(){return Pt.getAttribute("data-fontsize")||ka()?.getAttribute("fontsize")||"medium"}function yr(){let a=ni()!=="light";if(Vt){Vt.setAttribute("aria-checked",a?"true":"false");let d=Vt.querySelector(".gear-theme-ico"),u=Vt.querySelector(".gear-theme-label");d&&(d.textContent=a?"\u{1F319}":"\u2600\uFE0F"),u&&(u.textContent=a?"Dark mode":"Light mode")}let o=oi();if(wa){let d=wa.querySelector(".gear-fontsize-label");d&&(d.textContent="Text size: "+o[0].toUpperCase()+o.slice(1));let u=wa.querySelector(".gear-fontsize-ico");u&&(u.style.fontSize=o==="small"?"0.8rem":o==="large"?"1.2rem":"1rem")}}let si=["small","medium","large"];function jo(a){Pt.setAttribute("data-theme",a);try{localStorage.setItem("dk:theme",a)}catch{}document.dispatchEvent(new CustomEvent("omp:appearance"))}function Bo(a){Pt.setAttribute("data-fontsize",a);try{localStorage.setItem("dk:fontsize",a)}catch{}document.dispatchEvent(new CustomEvent("omp:appearance"))}ka()?.hasAttribute("theme")||Pt.setAttribute("data-theme",ni()),ka()?.hasAttribute("fontsize")||Pt.setAttribute("data-fontsize",oi()),Vt?.addEventListener("click",()=>jo(ni()==="light"?"dark":"light")),wa?.addEventListener("click",()=>{Bo(si[(si.indexOf(oi())+1)%si.length])}),document.addEventListener("omp:appearance",yr),yr();function qo(){try{return!!document.querySelector("sol-default")?.hasAttribute("solid-kitchen")}catch{return!1}}function Yt(){return document.querySelector("sol-login")}function Sa(){let a=Yt();return!!(a&&a.isLoggedIn)}function ot(){return Sa()||qo()}function La(){let a=!ot();b.classList.toggle("guest-mode",a);let o=Sa(),d=o&&Yt()?.webId||"",u=b.querySelector(".manage-btn");u&&(u.classList.toggle("logged-in",o),u.title=d||"Menu");try{i?.dispatchEvent(new CustomEvent("omp:access",{detail:{guest:a,real:o,webId:d}}))}catch{}}function li(a,o){return a.map(d=>({...d,_lib:o.config.id}))}let xt=[],ie=[],Ne=[],Pe=new Set,kt=new Set;function pt(){return t.filter(a=>a.store&&e.find(o=>o.id===a.config.id)?.enabled)}function st(){let a=pt();xt=a.flatMap(o=>li(o.genres,o)),ie=a.flatMap(o=>li(o.bookmarks,o)),Ne=a.flatMap(o=>li(o.playlists,o)),Pe=new Set(Ne.map(o=>o.id)),kt=new Set(a.map(o=>Xi(o.baseURI)))}function ci(a=r()){return a==="video"?{genre:"Film Types",artist:"Collections",album:"Movies",addGenre:"+ Add film type",addArtist:"+ Add collection",allGenre:"(All film types)",allArtist:"(All collections)",allAlbum:"(All movies)",find:"Find a film\u2026",chooseArtist:"Choose a collection to see films.",loadingAlbums:"Loading films\u2026",noAlbums:"No films found."}:{genre:"Genres",artist:"Artists",album:"Albums",addGenre:"+ Add genre",addArtist:"+ Add artist",allGenre:"(All genres)",allArtist:"(All artists)",allAlbum:"(All albums)",find:"Search the Internet Archive\u2026",chooseArtist:"Choose an artist to see albums.",loadingAlbums:"Loading albums\u2026",noAlbums:"No albums found."}}function vr(){let a=r();b.classList.toggle("media-video",a==="video"),b.classList.toggle("media-audio",a!=="video");let o=ci(a);for(let x of["genre","artist","album"]){let k=b.querySelector(`[data-column="${x}"] .ia-column-header`);k&&(k.textContent=o[x])}ai&&(ai.textContent=o.addGenre),ii&&(ii.textContent=o.addArtist),ct.setAllLabel(o.allGenre),tt.setAllLabel(o.allArtist),ve.setAllLabel(o.allAlbum);let d=b.querySelector(".ia-artist-search-input");d&&(d.placeholder=o.find);let u=b.querySelector(".ia-artist-search"),m=b.querySelector(".ia-nowplaying"),w=b.querySelector(".ia-toolbar");u&&(a==="video"&&!ri&&m&&u.parentElement!==m?m.appendChild(u):(a!=="video"||ri)&&w&&u.parentElement===m&&w.appendChild(u)),tt.getSelection().size===0&&!at&&R==="library"&&ve.setMessage(o.chooseArtist),b.classList.toggle("has-video",a==="video"&&Xt)}function et(a){if(!a?.store)return;let o=Zi(a.store,a.baseURI,a.mediaType);a.genres=o.genres,a.bookmarks=o.bookmarks,a.playlists=er(a.store,a.baseURI),st()}async function _a(a,o){if(!a?.store||typeof a.loadDocs!="function"||!o?.length)return!1;let d=0;try{d=await a.loadDocs(o)}catch(u){console.warn("[lazy] release load failed:",u?.message||u)}return d&&et(a),d>0}function Oo(a,o){return a?.store?Ja(a.store,[String(o).split("#")[0]]):[]}function Fe(){return pt()[0]||null}function Aa(a){return t.find(o=>o.config.id===a)||null}let Ye=null,St=!1,ft=!1,Dt=!1,Je=null;function di(){st(),Oe(),we(),Re(),Me(),mt(),R="library",ht("library")}function wr(){st(),Oe(),we(),Re(),Me(),mt(),ht(R)}async function Ho(a){for(let u=t.length-1;u>=0;u--)t[u].config.solid&&t.splice(u,1);for(let u=e.length-1;u>=0;u--)e[u].solid&&e.splice(u,1);Ye||(Ye=e.map(u=>[u.id,u.enabled])),e.forEach(u=>{u.enabled=!1});let o={id:"solid",label:"My Pod",url:a,enabled:!0,solid:!0};e.push(o);let d=await gt(o);if(!d.store){let u=e.indexOf(o);if(u>=0&&e.splice(u,1),Ye){for(let[m,w]of Ye){let x=e.find(k=>k.id===m);x&&(x.enabled=w)}Ye=null}for(let m of e){if(m.solid||!m.enabled||t.some(k=>k.config.id===m.id&&k.store))continue;let w=await gt(m),x=t.findIndex(k=>k.config.id===m.id);x>=0?t[x]=w:t.push(w)}return St=!1,ft=!1,di(),{ok:!1,err:d.error}}t.push(d);try{let u=new URL(a,location.href).href,m=w=>w&&!w.solid&&w.url&&(()=>{try{return new URL(w.url,location.href).href===u}catch{return!1}})();for(let w=t.length-1;w>=0;w--)m(t[w].config)&&t.splice(w,1);for(let w=e.length-1;w>=0;w--)m(e[w])&&e.splice(w,1);Ye&&(Ye=Ye.filter(([w])=>e.some(x=>x.id===w)))}catch(u){console.warn("[pod] self-hosted dedupe skipped:",u?.message||u)}return St=!!(Ie&&Ie.isLoggedIn),ft=!St,Dt=!1,di(),{ok:!0,authed:St}}function nc(){Ro();for(let a=t.length-1;a>=0;a--)t[a].config.solid&&t.splice(a,1);for(let a=e.length-1;a>=0;a--)e[a].solid&&e.splice(a,1);if(Ye){for(let[a,o]of Ye){let d=e.find(u=>u.id===a);d&&(d.enabled=o)}Ye=null}else e.forEach(a=>{a.enabled=!0});St=!1,ft=!1,Dt=!1,di()}let Mt="random",Jt="off",Go=!1,ui=!1,R="library",Rt=[];st();let xr="ia-player:state"+l;n&&b.classList.add("panel-instance"),e.length===1&&b.classList.add("single-library");let Lt=null,pi=!1;function Ko(){try{let a=localStorage.getItem(xr);return a?JSON.parse(a):null}catch(a){return console.warn("Could not read saved state:",a),null}}function kr(a){try{localStorage.setItem(xr,JSON.stringify(a))}catch(o){console.warn("Could not write state:",o)}}let Sr=new Set(["title","artist","album"]);function Wo(){let a={};return Le&&Le.querySelectorAll("col").forEach(o=>{o.style.width&&!Sr.has(o.dataset.col)&&(a[o.dataset.col]=o.style.width)}),a}function Vo(a){if(!(!a||!Le))for(let[o,d]of Object.entries(a)){if(Sr.has(o))continue;let u=Le.querySelector(`col[data-col="${CSS.escape(o)}"]`);u&&(u.style.width=d)}}function Lr(){let a=sa?.getSort?.()??{col:null,dir:"asc"};return{shuffle:Mt==="random",repeat:Jt,volume:h.volume,source:R,genreSel:[...ct.getSelection()],artistSel:[...tt.getSelection()],albumSel:[...ve.getSelection()],sortCol:a.col,sortDir:a.dir,columnWidths:Wo(),sourcesWidth:b.style.getPropertyValue("--ia-sources-width")||"",browserHeight:b.style.getPropertyValue("--ia-browser-height")||"",libraryTracks:ne.map(o=>({id:o.id,url:o.url,name:o.name,artist:o.artist||"",album:o.album||"",albumUrl:o.albumUrl||"",time:o.time||"",node:o.node?.value||null,_lib:o._lib})),currentTrackUrl:J?.url||null,currentTrack:J?{id:J.id,url:J.url,name:J.name,artist:J.artist||"",album:J.album||"",albumUrl:J.albumUrl||"",time:J.time||"",node:J.node?.value||null,_lib:J._lib}:null,currentTime:J&&h.src===Za(J.url)&&Number.isFinite(h.currentTime)?h.currentTime:0}}function Ee(){pi||(Lt&&clearTimeout(Lt),Lt=setTimeout(()=>{Lt=null,kr(Lr())},400))}function Yo(){Lt&&(clearTimeout(Lt),Lt=null),kr(Lr())}window.addEventListener("beforeunload",Yo);async function Jo(){let a=Ko();if(a){pi=!0;try{typeof a.volume=="number"&&(h.volume=Math.min(1,Math.max(0,a.volume)),S.value=String(h.volume)),Ei(a.shuffle?"random":"ordered"),Gr(a.repeat||"off"),Vo(a.columnWidths),a.sourcesWidth&&b.style.setProperty("--ia-sources-width",a.sourcesWidth),a.browserHeight&&b.style.setProperty("--ia-browser-height",a.browserHeight),a.sortCol&&sa.setSort&&sa.setSort(a.sortCol,a.sortDir),Array.isArray(a.genreSel)&&a.genreSel.length&&ct.setSelection(a.genreSel,{notify:!1}),we(),Array.isArray(a.artistSel)&&a.artistSel.length&&tt.setSelection(a.artistSel,{notify:!1});let o=new Set(e.filter(m=>m.enabled).map(m=>m.id));Array.isArray(a.libraryTracks)&&a.libraryTracks.length&&(ne=a.libraryTracks.map(m=>({...m,node:m.node?F(m.node):null})).filter(m=>!m._lib||o.has(m._lib)));let d=a.source&&a.source!=="library"&&Pe.has(a.source);a.source==="favorites"?(R="favorites",lt.setSelection(["favorites"],{notify:!1}),b.classList.add("source-favorites"),Br(),Da()):d?(R=a.source,lt.setSelection([a.source],{notify:!1}),ra(a.source)):(a.source&&a.source!=="library"&&a.source!=="favorites"&&(Qt=a.source),R="library",j=ne,He=At(),fe()),ea(),d||(await Re(),Array.isArray(a.albumSel)&&a.albumSel.length&&ve.setSelection(a.albumSel,{notify:!1}));let u=!1;for(let m of ne)if(!m.node)for(let w of pt()){let x=w.store&&_o(w.store,m.url);if(x){m.node=x,u=!0;break}}if(u&&R==="library"&&fe(),a.currentTrackUrl){let m=ne.find(k=>k.url===a.currentTrackUrl)||j.find(k=>k.url===a.currentTrackUrl),w=!m&&a.currentTrack&&a.currentTrack.url===a.currentTrackUrl,x=m||(w?{...a.currentTrack,node:a.currentTrack.node?F(a.currentTrack.node):null}:null);if(x&&(w||!x._lib||o.has(x._lib))){J=x,Xt=r()==="video",b.classList.toggle("has-video",Xt),za($,Hr(x)),fe(),h.src=Za(x.url);let k=Number.isFinite(a.currentTime)&&a.currentTime>0?a.currentTime:0;if(k>0){let L=()=>{h.removeEventListener("loadedmetadata",L);try{h.currentTime=k}catch{}};h.addEventListener("loadedmetadata",L)}h.load()}}}finally{pi=!1}}}let j=[],ne=[],Ut=null,Ea=!1,J=null,Xt=!1,Qt=null,_t=new Map,Nt=new Map;function Ta(a){a&&_t.delete(a)}function fi(a){let o=Ne.find(d=>d.id===a);o?.artistNode&&Ta(o.artistNode.value)}let _r="omp-player:quality-filter"+l,$a={minTrackDurationSec:180,minTrackBitrateKbps:0,minItemRuntimeSec:0,minDownloads:0,blockedCollections:[],applyToCatalogArtists:!1};function Xo(){try{let a=localStorage.getItem(_r);if(!a)return{...$a};let o=JSON.parse(a);return{...$a,...o}}catch{return{...$a}}}function Qo(a){try{localStorage.setItem(_r,JSON.stringify(a))}catch(o){console.warn("Could not persist filter:",o)}}let Ft=Xo();function mi(a){return a[Math.floor(Math.random()*a.length)]}function Zo(a){return a?.match(/(?:\/details\/|archive\.org\/details\/)([^/?]+)/)?.[1]??null}function zt(a){return a.node?.value||a.url}function Zt(a,o){return a.label.localeCompare(o.label,void 0,{sensitivity:"base"})}function es(a){return/\b40[13]\b|unauthor|forbidden|not allowed|permission|credential/i.test(String(a||""))}function hi(){let a=Yt();if(!a)return!1;if(!s)try{Ze(!0)}catch{}try{a.scrollIntoView?.({block:"nearest",inline:"nearest"});let o=a.shadowRoot&&a.shadowRoot.querySelector(".auth-btn");if(o)return o.click(),!0;if(typeof a._handleClick=="function")return a._handleClick(),!0;if(a.issuers&&a.issuers[0])return a.login(a.issuers[0]),!0}catch{}return!1}function ts(a){if(!ft)return!1;let o=!!(Ie&&Ie.isLoggedIn);return E(f,o?`"${a}" not saved \u2014 your pod denied the write (no permission). Changes stay in this browser only.`:`"${a}" not saved \u2014 log in to save to your pod. Changes stay in this browser only.`),Dt||o||(Dt=!0,confirm(`Couldn't save "${a}" to your pod.

You're in guest mode (not signed in). This change needs a Solid login to save \u2014 creating playlists works without one, but editing the library does not.

Log in now?

OK = Log in (you'll need to redo this change after signing in)
Cancel = keep working in this browser (changes won't be saved)`)&&(hi()||E(f,'Open the gear menu and click "Log in" to sign in to your pod.'))),!0}function Ue(a,o){if(a&&a.ok)return!0;let d=a?.err||"persistence failed";return console.warn(`checkSaved: ${o}:`,a),ft&&es(d)?ts(o):E(f,`Couldn't ${o}: ${d}. No changes saved.`),!1}function Ca(a){return`<button type="button" class="ia-src-edit ia-row-kebab" data-action="edit" aria-label="Edit ${le(a)}" aria-haspopup="menu" title="Edit" tabindex="-1">\u22EF</button>`}function Ar(a,o,{onCommit:d}){if(!a)return;let u=a.innerHTML;a.innerHTML=`<input type="text" class="ia-row-rename" value="${le(o)}" aria-label="Rename" spellcheck="false">`;let m=a.querySelector("input");m.focus(),m.select();let w=!1,x=()=>{a.innerHTML=u},k=()=>{if(w)return;w=!0;let A=m.value.trim();A&&A!==o?d(A):x()},L=()=>{w||(w=!0,x())};m.addEventListener("keydown",A=>{A.stopPropagation(),A.key==="Enter"?(A.preventDefault(),k()):A.key==="Escape"&&(A.preventDefault(),L())}),m.addEventListener("click",A=>A.stopPropagation()),m.addEventListener("dblclick",A=>A.stopPropagation()),m.addEventListener("mousedown",A=>A.stopPropagation()),m.addEventListener("blur",k)}let Er=Tt(Z,{onChange:a=>is(a),showAll:!1,multiSelect:!1,allowDeselect:!1,renderItemActions:a=>Ca(a.label),onItemAction:(a,o,d)=>{a==="edit"&&ds(o,d)}}),lt=Tt(N,{onChange:a=>ht([...a][0]||"library"),showAll:!1,multiSelect:!1,allowDeselect:!0,renderItemActions:a=>Ca(a.label),onItemAction:(a,o,d)=>{a==="edit"&&Cr(o,d)},onItemDrop:(a,o)=>bs(a,o)}),Tr=Tt(V,{onChange:a=>{let o=[...a][0];if(!o)return;let d=y.find(u=>(u.item||u.link)===o);d&&as(d)},showAll:!1,multiSelect:!1,allowDeselect:!0,renderItemActions:()=>ot()?'<button type="button" class="ia-row-favdel" data-action="favdel" title="Remove from the communal favourites" aria-label="Remove favourite" tabindex="-1">\u2715</button>':"",onItemAction:(a,o)=>{a==="favdel"&&confirm("Remove this favourite from the communal wall?")&&Ma(o)}});function $r(){let a=y.map(o=>({id:o.item||o.link,label:o.canonicalTitle||"Untitled",title:o.contributors?.length?`Favourited by ${o.contributors.map(d=>d.name).join(", ")}`:"",_fav:o})).sort((o,d)=>o.label.localeCompare(d.label,void 0,{sensitivity:"base"}));Tr.setItems(a),Tr.setMessage(a.length?null:r()==="video"?"No favourite films yet \u2014 tap \u2606 on a film.":"No favourites yet \u2014 tap \u2606 on a track.")}function as(a){let o=a.link||a.item,d=a.canonicalTitle||"Untitled";if(r()==="video"){Mr({url:o,name:d});return}Ge({id:o,url:o,name:d,album:"Community Favorites",albumUrl:"",time:"",artist:""})}function mt(){let a=d=>d==="video"?"\u{1F3AC}":"\u{1F3B5}";Er.setItems(e.map(d=>{let u=t.find(w=>w.config.id===d.id),m=u&&u.mediaType||d.mediaType||"audio";return{id:d.id,label:`${a(m)} ${d.label}`}}));let o=e.filter(d=>d.enabled).map(d=>d.id);Er.setSelection(o,{notify:!1})}mt();function Me(){let a=Ne.filter(o=>!o.hidden&&!o.id.endsWith("/playlists/deleted")).map(o=>({id:o.id,label:o.label,title:o.description||""}));lt.setItems(a),a.some(o=>o.id===R)?lt.setSelection([R],{notify:!1}):(R==="favorites"&&(R="library"),lt.setSelection([],{notify:!1})),ea()}function ea(){b.classList.toggle("viewing-playlist",Pe.has(R)),b.classList.toggle("viewing-library",R==="library")}Me(),$r(),c&&(b.classList.add("favourites-only"),nt&&(nt.hidden=!0));function jt(){if(!n){gr(e);for(let a of e)a.url&&!a.solid&&Xl(a.url,a.enabled)}}async function is(a){e.forEach(o=>{o.enabled=a.has(o.id)}),jt();for(let o of e){if(!o.enabled)continue;let d=t.findIndex(u=>u.config.id===o.id);d>=0&&t[d].unloaded&&(E(f,`Loading "${o.label}"\u2026`),t[d]=await gt(o),E(f,t[d].error?`Could not load "${o.label}": ${t[d].error}`:`Loaded "${o.label}".`))}st(),vr(),R!=="library"&&R!=="favorites"&&!Pe.has(R)&&(R="library"),ct.setSelection([],{notify:!1}),tt.setSelection([],{notify:!1}),ve.setSelection([],{notify:!1}),j=ne,Oe(),we(),Re(),Me(),R==="library"?(j=ne,He=At(),fe()):R==="favorites"?jr():ra(R)}async function bi(a){if(!(!Je||!Je.typeIndex||!a||a.solid||!a.url))try{await Va(Je.authedFetch,Je.typeIndex,{id:a.id,url:new URL(a.url,location.href).href,label:a.label})}catch(o){console.warn("type-index register failed (kept locally):",o?.message||o)}}async function rs(a){if(!(!Je||!Je.typeIndex||!a))try{await so(Je.authedFetch,Je.typeIndex,{id:a.id,url:a.url?new URL(a.url,location.href).href:null})}catch(o){console.warn("type-index unregister failed:",o?.message||o)}}async function oc(a,o){let d;try{d=await oo(a,o)}catch(k){console.warn("listRegisteredLibraries failed:",k?.message||k);return}let u=d.typeIndex;if(Je=u?{authedFetch:a,webId:o,typeIndex:u}:null,!u)return;let m=new Set(d.libraries.map(k=>k.url));for(let k of e){if(k.solid||!k.url)continue;let L=new URL(k.url,location.href).href;if(!m.has(L))try{await Va(a,u,{id:k.id,url:L,label:k.label})}catch(A){console.warn("push register failed:",A?.message||A)}}let w=new Set(e.filter(k=>k.url).map(k=>new URL(k.url,location.href).href)),x=!1;for(let k of d.libraries){if(w.has(k.url))continue;let L={id:Io(),label:k.label||k.url,url:k.url,enabled:No(k.url,!1)},A=await gt(L);if(A.error){console.warn("discovered library failed to load:",k.url,A.error);continue}t.push(A),e.push(L),x=!0}x&&(jt(),st(),mt(),Me(),Oe(),we(),Re(),R==="library"&&(j=ne,fe()))}async function gi(a,o){let u={id:Io(),label:a,url:o,enabled:!0};E(f,`Loading "${a}"\u2026`);let m=await gt(u);if(m.error){E(f,`Could not load "${a}": ${m.error}`);return}t.push(m),e.push(u),jt(),st(),mt(),Me(),Oe(),we(),Re(),await bi(u),E(f,Je?`Added "${a}" (registered on your pod).`:`Added "${a}".`)}async function ns(a){let o=e.find(L=>!L.solid&&yt(L.url)),u=new URL(o?o.url:"./dk-pod/dk/plugins/ia-player/libraries/_/index.ttl",location.href).href.match(/^(.*\/libraries\/)/)?.[1];if(!u){E(f,"Could not locate the libraries/ root.");return}let m=new Set(e.map(L=>(L.url||"").match(/\/libraries\/([^/]+)\//)?.[1]).filter(Boolean)),w=Po(a);for(let L=2;m.has(w);L++)w=`${Po(a)}_${L}`;let x=u+w+"/";E(f,`Creating library "${a}"\u2026`);let k=await uo(x,{title:a});if(!k.ok){E(f,`Couldn't create "${a}": ${k.err}`);return}await gi(a,k.url)}async function os(){Ze(!1);let a=window.dkElectron;if(!a||typeof a.importMusic!="function"){E(f,"Importing local music is only available in the Data Kitchen desktop app.");return}let o;try{o=await a.importMusic()}catch(C){E(f,`Import failed: ${C.message}`);return}if(!o||o.status==="cancelled")return;if(o.status==="error"){E(f,`Import failed: ${o.message||"scan error"}`);return}let d=Yn(o.tracks||[]);if(!d.releases.length){E(f,"No tagged audio files were found in that folder.");return}let u=e.find(C=>!C.solid&&yt(C.url)),w=new URL(u?u.url:"./dk-pod/dk/plugins/ia-player/libraries/_/index.ttl",location.href).href.match(/^(.*\/libraries\/)/)?.[1];if(!w){E(f,"Could not locate the libraries/ root.");return}let x=new Set(e.map(C=>(C.url||"").match(/\/libraries\/([^/]+)\//)?.[1]).filter(Boolean)),k="my_music";for(let C=2;x.has(k);C++)k=`my_music_${C}`;let L=w+k+"/",A=C=>(C=String(C||"").toLowerCase(),C.includes("png")?"png":C.includes("jpeg")||C.includes("jpg")?"jpg":C.includes("webp")?"webp":C.includes("gif")?"gif":"img"),T=C=>String(C||"").includes("/")?C:`image/${A(C)}`,I=C=>{let G=atob(C),be=new Uint8Array(G.length);for(let De=0;De<G.length;De++)be[De]=G.charCodeAt(De);return be},U=async(C,G,be)=>{let De=await fetch(C,{method:"PUT",headers:{"content-type":be},body:G});if(!De.ok)throw new Error(`PUT ${C} \u2192 ${De.status}`)},B=new Map,W=[];for(let C of d.releases){if(!C.artFromAbsPath)continue;let G;try{G=await a.readCover(C.artFromAbsPath)}catch{G=null}if(!G||!G.base64)continue;let be=`art-${C.slug}.${A(G.format)}`;B.set(C.slug,{file:be}),W.push({url:L+"releases/"+be,mime:T(G.format),base64:G.base64})}let ee=Jn(d,{title:"My Music",covers:B});E(f,`Importing ${d.releases.length} album(s), ${o.count} track(s)\u2026`);try{for(let[De,Ii]of Object.entries(ee))await U(L+De,Ii,"text/turtle");for(let De of W)await U(De.url,I(De.base64),De.mime);let C=w+"imported.ttl",G=[];try{let De=await fetch(C,{headers:{accept:"text/turtle"}});De.ok&&(G=[...(await De.text()).matchAll(/<([^>]*index\.ttl[^>]*)>/g)].map(Ii=>Ii[1]))}catch{}G=[...new Set([...G,`./${k}/index.ttl#it`])];let be=`@prefix dct: <http://purl.org/dc/terms/> .
@prefix dcat: <http://www.w3.org/ns/dcat#> .

<#it>
    a dcat:Catalog ;
    dct:title "Imported libraries" ;
    dcat:catalog ${G.map(De=>`<${De}>`).join(", ")} .
`;await U(C,be,"text/turtle")}catch(C){E(f,`Import write failed: ${C.message}`);return}await gi("My Music",L+"index.ttl")}function ss(a,o){let d=e.find(u=>u.id===a);d&&(d.label=o,jt(),mt(),bi(d))}async function ls(a,o){let d=e.find(w=>w.id===a);if(!d)return;d.url=o,jt(),E(f,`Reloading "${d.label}" from ${o}\u2026`);let u=await gt(d),m=t.findIndex(w=>w.config.id===a);m>=0?t[m]=u:t.push(u),st(),mt(),Me(),Oe(),we(),Re(),R==="library"&&(j=ne,fe()),await bi(d),u.error?E(f,`Could not load: ${u.error}`):E(f,`Reloaded "${d.label}".`)}function cs(a){let o=e.findIndex(m=>m.id===a);if(o<0)return;let d=e[o];rs(d),e.splice(o,1);let u=t.findIndex(m=>m.config.id===a);u>=0&&t.splice(u,1),jt(),ne=ne.filter(m=>m._lib!==a),st(),mt(),Me(),Oe(),we(),Re(),R==="library"&&(j=ne,fe())}function ds(a,o){let d=e.find(u=>u.id===a);d&&kn({title:"Edit library",values:{label:d.label,url:d.url},canDelete:e.length>1,onSave:async({label:u,url:m})=>{u!==d.label&&ss(a,u),m!==d.url&&await ls(a,m)},onDelete:()=>{if(!confirm(`Delete library "${d.label}"?
Its contents stay on disk; only this player will forget about it.`))return!1;cs(a)}})}function Cr(a,o){if(!Pe.has(a))return;let d=Ne.find(T=>T.id===a);if(!d)return;let u=Bt(a);if(!u)return;function m(T,I,U){for(let B=ie.length-1;B>=0;B--)ie[B].node&&ie[B].node.value===T.value&&ie.splice(B,1);ie.push({node:T,label:I,topic:U,url:null,source:null,localData:!0,sourcePlaylist:a,_lib:u.config.id})}async function w(){let T=xt.filter(C=>!kt.has(C.id));if(!T.length){E(f,"Add a genre first \u2014 a converted artist needs one.");return}let I=(prompt("Artist name:",d.name)||"").trim();if(!I)return;let U=T.slice().sort(Zt),B=prompt(`Genre? Enter a number:
`+U.map((C,G)=>`  ${G+1}. ${C.label}`).join(`
`),"1");if(B==null)return;let W=U[parseInt(B,10)-1];if(!W){E(f,"Conversion cancelled \u2014 no valid genre picked.");return}let ee=await Eo(u.store,u.baseURI,a,{name:I,genreId:W.id});Ue(ee,`convert "${d.name}" to an artist`)&&(d.artistNode=ee.node,m(ee.node,I,W.id),Ta(ee.node.value),we(),Re(),E(f,`${ee.relinked?"Relinked":"Converted"} "${d.name}" \u2192 artist "${I}" (${ee.albumCount} album${ee.albumCount===1?"":"s"}). Playlist kept.`))}async function x(){if(!confirm(`Unlink the artist from "${d.name}"?
The playlist and its tracks stay; it just stops also appearing as an artist.`))return!1;let T=await sr(u.store,u.baseURI,a);if(Ue(T,`unlink artist from "${d.name}"`)){if(T.node){for(let I=ie.length-1;I>=0;I--)ie[I].node&&ie[I].node.value===T.node.value&&ie.splice(I,1);Ta(T.node.value)}d.artistNode=null,d.hidden=!1,we(),Re(),Me(),E(f,`Unlinked artist from "${d.name}". Playlist kept.`)}}async function k(){if(!confirm(`Delete playlist "${d.name}"?`))return!1;let T=await xo(u.store,u.baseURI,a);if(!Ue(T,`delete playlist "${d.name}"`))return;for(let U=ie.length-1;U>=0;U--)ie[U].topic===a&&ie.splice(U,1);let I=Ne.findIndex(U=>U.id===a);I>=0&&Ne.splice(I,1),Pe.delete(a),R===a&&(R="library",ht("library")),Me()}let A=!ot()?[]:[d.artistNode?{label:"Unlink artist",onClick:x}:{label:"Convert to artist\u2026",onClick:w},{label:"Remove playlist",danger:!0,onClick:k}];Mi({title:"Edit playlist",values:{name:d.name,maker:d.maker,description:d.description},actions:A,onSave:async({name:T,maker:I,description:U})=>{let B=await wo(u.store,u.baseURI,a,{name:T,maker:I,description:U});if(!Ue(B,`edit playlist "${d.name}"`))return;if(d.artistNode&&T&&T!==d.name){let ee=await rr(u.store,u.baseURI,d.artistNode,T);if(!Ue(ee,`update linked artist "${d.name}" \u2192 "${T}"`))return}let W=I?`${T} (${I})`:T;et(u),Me(),we(),E(f,`Updated "${W}".`)}})}function us(a){return se.querySelector(`.ia-listbox-item[data-id="${CSS.escape(a)}"]`)}function ps(a){return ue.querySelector(`.ia-listbox-item[data-id="${CSS.escape(a)}"]`)}function fs(a){return ie.find(o=>zt(o)===a)}function ms(a,o){let d=xt.find(u=>u.id===a);d&&ua(o,[{id:"rename",label:"Rename"},{id:"delete",label:"Delete"}],async u=>{let m=vs(a);if(m){if(u==="rename")Ar(us(a),d.label,{onCommit:async w=>{let x=await go(m.store,m.baseURI,a,w);if(!Ue(x,`rename genre "${d.label}"`)){Oe();return}et(m),Oe(),we()}});else if(u==="delete"){let w=ie.filter(L=>L.topic===a&&Ia(L)).length,x=w?`Delete genre "${d.label}" and its ${w} artist${w===1?"":"s"}?`:`Delete genre "${d.label}"?`;if(!confirm(x))return;let k=await bo(m.store,m.baseURI,a);if(!Ue(k,`delete genre "${d.label}"`))return;et(m),Oe(),we(),Re()}}})}function hs(a,o){let d=fs(a);if(!d)return;if(d.sourcePlaylist&&Pe.has(d.sourcePlaylist)){let w=d.sourcePlaylist,x=Ne.find(T=>T.id===w),k=Bt(w),L=vi(d),A=[{id:"edit",label:"Edit playlist\u2026"},{id:"toggle-hide",label:x?.hidden?"Show in Playlists":"Hide from Playlists"},{id:"unlink",label:"Unlink artist"},{id:"visit-ia",label:"Visit on the Internet Archive"}];ua(o,A,async T=>{if(T==="visit-ia"){window.open(L,"_blank","noopener");return}if(T==="edit"){Cr(w);return}if(k){if(T==="toggle-hide"){let I=!x?.hidden,U=await lr(k.store,k.baseURI,w,I);if(!Ue(U,`${I?"hide":"show"} playlist "${x?.name||""}"`))return;x&&(x.hidden=I),I&&R===w&&(R="library",ht("library")),Me(),E(f,I?`"${x?.name}" hidden from Playlists (still an artist).`:`"${x?.name}" shows in Playlists again.`)}else if(T==="unlink"){if(!confirm(`Unlink the artist from "${x?.name}"?
The playlist and its tracks stay; it just stops appearing as an artist.`))return;let I=await sr(k.store,k.baseURI,w);if(!Ue(I,`unlink artist from "${x?.name||""}"`))return;let U=ie.indexOf(d);U>=0&&ie.splice(U,1),I.node&&Ta(I.node.value),x&&(x.artistNode=null,x.hidden=!1),we(),Re(),Me(),E(f,`Unlinked artist from "${x?.name}". Playlist kept.`)}}});return}let u=vi(d);ua(o,[{id:"rename",label:"Rename"},{id:"delete",label:"Delete"},{id:"visit-ia",label:"Visit on the Internet Archive"}],async w=>{if(w==="visit-ia"){window.open(u,"_blank","noopener");return}let x=Pa(d);if(x){if(w==="rename")Ar(ps(a),d.label,{onCommit:async k=>{let L=await rr(x.store,x.baseURI,d.node,k);if(!Ue(L,`rename artist "${d.label}"`)){we();return}et(x),we()}});else if(w==="delete"){if(!confirm(`Delete artist "${d.label}"?`))return;let k=await vo(x.store,x.baseURI,d.node);if(!Ue(k,`delete artist "${d.label}"`))return;et(x),we(),Re()}}})}function Ir(){if(It.querySelector(".ia-column-addform"))return;It.innerHTML=Xn;let a=It.querySelector("form"),o=a.querySelector("input"),d=()=>Pr();o.focus(),a.addEventListener("submit",async u=>{u.preventDefault();let m=o.value.trim();if(!m){d();return}let w=Fe();if(!w){E(f,"Enable a library first."),d();return}let x=await ho(w.store,w.baseURI,m);Pr(),Ue(x,`add genre "${m}"`)&&(xt.push({id:x.id,label:m,_lib:w.config.id}),Oe())}),a.querySelector(".ia-column-addcancel").addEventListener("click",d),o.addEventListener("keydown",u=>{u.key==="Escape"&&d()})}function Pr(){It.innerHTML='<button type="button" class="ia-add-genre-btn">+ Add genre</button>',It.querySelector(".ia-add-genre-btn").addEventListener("click",Ir)}ai.addEventListener("click",Ir);function Dr(){if(wt.querySelector(".ia-column-addform"))return;let a=xt.filter(k=>!kt.has(k.id));if(!a.length){E(f,"Add a genre first.");return}wt.innerHTML=Qn;let o=wt.querySelector(".ia-column-addselect");for(let k of a.slice().sort(Zt)){let L=document.createElement("option");L.value=k.id,L.textContent=k.label,o.appendChild(L)}let d=wt.querySelector("form"),u=d.querySelector("input"),m=d.querySelector("select"),w=[...ct.getSelection()];w.length===1&&a.some(k=>k.id===w[0])&&(m.value=w[0]);let x=()=>yi();u.focus(),d.addEventListener("submit",async k=>{k.preventDefault();let L=u.value.trim();if(!L){x();return}let A=To(L),T;if(A)T=A.url;else try{T=new URL(L).href}catch{E(f,`Not a valid URL: "${L}". Enter a full http(s) URL or an archive.org item id.`),u.focus(),u.select();return}let I=A?A.id:(prompt("Display name for this artist:","")||"").trim();if(!I){x();return}let U=m.value,B=Fe();if(!B){E(f,"Enable a library first."),x();return}let W;try{W=await yo(B.store,B.baseURI,U,I,T)}catch(ee){yi(),E(f,`Couldn't add artist "${I}": ${ee.message||ee}`);return}yi(),Ue(W,`add artist "${I}"`)&&(ie.push({node:W.node,label:I,topic:U,url:T,source:null,_lib:B.config.id}),we())}),d.querySelector(".ia-column-addcancel").addEventListener("click",x),u.addEventListener("keydown",k=>{k.key==="Escape"&&x()})}function yi(){wt.innerHTML='<button type="button" class="ia-add-artist-btn">+ Add artist</button>',wt.querySelector(".ia-add-artist-btn").addEventListener("click",Dr)}ii.addEventListener("click",Dr),zo?.addEventListener("click",async()=>{let a=prompt(`Add a library:

  1 = create a new empty library
  2 = add an existing one by URL`,"1");if(a!=null)if(a.trim()==="1"){let o=prompt("New library name:");if(!o||!o.trim())return;await ns(o.trim())}else{let o=prompt("Library RDF URL (its index.ttl):");if(!o||!o.trim())return;let d=o.trim().split("/").filter(Boolean).pop()||"Library",u=prompt("Display name:",d);if(!u||!u.trim())return;await gi(u.trim(),o.trim())}});async function bs(a,o){if(!Pe.has(a))return;let d=o.getData("application/x-ia-tracks");if(!d)return;let u;try{u=JSON.parse(d)}catch{return}if(!Array.isArray(u)||!u.length)return;let m=u.map(I=>j.find(U=>U.id===I)).filter(Boolean);if(!m.length)return;let w=Bt(a);if(!w)return;E(f,`Adding ${m.length} track${m.length===1?"":"s"} to playlist\u2026`);let x=m.map(I=>({label:[I.artist,I.album,I.name].filter(Boolean).join(" \u2014 ")||I.name,url:I.url,source:I.albumUrl,artist:I.artist,album:I.album,name:I.name,time:I.time})),k=!ot(),L=await Xa(w.store,w.baseURI,a,x,{inlineTracks:k}),A=L.added||[];A.forEach((I,U)=>{ie.push({node:L.nodes?.[U],label:I.label,topic:a,url:I.url,source:I.source,_lib:w.config.id})});let T=L.skipped||0;if(L.ok)A.length?E(f,`Added ${A.length} track${A.length===1?"":"s"}`+(T?` (${T} already in playlist)`:"")+"."):E(f,T?`All ${T} track${T===1?"":"s"} already in this playlist.`:"Nothing to add.");else{let I=L.err||"persistence failed";E(f,A.length?`Saved ${A.length} track${A.length===1?"":"s"}, then the server failed: ${I}. Retry to add the rest.`:`Couldn't add tracks to playlist: ${I}. No changes saved.`),console.warn("add tracks to playlist (partial/failed):",L)}A.length&&fi(a),R===a&&ra(a)}nt.addEventListener("click",()=>{if(!ot()){E(f,"Sign in to create playlists.");return}let a=Fe();if(!a){E(f,"Enable a library to add playlists.");return}Mi({title:"New playlist",values:{name:`Playlist ${Ne.length+1}`,maker:"jeffz",description:""},onSave:async({name:o,maker:d,description:u})=>{let m=await nr(a.store,a.baseURI,{name:o,maker:d,description:u});Ue(m,`add playlist "${o}"`)&&(Ne.push({id:m.id,name:m.name,maker:m.maker,description:m.description,label:m.label,_lib:a.config.id}),Pe.add(m.id),Me(),E(f,`Added playlist "${m.label}". Drag tracks onto it to fill it.`))}})});function ht(a){R=a,Ut=null,Ea=!1,b.classList.remove("source-no-browser"),b.classList.remove("source-favorites"),a==="library"?(j=ne,He=At(),fe()):a==="favorites"?(b.classList.add("source-favorites"),jr()):Pe.has(a)?(ra(a),E(f,"Tip: select tracks (Shift/Ctrl-click) and press Delete to remove them.")):(R="library",Me(),j=ne,fe()),ea(),Ee()}let ct=Tt(se,{onChange:_s,allLabel:"(All genres)",renderItemActions:a=>kt.has(a.id)?"":Ca(a.label),onItemAction:(a,o,d)=>{a==="edit"&&ms(o,d)}});function vi(a){let o=a.url||"";if(/(?:^|\/\/)(?:www\.)?archive\.org\//.test(o))return o;let d=`${a.label||""} AND mediatype:${r()==="video"?"movies":"audio"}`;return`https://archive.org/search?query=${encodeURIComponent(d)}`}function gs(a){let o=vi(a),d="Visit on the Internet Archive",u=`<button type="button" class="ia-row-ialink" data-action="ialink" data-url="${le(o)}" title="${d}" aria-label="${d}" tabindex="-1">\u2197</button>`;return Ca(a.label)+u}let tt=Tt(ue,{onChange:As,allLabel:"(All artists)",renderItemActions:gs,onItemAction:(a,o,d)=>{if(a==="edit")hs(o,d);else if(a==="ialink"){let u=d?.dataset?.url;u&&window.open(u,"_blank","noopener")}}}),ve=Tt(he,{onChange:Es,allLabel:"(All albums)",renderItemActions:a=>{if(r()!=="video")return"";let o=!!a._album&&v.has(a._album.url);return`<button type="button" class="ia-row-fav${o?" on":""}" data-action="fav" title="Add to the communal favourites" aria-label="Favourite" tabindex="-1">${o?"\u2605":"\u2606"}</button>`},onItemAction:(a,o)=>{a==="fav"&&ks(o)}});function Oe(){let a=xt.filter(o=>!kt.has(o.id)).map(o=>({id:o.id,label:o.label,title:o.label})).sort(Zt);ct.setItems(a)}function Ia(a){return!kt.has(a.topic)&&!Pe.has(a.topic)}function ys(a){return kt.has(a.topic)}function vs(a){let o=xt.find(d=>d.id===a);return o?Aa(o._lib):Fe()}function Pa(a){return a._lib?Aa(a._lib):Fe()}function Bt(a){let o=Ne.find(d=>d.id===a);return o?Aa(o._lib):Fe()}function ws(a){let o=ie.find(d=>ys(d)&&d.url===a);return o?Aa(o._lib):Fe()}async function Da(){try{y=(await qa(Fe()?.baseURI)).filter(o=>o.bucket===p()),v=new Set(y.flatMap(o=>[o.item,o.link].filter(Boolean)))}catch{}try{fe(),xs(),$r()}catch{}}function xs(){r()==="video"&&ve.setItems(ve.getItems())}function ks(a){let d=ve.getItems().find(u=>u.id===a)?._album;if(d){if(v.has(d.url)){Ma(d.url);return}i?.dispatchEvent(new CustomEvent("item-favourite",{detail:{item:d.url,bucket:"MovingImage",schemaType:"VideoObject",name:d.name||d.url,link:d.url,download:!1,thumbnail:d.thumbnail||"",libraryBase:Fe()?.baseURI},bubbles:!0,composed:!0}))}}async function Mr(a){let o=a.url||"";if(/\/download\//.test(o)||/\.(mp4|m4v|ogv|ogg|webm|mov|mkv|avi|mpe?g)(\?|#|$)/i.test(o)){let w={id:o,url:o,name:a.name||o,time:"",artist:"",album:a.name||"",albumUrl:""};Ge(w,{autoplay:!1}),ki(w,{name:a.name});return}let u={url:o,name:a.name};E(f,"Loading film\u2026");let m=null;try{m=qr(await aa(u))}catch{}if(!m){E(f,""),oa(`Can't play \u201C${a.name}\u201D \u2014 no playable video found at the Internet Archive.`);return}E(f,""),Ge(m,{autoplay:!1}),ki(m,u)}function Rr(a){if(!a||!a.url)return;if(ta(a.url)){Ma(a.url);return}let o=r()==="video";i?.dispatchEvent(new CustomEvent("item-favourite",{detail:{item:a.url,bucket:o?"MovingImage":"Sound",schemaType:o?"VideoObject":"AudioObject",name:a.name||a.url,link:a.url,download:!0,libraryBase:Fe()?.baseURI},bubbles:!0,composed:!0}))}function ta(a){return v.has(a)}async function Ma(a){let o=y.find(u=>u.item===a||u.link===a);if(!o)return!1;let d=0;for(let u of o.contributors||[])if(u.file)try{await fa(u.file),d++}catch(m){E(f,`Couldn't remove favourite: ${m.message}`)}return d&&document.dispatchEvent(new CustomEvent("omp:favourited")),d>0}function wi(){let a=ct.getSelection();return a.size===0?ie.filter(Ia):ie.filter(o=>a.has(o.topic)&&Ia(o))}function xi(a){if(!a)return!1;if(a.sourcePlaylist)return!0;let o=u=>(u||"").trim().toLowerCase(),d=o(a.label);for(let u of Ne)if(u.name&&o(u.name)===d||u.maker&&o(u.maker)===d)return!0;if(a.localData&&a.node){let u=Pa(a);try{return!!u?.store&&or(u.store,a.node).length>0}catch{return!1}}return!1}function we(){let o=wi().map(w=>({id:zt(w),label:w.label,title:w.label,url:w.url,_b:w})),d=o.filter(w=>xi(w._b)).sort(Zt),u=o.filter(w=>!xi(w._b)).sort(Zt),m=r()==="video";u.forEach((w,x)=>{w.className="ia-item-raw",w.ariaLabel=`${w.label} \u2014 raw archive.org search, not curated`,x===0&&!m&&(w.section="Raw \u2014 uncurated archive.org searches")}),tt.setItems([...d,...u])}async function Ur(a){let o=zt(a);if(_t.has(o))return _t.get(o);if(a.localData&&a.node){let m=Pa(a);if(m?.store){let w=(async()=>{a.sourcePlaylist&&m.loadDocs&&await m.loadDocs([String(a.sourcePlaylist).split("#")[0]]);let x=a.sourcePlaylist?Ja(m.store,[String(a.sourcePlaylist).split("#")[0]]):fo(m.store,m.baseURI);return await _a(m,x)&&we(),or(m.store,a.node).map(L=>({...L,_artist:a}))})();return _t.set(o,w),w}}let d=zi(a.url);if(!d){let m=Promise.resolve([]);return _t.set(o,m),m}let u=ji(d,Ft,{mediaType:r()}).then(m=>m.map(w=>({...w,_artist:a}))).catch(m=>(console.error("getAlbums",m),[]));return _t.set(o,u),u}let Ra=0,at=null;function Ss(){return he.closest(".ia-column")}function Ua(a){let o=Ss();if(!o)return;let d=o.querySelector(".ia-album-note");if(!a){d?.remove();return}d||(d=document.createElement("div"),d.className="ia-album-note",o.querySelector(".ia-column-header")?.after(d)),d.textContent=a}function Nr(){at&&(at=null,Ua(""))}function Fr(){ve.setItems(at.map(a=>{let o=r()==="video"?a.name:`${a._artist.label} \u2014 ${a.name}`;return{id:a.url,label:o,title:o,_album:a}}))}async function Re(){if(R==="favorites")return;if(at){Fr(),Et();return}let a=ci(),o=tt.getSelection();if(o.size===0){ve.setMessage(a.chooseArtist),Et();return}let d=++Ra;ve.setMessage(a.loadingAlbums);let m=wi().filter(k=>o.has(zt(k))),w=await Promise.all(m.map(Ur));if(d!==Ra)return;let x=w.flat();if(!x.length){ve.setMessage(a.noAlbums),Et();return}ve.setItems(x.map(k=>{let L=r()==="video"?k.name:`${k._artist.label} \u2014 ${k.name}`;return{id:k.url,label:L,title:L,_album:k}})),(Ut||Ea)&&r()!=="video"&&ve.setSelection(x.map(k=>k.url),{notify:!1}),Et()}async function aa(a){let o=a.url;if(Nt.has(o))return Nt.get(o);if(a._local&&a._releaseNode){let A=Pa(a._artist);if(A?.store){let T=String(a._releaseNode.value||a._releaseNode).split("#")[0],I=(async()=>(await _a(A,[T]),Ao(A.store,a._releaseNode).map(U=>({id:U.url,url:U.url,name:U.name,time:U.time||"",artist:a._artist?.label||"",album:a.name,albumUrl:a.url,node:U.node||null,_lib:a._artist?._lib}))))();return Nt.set(o,I),I}}let d=Zo(a.url);if(!d)return Promise.resolve([]);let u=Array.isArray(a._creator)?a._creator[0]:a._creator,m=u?String(u).trim():"",x=/^(various(\s+artists?)?|v\.?a\.?)$/i.test(m)?"":m,k=a._artist?.label||"",L=Wn(d,Ft,{mediaType:r()}).then(A=>(A||[]).map(T=>({id:T.url,url:T.url,name:T.name,time:T.time||"",artist:T.artist||x||k,album:a.name,albumUrl:a.url,_lib:a._artist?._lib,_rights:T._rights||a._rights||null,_detailUrl:T._detailUrl||a._detailUrl||a.url||""}))).catch(A=>(console.error("getTracks",A),[]));return Nt.set(o,L),L}let zr=0,He="Choose an album to add tracks.";function At(){return tt.getSelection().size===0?"Choose an artist to see albums.":ve.getSelection().size===0?"Choose an album to add tracks.":"No tracks in selected album(s)."}async function Et(){if(R!=="library"||r()==="video")return;let a=ve.getSelection();if(!a.size){j=ne,He=At(),fe();return}let o=++zr;ne.length||(He="Loading tracks\u2026",j=ne,fe());let u=ve.getItems().filter(k=>a.has(k.id)).map(k=>k._album),m=await Promise.all(u.map(aa));if(o!==zr)return;let w=new Set(ne.map(k=>k.id)),x=m.flat().filter(k=>!w.has(k.id));x.length&&(ne=x.concat(ne),Ee()),j=ne,He=At(),ca(),fe()}function jr(){if(r()==="video"){Si(),b.classList.remove("has-video");try{h.pause()}catch{}}Br(),Da()}function Br(){let a=new Map(ne.map(o=>[o.url,o]));j=y.map(o=>{let d=o.item||o.link,u=a.get(d)||o.link&&a.get(o.link)||o.item&&a.get(o.item);return u||{id:d,url:o.link||o.item,name:o.canonicalTitle||"Untitled",time:"",artist:"",album:"Favorites",albumUrl:"",thumbnail:o.thumbnail||""}}),He=c?"No favourite films yet \u2014 tap \u2606 on a film to add one.":"No favourites yet \u2014 tap \u2606 on a track to add one.",ca(),fe()}function Ls(a){let o=a.name||"",d=a.artist||"",u=a.album||"";if(!o&&!d&&!u){let m=(a.label||"").split(" \u2014 ");m.length>=3?(d=m[0],u=m[1],o=m.slice(2).join(" \u2014 ")):m.length===2?(u=m[0],o=m[1]):o=a.label||""}return{id:a.url,url:a.url,name:o||a.label,artist:d,album:u,albumUrl:a.source||"",time:"",node:a.node||null,_lib:a._lib}}let ia=0;function ra(a){let o=++ia,d=Bt(a);if(d?.loadDocs){let u=Oo(d,a),m=ie.some(w=>w.topic===a&&w.url);if(u.length&&!m){j=[],He="Loading playlist\u2026",fe(),_a(d,u).then(()=>{o!==ia||R!==a||(Na(a,o),we())}).catch(()=>{o===ia&&R===a&&Na(a,o)});return}u.length&&_a(d,u).then(w=>{w&&o===ia&&R===a&&Na(a,o)}).catch(()=>{})}Na(a,o)}function Na(a,o){j=ie.filter(m=>m.topic===a).map(Ls),He="This playlist is empty.",ca(),fe();let u=new Map;for(let m of j)m.albumUrl&&(u.has(m.albumUrl)||u.set(m.albumUrl,[]),u.get(m.albumUrl).push(m));for(let[m,w]of u){let x={url:m,name:w[0].album||"",_artist:{label:w[0].artist||""}};aa(x).then(k=>{if(o!==ia)return;let L=new Map(k.map(T=>[T.url,T])),A=!1;for(let T of w){let I=L.get(T.url);I&&(I.time&&!T.time&&(T.time=I.time,A=!0),I.name&&T.name!==I.name&&(T.name=I.name,A=!0))}A&&R===a&&(ca(),fe())}).catch(()=>{})}}function fe(){if(J&&!j.includes(J)){let u=j.find(m=>m.url===J.url);u&&(J=u)}let a=R==="favorites",o=ot(),d=R&&Pe.has(R);if(bn(re,vt,j,{currentTrackId:J?.id,isFav:u=>ta(u.url),favouritable:u=>!u.node,wallDelete:a&&o,emptyMessage:He,useKebab:u=>a||!u.node?!1:$i(u)?!0:!!(u.albumUrl&&/(?:^|\/\/)(?:www\.)?archive\.org\//.test(u.albumUrl))}),Vr?.applySelection(),_){let u=j.length;if(!u)_.textContent="";else{let m=0;for(let A of j)m+=la(A.time);let w=Math.round(m/60),x=Math.floor(w/60),k=w%60,L=m>0?x>0?` \xB7 ${x}h ${String(k).padStart(2,"0")}m`:` \xB7 ${k}m`:"";_.textContent=`${u} track${u===1?"":"s"}${L}`}}}function na(){return R==="library"?!1:(R="library",lt.setSelection([],{notify:!1}),ea(),!0)}function _s(a){na(),Nr(),we(),Re(),Ee()}function As(a){if(na(),Nr(),Ut=null,Ea=!1,a&&a.size===1){let o=wi().filter(d=>a.has(zt(d)));o.length===1&&(Ea=xi(o[0]),o[0].sourcePlaylist&&(Ut=o[0].sourcePlaylist))}Re(),Ee()}function Es(a){if(r()==="video"){Ts(a);return}na()&&(ne=[]),Et(),Ee()}function qr(a){if(!a||!a.length)return null;let o=a[0],d=la(o.time);for(let u of a){let m=la(u.time);m>d&&(o=u,d=m)}return o}let Or=0;async function Ts(a){na();let o=[...a],d=o[o.length-1];if(!d){j=[],fe(),Ee();return}ve.setSelection([d],{notify:!1});let m=ve.getItems().find(L=>L.id===d)?._album;if(!m)return;let w=++Or;E(f,"Loading film\u2026");let x=await aa(m);if(w!==Or)return;let k=qr(x);if(!k){E(f,""),oa(`Can't play \u201C${m.name}\u201D \u2014 no playable video found at the Internet Archive.`);return}j=[k],E(f,""),Ge(k,{autoplay:!1}),ki(k,m),Ee()}let $s=null;function ki(a,o){if(!D)return;z.textContent=o?.name||a.album||a.name||"Untitled",q.textContent=a.time?`Running time: ${a.time}`:"";let d=a.albumUrl||o?.url||"";if(pe.innerHTML=d?`See more about this film at the <a href="${le(d)}" target="_blank" rel="noopener">Internet Archive</a>`:"",oe){let u=a._rights||o?._rights||null;oe.textContent=`\u2696 ${u?u.label:"Rights unknown"}`}$s={track:a,album:o},b.classList.add("film-intro")}function Si(){b.classList.remove("film-intro")}if(D){let a=()=>{Si(),h.play().catch(()=>{})};D.addEventListener("click",a),D.addEventListener("keydown",o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),a())}),h.addEventListener("play",Si)}function Cs(){J&&(Rt.push({track:J}),Rt.length>200&&Rt.shift())}let Li=null;function oa(a,o={}){let d=b.querySelector(".ia-notice");d||(d=document.createElement("div"),d.className="ia-notice",d.setAttribute("role","alert"),d.innerHTML=Zn,d.querySelector(".ia-notice-close").addEventListener("click",()=>_i()),b.appendChild(d)),d.querySelector(".ia-notice-msg").textContent=a,d.classList.add("show"),clearTimeout(Li),o.sticky||(Li=setTimeout(_i,o.duration||4e3))}function _i(){clearTimeout(Li),b.querySelector(".ia-notice")?.classList.remove("show")}function Ge(a,o={}){if(!a)return;_i();let d=o.autoplay!==!1;J&&J.id!==a.id&&!o.fromHistory&&Cs(),J=a,d&&(Go=!0),h.src=Za(a.url),h.load(),Xt=r()==="video",b.classList.toggle("has-video",Xt),za($,Hr(a)),E(f,""),Ee(),fe(),d&&h.play().catch(u=>{if(u.name==="NotAllowedError"||u.name==="AbortError"){console.warn("Playback deferred:",u.name),E(f,"Press \u25B6 to start playback");return}E(f,`Error playing ${a.name}`),oa(`Can't play \u201C${a.name}\u201D. The media may be unavailable or in an unsupported format.`),console.error("Playback error:",u)})}function Hr(a){let o=a.albumUrl?` <a class="ia-link" href="${le(a.albumUrl)}" target="_blank" rel="noopener">[IA]</a>`:"",d=a._rights?` \xB7 <span class="ia-np-rights">\u2696 ${le(a._rights.label)}</span>`:"";if(r()==="video")return`Now playing: ${le(a.album||a.name||"Untitled")}${d}${o}`;let u=[a.artist,a.album,a.name].filter(Boolean).map(le),m=j.findIndex(x=>x.id===a.id),w=m>=0&&j.length>1?` (${m+1}/${j.length})`:"";return`Now playing: ${u.join(" \u2014 ")}${w}${d}${o}`}async function Fa(){let a=ie.filter(o=>Ia(o)&&o.url);if(!(!a.length||ui)){ui=!0;try{for(let o=0;o<6;o++){let d=mi(a),u=await Ur(d);if(!u.length)continue;let m=mi(u),w=await aa(m);if(!w.length)continue;let x=mi(w);R!=="library"&&(lt.setSelection(["library"],{notify:!1}),ht("library")),ct.setSelection([d.topic],{notify:!1}),we(),tt.setSelection([zt(d)],{notify:!1}),await Re(),ve.setSelection([m.url],{notify:!1}),await Et(),Ge(x);return}E(f,"Could not find a random track to play")}finally{ui=!1}}}function Is(){return J?j.findIndex(a=>a.id===J.id):-1}function Ai(){if(Mt==="random"){Fa();return}if(Jt==="one"&&J){h.currentTime=0,h.play().catch(()=>{});return}let a=Is();if(a<0){j[0]&&Ge(j[0]);return}if(a+1<j.length){Ge(j[a+1]);return}if(Jt==="all"&&j[0]){Ge(j[0]);return}E(f,"Reached the end of the list")}function Ps(){if(!Rt.length){E(f,"No previous track");return}let a=Rt.pop();Ge(a.track,{fromHistory:!0})}function Ei(a){Mt=a,Ee()}function Gr(a){Jt=a,Ee()}mn(Le),Le.addEventListener("mouseup",()=>Ee());let Kr=b.querySelector(".ia-sources-resize");Kr&&Kr.addEventListener("mousedown",a=>{a.preventDefault();let o=a.clientX,d=b.querySelector(".ia-sources")?.offsetWidth||260,u=w=>{let x=Math.max(140,Math.min(600,d+(w.clientX-o)));b.style.setProperty("--ia-sources-width",x+"px")},m=()=>{document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",m),b.classList.remove("resizing-sources"),Ee()};document.addEventListener("mousemove",u),document.addEventListener("mouseup",m),b.classList.add("resizing-sources")});let Wr=b.querySelector(".ia-browser-resize");Wr&&Wr.addEventListener("mousedown",a=>{a.preventDefault();let o=a.clientY,d=b.querySelector(".ia-browser")?.offsetHeight||220,u=w=>{let x=Math.max(120,Math.min(640,d+(w.clientY-o)));b.style.setProperty("--ia-browser-height",x+"px")},m=()=>{document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",m),b.classList.remove("resizing-browser"),Ee()};document.addEventListener("mousemove",u),document.addEventListener("mouseup",m),b.classList.add("resizing-browser")});let Ie=Yt();if(Ie){let a=!Uo;Uo=!0,a&&(Ie._manualInit=!0,Ie.addEventListener("click",()=>{try{Ie.isLoggedIn||pr()}catch{}},!0)),document.addEventListener("omp:reapply-gating",La);let o=!1,d=async u=>{E(f,"Loading library from your pod\u2026");let m=await Ho(u);return m.ok||E(f,`Couldn't load the pod library: ${m.err}. Staying on the local library.`),!!m.ok};document.addEventListener("sol-login",async u=>{let m=u.detail?.webId||Ie.webId||"";if(!m)return;let w=ec();if(w){try{let x=(w.search||"")+(w.hash||"");x&&location.search+location.hash!==x&&Rt.replaceState(null,"",location.pathname+x)}catch{}Ro()}console.info("[omp] sol-login handler upgrade fired: webId=",m);try{tr(!0),St=!0,ft=!1,Dt=!1;let x=pt().find(k=>k.store&&!k.config.solid&&yt(k.config.url));if(x){try{Mo(m,new URL(x.config.url,location.href).href)}catch{}et(x)}wr(),La(),E(f,`Signed in: ${m} \u2014 your library is now writable.`)}catch(x){console.warn("[omp] pod login upgrade failed:",x),E(f,`Signed in, but: ${x.message}.`)}if(a&&!o&&ac()){o=!0,setTimeout(async()=>{try{await Qr()}finally{o=!1}},1500);return}if(a&&!o&&rc()){o=!0,setTimeout(async()=>{try{await Zr()}finally{o=!1}},1500);return}}),document.addEventListener("sol-logout",()=>{Je=null,tr(!1),St=!1,ft=!0,Dt=!1;let u=pt().find(m=>m.store&&!m.config.solid&&yt(m.config.url));u&&et(u),wr(),La(),E(f,"Signed out. Viewing in guest mode \u2014 you may browse, search, listen, and favourite anything.")}),a&&Promise.resolve().then(()=>Ie.initialize()).then(()=>document.dispatchEvent(new CustomEvent("omp:reapply-gating"))).catch(u=>console.warn("sol-login init skipped (no auth library?):",u?.message||u)),Ie.isLoggedIn||(ft=!0,E(f,"Viewing in guest mode. You may browse, search, listen, and favourite anything."))}let Ti=b.querySelector(".ia-artist-search");if(Ti){let a=Ti.querySelector("input");Ti.addEventListener("submit",async o=>{o.preventDefault();let d=a.value.trim();if(!d)return;let u=Fe(),m=new URL("https://archive.org/search");m.searchParams.set("query",`creator:"${d}"`),m.searchParams.append("and[]",`mediatype:"${r()==="video"?"movies":"audio"}"`),na(),ct.setSelection([],{notify:!1}),tt.setSelection([],{notify:!1}),lt.setSelection([],{notify:!1}),ea(),at=[],Ua(`Searching \u201C${d}\u201D\u2026`),ve.setMessage("Searching\u2026");let w=++Ra,x=[];try{x=await ji(zi(m.href),Ft,{mediaType:r()})}catch(L){console.error("find-artist search",L)}if(w!==Ra)return;let k={label:d,_lib:u?.config.id};if(at=x.map(L=>({...L,_artist:k})),!at.length){Ua(""),ve.setMessage(`No audio results for \u201C${d}\u201D.`);return}Ua("Temporary search results \u2014 add tracks to a playlist to keep them."),Fr(),Et(),E(f,`${at.length} result${at.length===1?"":"s"} for \u201C${d}\u201D.`)})}let sa=hn(ye,{onSort:()=>{ca(),fe(),Ee()}});function la(a){if(!a)return 0;let o=String(a).split(":").map(Number);if(o.length===2)return o[0]*60+o[1];if(o.length===3)return o[0]*3600+o[1]*60+o[2];let d=parseFloat(a);return isFinite(d)?d:0}function Ds(a,o,d){if(d==="time")return la(a.time)-la(o.time);if(d==="fav"){let w=ta(a.url)?1:0,x=ta(o.url)?1:0;return w-x}let u=(a[d]||"").toString(),m=(o[d]||"").toString();return u.localeCompare(m,void 0,{sensitivity:"base",numeric:!0})}function ca(){let{col:a,dir:o}=sa.getSort();if(!a)return;let d=o==="asc"?1:-1;j=j.slice().sort((u,m)=>d*Ds(u,m,a)),R==="library"&&(ne=j)}let Vr=fn(re,{onPlay:a=>{let o=j.find(d=>d.id===a);if(o){if(Mt==="random"&&Ei("ordered"),r()==="video"){Mr(o);return}Ge(o)}},onRemove:(a,o)=>{Ci(a,o)},onEdit:(a,o)=>{Ms(a,o)},onFavourite:a=>Rr(a)});Da(),document.addEventListener("omp:favourited",Da);function $i(a){return!a||!a.node?!1:ot()?!0:R&&Pe.has(R)?a.node.value.startsWith(R+"#"):!1}function Ms(a,o){let d=j.find(L=>L.id===a);if(!d)return;let u=d.albumUrl||"",m=/(?:^|\/\/)(?:www\.)?archive\.org\//.test(u),w=R&&Pe.has(R);if($i(d)){Yr(a);return}let x=[];$i(d)&&x.push({id:"edit",label:"Edit\u2026"}),m&&x.push({id:"visit",label:"Visit on the Internet Archive"}),x.push({id:"remove",label:w?"Remove from playlist":"Remove from list",danger:!0});let k=L=>{if(L==="visit"){u&&window.open(u,"_blank","noopener");return}if(L==="remove"){Ci([a],{fromButton:!0});return}if(L==="edit"){Yr(a);return}};if(x.length<=1){k(x[0]?.id||"remove");return}ua(o,x,k)}async function Yr(a){let o=j.find(L=>L.id===a);if(!o||!o.node){E(f,"Can't edit this track (no RDF node).");return}let d=Bt(R)||Fe();if(!d)return;let u=Lo(d.store,o.node),m=R&&Pe.has(R),w=o.albumUrl||"",x=/(?:^|\/\/)(?:www\.)?archive\.org\//.test(w),k=[{label:ta(o.url)?"\u2605 Remove from favourites":"\u2606 Add to favourites",onClick:()=>Rr(o)}];x&&k.push({label:"Visit on the Internet Archive",onClick:()=>{window.open(w,"_blank","noopener")}}),k.push({label:m?"Remove from playlist":"Remove from list",danger:!0,onClick:()=>Ci([a],{fromButton:!0})}),Sn({title:"Track options",values:{title:o.name,artist:o.artist,album:o.album},siblingCount:u,actions:k,onSave:async({title:L,artist:A,album:T})=>{let I=await So(d.store,d.baseURI,o.node,{title:L,artist:A,album:T});if(!Ue(I,`edit "${o.name}"`))return;let U=ie.find(B=>B.node&&B.node.value===o.node.value);if(U&&(U.name=L,U.artist=A,U.album=T,U.label=[A,T,L].filter(Boolean).join(" \u2014 ")||L),T!=null)for(let B of ie)B.source&&o.albumUrl&&B.source===o.albumUrl&&(B.album=T,B.label=[B.artist,B.album,B.name].filter(Boolean).join(" \u2014 ")||B.name);if(m)fi(R),ra(R);else{for(let B of j)B.node&&B.node.value===o.node.value&&(B.name=L,B.artist=A),T!=null&&o.albumUrl&&B.albumUrl===o.albumUrl&&(B.album=T);o.albumUrl&&Nt.delete(o.albumUrl),fe()}E(f,`Updated "${L}".`)}})}async function Ci(a,o={}){if(!a||!a.length)return;let d=new Set(a);if(R==="library"&&!Ut){ne=ne.filter(A=>!d.has(A.id)),j=ne,He=At(),fe(),Ee();return}if(R==="favorites"){if((o.fromButton||a.length>1)&&!confirm(a.length===1?"Remove this favourite from the communal wall?":`Remove ${a.length} favourites from the communal wall?`))return;let T=j.filter(I=>d.has(I.id));for(let I of T)await Ma(I.url);return}let u=R==="library"?Ut:null;if(o.fromButton||a.length>1){let A=u||R,T=Ne.find(U=>U.id===A)?.label||(R==="favorites"?"Favorites":"this playlist"),I=a.length===1?`Remove this track from "${T}"?`:`Remove ${a.length} tracks from "${T}"?`;if(!confirm(I))return}let w=j.filter(A=>d.has(A.id)),x=R==="favorites"?Xi(Fe()?.baseURI):u||R,k=[];for(let A of w){let T=R==="favorites"?ws(A.url):Bt(x);if(!T)continue;let I=await ko(T.store,T.baseURI,x,A.url);if(Ue(I,`remove "${A.name}" from playlist`)){k.push(A);for(let U=ie.length-1;U>=0;U--)if(ie[U].url===A.url&&ie[U].topic===x){ie.splice(U,1);break}}}let L=new Set(k.map(A=>A.id));j=j.filter(A=>!L.has(A.id)),u&&(ne=ne.filter(A=>!L.has(A.id))),k.length&&R!=="favorites"&&fi(x),fe()}gn({audio:h,playBtn:Be,prevBtn:Se,nextBtn:We,seekSlider:P,timeCur:K,timeDur:ae,volumeSlider:S},{onPlayToggle:()=>{if(!J){j[0]?Ge(j[0]):Fa();return}if(!h.src||h.src!==Za(J.url)){Ge(J);return}h.paused?h.play().catch(()=>{}):h.pause()},onPrev:()=>Ps(),onNext:()=>Ai()}),h.addEventListener("volumechange",()=>Ee());let Jr=0;h.addEventListener("timeupdate",()=>{let a=Date.now();a-Jr<5e3||(Jr=a,Ee())}),h.addEventListener("pause",()=>Ee());let da=0,Rs=5;h.addEventListener("playing",()=>{da=0}),h.addEventListener("error",()=>{if(!h.src||!J)return;let a=h.error;if(console.warn("Audio error",a?.code,a?.message,"for",J.url),da++,da>=Rs){E(f,`Stopped: ${da} tracks in a row couldn't be played.`),oa(`Stopped \u2014 ${da} items in a row couldn't be played. The source may be offline.`,{sticky:!0});return}E(f,`Skipped (couldn't play "${J.name}")`),r()==="video"&&oa(`Can't play \u201C${J.name}\u201D. The media may be unavailable or in an unsupported format.`),Mt==="random"?Fa():Ai()}),h.addEventListener("ended",()=>{if(Jt==="one"){h.currentTime=0,h.play().catch(()=>{});return}if(Mt==="random"){Fa();return}Ai()}),ya.addEventListener("click",()=>{Ze(!1),ja()}),Q?.addEventListener("click",()=>{Ze(!1),ja({url:"./assets/ia-help.html",title:"Help",useBundle:!1,size:"large"})}),$e?.addEventListener("click",()=>{Ze(!1),ja({url:"./assets/ia-login-help.html",title:"Solid login help",useBundle:!1,size:"large"})}),Qe?.addEventListener("click",()=>{Ze(!1);let a=Fe();if(!a?.store){E(f,"Enable a library to view deleted items.");return}for(let d of pt())et(d);let o=Kt(a.baseURI);if(!Pe.has(o)){E(f,"Nothing has been deleted yet.");return}ht(o)});async function Xr(){let a=location.href.split("#")[0].split("?")[0],o=/\/[^/]*\.[^/]+$/.test(a)?a:new URL("index.html",a.endsWith("/")?a:a+"/").href,d=await fetch(o),u=await d.text();if(!d.ok||!/<html[\s>]|<ia-player[\s>]|<script[\s>]/i.test(u))throw new Error(`won't install: ${o} returned ${d.status} and not HTML (${u.length} bytes). The app page must be reachable as a file, not a container listing.`);u=u.replace(/(?:\.?\/)?(?:dist\/)?ia-player(?:\.esm)?\.js/g,"./ia-player.js"),u=u.replace(/(<sol-default\b[^>]*?)\s+solid-kitchen\b(\s*=\s*(?:"[^"]*"|'[^']*'|\S+))?/gi,"$1").replace(/<script\b[^>]*>(?:(?!<\/script>)[\s\S])*?window\.SolidKitchen(?:(?!<\/script>)[\s\S])*?<\/script>\s*/gi,"").replace(/window\.SolidKitchen\s*=\s*true/gi,"window.SolidKitchen = false");let m="";for(let k of document.querySelectorAll("script[src]")){let L=k.getAttribute("src")||"";if(/ia-player(?:\.esm)?\.js(?:[?#]|$)/.test(L)){m=k.src;break}}m||(m=new URL("dist/ia-player.js",o).href);let w=await fetch(m),x=await w.text();if(!w.ok||x.length<1e3||!/customElements|function|=>/.test(x))throw new Error(`won't install: ${m} returned ${w.status} and not the JS bundle (${x.length} bytes).`);return[{relPath:"index.html",body:u,contentType:"text/html"},{relPath:"ia-player.js",body:x,contentType:"text/javascript"}]}async function Us(a){let o=a.baseURI,d=o.slice(0,o.lastIndexOf("/")+1),u=d.replace(/\/$/,"").split("/").pop()||"library",m=`libraries/${u}/`,w=a.config?.label||u;if(a.loadDocs)try{await a.loadDocs(ar(a.store,a.baseURI))}catch(W){console.warn("[install] playlist force-load failed",W?.message||W)}let x=[],k=[],L=[];for(let W of po(a.store,a.baseURI)){if(!W.startsWith(d)){console.warn("[install] SKIP playlist outside library",W);continue}let ee=W.slice(d.length);try{let C=await fetch(W),G=Ka(await C.text(),u,ee);x.push({relPath:m+ee,body:G,contentType:"text/turtle",skipIfExists:!0}),k.push(`<./${ee}>`),L.push(W)}catch(C){console.warn("[install] gather playlist FAILED",W,C?.message||C)}}let A=[];for(let W of Ja(a.store,L)){if(!W.startsWith(d)){console.warn("[install] SKIP release outside library",W);continue}let ee=W.slice(d.length);try{let C=await fetch(W),G=Ka(await C.text(),u,ee);x.push({relPath:m+ee,body:G,contentType:"text/turtle",skipIfExists:!0}),A.push(`<./${ee}>`)}catch(C){console.warn("[install] gather release FAILED",W,C?.message||C)}}let T=A.map(W=>W.replace(/>$/,"#it>")),I=`@prefix dct: <http://purl.org/dc/terms/>.
@prefix dcat: <http://www.w3.org/ns/dcat#>.
<#it>
    a dcat:Catalog ;
    dct:title ${JSON.stringify(w+" \u2014 releases")}${T.length?` ;
    dcat:dataset ${T.join(`,
                 `)}`:""} .
`,U=`@prefix dct: <http://purl.org/dc/terms/>.
@prefix dcat: <http://www.w3.org/ns/dcat#>.
<#it>
    a dcat:Catalog ;
    dct:title ${JSON.stringify(w+" \u2014 playlists")}${k.length?` ;
    dcat:dataset ${k.join(`,
                 `)}`:""} .
`,B=[{relPath:m+"releases.ttl",body:I,contentType:"text/turtle"},{relPath:m+"playlists.ttl",body:U,contentType:"text/turtle"}];for(let W of["index.ttl","agents.ttl","genres.ttl"]){let ee=await fetch(d+W);if(!ee.ok)throw new Error(`couldn't read ${W} (${ee.status})`);let C=Ka(await ee.text(),u,W);B.push({relPath:m+W,body:C,contentType:"text/turtle"})}return{files:[...B,...x],podLibPrefix:m,title:w}}function Ns(){let a=[...document.querySelectorAll("ia-player[src]")].map(o=>{try{return new URL(o.getAttribute("src"),location.href).href}catch{return null}}).filter(o=>o&&yt(o));if(!a.length){let o=e.find(d=>!d.solid&&yt(d.url));o&&a.push(new URL(o.url,location.href).href)}return[...new Set(a)]}async function Qr(){if(Ze(!1),!Ie||!Ie.isLoggedIn){tc(),pr(),E(f,"Choose your Solid provider to sign in \u2014 the install resumes automatically once you\u2019re signed in."),hi()||E(f,'Open the gear menu and click "Log in" to sign in, then choose Install on my Pod again.');return}let a=Ie.webId,o=Ie.fetchFor(a),d=Ns();if(!d.length){E(f,"No local library available to install.");return}let u=[];try{u=await Ji(o,a)}catch{}u.length||(u=[new URL("/",a).href]);let m=u.map((C,G)=>`  ${G+1}. ${C}`).join(`
`),w=prompt(`Install Open Media Player \u2014 choose where it goes.

Enter a number, or type a full container URL:

`+m,"1");if(w==null||!w.trim())return;let x,k=parseInt(w,10);if(Number.isInteger(k)&&u[k-1]?x=u[k-1]:/^https?:\/\/.+/.test(w.trim())&&(x=w.trim()),!x){E(f,"Install cancelled \u2014 no valid location chosen.");return}let L=x.endsWith("/")?x:x+"/",A=prompt("Confirm or edit the install location:",new URL("open_media_player/",L).href);if(!A||!A.trim())return;let T=A.trim();T.endsWith("/")||(T+="/");let I=[];try{I=await Xr()}catch(C){E(f,`Couldn't read the app files to install: ${C.message}`);return}let U=[];for(let C of d){let G=t.find(be=>be.baseURI===C&&be.store);if(!G)try{G=await gt({id:C,url:C,enabled:!0})}catch{G=null}if(!G||!G.store){console.warn("[install] skipping unreadable library",C);continue}try{let be=await Us(G);I.push(...be.files),U.push({podLibPrefix:be.podLibPrefix,title:be.title})}catch(be){E(f,`Couldn't prepare ${C} to install: ${be.message}`);return}}if(!U.length){E(f,"No readable libraries to install.");return}console.info(`[install] writing ${I.length} files (${U.length} libraries) to ${T}`),E(f,`Installing ${I.length} files to ${T}\u2026`);let B=await ir(o,T,I,(C,G,be)=>{(C===G||C%10===0)&&E(f,`Installing ${C}/${G}: ${be}`)}),W=!1;try{let C=(await io(o,a)).typeIndex;if(C||(C=await ro(o,a)),C){for(let G of U){let be=T+G.podLibPrefix+"index.ttl";await Va(o,C,{id:"omp-pod-"+G.podLibPrefix.replace(/[^a-z0-9]+/gi,"-").replace(/-+$/,""),url:be,label:`${G.title} (my pod)`}),Mo(a,be)}W=!0}}catch(C){console.warn("type-index record skipped:",C?.message||C)}let ee=W?" Registered in your type index.":" (type index not updated).";E(f,B.ok?`Installed ${U.length} ${U.length===1?"library":"libraries"} \u2014 open ${T}index.html (${B.put} written${B.skipped?`, ${B.skipped} kept`:""}).${ee}`:`Installed ${B.put} files with ${B.failed.length} problem(s): ${B.failed.slice(0,3).join("; ")}${ee}`)}Ve?.addEventListener("click",Qr),Wt?.addEventListener("click",os);async function Zr(){if(Ze(!1),!Ie||!Ie.isLoggedIn){ic(),pr(),E(f,"Choose your Solid provider to sign in \u2014 the app update resumes automatically once you\u2019re signed in."),hi()||E(f,'Open the gear menu and click "Log in" to sign in, then choose Update app on Pod again.');return}let a=Ie.webId,o=Ie.fetchFor(a),d="",u=Ql();if(u){let C=u.indexOf("libraries/");C>0&&(d=u.slice(0,C))}let m=[];try{m=await Ji(o,a)}catch{}m.length||(m=[new URL("/",a).href]);let w=m.map((C,G)=>`  ${G+1}. ${C}`).join(`
`),x=prompt(`Update app on Pod \u2014 choose where the app lives.

Enter a number, or type a full container URL:

`+w,"1");if(x==null||!x.trim())return;let k,L=parseInt(x,10);if(Number.isInteger(L)&&m[L-1]?k=m[L-1]:/^https?:\/\/.+/.test(x.trim())&&(k=x.trim()),!k){E(f,"Update cancelled \u2014 no valid location chosen.");return}let A=k.endsWith("/")?k:k+"/",T=(()=>{let C=location.href.split("#")[0].split("?")[0];return C.endsWith("/")?C:C.slice(0,C.lastIndexOf("/")+1)})(),I=(()=>{try{if(new URL(T).origin===new URL(A).origin&&!/^https?:\/\/(localhost|127\.0\.0\.1)/.test(T))return T}catch{}if(d)try{if(new URL(d).origin===new URL(A).origin)return d}catch{}return new URL("open_media_player/",A).href})(),U=prompt("Confirm the existing install location to overwrite:",I);if(!U||!U.trim())return;let B=U.trim();B.endsWith("/")||(B+="/");let W;try{W=await Xr()}catch(C){E(f,`Couldn't read the app files: ${C.message}`);return}E(f,`Updating app (${W.length} files) at ${B}\u2026`);let ee=await ir(o,B,W,(C,G,be)=>E(f,`Updating ${C}/${G}: ${be}`));E(f,ee.ok?`App updated \u2014 hard-reload ${B}index.html (${ee.put} files written).`:`App update: ${ee.put} written, ${ee.failed.length} problem(s): ${ee.failed.slice(0,3).join("; ")}`)}va?.addEventListener("click",Zr),qe?.addEventListener("click",()=>{Ze(!1),vn({filter:Ft,onSave:a=>{Ft=a===null?{...$a}:a,Qo(Ft),_t.clear(),Nt.clear(),Re(),E(f,"Filter updated.")}})}),rt?.addEventListener("click",a=>{if(a.stopPropagation(),!j.length){E(f,"Nothing to randomize \u2014 the tracklist is empty.");return}let o=j;for(let d=o.length-1;d>0;d--){let u=Math.floor(Math.random()*(d+1));[o[d],o[u]]=[o[u],o[d]]}sa?.clear?.(),fe(),E(f,`Randomized ${o.length} track${o.length===1?"":"s"}.`),Ee()}),ga?.addEventListener("click",a=>{if(a.stopPropagation(),R!=="library"){E(f,"Clear tracklist only applies to the Library view. Use the playlist menu to delete a playlist.");return}h.pause(),h.removeAttribute("src"),h.load(),ne=[],j=[],J=null,ve.setSelection([],{notify:!1}),Vr?.clearSelection?.(),He=At(),fe(),za($,""),E(f,"Library queue cleared."),Ee()}),Ce?.addEventListener("click",async()=>{if(Ze(!1),!j.length){E(f,"Nothing to save \u2014 pick some albums first.");return}let a=Fe();if(!a){E(f,"Enable a library to save playlists.");return}let o=`Playlist ${Ne.length+1}`,d=prompt("Save current tracks as a playlist named:",o);if(!d||!d.trim())return;let u=d.trim();E(f,`Saving playlist "${u}"\u2026`);try{let w=(await nr(a.store,a.baseURI,u)).id;Ne.push({id:w,label:u,_lib:a.config.id}),Pe.add(w);let x=j.map(L=>({label:[L.artist,L.album,L.name].filter(Boolean).join(" \u2014 ")||L.name,url:L.url,source:L.albumUrl})),k=await Xa(a.store,a.baseURI,w,x,{inlineTracks:!ot()});j.forEach((L,A)=>{ie.push({node:k.nodes?.[A],label:x[A].label,topic:w,url:L.url,source:L.albumUrl,_lib:a.config.id})}),E(f,`Saved playlist "${u}" (${j.length} track${j.length===1?"":"s"}). Click it in Sources to view.`),Me()}catch(m){console.error("Save playlist failed:",m),E(f,`Could not save playlist: ${m.message}`)}}),Ei("ordered"),Gr("off"),vr(),Oe(),we(),ve.setMessage(ci().chooseArtist),fe(),La(),Jo();function Fs(){for(let a of pt()){if(!a.loadDocs)continue;let o=ar(a.store,a.baseURI);o.length&&a.loadDocs(o).then(d=>{if(d&&(et(a),Me(),we(),Qt&&Pe.has(Qt)&&R==="library")){let u=Qt;Qt=null,lt.setSelection([u],{notify:!1}),ht(u)}}).catch(d=>console.warn("background playlist load failed:",d))}}return(window.requestIdleCallback||(a=>setTimeout(a,300)))(()=>Fs()),i.appAction=a=>{let o={help:".gear-help-link",about:".gear-help",loginHelp:".gear-login-help",filters:".gear-filters",viewDeleted:".gear-view-deleted",installPod:".gear-install-pod",updateApp:".gear-update-app",importMusic:".gear-import-music"}[a];o&&b.querySelector(o)?.click()},i.appState=()=>({guest:!ot(),real:Sa(),webId:Sa()&&Yt()?.webId||"",mediaType:r()}),i.getMediaElement=()=>h,i.nowPlayingText=()=>J?[J.artist,J.album,J.name].filter(Boolean).join(" \u2014 "):"",b}var ei="ia-player:libraries";function Io(){return"lib-"+(crypto.randomUUID?.()??Date.now().toString(36)+Math.random().toString(36).slice(2,6))}function Po(e){return String(e).toLowerCase().replace(/\s+/g,"_").replace(/[^a-z0-9_]/g,"").replace(/_+/g,"_").replace(/^_|_$/g,"")||"library"}function Vl(e){if(typeof e!="string")return e;let t=e.replace("/ia-music-library/","/plugins/ia-player/libraries/internet_archive_music/");return(t==="./ia-music.ttl"||t.endsWith("/ia-music.ttl"))&&(t=t.replace(/(^|\/)ia-music\.ttl$/,(i,r)=>`${r}plugins/ia-player/libraries/internet_archive_music/index.ttl`)),t.includes("/plugins/ia-player/libraries/")||(t=t.replace(/(^|\/)libraries\/(internet_archive_music|internet_archive_movies)\//,(i,r,n)=>`${r}plugins/ia-player/libraries/${n}/`)),t}function yt(e){try{return new URL(e,location.href).origin===location.origin}catch{return!1}}function Yl(e){try{let t=localStorage.getItem(ei);if(t){let i=JSON.parse(t),r=Array.isArray(i)?i.filter(n=>n&&!n.solid):[];if(r.length){let n=!1;for(let l of r){let s=Vl(l.url);s!==l.url&&(l.url=s,n=!0),l.id==="default"&&l.label==="Internet Archive"&&(l.label="Internet Archive Music",n=!0),l.enabled=yt(l.url)}return n&&gr(r),r}}}catch(t){console.warn("Could not read library configs from localStorage:",t)}return[{id:"default",label:"Internet Archive Music",url:e,enabled:!0}]}async function Jl(e){if(Kl)return[];let t=String(e||"").match(/^(.*\/libraries\/)/)?.[1];if(!t)return[];let i;try{let l=await fetch(new URL("imported.ttl",new URL(t,location.href)).href,{headers:{accept:"text/turtle"}});if(!l.ok)return[];i=await l.text()}catch{return[]}let r=[],n=new Set;for(let l of i.matchAll(/<([^>]*index\.ttl[^>]*)>/g)){let s;try{s=new URL(l[1],new URL(t,location.href)).href.split("#")[0]}catch{continue}let c=s.match(/\/libraries\/([^/]+)\//)?.[1];if(!c||n.has(s)||c==="internet_archive_music"||c==="internet_archive_movies")continue;n.add(s);let p=c.replace(/_/g," ").replace(/\b\w/g,v=>v.toUpperCase());r.push({id:"imported-"+c,label:p,url:s,enabled:!1})}return r}function gr(e){try{localStorage.setItem(ei,JSON.stringify((e||[]).filter(t=>t&&!t.solid)))}catch(t){console.warn("Could not write library configs to localStorage:",t)}}var fr="omp:lib-enabled";function Xl(e,t){if(e)try{let i=JSON.parse(localStorage.getItem(fr)||"{}");i[e]=!!t,localStorage.setItem(fr,JSON.stringify(i))}catch(i){console.warn("rememberLibEnabled failed:",i)}}function No(e,t){try{let i=JSON.parse(localStorage.getItem(fr)||"{}");return e in i?!!i[e]:t}catch{return t}}var Do="omp:pod-library",Fo="omp:pod-library:last";function Mo(e,t){try{let i=JSON.parse(localStorage.getItem(Do)||"{}");i[e]=t,localStorage.setItem(Do,JSON.stringify(i))}catch(i){console.warn("podLibRemember failed:",i)}try{localStorage.setItem(Fo,t)}catch{}}function Ql(){try{return localStorage.getItem(Fo)||null}catch{return null}}var ti="omp:auth-inflight",Zl=12e4;function pr(){try{localStorage.setItem(ti,JSON.stringify({search:location.search,hash:location.hash,t:Date.now()}))}catch{}}function ec(){try{let e=JSON.parse(localStorage.getItem(ti)||"null");return e?Date.now()-(e.t||0)>Zl?(localStorage.removeItem(ti),null):e:null}catch{return null}}function Ro(){try{localStorage.removeItem(ti)}catch{}}var mr="omp:install-pending";function tc(){try{localStorage.setItem(mr,"1")}catch{}}function ac(){try{let e=localStorage.getItem(mr);return e&&localStorage.removeItem(mr),!!e}catch{return!1}}var hr="omp:updateapp-pending";function ic(){try{localStorage.setItem(hr,"1")}catch{}}function rc(){try{let e=localStorage.getItem(hr);return e&&localStorage.removeItem(hr),!!e}catch{return!1}}async function gt(e){try{let t=!!e.solid||yt(e.url),{store:i,baseURI:r,loadDocs:n}=await ao(e.url,{shared:t,lazyReleases:!0,lazyPlaylists:!0}),l=lo(i,r),{genres:s,bookmarks:c}=Zi(i,r,l),p=er(i,r);return{config:e,store:i,baseURI:r,loadDocs:n,mediaType:l,genres:s,bookmarks:c,playlists:p,error:null}}catch(t){return console.error("Failed to load library",e.url,t),{config:e,store:null,baseURI:null,loadDocs:null,mediaType:"audio",genres:[],bookmarks:[],playlists:[],error:t.message}}}var Uo=!1;async function ba(e,t){try{console.info("[omp] BUILD","omp 0.3.4 2026-07-15T19:25:28.846Z")}catch{}if(_n(e),t.length>1){let i=t.map(r=>No(r.url,r.enabled));i.filter(Boolean).length===1&&t.forEach((r,n)=>{r.enabled=i[n]})}try{let i=l=>({config:l,store:null,baseURI:null,genres:[],bookmarks:[],playlists:[],error:null,unloaded:!0}),r=await Promise.all(t.map(l=>l.enabled?gt(l):Promise.resolve(i(l)))),n=Wl({libraryConfigs:t,libs:r,host:e});En(e,n)}catch(i){console.error("Initialization error:",i),An(e,i.message)}}var br=class extends HTMLElement{static get observedAttributes(){return["src","source"]}connectedCallback(){this._mounted||(this._mounted=!0,!this.hasAttribute("defer")&&this.ensureLoaded())}ensureLoaded(){this._loaded||(this._loaded=!0,this._loadFromConfig())}attributeChangedCallback(t,i,r){!this._mounted||t!=="src"&&t!=="source"||i===r||localStorage.getItem(ei)||this._loadFromConfig()}_loadFromConfig(){let t=this.getAttribute("src")||this.getAttribute("source"),i=this.getAttribute("storage-ns");if(i&&t){let n=[{id:i,label:i,url:t,enabled:!0}];Jl(t).then(l=>ba(this,l.length?n.concat(l):n)).catch(()=>ba(this,n));return}if(!t&&!localStorage.getItem(ei)){Ln(this,n=>{let l=[{id:"default",label:"Internet Archive Music",url:n,enabled:!0}];gr(l),ba(this,l)});return}let r=Yl(t||"./dk-pod/dk/plugins/ia-player/libraries/internet_archive_music/index.ttl");ba(this,r)}reload(t){ba(this,t)}};customElements.get("ia-player")||customElements.define("ia-player",br);qn();
