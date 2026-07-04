var Vi=`/* =====================================================================
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
`;var Yi=`This Player provides access to thousands of free recordings
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
`;var Ji=`<!-- ia-player shell \u2014 the full player layout (toolbar, sources column,
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
    <p class="ia-film-intro-hint">Click to play. Move the mouse to the lower right of the film to enlarge to full screen.</p>
  </div>
</div>
`;var Xi=`<!-- About / content modal scaffold. ia-ui.js showAboutModal() sets the
     title text and fills .about-modal-body with the page content. -->
<div class="about-modal-content" role="dialog" aria-modal="true" aria-labelledby="about-modal-title">
  <button type="button" class="about-modal-close" aria-label="Close">\xD7</button>
  <h2 id="about-modal-title" class="about-modal-title"></h2>
  <div class="about-modal-body"></div>
</div>
`;var Qi=`<!-- Quality-filters modal. ia-ui.js showFiltersModal() seeds the field
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
`;var Zi=`<!-- Playlist create/edit modal. ia-ui.js showPlaylistEditModal() sets the
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
`;var en=`<!-- Library editor modal (label + URL, optional delete). ia-ui.js
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
`;var tn=`<!-- Track card. For playlist rows this is the ONE card holding every track
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
`;var an=`<!-- Standalone library-loader form (ia-ui.js showRDFInput) \u2014 shown when the
     player starts with no library source. -->
<h1>Open Media Player</h1>
<div class="rdf-input">
  <input type="text" class="rdf-uri" placeholder="Enter RDF file URI" value="./plugins/ia-player/libraries/internet_archive_music/index.ttl" aria-label="RDF file URI">
  <br>
  <button class="load-btn">Load Music Library</button>
</div>
`;function on({mediaType:e="audio",panel:a=!1}={}){let r=e==="video",i=r?{genre:"Film Types",artist:"Collections",album:"Movies",find:"Find a film\u2026",addGenre:"+ Add film type",addArtist:"+ Add collection"}:{genre:"Genres",artist:"Artists",album:"Albums",find:"Search the Internet Archive\u2026",addGenre:"+ Add genre",addArtist:"+ Add artist"},o=document.createElement("div");o.className="ia-player-app"+(r?" media-video":" media-audio"),o.setAttribute("role","region"),o.setAttribute("aria-label",r?"Open Media Player (movies)":"Open Media Player"),o.innerHTML=Ji.replace(/\{\{(\w+)\}\}/g,(h,y)=>i[y]??""),a&&o.querySelector(".menu-item-sollogin")?.remove();let l=o.querySelector(".manage-btn"),s=o.querySelector(".gear-menu"),c=()=>Array.from(s.querySelectorAll(".menu-item"));function f(h,y={}){if(s.hidden=!h,l.setAttribute("aria-expanded",h?"true":"false"),h){let g=c();(y.focusLast?g[g.length-1]:g[0])?.focus()}else y.returnFocus!==!1&&l.focus()}l.addEventListener("click",h=>{h.stopPropagation(),f(s.hidden,{returnFocus:!1})}),l.addEventListener("keydown",h=>{h.key==="ArrowDown"||h.key==="Enter"||h.key===" "?(h.preventDefault(),f(!0)):h.key==="ArrowUp"&&(h.preventDefault(),f(!0,{focusLast:!0}))}),s.addEventListener("keydown",h=>{let y=c(),g=y.indexOf(document.activeElement);h.key==="ArrowDown"?(h.preventDefault(),y[(g+1)%y.length]?.focus()):h.key==="ArrowUp"?(h.preventDefault(),y[(g-1+y.length)%y.length]?.focus()):h.key==="Home"?(h.preventDefault(),y[0]?.focus()):h.key==="End"?(h.preventDefault(),y[y.length-1]?.focus()):h.key==="Tab"&&f(!1,{returnFocus:!1})}),document.addEventListener("click",h=>{!s.contains(h.target)&&h.target!==l&&(s.hidden||f(!1,{returnFocus:!1}))}),document.addEventListener("keydown",h=>{h.key==="Escape"&&!s.hidden&&f(!1)});function v(h){let y=o.querySelector(".ia-play .ia-blabel");y&&(y.textContent=h==="playing"?"Pause":"Play")}return{container:o,audio:o.querySelector(".ia-audio"),status:o.querySelector(".ia-status-msg"),trackCount:o.querySelector(".ia-status-count"),nowPlaying:o.querySelector(".ia-nowplaying-text"),filmIntro:o.querySelector(".ia-film-intro"),filmIntroTitle:o.querySelector(".ia-film-intro-title"),filmIntroLength:o.querySelector(".ia-film-intro-length"),filmIntroAbout:o.querySelector(".ia-film-intro-about"),filmIntroRights:o.querySelector(".ia-film-intro-rights"),prevBtn:o.querySelector(".ia-prev"),playBtn:o.querySelector(".ia-play"),nextBtn:o.querySelector(".ia-next"),seekSlider:o.querySelector(".ia-seek"),timeCur:o.querySelector(".ia-time-cur"),timeDur:o.querySelector(".ia-time-dur"),volumeSlider:o.querySelector(".ia-volume"),sourcesList:o.querySelector(".ia-sources-list"),favouritesList:o.querySelector(".ia-favourites-list"),librariesList:o.querySelector(".ia-libraries-list"),addSourceBtn:o.querySelector(".ia-add-source-btn"),addPlaylistBtn:o.querySelector(".ia-add-playlist-btn"),genreList:o.querySelector('[data-column="genre"] .ia-listbox'),artistList:o.querySelector('[data-column="artist"] .ia-listbox'),albumList:o.querySelector('[data-column="album"] .ia-listbox'),addGenreBtn:o.querySelector(".ia-add-genre-btn"),addArtistBtn:o.querySelector(".ia-add-artist-btn"),genreColumnFooter:o.querySelector('[data-column="genre"] .ia-column-footer'),artistColumnFooter:o.querySelector('[data-column="artist"] .ia-column-footer'),trackTable:o.querySelector(".ia-tracklist"),trackHead:o.querySelector(".ia-tracklist thead"),trackBody:o.querySelector(".ia-tracklist tbody"),trackEmpty:o.querySelector(".ia-tracklist-empty"),randomizeBtn:o.querySelector(".ia-randomize-btn"),clearTracksBtn:o.querySelector(".ia-clear-tracks-btn"),manageButton:l,gearMenu:s,helpMenuItem:o.querySelector(".gear-help"),helpLinkMenuItem:o.querySelector(".gear-help-link"),loginHelpMenuItem:o.querySelector(".gear-login-help"),installPodMenuItem:o.querySelector(".gear-install-pod"),updateAppMenuItem:o.querySelector(".gear-update-app"),themeToggle:o.querySelector(".gear-theme"),fontSizeBtn:o.querySelector(".gear-fontsize"),filtersMenuItem:o.querySelector(".gear-filters"),viewDeletedMenuItem:o.querySelector(".gear-view-deleted"),importMusicMenuItem:o.querySelector(".gear-import-music"),savePlaylistMenuItem:o.querySelector(".gear-save-playlist"),setMenuOpen:f,setPlayLabel:v}}function Tt(e,{onChange:a,allLabel:r="(All)",showAll:i=!0,multiSelect:o=!0,mode:l="select",allowDeselect:s=!1,renderItemActions:c=null,onItemAction:f=null,onItemDrop:v=null}={}){let h=[],y=new Set,g=null,b=null;function p(){return new Set(y)}function L(){return h.slice()}function E(P){h=P.slice(),b=null;for(let K of[...y])h.some(ae=>ae.id===K)||y.delete(K);g&&!h.some(K=>K.id===g)&&(g=null),ue()}function D(P){b=P||null,ue()}function z(P,K={}){y=new Set(P||[]);for(let ae of[...y])h.some(S=>S.id===ae)||y.delete(ae);ue(),K.notify!==!1&&a?.(p())}function q(P){return P?"\u2611":"\u2610"}function ue(){if(b!==null){e.innerHTML=`<li class="ia-listbox-message" aria-disabled="true">${se(b)}</li>`;return}let P=y.size===0,K="";i&&(K+=`<li role="option" class="ia-listbox-item ia-listbox-all${P?" selected":""}" data-id="" tabindex="-1" aria-selected="${P}">${se(r)}</li>`);for(let ae of h){ae.section&&(K+=`<li class="ia-listbox-divider" role="presentation">${se(ae.section)}</li>`);let S=y.has(ae.id),N=l==="checkbox"?`<span class="ia-listbox-checkbox" aria-hidden="true">${q(S)}</span>`:"",V=c?.(ae)??"",Z=ae.title?` title="${se(ae.title)}"`:"",de=`ia-listbox-item${S?" selected":""}${ae.className?" "+ae.className:""}`,me=ae.ariaLabel?` aria-label="${se(ae.ariaLabel)}"`:"";K+=`<li role="option" class="${de}" data-id="${se(ae.id)}" tabindex="-1" aria-selected="${S}"${Z}${me}>${N}<span class="ia-listbox-label">${se(ae.label)}</span>${V}</li>`}e.innerHTML=K}function oe(P){y.clear(),P&&y.add(P),g=P||null,ue(),a?.(p())}function Se(P){P?y.has(P)?y.delete(P):y.add(P):y.clear(),g=P||null,ue(),a?.(p())}function Oe(P){if(!g||!P)return oe(P);let K=h.map(Z=>Z.id),ae=K.indexOf(g),S=K.indexOf(P);if(ae<0||S<0)return oe(P);let N=Math.min(ae,S),V=Math.max(ae,S);y=new Set(K.slice(N,V+1)),ue(),a?.(p())}e.addEventListener("click",P=>{let K=P.target.closest("[data-action]");if(K){P.stopPropagation();let N=K.closest(".ia-listbox-item");f?.(K.dataset.action,N?.dataset.id??null,K);return}let ae=P.target.closest(".ia-listbox-item");if(!ae)return;let S=ae.dataset.id;l==="checkbox"&&S?Se(S):o&&P.shiftKey&&S?Oe(S):o&&(P.ctrlKey||P.metaKey)?Se(S):!o&&s&&S&&y.has(S)?(y.clear(),g=null,ue(),a?.(p())):oe(S),ae.focus()}),v&&(e.addEventListener("dragover",P=>{let K=P.target.closest(".ia-listbox-item");!K||!K.dataset.id||(P.preventDefault(),P.dataTransfer.dropEffect="copy",K.classList.add("drop-target"))}),e.addEventListener("dragleave",P=>{P.target.closest(".ia-listbox-item")?.classList.remove("drop-target")}),e.addEventListener("drop",P=>{let K=P.target.closest(".ia-listbox-item");!K||!K.dataset.id||(P.preventDefault(),K.classList.remove("drop-target"),v(K.dataset.id,P.dataTransfer))})),e.addEventListener("keydown",P=>{let K=Array.from(e.querySelectorAll(".ia-listbox-item"));if(!K.length)return;let ae=e.querySelector(".ia-listbox-item:focus")||K[0],S=K.indexOf(ae),N=S;if(P.key==="ArrowDown")N=Math.min(S+1,K.length-1),P.preventDefault();else if(P.key==="ArrowUp")N=Math.max(S-1,0),P.preventDefault();else if(P.key==="Home")N=0,P.preventDefault();else if(P.key==="End")N=K.length-1,P.preventDefault();else if(P.key===" "||P.key==="Enter"){P.preventDefault();let Z=ae.dataset.id;o&&(P.ctrlKey||P.metaKey)?Se(Z):o&&P.shiftKey&&Z?Oe(Z):oe(Z);return}else return;let V=K[N];if(V){V.focus();let Z=V.dataset.id;o&&P.shiftKey&&Z&&g?Oe(Z):(!o||!P.ctrlKey&&!P.metaKey)&&oe(Z)}}),ue();function We(P){P&&P!==r&&(r=P,ue())}return{setItems:E,setSelection:z,getSelection:p,getItems:L,setMessage:D,setAllLabel:We}}function sn(e,a){let r=new Set,i=null;function o(){return Array.from(e.querySelectorAll(".ia-track-row"))}function l(){return new Set(r)}function s(){let b=o(),p=new Set(b.map(L=>L.dataset.trackId));for(let L of[...r])p.has(L)||r.delete(L);i&&!p.has(i)&&(i=null),b.forEach(L=>{let E=r.has(L.dataset.trackId);L.classList.toggle("selected",E),L.setAttribute("aria-selected",E?"true":"false")})}function c(){r.clear(),i=null,s()}function f(b){r.clear(),b?(r.add(b),i=b):i=null,s()}function v(b){b&&(r.has(b)?r.delete(b):(r.add(b),i=b),s())}function h(b){if(!i||!b)return f(b);let p=o().map(q=>q.dataset.trackId),L=p.indexOf(i),E=p.indexOf(b);if(L<0||E<0)return f(b);let D=Math.min(L,E),z=Math.max(L,E);r=new Set(p.slice(D,z+1)),s()}function y(){r=new Set(o().map(b=>b.dataset.trackId)),r.size&&(i=[...r][0]),s()}function g(b){b.length&&(r.clear(),i=null,a.onRemove?.(b))}return e.addEventListener("click",b=>{let p=b.target.closest(".ia-track-fav-btn");if(p){b.stopPropagation(),a.onFavourite?.({url:p.dataset.url,name:p.dataset.name,artist:p.dataset.artist,album:p.dataset.album});return}let L=b.target.closest(".ia-track-remove-btn"),E=b.target.closest(".ia-track-kebab"),D=b.target.closest(".ia-track-row");if(!D)return;let z=D.dataset.trackId;if(E){a.onEdit?.(z,E);return}if(L){r.delete(z),i===z&&(i=null),a.onRemove?.([z],{fromButton:!0});return}b.shiftKey?h(z):b.ctrlKey||b.metaKey?v(z):f(z),D.focus()}),e.addEventListener("dragstart",b=>{let p=b.target.closest(".ia-track-row");if(!p)return;let L=p.dataset.trackId,E=r.has(L)?[...r]:[L];r.has(L)||f(L),b.dataTransfer.setData("application/x-ia-tracks",JSON.stringify(E)),b.dataTransfer.setData("text/plain",`${E.length} track${E.length===1?"":"s"}`),b.dataTransfer.effectAllowed="copy",p.classList.add("dragging")}),e.addEventListener("dragend",b=>{b.target.closest(".ia-track-row")?.classList.remove("dragging")}),e.addEventListener("dblclick",b=>{let p=b.target.closest(".ia-track-row");p&&(b.target.closest(".ia-track-remove-btn,.ia-track-kebab")||a.onPlay?.(p.dataset.trackId))}),e.addEventListener("keydown",b=>{let p=o();if(!p.length)return;let L=e.querySelector(".ia-track-row:focus")||p[0],E=p.indexOf(L),D=E;if(b.key==="ArrowDown")D=Math.min(E+1,p.length-1),b.preventDefault();else if(b.key==="ArrowUp")D=Math.max(E-1,0),b.preventDefault();else if(b.key==="Home")D=0,b.preventDefault();else if(b.key==="End")D=p.length-1,b.preventDefault();else if(b.key==="Enter"){b.preventDefault(),a.onPlay?.(L.dataset.trackId);return}else if(b.key===" "){b.preventDefault(),b.ctrlKey||b.metaKey?v(L.dataset.trackId):a.onPlay?.(L.dataset.trackId);return}else if(b.key==="Delete"){b.preventDefault();let q=r.size?[...r]:L?[L.dataset.trackId]:[];g(q);return}else if((b.ctrlKey||b.metaKey)&&(b.key==="a"||b.key==="A")){b.preventDefault(),y();return}else if(b.key==="Escape"){r.size&&(b.preventDefault(),c());return}else return;let z=p[D];if(z){z.focus();let q=z.dataset.trackId;b.shiftKey&&i?h(q):!b.ctrlKey&&!b.metaKey&&f(q)}}),{getSelection:l,clearSelection:c,applySelection:s}}function ln(e){e.addEventListener("mousedown",a=>{let r=a.target.closest(".resize-handle");if(!r)return;a.preventDefault(),a.stopPropagation();let i=r.closest("th");if(!i)return;let o=i.dataset.col,l=e.querySelector(`col[data-col="${o}"]`);if(!l)return;let s=a.clientX,c=i.offsetWidth,f=h=>{let y=Math.max(30,c+(h.clientX-s));l.style.width=y+"px"},v=()=>{document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",v),e.classList.remove("resizing")};document.addEventListener("mousemove",f),document.addEventListener("mouseup",v),e.classList.add("resizing")})}function cn(e,a){let r=null,i="asc";function o(){if(Array.from(e.querySelectorAll("th")).forEach(c=>{c.classList.remove("sorted"),c.removeAttribute("aria-sort");let f=c.querySelector(".sort-arrow");f&&(f.textContent="")}),!r)return;let l=e.querySelector(`th[data-sort="${r}"]`);if(!l)return;l.classList.add("sorted"),l.setAttribute("aria-sort",i==="asc"?"ascending":"descending");let s=l.querySelector(".sort-arrow");s&&(s.textContent=i==="asc"?"\u25B2":"\u25BC")}return e.addEventListener("click",l=>{if(l.target.closest(".resize-handle"))return;let s=l.target.closest("th[data-sort]");if(!s)return;let c=s.dataset.sort;r===c?i=i==="asc"?"desc":"asc":(r=c,i="asc"),o(),a.onSort?.(r,i)}),{applyIndicator:o,getSort:()=>({col:r,dir:i}),setSort:(l,s)=>{r=l||null,i=s==="desc"?"desc":"asc",o()},clear:()=>{r=null,i="asc",o()}}}function dn(e,a,r,{currentTrackId:i,isFav:o,emptyMessage:l,useKebab:s,favouritable:c,wallDelete:f}){if(!r.length){e.innerHTML="",l&&(a.textContent=l),a.hidden=!1;return}a.hidden=!0;let v=typeof s=="function"?E=>!!E.node&&s(E)!==!1:E=>!!E.node,h=typeof c=="function"?E=>!!c(E):()=>!!c,y=E=>`<button type="button" class="ia-track-fav-btn${o&&o(E)?" on":""}" data-url="${se(E.url||"")}" data-name="${se(E.name||"")}" data-artist="${se(E.artist||"")}" data-album="${se(E.album||"")}" title="Add to favourites" aria-label="Favourite" tabindex="-1">${o&&o(E)?"\u2605":"\u2606"}</button>`,g='<button type="button" class="ia-src-edit ia-row-kebab ia-track-kebab" aria-haspopup="menu" aria-label="Track actions" title="Track actions" tabindex="-1">\u22EF</button>',b='<button type="button" class="ia-track-remove-btn" aria-label="Remove from favourites" title="Remove from favourites">\u2715</button>',p=E=>{if(f)return b;let D=h(E)?y(E):"";return v(E)&&(D+=g),!h(E)&&!v(E)&&(D+=b),D},L=r.map((E,D)=>{let z=E.id===i;return`<tr class="ia-track-row${z?" playing":""}" draggable="true" data-track-id="${se(E.id)}" data-album-url="${se(E.albumUrl||"")}" tabindex="-1" aria-current="${z?"true":"false"}">
      <td class="col-num">${z?'<span aria-hidden="true">\u25B8</span>':D+1}</td>
      <td class="col-title">${se(E.name)}</td>
      <td class="col-artist">${se(E.artist||"")}</td>
      <td class="col-album">${se(E.album||"")}</td>
      <td class="col-time">${se(E.time||"")}</td>
      <td class="col-remove">${p(E)}</td>
    </tr>`});e.innerHTML=L.join("")}function Er(e){if(!isFinite(e)||e<0)return"0:00";let a=Math.floor(e/60),r=Math.floor(e%60);return`${a}:${r.toString().padStart(2,"0")}`}function un(e,a){let{audio:r,playBtn:i,prevBtn:o,nextBtn:l,seekSlider:s,timeCur:c,timeDur:f,volumeSlider:v}=e;i.addEventListener("click",()=>a.onPlayToggle?.()),o.addEventListener("click",()=>a.onPrev?.()),l.addEventListener("click",()=>a.onNext?.());let h=!1;s.addEventListener("input",()=>{h=!0}),s.addEventListener("change",()=>{h=!1,isFinite(r.duration)&&(r.currentTime=parseFloat(s.value)/1e3*r.duration)}),v.addEventListener("input",()=>{r.volume=parseFloat(v.value)}),r.addEventListener("timeupdate",()=>{h||!isFinite(r.duration)||r.duration===0||(s.value=String(r.currentTime/r.duration*1e3),c.textContent=Er(r.currentTime))}),r.addEventListener("loadedmetadata",()=>{s.disabled=!isFinite(r.duration),f.textContent=Er(r.duration||0),c.textContent=Er(r.currentTime||0)}),r.addEventListener("emptied",()=>{s.value="0",s.disabled=!0,c.textContent="0:00",f.textContent="0:00"});let y=i.querySelector(".ia-icon"),g=i.querySelector(".ia-blabel");r.addEventListener("play",()=>{y?y.textContent="\u23F8":i.textContent="\u23F8",g&&(g.textContent="Pause"),i.setAttribute("aria-label","Pause"),i.title="Pause"}),r.addEventListener("pause",()=>{y?y.textContent="\u25B6":i.textContent="\u25B6",g&&(g.textContent="Play"),i.setAttribute("aria-label","Play"),i.title="Play"})}function ua(e,a,r){document.querySelectorAll(".ia-floating-menu").forEach(p=>p.remove());let i=document.createElement("div");i.className="ia-floating-menu",i.setAttribute("role","menu"),i.innerHTML=a.map(p=>`<button type="button" class="ia-floating-menu-item" role="menuitem" data-id="${se(p.id)}">${se(p.label)}</button>`).join(""),document.body.appendChild(i);let o=e.getBoundingClientRect();i.style.position="fixed";let l=i.offsetWidth,s=i.offsetHeight,c=8,f=o.left;f+l+c>window.innerWidth&&(f=Math.max(c,o.right-l));let v=o.bottom+4;v+s+c>window.innerHeight&&(v=Math.max(c,o.top-s-4)),i.style.left=`${f}px`,i.style.top=`${v}px`;let h=()=>{i.remove(),document.removeEventListener("mousedown",y,!0),document.removeEventListener("keydown",g)},y=p=>{!i.contains(p.target)&&p.target!==e&&h()},g=p=>{if(p.key==="Escape"&&(p.preventDefault(),h(),e.focus?.()),p.key==="ArrowDown"||p.key==="ArrowUp"){p.preventDefault();let L=Array.from(i.querySelectorAll(".ia-floating-menu-item")),E=L.indexOf(document.activeElement);(p.key==="ArrowDown"?L[(E+1)%L.length]:L[(E-1+L.length)%L.length])?.focus()}};i.addEventListener("click",p=>{let L=p.target.closest(".ia-floating-menu-item");L&&(h(),r?.(L.dataset.id))}),setTimeout(()=>{document.addEventListener("mousedown",y,!0),document.addEventListener("keydown",g)},0);let b=i.querySelector(".ia-floating-menu-item");return b&&b.focus(),h}var Ir=null;function fn({css:e,aboutHtml:a}={}){if(e&&!document.getElementById("ia-player-styles")){let r=document.createElement("style");r.id="ia-player-styles",r.textContent=e,document.head.appendChild(r)}a&&(Ir=a)}var js='a[href], button:not([disabled]), input:not([disabled]):not([type=hidden]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';function fa(e){let a=document.activeElement,r=()=>Array.from(e.querySelectorAll(js)).filter(o=>!o.closest("[hidden]")),i=r()[0];return i&&i.focus(),e.addEventListener("keydown",o=>{if(o.key!=="Tab")return;let l=r();if(!l.length)return;let s=l[0],c=l[l.length-1];o.shiftKey&&document.activeElement===s?(o.preventDefault(),c.focus()):!o.shiftKey&&document.activeElement===c&&(o.preventDefault(),s.focus())}),()=>{a?.focus?.()}}function Fa(e,a){e.innerHTML=a}function se(e){return String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a])}async function za(e={}){typeof e=="string"&&(e={url:e});let{url:a="./assets/ia-about.html",title:r="About",useBundle:i=!0,size:o="normal"}=e,l=document.querySelector(".about-modal");l&&l.remove();let s;if(i&&Ir)s=Ir;else try{s=await(await fetch(a)).text()}catch(h){s=`Could not load content: ${h.message}`}let c=document.createElement("div");c.className="about-modal",c.innerHTML=Xi,o==="large"&&c.querySelector(".about-modal-content").classList.add("about-modal-large"),c.querySelector(".about-modal-title").textContent=r,c.querySelector(".about-modal-body").innerHTML=s,document.body.appendChild(c);let f=fa(c),v=()=>{c.remove(),f()};c.querySelector(".about-modal-close").addEventListener("click",v),c.addEventListener("click",h=>{h.target===c&&v()}),document.addEventListener("keydown",function h(y){y.key==="Escape"&&(v(),document.removeEventListener("keydown",h))})}function pn({filter:e,onSave:a}){let r=document.querySelector(".about-modal");r&&r.remove();let i=e||{},o=(i.blockedCollections||[]).join(", "),l=rn(i.minTrackDurationSec||0),s=rn(i.minItemRuntimeSec||0),c=document.createElement("div");c.className="about-modal",c.innerHTML=Qi;let f=c.querySelector("form").elements;f.minTrack.value=l,f.minItem.value=s,f.minBitrate.value=i.minTrackBitrateKbps||0,f.minDownloads.value=i.minDownloads||0,f.blocked.value=o,f.applyCatalog.checked=!!i.applyToCatalogArtists,document.body.appendChild(c);let v=fa(c),h=c.querySelector("form"),y=()=>{c.remove(),v()};c.querySelector(".about-modal-close").addEventListener("click",y),c.querySelector(".filters-cancel").addEventListener("click",y),c.addEventListener("click",g=>{g.target===c&&y()}),document.addEventListener("keydown",function g(b){b.key==="Escape"&&(y(),document.removeEventListener("keydown",g))}),c.querySelector(".filters-reset").addEventListener("click",()=>{a?.(null),y()}),h.addEventListener("submit",g=>{g.preventDefault();let b={minTrackDurationSec:nn(h.elements.minTrack.value),minTrackBitrateKbps:Math.max(0,parseInt(h.elements.minBitrate.value,10)||0),minItemRuntimeSec:nn(h.elements.minItem.value),minDownloads:Math.max(0,parseInt(h.elements.minDownloads.value,10)||0),blockedCollections:h.elements.blocked.value.split(",").map(p=>p.trim()).filter(Boolean),applyToCatalogArtists:h.elements.applyCatalog.checked};a?.(b),y()})}function rn(e){let a=Math.max(0,Math.floor(e||0));if(!a)return"";let r=Math.floor(a/60),i=a%60;return`${r}:${String(i).padStart(2,"0")}`}function nn(e){let a=String(e||"").trim();if(!a)return 0;if(/^\d+$/.test(a))return Math.max(0,parseInt(a,10));let r=a.match(/^(\d+):(\d{1,2})$/);return r?parseInt(r[1],10)*60+parseInt(r[2],10):0}function mn(e){return!e||!e.length?"":e.map((a,r)=>`<button type="button" class="filters-extra${a.danger?" filters-danger":""}" data-action-idx="${r}">${se(a.label)}</button>`).join("")}function hn(e,a,r){a&&e.querySelectorAll(".filters-extra").forEach(i=>{i.addEventListener("click",async()=>{await a[Number(i.dataset.actionIdx)]?.onClick?.()!==!1&&r()})})}function Cr({title:e="Playlist",values:a={},actions:r,onSave:i}){let o=document.querySelector(".about-modal");o&&o.remove();let l=a||{},s=document.createElement("div");s.className="about-modal",s.innerHTML=Zi,s.querySelector(".about-modal-title").textContent=e;let c=s.querySelector("form").elements;c.name.value=l.name||"",c.maker.value=l.maker||"",c.description.value=l.description||"",s.querySelector(".filters-actions").insertAdjacentHTML("afterbegin",mn(r)),document.body.appendChild(s);let f=fa(s),v=s.querySelector("form"),h=()=>{s.remove(),f()};s.querySelector(".about-modal-close").addEventListener("click",h),s.querySelector(".filters-cancel").addEventListener("click",h),s.addEventListener("click",y=>{y.target===s&&h()}),document.addEventListener("keydown",function y(g){g.key==="Escape"&&(h(),document.removeEventListener("keydown",y))}),hn(s,r,h),v.addEventListener("submit",y=>{y.preventDefault();let g=v.elements.name.value.trim();if(!g){v.elements.name.focus();return}i?.({name:g,maker:v.elements.maker.value.trim(),description:v.elements.description.value.trim()}),h()}),v.elements.name.focus(),v.elements.name.select()}function bn({title:e="Edit library",values:a={},canDelete:r=!1,onSave:i,onDelete:o}){let l=document.querySelector(".about-modal");l&&l.remove();let s=a||{},c=document.createElement("div");c.className="about-modal",c.innerHTML=en,c.querySelector(".about-modal-title").textContent=e;let f=c.querySelector("form").elements;f.label.value=s.label||"",f.url.value=s.url||"",r||c.querySelector(".filters-danger").remove(),document.body.appendChild(c);let v=fa(c),h=c.querySelector("form"),y=()=>{c.remove(),v()};c.querySelector(".about-modal-close").addEventListener("click",y),c.querySelector(".filters-cancel").addEventListener("click",y),c.addEventListener("click",g=>{g.target===c&&y()}),document.addEventListener("keydown",function g(b){b.key==="Escape"&&(y(),document.removeEventListener("keydown",g))}),r&&c.querySelector(".filters-extra").addEventListener("click",async()=>{await o?.()!==!1&&y()}),h.addEventListener("submit",g=>{g.preventDefault();let b=h.elements.label.value.trim(),p=h.elements.url.value.trim();if(!b||!p){h.elements[b?"url":"label"].focus();return}i?.({label:b,url:p}),y()}),h.elements.label.focus(),h.elements.label.select()}function gn({values:e={},siblingCount:a=0,actions:r,onSave:i,title:o}){let l=document.querySelector(".about-modal");l&&l.remove();let s=e||{},c=document.createElement("div");c.className="about-modal",c.innerHTML=tn;let f=c.querySelector("form").elements;if(f.title.value=s.title||"",f.artist.value=s.artist||"",f.album.value=s.album||"",a>0){let b=c.querySelector(".track-album-note");b.textContent=`Also updates ${a} other track${a===1?"":"s"} from this source.`,b.hidden=!1}o&&(c.querySelector(".about-modal-title").textContent=o);let v=mn(r);if(v){let b=c.querySelector(".track-card-actions");b.innerHTML=v,b.hidden=!1}document.body.appendChild(c);let h=fa(c),y=c.querySelector("form"),g=()=>{c.remove(),h()};c.querySelector(".about-modal-close").addEventListener("click",g),c.querySelector(".filters-cancel").addEventListener("click",g),c.addEventListener("click",b=>{b.target===c&&g()}),document.addEventListener("keydown",function b(p){p.key==="Escape"&&(g(),document.removeEventListener("keydown",b))}),hn(c,r,g),y.addEventListener("submit",b=>{b.preventDefault();let p=y.elements.title.value.trim();if(!p){y.elements.title.focus();return}i?.({title:p,artist:y.elements.artist.value.trim(),album:y.elements.album.value.trim()}),g()}),y.elements.title.focus(),y.elements.title.select()}function T(e,a){e.textContent=a}function yn(e,a){e.innerHTML="";let r=document.createElement("div");r.className="music-player",r.innerHTML=an,e.appendChild(r);let i=r.querySelector(".rdf-uri"),o=r.querySelector(".load-btn"),l=()=>{let s=i.value.trim();s&&a(s)};o.addEventListener("click",l),i.addEventListener("keypress",s=>{s.key==="Enter"&&l()})}function vn(e){e.innerHTML='<div class="loading-screen">Loading music library...</div>'}function wn(e,a){e.innerHTML=`<div class="error">Error loading music player: ${a}</div>`}function xn(e,a){e.innerHTML="",e.appendChild(a)}fn({css:Vi,aboutHtml:Yi});import*as Bs from"rdflib";var kn=Object.freeze({READY:"swc:ready",CAPABILITY:"swc:capability",OFFER:"swc:offer",LOGIN:"sol-login",LOGOUT:"sol-logout",AUTH_NEEDED:"sol-auth-needed",DEFAULT_CHANGE:"sol-default-change",COMMAND:"sol-command",ERROR:"sol-error",FORM_SAVE:"sol-form-save"});function Os(){let e=new Map,a=new Map;return{register(r,i){e.set(r,i);let o=a.get(r);o&&(a.delete(r),o.forEach(l=>l(i)))},get(r){return e.get(r)},has(r){return e.has(r)},names(){return Array.from(e.keys())},whenReady(r){return e.has(r)?Promise.resolve(e.get(r)):new Promise(i=>{let o=a.get(r)||[];o.push(i),a.set(r,o)})}}}var Sn=null;function Pr(){if(typeof window<"u"){let e=window.ComponentInterop||window.SolidWebComponents||{};return window.ComponentInterop=e,window.SolidWebComponents=e,e}return Sn=Sn||{}}function qs(){let e=Pr();return e.services||(e.services=Os()),e.EVENTS||(e.EVENTS=kn),e.services}function _n(e,a){return qs().register(e,a)}function Ln(e,a){let r=Pr();return r.adoptedFetch=typeof e=="function"?e:null,a&&a.webId&&(r.adoptedWebId=a.webId),r.adoptedFetch}if(typeof window<"u"){let e=Pr();e.adoptFetch||(e.adoptFetch=Ln),typeof e.registerConsumer=="function"&&e.registerConsumer("adoptFetch",a=>Ln(a))}var be=Bs,ja=class{constructor(){this._store=null,this._fetcher=null,this._adopted=!1,this._loaded=new Set,this._changeSubs=new Set,this._wiredStore=null,this._flushPending=!1}markLoaded(a){this._loaded.add(a)}isLoaded(a){return this._loaded.has(a)}sym(a){return be.sym(a)}literal(a,r,i){return i!==void 0?be.literal(a,r,i):be.literal(a,r)}blankNode(a){return be.blankNode(a)}graph(){return be.graph()}parse(a,r,i,o){return be.parse(a,r,i,o)}st(a,r,i,o){return be.st(a,r,i,o)}get store(){if(this._adopted&&this._store)return this._store;let a=typeof window<"u"&&(window[Symbol.for("solid-logic-singleton")]||window.SolidLogic);return a?.store?(this._store=a.store,a.store):(this._store||(this._store=be.graph()),this._store)}useStore(a){return!a||typeof a.match!="function"?!1:(this._store=a,this._fetcher=a.fetcher||null,this._adopted=!0,this._loaded.clear(),this._wireChange(a),!0)}onChange(a,r,i,o){let l={pattern:{subject:a,predicate:r,object:i},cb:o,dirty:!1};return this._changeSubs.add(l),this._wireChange(this.store),()=>this._changeSubs.delete(l)}_matchesPattern(a,r){return(!a.subject||r.subject&&r.subject.equals(a.subject))&&(!a.predicate||r.predicate&&r.predicate.equals(a.predicate))&&(!a.object||r.object&&r.object.equals(a.object))}_wireChange(a){if(!a||this._wiredStore===a)return;this._wiredStore=a;let r=i=>{let o=!1;for(let l of this._changeSubs)!l.dirty&&this._matchesPattern(l.pattern,i)&&(l.dirty=!0,o=!0);o&&this._scheduleFlush()};typeof a.addDataCallback=="function"&&a.addDataCallback(r),typeof a.addDataRemovalCallback=="function"&&a.addDataRemovalCallback(r)}_scheduleFlush(){this._flushPending||(this._flushPending=!0,queueMicrotask(()=>{this._flushPending=!1;for(let a of this._changeSubs)if(a.dirty){a.dirty=!1;try{a.cb()}catch(r){console.error("[rdf] onChange subscriber failed",r)}}}))}get storeFetcher(){return this._fetcher?this._fetcher:this.store.fetcher?(this._fetcher=this.store.fetcher,this._fetcher):(this._fetcher=new be.Fetcher(this.store),this.store.fetcher=this._fetcher,this._fetcher)}async load(a){let r=String(a).split("#")[0];return this.isLoaded(r)||(await this.storeFetcher.load(r),this.markLoaded(r)),this.store}fetcher(a,r){return new be.Fetcher(a,r)}sparqlToQuery(a,r,i){return be.SPARQLToQuery(a,r,i)}sparqlQuery(a,r){return be.sparqlQuery(a,r)}isReady(){return!!be&&typeof be.graph=="function"}hasSparqlEngine(){return typeof be.SPARQLToQuery=="function"}hasRemoteSparql(){return typeof be.sparqlQuery=="function"}serialize(a,r,i,o){return be.serialize(a,r,i,o)}get UpdateManager(){return be.UpdateManager}get SPARQLToQuery(){return be.SPARQLToQuery}get Fetcher(){return be.Fetcher}get NamedNode(){return be.NamedNode}get BlankNode(){return be.BlankNode}get Literal(){return be.Literal}get Collection(){return be.Collection}get Statement(){return be.Statement}},An=Symbol.for("sol-components:rdf-singleton"),Y=typeof window<"u"?window[An]||(window[An]=new ja):new ja,ke=Y;_n("rdf",Y);typeof window<"u"&&window.SolidWebComponents&&typeof window.SolidWebComponents.registerConsumer=="function"&&window.SolidWebComponents.registerConsumer("rdf.useStore",function(e){Y.useStore(e)});var pe={rdf:"http://www.w3.org/1999/02/22-rdf-syntax-ns#",schema:"http://schema.org/",dcat:"http://www.w3.org/ns/dcat#",dct:"http://purl.org/dc/terms/",skos:"http://www.w3.org/2004/02/skos/core#"},ze=e=>Y.sym(e),Ot=e=>Y.literal(String(e)),Hs=ze(pe.rdf+"type");function Tn(e,a){let r=ze(a.iri);return e.add(r,Hs,ze(pe.schema+"ImageObject")),a.thumb&&e.add(r,ze(pe.schema+"thumbnailUrl"),ze(a.thumb)),a.full&&e.add(r,ze(pe.schema+"contentUrl"),ze(a.full)),a.width&&e.add(r,ze(pe.schema+"width"),Ot(a.width)),a.height&&e.add(r,ze(pe.schema+"height"),Ot(a.height)),a.caption&&e.add(r,ze(pe.schema+"caption"),Ot(a.caption)),a.license&&e.add(r,ze(pe.schema+"license"),Ot(a.license)),a.author&&e.add(r,ze(pe.schema+"author"),Ot(a.author)),a.detailUrl&&e.add(r,ze(pe.schema+"mainEntityOfPage"),ze(a.detailUrl)),a.position!=null&&e.add(r,ze(pe.schema+"position"),Ot(a.position)),r}var Gs="0.1.0",$n=`open-media-player/${Gs} (+https://jeff-zucker.github.io/open-media-player/)`;var Ks="https://commons.wikimedia.org/w/api.php";function En(e){return e?(new DOMParser().parseFromString(String(e),"text/html").body.textContent||"").replace(/\s+/g," ").trim():""}function Ws(e){if(!e)return"";let a="";try{let r=new URL(e),i=r.pathname.match(/\/wiki\/(.+)$/);a=i?i[1]:r.searchParams.get("title")||""}catch{let r=String(e).match(/Category:[^?#]+/);a=r?r[0]:""}try{a=decodeURIComponent(a)}catch{}return a=a.replace(/_/g," ").trim(),/^Category:/i.test(a)?a:""}async function In(e,a={}){let{thumbWidth:r=300,limit:i=60,cont:o,signal:l}=a,s=Ws(e);if(!s)throw new Error("Not a Commons category URL");let c=new URLSearchParams({action:"query",format:"json",origin:"*",generator:"categorymembers",gcmtitle:s,gcmtype:"file",gcmlimit:String(i),prop:"imageinfo",iiprop:"url|size|extmetadata",iiurlwidth:String(r),iiextmetadatafilter:"Artist|LicenseShortName"});o&&c.set("gcmcontinue",o);let f=await fetch(`${Ks}?${c}`,{signal:l,headers:{"Api-User-Agent":$n}});if(!f.ok)throw new Error(`HTTP ${f.status} from Commons`);let v=await f.json();if(v.error)throw new Error(v.error.info||"Commons API error");let h=v.query&&v.query.pages?Object.values(v.query.pages):[];h.sort((b,p)=>(b.index||0)-(p.index||0));let y=[];for(let b of h){let p=b.imageinfo&&b.imageinfo[0];if(!p||!p.thumburl)continue;let L=p.extmetadata||{};y.push({title:(b.title||"").replace(/^File:/,""),name:b.title||"",thumb:p.thumburl,full:p.url,width:p.thumbwidth||0,height:p.thumbheight||0,descUrl:p.descriptionurl||"",artist:En(L.Artist&&L.Artist.value),license:En(L.LicenseShortName&&L.LicenseShortName.value)})}let g=v.continue&&v.continue.gcmcontinue?v.continue.gcmcontinue:null;return{images:y,cont:g}}function Vs(e,{startIndex:a=0}={}){let r=Y.graph();return e.forEach((i,o)=>{let l=a+o,s=i.descUrl||i.full||`urn:commons:image:${l}`;Tn(r,{iri:s,thumb:i.thumb,full:i.full,width:i.width,height:i.height,caption:i.title,license:i.license,author:i.artist,detailUrl:i.descUrl,position:l})}),r}async function*Cn(e,{pageSize:a=60,thumbWidth:r=300,signal:i}={}){let o,l=0;do{let{images:s,cont:c}=await In(e,{thumbWidth:r,limit:a,cont:o,signal:i});yield Vs(s,{startIndex:l}),l+=s.length,o=c}while(o)}var _e={rdf:"http://www.w3.org/1999/02/22-rdf-syntax-ns#",schema:"http://schema.org/",dct:"http://purl.org/dc/terms/",dcat:"http://www.w3.org/ns/dcat#",dctype:"http://purl.org/dc/dcmitype/",ldp:"http://www.w3.org/ns/ldp#",xsd:"http://www.w3.org/2001/XMLSchema#"},Pn=e=>{if(!e)throw new Error("favouritesUrl: a library base URL is required");return new URL("favourites/",new URL(e,document.baseURI)).href},Dr=e=>JSON.stringify(String(e));function Ys(e){let a=e.created||new Date().toISOString(),r=`<${e.item}> a dctype:${e.bucket}, schema:${e.schemaType} ;
   schema:name ${Dr(e.name)}`;return e.thumbnail&&(r+=` ;
   schema:thumbnailUrl <${e.thumbnail}>`),e.link&&(r+=` ;
   ${e.download?"dcat:downloadURL":"dcat:landingPage"} <${e.link}>`),r+=" .",`@prefix schema: <${_e.schema}> .
@prefix dct: <${_e.dct}> .
@prefix dcat: <${_e.dcat}> .
@prefix dctype: <${_e.dctype}> .
@prefix xsd: <${_e.xsd}> .

<> a schema:BookmarkAction ;
   dct:creator ${Dr(e.contributor)} ;
   dct:title ${Dr(e.title||e.name)} ;
   dct:created "${a}"^^xsd:dateTime ;
   dct:references <${e.item}> .

${r}
`}async function Dn(e,a){let r=Pn(a),i=await fetch(r,{method:"POST",headers:{"Content-Type":"text/turtle"},body:Ys(e)});if(!i.ok)throw new Error(`Couldn't save favourite (HTTP ${i.status}).`);let o=i.headers.get("Location");return o?new URL(o,r).href:null}async function pa(e){let a=await fetch(e,{method:"DELETE"});if(!a.ok)throw new Error(`Couldn't remove favourite (HTTP ${a.status}).`)}function Js(e,a){let r=Y.graph();try{Y.parse(a,r,e,"text/turtle")}catch{return null}let i=r.each(void 0,Y.sym(_e.rdf+"type"),Y.sym(_e.schema+"BookmarkAction"))[0];if(!i)return null;let o=r.any(i,Y.sym(_e.dct+"references"))?.value;if(!o)return null;let l=Y.sym(o),s=r.each(l,Y.sym(_e.rdf+"type")).map(v=>v.value),c=s.find(v=>v.startsWith(_e.dctype))||"",f=s.find(v=>v.startsWith(_e.schema))||"";return{file:e,item:o,contributor:r.any(i,Y.sym(_e.dct+"creator"))?.value||"anonymous",customTitle:r.any(i,Y.sym(_e.dct+"title"))?.value||"",created:r.any(i,Y.sym(_e.dct+"created"))?.value||"",canonicalTitle:r.any(l,Y.sym(_e.schema+"name"))?.value||o,thumbnail:r.any(l,Y.sym(_e.schema+"thumbnailUrl"))?.value||"",link:r.any(l,Y.sym(_e.dcat+"downloadURL"))?.value||r.any(l,Y.sym(_e.dcat+"landingPage"))?.value||o,bucket:c.replace(_e.dctype,"")||"Collection",schemaType:f.replace(_e.schema,"")}}async function Oa(e){let a=Pn(e),r;try{let c=await fetch(a,{headers:{Accept:"text/turtle"},cache:"no-store"});if(!c.ok)return[];r=await c.text()}catch{return[]}let i=Y.graph();try{Y.parse(r,i,a,"text/turtle")}catch{return[]}let o=i.each(Y.sym(a),Y.sym(_e.ldp+"contains")).map(c=>c.value).filter(c=>!c.endsWith("/")),l=[];await Promise.all(o.map(async c=>{try{let f=await fetch(c,{cache:"no-store"});if(!f.ok)return;let v=Js(c,await f.text());v&&l.push(v)}catch{}}));let s=new Map;for(let c of l){s.has(c.item)||s.set(c.item,{item:c.item,canonicalTitle:c.canonicalTitle,thumbnail:c.thumbnail,link:c.link,bucket:c.bucket,schemaType:c.schemaType,created:c.created,contributors:[]});let f=s.get(c.item);f.contributors.some(v=>v.name===c.contributor)||f.contributors.push({name:c.contributor,customTitle:c.customTitle,file:c.file}),c.created>f.created&&(f.created=c.created),!f.thumbnail&&c.thumbnail&&(f.thumbnail=c.thumbnail)}return[...s.values()].map(c=>({...c,count:c.contributors.length}))}var Mn=`<!-- "\u2605 Add to favourites" prompt. omp-favourites-ui.js favouritePrompt()
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
`;var Un=`/* Styles for the "\u2605 Add to favourites" prompt (modal-favourite-prompt.html),
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
`;var Zs="omp:fav-contributor",el=()=>{try{return localStorage.getItem(Zs)||""}catch{return""}};function tl(e){return new Promise(a=>{let r=document.createElement("div");r.className="omp-fav-overlay",r.innerHTML=`<style>${Un}</style>${Mn}`,document.body.appendChild(r);let i=r.querySelector(".omp-fav-title");i.value=e||"",i.focus(),i.select?.();let o=s=>{r.remove(),a(s)},l=()=>{let s=i.value.trim();o({contributor:el()||"anonymous",title:s||e})};r.querySelector(".omp-fav-cancel").addEventListener("click",()=>o(null)),r.querySelector(".omp-fav-add").addEventListener("click",l),r.addEventListener("click",s=>{s.target===r&&o(null)}),r.addEventListener("keydown",s=>{s.key==="Escape"?o(null):s.key==="Enter"&&(s.preventDefault(),l())})})}async function Mr(e,a){let r=await tl(e.name);if(!r)return null;let i={...e,contributor:r.contributor,title:r.title};return await Dn(i,a),document.dispatchEvent(new CustomEvent("omp:favourited",{detail:i})),i}function Rn(){window.__ompFavRouter||(window.__ompFavRouter=!0,document.addEventListener("item-favourite",e=>{let a=e.detail;a&&a.bucket&&a.item&&Mr(a,a.libraryBase).catch(r=>console.warn("[favourite]",r.message))}))}var Nn=`/* omp-images shadow styles \u2014 imported as text by omp-images.js (esbuild
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
`;var Ur=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._loaded=!1,this._favColls=[],this._favLandings=new Set}connectedCallback(){if(this._built)return;this._built=!0,this.source=this.getAttribute("source")||"";let a=document.createElement("style");a.textContent=Nn,this._favPane=this._pane("Community Favorites","fav-col");let r=document.createElement("div");r.className="right";let i=document.createElement("div");i.className="browser",this._libPane=this._pane("Library"),this._topicPane=this._pane("Topic"),this._collPane=this._pane("Collection"),i.append(this._libPane.pane,this._topicPane.pane,this._collPane.pane),this._gallery=document.createElement("sol-gallery"),this._gallery.addEventListener("load-more",()=>this._pump&&this._pump()),r.append(i,this._gallery),this.shadowRoot.append(a,this._favPane.pane,r),this._buildAddControls(),this._syncOwner(),this._onGating=()=>this._syncOwner(),document.addEventListener("omp:reapply-gating",this._onGating),this._onFav=()=>this._loadCommunalFavs(),document.addEventListener("omp:favourited",this._onFav),this._renderFavourites(),this._loadCommunalFavs()}disconnectedCallback(){document.removeEventListener("omp:reapply-gating",this._onGating),document.removeEventListener("omp:favourited",this._onFav)}_pane(a,r){let i=document.createElement("div");i.className="pane"+(r?" "+r:"");let o=document.createElement("div");o.className="pane-head",o.textContent=a;let l=document.createElement("ul");return l.className="list",i.append(o,l),{pane:i,list:l}}ensureLoaded(){this._loaded||this._loading||this._load().catch(a=>console.warn("[omp-images] load failed:",a.message))}async reload(){return this._loaded=!1,this._load()}async _load(){this._loading=!0;try{let a=this._docUrl(),r=await fetch(a);if(!r.ok)throw new Error(`HTTP ${r.status} for ${a}`);let i=Y.graph();Y.parse(await r.text(),i,a,"text/turtle"),this._readModel(i),this._renderLibraries(),this._renderFavourites(),this._restoreSelection(),this._loaded=!0}finally{this._loading=!1}}_readModel(a){let r=Y.sym(pe.rdf+"type"),i=l=>a.any(l,Y.sym(pe.skos+"prefLabel"))?.value||l.value,o=Y.sym(this._schemeIri());this._libraries=a.each(void 0,Y.sym(pe.skos+"topConceptOf"),o).map(l=>({iri:l.value,label:this._libLabel(i(l))})).sort((l,s)=>l.label.localeCompare(s.label)),this._topicsByLib=new Map,this._topicByIri=new Map,this._topicLib=new Map;for(let l of this._libraries){let s=a.each(void 0,Y.sym(pe.skos+"broader"),Y.sym(l.iri)).map(c=>({iri:c.value,label:i(c)})).sort((c,f)=>c.label.localeCompare(f.label));this._topicsByLib.set(l.iri,s);for(let c of s)this._topicByIri.set(c.iri,c),this._topicLib.set(c.iri,l.iri)}this._collsByTopic=new Map,this._collByIri=new Map;for(let l of a.each(void 0,r,Y.sym(pe.dcat+"Dataset"))){let s=a.any(l,Y.sym(pe.dcat+"theme"))?.value;if(!s)continue;let c={iri:l.value,title:a.any(l,Y.sym(pe.dct+"title"))?.value||"(untitled)",landingPage:a.any(l,Y.sym(pe.dcat+"landingPage"))?.value||"",theme:s};this._collsByTopic.has(s)||this._collsByTopic.set(s,[]),this._collsByTopic.get(s).push(c),this._collByIri.set(l.value,c)}for(let l of this._collsByTopic.values())l.sort((s,c)=>s.title.localeCompare(c.title))}_libLabel(a){return a.replace(/^Images\s*-\s*/i,"").trim()||a}_renderLibraries(){this._libPane.list.replaceChildren(),this._libBtns=new Map;for(let a of this._libraries){let r=this._row(this._libPane.list,"lib",a.label);r.addEventListener("click",()=>this._selectLibrary(a)),this._libBtns.set(a.iri,r)}this._libraries.length||this._hint(this._libPane.list,"No libraries")}_selectLibrary(a){this._activeLibrary=a,this._mark(this._libBtns,this._libBtns.get(a.iri)),this._renderTopics(a),this._activeTopic=null,this._collPane.list.replaceChildren(),this._hint(this._collPane.list,"Select a topic"),this._addCollBtn.disabled=!0,this._addTopicBtn.disabled=!1}_renderTopics(a){this._topicPane.list.replaceChildren(),this._topicBtns=new Map;let r=this._topicsByLib.get(a.iri)||[];for(let i of r){let o=this._row(this._topicPane.list,"topic",i.label);o.addEventListener("click",()=>this._selectTopic(i)),this._topicBtns.set(i.iri,o)}r.length||this._hint(this._topicPane.list,"No topics in this library yet")}_selectTopic(a){this._activeTopic=a,this._mark(this._topicBtns,this._topicBtns.get(a.iri)),this._renderColls(a),this._addCollBtn.disabled=!1}_renderColls(a){this._collPane.list.replaceChildren(),this._collBtns=new Map,this._starByIri=new Map;let r=this._collsByTopic.get(a.iri)||[];for(let i of r){let o=document.createElement("li");o.className="has-star";let l=document.createElement("button");l.type="button",l.className="row coll",l.textContent=i.title,l.addEventListener("click",()=>this._openCollection(i));let s=this._starButton(i);o.append(l,s),this._collPane.list.appendChild(o),this._collBtns.set(i.iri,l)}r.length||this._hint(this._collPane.list,"No collections in this topic yet"),this._activeCollIri&&this._collBtns.has(this._activeCollIri)&&this._collBtns.get(this._activeCollIri).classList.add("selected")}_starButton(a){let r=this._favLandings.has(a.landingPage),i=document.createElement("button");return i.type="button",i.className="star"+(r?" on":""),i.textContent=r?"\u2605":"\u2606",i.title="Add to the communal favourites",i.setAttribute("aria-label","Favourite"),i.addEventListener("click",o=>{o.stopPropagation(),this._favourite(a)}),this._starByIri.set(a.iri,i),i}async _loadCommunalFavs(){try{let a=await Oa(this._docUrl());this._favColls=a.filter(r=>r.bucket==="Collection"||r.schemaType==="ImageGallery"),this._favLandings=new Set(this._favColls.map(r=>r.link||r.item))}catch{this._favColls=[],this._favLandings=new Set}this._renderFavourites(),this._refreshStars()}_refreshStars(){for(let[a,r]of this._starByIri||new Map){let i=this._collByIri?.get(a),o=i&&this._favLandings.has(i.landingPage);r.classList.toggle("on",!!o),r.textContent=o?"\u2605":"\u2606"}}_renderFavourites(){let a=this._favPane.list;a.replaceChildren();let r=[...this._favColls].sort((i,o)=>i.canonicalTitle.localeCompare(o.canonicalTitle));if(!r.length){this._hint(a,"Star a collection \u2014 it joins the \u2605 Favourites wall");return}for(let i of r){let o=document.createElement("li");o.className="has-star";let l=document.createElement("button");l.type="button",l.className="row fav-link",l.textContent=i.canonicalTitle+(i.count>1?`  \xB7  \u2605${i.count}`:""),l.title=`Favourited by ${i.contributors.map(s=>s.name).join(", ")}`,l.addEventListener("click",()=>this.openByRef(i.link||i.item)),o.append(l,this._favDeleteButton(i)),a.appendChild(o)}}_favDeleteButton(a){let r=document.createElement("button");return r.type="button",r.className="fav-x",r.textContent="\u2715",r.title="Remove from the communal favourites",r.setAttribute("aria-label","Remove favourite"),r.addEventListener("click",async i=>{if(i.stopPropagation(),!!confirm(`Remove \u201C${a.canonicalTitle}\u201D from the communal favourites?`)){for(let o of a.contributors||[])if(o.file)try{await pa(o.file)}catch(l){console.warn("[fav delete]",l.message)}document.dispatchEvent(new CustomEvent("omp:favourited"))}}),r}async _favourite(a){if(this._favLandings.has(a.landingPage)){let r=this._favColls.find(i=>(i.link||i.item)===a.landingPage);for(let i of r?.contributors||[])if(i.file)try{await pa(i.file)}catch(o){console.warn("[fav delete]",o.message)}document.dispatchEvent(new CustomEvent("omp:favourited"));return}try{await Mr({item:a.landingPage,bucket:"Collection",schemaType:"ImageGallery",name:a.title,link:a.landingPage,download:!1},this._docUrl())&&this._loadCommunalFavs()}catch(r){console.warn("[favourite]",r.message)}}openByRef(a){for(let r of this._collByIri?.values()||[])if(r.landingPage===a){this._jumpToCollection(r.iri);return}}_jumpToCollection(a){let r=this._collByIri?.get(a);if(!r)return;let i=this._topicLib.get(r.theme),o=this._libraries.find(s=>s.iri===i),l=this._topicByIri.get(r.theme);o&&this._selectLibrary(o),l&&this._selectTopic(l),this._openCollection(r),requestAnimationFrame(()=>{this._libBtns.get(i)?.scrollIntoView({block:"nearest"}),this._topicBtns.get(r.theme)?.scrollIntoView({block:"nearest"}),this._collBtns.get(a)?.scrollIntoView({block:"nearest"})})}_openCollection(a){this._activeCollIri=a.iri,this._collBtns&&this._mark(this._collBtns,this._collBtns.get(a.iri));try{localStorage.setItem(this._selKey(),a.landingPage)}catch{}let r=a.landingPage;if(!r){this._gallery.clear(),this._gallery.end();return}this._abort?.abort(),this._abort=new AbortController;let i=this._abort.signal;this._gallery.clear();let o=Cn(r,{signal:i})[Symbol.asyncIterator](),l=!1,s=!1;this._pump=async()=>{if(!(l||s)){s=!0;try{let{value:c,done:f}=await o.next();if(i.aborted)return;if(f){l=!0,this._gallery.end();return}this._gallery.add(c)}catch(c){l=!0,c.name!=="AbortError"&&(this._gallery.end(),console.warn("[omp-images]",c.message))}finally{s=!1}}},this._pump()}_restoreSelection(){let a=null;try{a=localStorage.getItem(this._selKey())}catch{}if(a){for(let r of this._collByIri.values())if(r.landingPage===a){this._jumpToCollection(r.iri);return}}}_row(a,r,i){let o=document.createElement("li"),l=document.createElement("button");return l.type="button",l.className=`row ${r}`,l.textContent=i,o.appendChild(l),a.appendChild(o),l}_hint(a,r){if(!r){a.replaceChildren();return}let i=document.createElement("li");i.className="hint",i.textContent=r,a.replaceChildren(i)}_mark(a,r){for(let i of a.values()){let o=i===r;i.classList.toggle("selected",o),o?i.setAttribute("aria-current","true"):i.removeAttribute("aria-current")}}_buildAddControls(){let a=document.createElement("div");a.className="add",this._addTopicBtn=this._mkAddBtn("+ Add topic",()=>this._openAddTopic(a)),this._addTopicBtn.disabled=!0,a.appendChild(this._addTopicBtn),this._topicPane.pane.appendChild(a);let r=document.createElement("div");r.className="add",this._addCollBtn=this._mkAddBtn("+ Add collection",()=>this._openAddCollection(r)),this._addCollBtn.disabled=!0,r.appendChild(this._addCollBtn),this._collPane.pane.appendChild(r)}_mkAddBtn(a,r){let i=document.createElement("button");return i.type="button",i.className="add-btn",i.textContent=a,i.addEventListener("click",r),i}_openAddTopic(a){if(!this._activeLibrary)return;this._addTopicBtn.style.display="none";let{form:r,inputs:i,ok:o,err:l,reset:s}=this._addForm(a,[{ph:"Topic name"}],this._addTopicBtn);r.addEventListener("submit",async c=>{c.preventDefault();let f=i[0].value.trim();if(f){o.disabled=!0,l.textContent="";try{await this._addTopic(f,this._activeLibrary.iri);let v=this._activeLibrary.iri;s(),await this.reload();let h=this._libraries.find(y=>y.iri===v);h&&this._selectLibrary(h)}catch(v){l.textContent=v.message,o.disabled=!1}}})}_openAddCollection(a){if(!this._activeTopic)return;this._addCollBtn.style.display="none";let{form:r,inputs:i,ok:o,err:l,reset:s}=this._addForm(a,[{ph:"Collection title"},{ph:"Commons category URL",value:"https://commons.wikimedia.org/wiki/Category:"}],this._addCollBtn);r.addEventListener("submit",async c=>{c.preventDefault();let f=i[0].value.trim(),v=i[1].value.trim();if(!(!f||!v)){o.disabled=!0,l.textContent="";try{await this._addCollection(f,v,this._activeTopic.iri);let h=this._activeTopic.iri,y=this._activeLibrary.iri;s(),await this.reload();let g=this._libraries.find(p=>p.iri===y);g&&this._selectLibrary(g);let b=this._topicByIri.get(h);b&&this._selectTopic(b)}catch(h){l.textContent=h.message,o.disabled=!1}}})}_addForm(a,r,i){let o=document.createElement("form");o.className="add-form";let l=r.map(y=>{let g=document.createElement("input");return g.placeholder=y.ph,g.required=!0,y.value&&(g.value=y.value),o.appendChild(g),g}),s=document.createElement("div");s.className="add-row";let c=document.createElement("button");c.type="submit",c.className="primary",c.textContent="Add";let f=document.createElement("button");f.type="button",f.textContent="Cancel";let v=document.createElement("div");v.className="add-err",s.append(c,f),o.append(s,v),a.appendChild(o),l[0].focus();let h=()=>{o.remove(),i.style.display=""};return f.addEventListener("click",h),{form:o,inputs:l,ok:c,err:v,reset:h}}async _addTopic(a,r){let i=this._mintIri(a);await this._patch(`<${i}> a skos:Concept, schema:DefinedTerm ; skos:prefLabel ${JSON.stringify(a)} ; skos:broader <${r}> .`)}async _addCollection(a,r,i){let o=this._mintIri(a,"coll");await this._patch(`<${o}> a <${pe.dcat}Dataset>, <${pe.schema}ImageGallery> ; dct:title ${JSON.stringify(a)} ; dcat:landingPage <${r}> ; dcat:theme <${i}> .`)}async _patch(a){let r=`PREFIX skos: <${pe.skos}>
PREFIX schema: <${pe.schema}>
PREFIX dct: <${pe.dct}>
PREFIX dcat: <${pe.dcat}>
INSERT DATA {
${a}
}
`,i=await fetch(this._docUrl(),{method:"PATCH",headers:{"Content-Type":"application/sparql-update"},body:r});if(!i.ok)throw new Error(`Save failed (HTTP ${i.status}). The file must be on a Solid pod you own.`)}_docUrl(){return new URL(this.source,document.baseURI).href.split("#")[0]}_schemeIri(){let a=this.source.split("#")[1]||"Images";return`${this._docUrl()}#${a}`}_selKey(){return`omp-images:collection:${this.source}`}_mintIri(a,r){let i=(r?r+"-":"")+a.trim().replace(/[^A-Za-z0-9]+/g,"_").replace(/^_+|_+$/g,"").slice(0,40),o=i||"item",l=this._docUrl(),s=f=>this._topicByIri.has(`${l}#${f}`)||this._libraries.some(v=>v.iri===`${l}#${f}`)||this._collByIri.has(`${l}#${f}`),c=2;for(;s(o);)o=`${i}_${c++}`;return`${l}#${o}`}_syncOwner(){let a=!!document.querySelector("sol-default")?.hasAttribute("solid-kitchen")||!!document.querySelector("sol-login")?.isLoggedIn;this.classList.toggle("owner",a)}};customElements.get("omp-images")||customElements.define("omp-images",Ur);function Rr(e){if(!e)return null;let a;try{a=new URL(e)}catch{return null}let r=a.pathname.match(/\/details\/([^/?]+)/);if(r)return`collection:${r[1]}`;if(a.pathname==="/search"||a.pathname==="/search.php"){let i=[],o=(a.searchParams.get("query")||"").trim();o&&i.push(o);for(let l of a.searchParams.getAll("and[]")){let s=l.trim();s&&i.push(s)}return i.length?i.join(" AND "):null}return null}function zn(e){if(e==null)return NaN;if(typeof e=="number")return e;let a=String(e).trim();if(!a)return NaN;if(/^[0-9.]+$/.test(a))return parseFloat(a);let r=a.split(":").map(Number);return r.some(i=>!Number.isFinite(i))?NaN:r.length===3?r[0]*3600+r[1]*60+r[2]:r.length===2?r[0]*60+r[1]:r[0]}function rl(e){return/^collection:/.test(e)}function il(e){return e==="video"?"movies":"audio"}async function Nr(e,a=null,r={}){if(!e)return[];let i=il(r.mediaType),o=e,l=a&&(!rl(e)||a.applyToCatalogArtists);if(l){let y=[];e.includes("mediatype:")||y.push(`mediatype:"${i}"`),a.minDownloads>0&&y.push(`downloads:[${a.minDownloads} TO *]`);for(let g of a.blockedCollections||[]){let b=String(g).trim();b&&y.push(`-collection:"${b}"`)}y.length&&(o=`(${e}) AND ${y.join(" AND ")}`)}let s=new URLSearchParams({q:o,output:"json",rows:1e4});for(let y of["identifier","title","downloads","runtime","collection","creator","format","licenseurl","rights","possible-copyright-status"])s.append("fl[]",y);let c=`https://archive.org/advancedsearch.php?${s}`,f=await fetch(c);if(!f.ok)throw new Error(`HTTP error! status: ${f.status}`);let v=await f.json(),h=[];if(v.response&&v.response.docs)for(let y of v.response.docs)y.identifier&&h.push({name:y.title||y.identifier,url:`https://archive.org/details/${y.identifier}`,_downloads:y.downloads,_runtime:y.runtime,_collection:y.collection,_creator:y.creator,_format:y.format,_rights:jn(y),_detailUrl:`https://archive.org/details/${y.identifier}`});if(l){let y=(a.blockedCollections||[]).map(g=>String(g).trim()).filter(Boolean);h=h.filter(g=>{if(a.minItemRuntimeSec>0&&g._runtime!=null){let b=zn(g._runtime);if(Number.isFinite(b)&&b<a.minItemRuntimeSec)return!1}return!(y.length&&g._collection&&(Array.isArray(g._collection)?g._collection:[g._collection]).some(p=>y.includes(p)))})}return r.mediaType==="video"&&(h=h.filter(y=>{let g=Array.isArray(y._format)?y._format:y._format?[y._format]:[];return!g.length||g.some(b=>cl.test(b))}),h=nl(h)),h}function nl(e){let a=o=>{let l=parseInt(o._downloads,10);return Number.isFinite(l)?l:0},r=new Map,i=[];for(let o of e){let l=String(o.name||"").toLowerCase().replace(/\s+/g," ").trim();if(!l){i.push(o);continue}let s=r.get(l);(!s||a(o)>a(s))&&r.set(l,o)}return[...r.values(),...i].sort((o,l)=>a(l)-a(o))}var ol="https://archive.org/metadata/",sl=[".mp3",".m4a",".aac",".ogg",".oga",".opus",".webm",".weba",".flac",".wav"],ll=[".mp4",".m4v",".ogv",".webm",".mov"],cl=/(h\.?264|mpeg-?4|ogg\s*video|web ?m|quicktime|matroska)/i,dl=e=>e==="video"?ll:sl,ul=e=>new RegExp("("+e.map(a=>"\\"+a).join("|")+")$","i");function fl(e){return e.source==="derivative"&&e.original?e.original:e.name}function pl(e,a){for(let r of a){let i=e.find(o=>o.name&&o.name.toLowerCase().endsWith(r));if(i)return i}return null}var Fn={NOT_IN_COPYRIGHT:"Public domain",PUBLIC_DOMAIN:"Public domain",IN_COPYRIGHT:"In copyright",UNKNOWN:"Rights unknown"};function ml(e){let a=/creativecommons\.org\/(licenses|publicdomain)\/([a-z0-9-]+)(?:\/([0-9.]+))?/i.exec(e||"");if(!a)return"";let r=a[2].toLowerCase();return a[1].toLowerCase()==="publicdomain"||r==="zero"||r==="mark"?"Public domain (CC)":`CC ${r.toUpperCase()}${a[3]?" "+a[3]:""}`}function hl(e,a,r){let i=ml(e);return i||(r&&Fn[r]?Fn[r]:a?a.length>70?a.slice(0,67)+"\u2026":a:r?r.replace(/_/g," ").toLowerCase():e?"Licensed (see IA)":"")}function jn(e){if(!e)return null;let a=s=>Array.isArray(s)?s[0]:s,r=a(e.licenseurl)||"",i=(a(e.rights)||"").toString().trim(),o=a(e["possible-copyright-status"])||"",l=hl(r,i,o);return l?{label:l,licenseUrl:r,rights:i,status:o}:null}async function On(e,a=null,r={}){if(!e)return[];let i=dl(r.mediaType),o=ul(i),l=await fetch(`${ol}${e}`);if(!l.ok)throw new Error(`IA metadata ${l.status} for ${e}`);let s=await l.json();if(!s.metadata)throw new Error(`Empty metadata for ${e}`);let c=s.metadata||{};if(c["access-restricted-item"]==="true"||c["access-restricted"]==="true"||c.is_dark==="true")return[];let v=jn(c),h=`https://archive.org/details/${e}`,y=s.files||[],g=new Map;for(let z of y){if(!z.name||!o.test(z.name)||z.private==="true")continue;let q=fl(z);g.has(q)||g.set(q,[]),g.get(q).push(z)}let b=Array.isArray(c.creator)?c.creator[0]:c.creator,p=b?String(b).trim():"",E=/^(various(\s+artists?)?|v\.?a\.?)$/i.test(p)?"":p,D=[];for(let z of g.values()){let q=pl(z,i);if(!q)continue;let ue=q.length||z.find(P=>P.length)?.length,oe=q.title||z.find(P=>P.title)?.title,Se=q.bitrate||z.find(P=>P.bitrate)?.bitrate,Oe=q.artist||q.creator||z.find(P=>P.artist)?.artist||z.find(P=>P.creator)?.creator||"",We=String(Oe).trim()||E;D.push({url:`https://archive.org/download/${e}/${encodeURIComponent(q.name)}`,name:oe||q.name.replace(/\.[^.]+$/,""),time:bl(ue),artist:We,_rights:v,_detailUrl:h,_lengthSec:zn(ue),_bitrate:Se!=null?parseFloat(Se):NaN})}return a?D.filter(z=>!(a.minTrackDurationSec>0&&Number.isFinite(z._lengthSec)&&z._lengthSec<a.minTrackDurationSec||a.minTrackBitrateKbps>0&&Number.isFinite(z._bitrate)&&z._bitrate<a.minTrackBitrateKbps)):D}function bl(e){if(!e)return"";if(/^\d+:\d+/.test(e))return e.split(":").slice(-2).join(":");let a=parseFloat(e);if(!isFinite(a))return"";let r=Math.floor(a/60),i=Math.floor(a%60);return`${r}:${i.toString().padStart(2,"0")}`}var qn="Unknown Artist",gl="Unsorted";function rt(e){return'"'+String(e).replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t")+'"'}function Fr(e){return String(e||"").toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"")||"untitled"}function yl(e){return"file://"+String(e).split("/").map(encodeURIComponent).join("/")}function vl(e,a){let r=e,i=1;for(;a.has(r);)i+=1,r=`${e}-${i}`;return a.add(r),r}function Bn(e){let a=new Set,r=new Map,i=new Map,o=new Map,l=c=>{let f=c||gl;return i.has(f)||i.set(f,{name:f,slug:Fr(f)}),i.get(f)},s=(c,f)=>{let v=c||qn;return r.has(v)||r.set(v,{name:v,slug:"artist_"+Fr(v),genreName:f||null}),r.get(v)};for(let c of e||[]){if(!c||c.error)continue;let f=c.albumArtist||c.artist||qn,v=l(c.genre),h=s(f,c.genre),y=c.album||null,g=y?`${f}\0${y}`:`\0single\0${c.absPath}`,b=o.get(g);if(!b){let p=y||c.title||"Untitled";b={slug:vl(Fr(`${f}_${p}`),a),title:p,artist:h,genre:v,year:c.year!=null?String(c.year):null,tracks:[],artFromAbsPath:null},o.set(g,b)}b.tracks.push({title:c.title||c.absPath.split("/").pop(),trackNo:Number.isFinite(c.trackNo)?c.trackNo:null,durationSec:Number.isFinite(c.durationSec)?c.durationSec:null,absPath:c.absPath,artist:h}),!b.artFromAbsPath&&c.hasPicture&&(b.artFromAbsPath=c.absPath)}for(let c of o.values())c.tracks.sort((f,v)=>(f.trackNo??1e9)-(v.trackNo??1e9)||f.title.localeCompare(v.title));return{releases:[...o.values()],artists:[...r.values()],genres:[...i.values()]}}function Hn(e,{title:a="My Music",covers:r=new Map}={}){let{releases:i,artists:o,genres:l}=e,s={};s["index.ttl"]=`@prefix dct: <http://purl.org/dc/terms/> .
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
`).join("");let c=new Map(l.map(f=>[f.name,f.slug]));s["agents.ttl"]=`@prefix dct: <http://purl.org/dc/terms/> .
@prefix dcat: <http://www.w3.org/ns/dcat#> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix mo: <http://purl.org/ontology/mo/> .

<#it>
    a dcat:Dataset ;
    dct:title "Artists" .
`+o.map(f=>{let v=f.genreName?c.get(f.genreName):null,h=v?` ;
    mo:genre <./genres.ttl#${v}>`:"";return`
<#${f.slug}>
    a foaf:Agent, mo:MusicArtist ;
    foaf:name ${rt(f.name)}${h} .
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
`;for(let f of i){let v=r.get(f.slug),h=v?`
    foaf:depiction <./${v.file}> ;`:"",y=f.year?`
    dct:date ${rt(f.year)} ;`:"",g=f.tracks.map((p,L)=>`<#t${String(L+1).padStart(2,"0")}>`).join(", "),b=`@prefix dct: <http://purl.org/dc/terms/> .
@prefix mo: <http://purl.org/ontology/mo/> .
@prefix dcat: <http://www.w3.org/ns/dcat#> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<#it>
    a mo:Release, dcat:Dataset ;
    dct:title ${rt(f.title)} ;
    dct:identifier ${rt(f.slug)} ;
    dct:isPartOf <../releases.ttl#it> ;
    foaf:maker <../agents.ttl#${f.artist.slug}> ;
    mo:genre <../genres.ttl#${f.genre.slug}> ;${y}${h}
    mo:track ${g} .
`;f.tracks.forEach((p,L)=>{let E=`t${String(L+1).padStart(2,"0")}`,D=p.trackNo!=null?p.trackNo:L+1,z=p.durationSec!=null?`
    mo:duration ${p.durationSec}.0 ;`:"";b+=`
<#${E}>
    a mo:Track ;
    dct:title ${rt(p.title)} ;
    dct:isPartOf <#it> ;
    foaf:maker <../agents.ttl#${p.artist.slug}> ;
    mo:track_number ${D} ;${z}
    mo:item <${yl(p.absPath)}> .
`}),s[`releases/${f.slug}`]=b}return s}var Gn=`<!-- Inline add-genre form shown in the genre column footer (ia3.js
     openAddGenreForm). -->
<form class="ia-column-addform" autocomplete="off">
  <input type="text" class="ia-column-addinput" placeholder="Genre name" aria-label="New genre name" required>
  <button type="submit" class="ia-column-addsave" aria-label="Add">\u2713</button>
  <button type="button" class="ia-column-addcancel" aria-label="Cancel">\u2717</button>
</form>
`;var Kn=`<!-- Inline add-artist form shown in the artist column footer (ia3.js
     openAddArtistForm). The genre <select> options are data-driven and
     populated by ia3 after parse. -->
<form class="ia-column-addform ia-column-addartist" autocomplete="off">
  <input type="text" class="ia-column-addinput" placeholder="archive.org URL or ID" aria-label="Artist URL or ID" required>
  <select class="ia-column-addselect" aria-label="Genre"></select>
  <button type="submit" class="ia-column-addsave" aria-label="Add">\u2713</button>
  <button type="button" class="ia-column-addcancel" aria-label="Cancel">\u2717</button>
</form>
`;var Wn=`<!-- Dismissible failure banner (ia3.js showNotice) \u2014 for things the user
     must not miss, chiefly "this media can't play". -->
<span class="ia-notice-icon" aria-hidden="true">\u26A0</span><span class="ia-notice-msg"></span><button type="button" class="ia-notice-close" aria-label="Dismiss">\u2715</button>
`;import{Namespace as je,graph as $t,Fetcher as zr,sym as F,st as M,literal as te,UpdateManager as Vn,parse as qt}from"rdflib";function qa(e,a={}){let r=a.element||Sl(),i=a.tag||a.element&&typeof a.element.getAttribute=="function"&&a.element.getAttribute("side")||"default";if(r&&typeof r.fetchFor=="function")try{let l=r.fetchFor(e,i);if(typeof l=="function")return l}catch{}let o=typeof window<"u"&&window.SolidWebComponents?.adoptedFetch;return typeof o=="function"?o:typeof globalThis.fetch=="function"?globalThis.fetch.bind(globalThis):void 0}function Sl(){return typeof document>"u"?null:document.querySelector("sol-login")}var Zc=300*1e3;var ct=je("http://www.w3.org/2004/02/skos/core#"),dt=je("http://www.w3.org/2000/01/rdf-schema#"),le=je("http://www.w3.org/1999/02/22-rdf-syntax-ns#"),bt=je("http://www.w3.org/2001/XMLSchema#"),H=je("http://purl.org/dc/terms/"),we=je("http://xmlns.com/foaf/0.1/"),X=je("http://purl.org/ontology/mo/"),ce=je("http://www.w3.org/ns/dcat#"),B=je("http://schema.org/"),qr=je("http://www.w3.org/ns/oa#"),Xe=je("http://www.w3.org/ns/solid/terms#"),Ll=je("http://purl.org/dc/dcmitype/"),Hr=X("MusicArtist"),Bt=X("Release"),jr=X("Track"),Ht=B("MusicPlaylist"),_l=X("Genre");function $e(e){let a=new URL("./",e);return{libraryDoc:F(e),agentsDoc:F(new URL("agents.ttl",a).href),genresDoc:F(new URL("genres.ttl",a).href),releasesDoc:F(new URL("releases.ttl",a).href),releasesIndexDoc:F(new URL("releases.ttl",a).href),releasesCatalog:F(new URL("releases.ttl",a).href+"#it"),playlistsDoc:F(new URL("playlists.ttl",a).href),playlistsCatalog:F(new URL("playlists.ttl",a).href+"#it"),releasesDirUrl:new URL("releases/",a).href,playlistsDirUrl:new URL("playlists/",a).href,musicRootUri:new URL("genres.ttl",a).href+"#Music"}}function Gr(e){return String(e).trim().replace(/[^\w]+/g,"_").replace(/^_+|_+$/g,"").slice(0,80)||"Playlist"}function Al(e,a,r){let i=$e(a),o=i.libraryDoc,l=new Set;for(let v of e.match(i.playlistsCatalog,ce("dataset"),null))l.add(v.object.value.split("#")[0]);for(let v of e.match(o,dt("seeAlso"),null))l.add(v.object.value);let s=Gr(r),c=i.playlistsDirUrl+s,f=1;for(;l.has(c);)c=i.playlistsDirUrl+s+"_"+f,f++;return c.slice(i.playlistsDirUrl.length)}function Tl(e,a,r,i){let o=new Set(i||[]);for(let f of e.match(a.releasesCatalog,ce("dataset"),null))o.add(f.object.value.split("#")[0]);for(let f of e.match(a.releasesDoc,dt("seeAlso"),null))o.add(f.object.value);let l=Gr(r).toLowerCase()||"release",s=a.releasesDirUrl+l,c=1;for(;o.has(s);)s=a.releasesDirUrl+l+"_"+c++;return s}function Ga(e,a,r){let i="/"+String(a)+"/",o=(String(r).match(/\//g)||[]).length,l=o?"../".repeat(o):"./";return String(e).replace(/<(https?:\/\/[^>\s]+)>/g,(s,c)=>{let f=c.indexOf(i);if(f<0)return s;let v=c.slice(f+i.length);return v?`<${l}${v}>`:s})}var Kr="omp-spine-v1",$l=10080*60*1e3,Ka=()=>typeof caches<"u";async function El(e){if(!Ka())return null;try{let a=await caches.open(Kr),r=await a.match(e);if(!r)return null;let i=Number(r.headers.get("x-omp-cached-at")||0);return i&&Date.now()-i>$l?(a.delete(e),null):await r.text()}catch{return null}}async function Il(e,a,r="text/turtle"){if(!(!Ka()||a==null))try{await(await caches.open(Kr)).put(e,new Response(a,{headers:{"Content-Type":r,"x-omp-cached-at":String(Date.now())}}))}catch{}}function Br(...e){Ka()&&caches.open(Kr).then(a=>{for(let r of e)r&&a.delete(String(r).split("#")[0]).catch(()=>{})}).catch(()=>{})}async function Jn(e,{shared:a=!1,lazyReleases:r=!1,lazyPlaylists:i=!1}={}){let o=a?ke.store:$t(),l=a?ke.storeFetcher:new zr(o),s=new URL(e,window.location.href).href,c=(()=>{try{let y=$e(s);return{releases:y.releasesDoc.value,playlists:y.playlistsDoc.value}}catch{return{}}})(),f=c.releases||null,v=a&&Ka();async function h(y){let g=String(y).split("#")[0];if(!(a&&ke.isLoaded(g))){if(v){let b=await El(g);if(b!=null)try{qt(b,o,g,"text/turtle"),ke.markLoaded(g);return}catch{}}if(await l.load(g),a&&ke.markLoaded(g),v)try{let b=ke.serialize(F(g),o,g,"text/turtle");typeof b=="string"&&b.length&&await Il(g,b)}catch{}}}try{await h(s);let y=8,g=new Set([s]),b=E=>{let D=[F(E),F(E.split("#")[0]+"#it")],z=E.split("#")[0],ue=r&&f&&z===f||i&&c.playlists&&z===c.playlists?[ce("catalog"),ce("themeTaxonomy")]:[dt("seeAlso"),ce("dataset"),ce("catalog"),ce("themeTaxonomy")],oe=[];for(let Se of D)for(let Oe of ue)for(let We of o.match(Se,Oe,null))try{oe.push(new URL(We.object.value,E).href.split("#")[0])}catch{}return oe.filter(Se=>Se&&!g.has(Se)&&!/\.(meta|acl)$/i.test(Se))},p=b(s);for(;p.length;){let E=[];for(let D=0;D<p.length;D+=y){let z=p.slice(D,D+y).filter(q=>g.has(q)?!1:(g.add(q),!0));await Promise.all(z.map(async q=>{try{await h(q),E.push(...b(q))}catch(ue){console.warn("seeAlso load failed:",q,ue)}}))}p=E.filter(D=>!g.has(D))}return{store:o,baseURI:s,fetcher:l,loadDocs:async E=>{let D=[...new Set((E||[]).map(q=>q&&q.split("#")[0]))].filter(q=>q&&(a?!ke.isLoaded(q):!g.has(q))),z=0;for(let q=0;q<D.length;q+=y){let ue=D.slice(q,q+y).filter(oe=>g.has(oe)?!1:(g.add(oe),!0));await Promise.all(ue.map(async oe=>{try{a&&ke.isLoaded(oe)||(await l.load(oe),a&&ke.markLoaded(oe)),z++}catch(Se){console.warn("lazy doc load failed:",oe,Se)}}))}return z}}}catch(y){throw console.error("Error loading RDF:",y),y}}async function Xn(e,a){let r=$t(),i=async l=>{let s=await e(l,{headers:{Accept:"text/turtle"}});if(!s||s.ok===!1)throw new Error(`fetch ${l} \u2192 ${s&&s.status}`);let c=await s.text(),f=(s.headers?.get?.("Content-Type")||"text/turtle").split(";")[0].trim();qt(c,r,l.split("#")[0],f||"text/turtle")};await i(a);let o=r.any(F(a),Xe("publicTypeIndex"))?.value||r.match(null,Xe("publicTypeIndex"),null)[0]?.object?.value||null;if(!o)return{url:null,typeIndex:null,reason:"no solid:publicTypeIndex on profile"};await i(o);for(let l of r.match(null,Xe("forClass"),X("Release"))){let s=r.any(l.subject,Xe("instance"))?.value;if(s)return{url:s,typeIndex:o};let c=r.any(l.subject,Xe("instanceContainer"))?.value;if(c)return{url:new URL("index.ttl",c).href,typeIndex:o}}return{url:null,typeIndex:o,reason:"no mo:Release TypeRegistration"}}async function Wr(e,a){let r=$t(),i=await e(a,{headers:{Accept:"text/turtle"}});if(i&&i.ok!==!1){let c=(i.headers?.get?.("Content-Type")||"text/turtle").split(";")[0].trim();qt(await i.text(),r,a.split("#")[0],c||"text/turtle")}let o=je("http://www.w3.org/ns/pim/space#"),l=[],s=c=>{if(!c)return;let f=c.endsWith("/")?c:c+"/";l.includes(f)||l.push(f)};for(let c of r.match(F(a),o("storage"),null))s(c.object?.value);for(let c of r.match(null,o("storage"),null))s(c.object?.value);return s(new URL("/",a).href),l}async function Ba(e,a,r){let i=await e(a,{method:"PATCH",headers:{"Content-Type":"application/sparql-update"},body:r});if(!i||i.ok===!1)throw new Error(`PATCH ${a} \u2192 ${i&&i.status}`)}async function Qn(e,a){let r="http://www.w3.org/ns/solid/terms#",i=je("http://www.w3.org/ns/pim/space#"),o=$t();try{let v=await e(a,{headers:{Accept:"text/turtle"}});if(v&&v.ok!==!1){let h=(v.headers?.get?.("Content-Type")||"text/turtle").split(";")[0].trim();qt(await v.text(),o,a.split("#")[0],h||"text/turtle")}}catch{}let l=o.any(F(a),Xe("publicTypeIndex"))?.value||o.match(null,Xe("publicTypeIndex"),null)[0]?.object?.value||null;if(l)return l;let s=o.any(F(a),i("storage"))?.value||o.match(null,i("storage"),null)[0]?.object?.value||new URL("/",a).href,c=s.endsWith("/")?s:s+"/",f=new URL("settings/publicTypeIndex.ttl",c).href;try{let v=await e(f,{method:"PUT",headers:{"Content-Type":"text/turtle"},body:`@prefix solid: <${r}>.
<${f}> a solid:TypeIndex, solid:ListedDocument.
`});return!v||v.ok===!1?null:(await Ba(e,a.split("#")[0],`INSERT DATA { <${a}> <${r}publicTypeIndex> <${f}> . }`),f)}catch{return null}}function Zn(e,a){let r=String(a||"").replace(/[^A-Za-z0-9_-]/g,"-")||"lib";return`${e.split("#")[0]}#omp-lib-${r}`}async function eo(e,a){let r=$t(),i=async c=>{let f=await e(c,{headers:{Accept:"text/turtle"}});if(!f||f.ok===!1)throw new Error(`fetch ${c} \u2192 ${f&&f.status}`);let v=(f.headers?.get?.("Content-Type")||"text/turtle").split(";")[0].trim();qt(await f.text(),r,c.split("#")[0],v||"text/turtle")};await i(a);let o=r.any(F(a),Xe("publicTypeIndex"))?.value||r.match(null,Xe("publicTypeIndex"),null)[0]?.object?.value||null;if(!o)return{typeIndex:null,libraries:[]};await i(o);let l=[],s=new Set;for(let c of r.match(null,Xe("forClass"),X("Release"))){let f=r.any(c.subject,Xe("instance"))?.value;if(!f||s.has(f))continue;s.add(f);let v=r.any(c.subject,dt("label"))?.value||r.any(c.subject,H("title"))?.value||"";l.push({url:f,label:v,reg:c.subject.value})}return{typeIndex:o,libraries:l}}async function Wa(e,a,{id:r,url:i,label:o}){if(!a||!i)throw new Error("registerPodLibrary: typeIndex and url required");let l="http://www.w3.org/ns/solid/terms#",s=Zn(a,r),c=(o||"").replace(/[\\"]/g,"\\$&");await Ba(e,a,`DELETE { <${s}> ?p ?o } INSERT { <${s}> a <${l}TypeRegistration> ; <${l}forClass> <http://purl.org/ontology/mo/Release> ; <${l}instance> <${i}> ; <http://www.w3.org/2000/01/rdf-schema#label> "${c}" . } WHERE { OPTIONAL { <${s}> ?p ?o } }`)}async function to(e,a,{id:r,url:i}){if(!a)throw new Error("unregisterPodLibrary: typeIndex required");let o="http://www.w3.org/ns/solid/terms#",l=Zn(a,r);await Ba(e,a,`DELETE { <${l}> ?p ?o } WHERE { <${l}> ?p ?o }`),i&&await Ba(e,a,`DELETE { ?r ?p ?o } WHERE { ?r <${o}forClass> <http://purl.org/ontology/mo/Release> ; <${o}instance> <${i}> ; ?p ?o . }`)}function Vr(e){return e+"#Favorites"}var Yr=[Hr,X("MusicGroup"),X("SoloMusicArtist"),X("Label"),we("Agent"),we("Organization"),we("Person"),we("Group")],Yn={audio:{nodeTypes:Yr,nameProp:we("name"),genreProp:X("genre")},video:{nodeTypes:[B("Collection")],nameProp:B("name"),genreProp:B("genre")}},Cl=e=>Yn[e]||Yn.audio;function ao(e,a){let r=F(a.split("#")[0]+"#it"),i=e.any(r,H("type"))||e.any(F(a),H("type"));return i&&i.value===Ll("MovingImage").value?"video":"audio"}function Pl(e,a=Yr){let r=new Set,i=[];for(let o of a)for(let l of e.match(null,le("type"),o)){let s=l.subject.value;r.has(s)||(r.add(s),i.push(l.subject))}return i}function Jr(e,a,r="audio"){let i=$e(a),o=Cl(r),l=F(a.split("#")[0]+"#it"),c=e.any(l,ce("themeTaxonomy"))||e.any(F(a),ce("themeTaxonomy"))||F(i.musicRootUri),f=e.match(null,ct("topConceptOf"),c).map(h=>({id:h.subject.value,label:e.any(h.subject,ct("prefLabel"))?.value||"Unnamed Genre"})),v=[];for(let h of Pl(e,o.nodeTypes)){let y=e.any(h,o.genreProp)?.value;if(!y)continue;let g=e.any(h,H("source")),b=e.any(h,ce("landingPage"))?.value||null;v.push({node:h,label:e.any(h,o.nameProp)?.value||"Untitled",topic:y,url:b,source:null,sourcePlaylist:g?g.value:null,localData:!!g||!b})}for(let h of e.match(null,le("type"),Ht)){let y=h.subject,g=e.match(y,B("itemListElement"),null).map(b=>{let p=parseInt(e.any(b.object,B("position"))?.value,10);return{track:e.any(b.object,B("item")),pos:Number.isFinite(p)?p:Number.MAX_SAFE_INTEGER}}).filter(b=>b.track).sort((b,p)=>b.pos-p.pos);for(let{track:b}of g){let p=e.any(b,H("isPartOf"))||null,L=e.any(b,H("title"))?.value||"",E=p&&e.any(p,H("title"))?.value||"",D=e.any(b,we("maker"))||(p?e.any(p,we("maker")):null),z=D?D.termType==="Literal"?D.value:e.any(D,we("name"))?.value||"":"",q=e.any(b,X("item"))?.value,ue=p&&e.any(p,ce("landingPage"))?.value||null,oe=[z,E,L].filter(Boolean),Se=oe.length?oe.join(" \u2014 "):L||"Untitled";v.push({node:b,label:Se,topic:y.value,url:q||null,source:ue,artist:z,album:E,name:L})}}return{genres:f,bookmarks:v}}function Xr(e,a){let r=a?new URL("./",a).href:null,i=new Set,o=[];for(let l of e.match(null,le("type"),Ht)){let s=l.subject;if(r&&!s.value.startsWith(r)||i.has(s.value))continue;i.add(s.value);let c=e.any(s,H("title"))?.value||e.any(s,dt("label"))?.value||s.value.replace(/^.*\//,"")||"Untitled playlist",f=e.any(s,we("maker"))?.value||"",v=e.any(s,H("description"))?.value||"",h=e.any(s,qr("styleClass")),y=e.match(null,H("source"),s)[0]?.subject;o.push({id:s.value,name:c,maker:f,description:v,hidden:h?h.value==="hidden":!1,artistNode:y||null,label:f?`${c} (${f})`:c})}return o}var Et=!1;function Qr(e){Et=!!e;try{console.info("[omp] setSolidWriteAuthed \u2192",Et)}catch{}}try{typeof globalThis<"u"&&(globalThis.__OMP=globalThis.__OMP||{},globalThis.__OMP.writeAuthed=()=>Et,globalThis.__OMP.isRdfStore=e=>e===ke.store)}catch{}function Dl(e){if(e===ke.store&&ke.storeFetcher&&e.fetcher!==ke.storeFetcher&&(e.fetcher=ke.storeFetcher),!e.updater)try{new Vn(e)}catch{}return e.updater}async function Ae(e,a,r,i){r=r||[],i=i||[];try{console.info("[omp] runUpdate path:",e===ke.store&&Et?"pod-bypass":e===ke.store?"UpdateManager (rdf.store but NOT authed-flag)":"UpdateManager (private store)","\xB7 isRdfStore="+(e===ke.store)+" solidWriteAuthed="+Et)}catch{}if(e===ke.store&&Et){let c=new Map,f=(h,y)=>{let g=h&&h.why&&h.why.value;g&&(c.has(g)||c.set(g,{del:[],ins:[]}),c.get(g)[y].push(h))};for(let h of r)f(h,"del");for(let h of i)f(h,"ins");if(!c.size)return{ok:!0,err:null};let v=h=>`${h.subject.toNT()} ${h.predicate.toNT()} ${h.object.toNT()} .`;for(let[h,y]of c){let g=[];y.del.length&&g.push(`DELETE DATA {
${y.del.map(v).join(`
`)}
}`),y.ins.length&&g.push(`INSERT DATA {
${y.ins.map(v).join(`
`)}
}`);let b=g.join(` ;
`);try{let L=await qa(h)(h,{method:"PATCH",headers:{"Content-Type":"application/sparql-update"},body:b});if(!L||L.ok===!1){let E=`PATCH ${h} \u2192 ${L&&L.status}`;return console.warn("Persistence failed (store NOT updated):",E),{ok:!1,err:E}}}catch(p){let L=p&&(p.message||String(p));return console.warn("Persistence failed (store NOT updated):",L),{ok:!1,err:L}}Br(h);for(let p of y.del)e.remove(p);for(let p of y.ins)e.add(p.subject,p.predicate,p.object,p.why)}return{ok:!0,err:null}}let o=Dl(e);if(!o)return{ok:!1,err:"no UpdateManager available"};let l=()=>new Promise(c=>{try{o.update(r,i,(f,v,h)=>{c({ok:v,err:v?null:h})})}catch(f){c({ok:!1,err:f.message})}}),s=await l();if(!s.ok&&/uneditable|editing protocol|make changes/i.test(String(s.err))){let c=ma(e),f=new Set;for(let v of[...r,...i]){let h=v&&v.why;h&&h.value&&f.add(h.value)}for(let v of f)try{await c.load(v,{force:!0})}catch(h){console.warn("force-load failed",v,h?.message||h)}s=await l()}if(s.ok){let c=new Set;for(let f of[...r,...i]){let v=f&&f.why&&f.why.value;v&&c.add(v)}Br(...c)}else console.warn("Persistence failed (store NOT updated):",s.err);return s}function ma(e){return e===ke.store?ke.storeFetcher:(e.fetcher||(e.fetcher=new zr(e)),e.fetcher)}async function ro(e,a,r,{body:i,contentType:o}={}){try{let l;if(e===ke.store&&Et){let c={method:a};i!=null&&(c.body=i),o&&(c.headers={"Content-Type":o}),l=await qa(r)(r,c)}else{let c=i!=null?{body:i,contentType:o}:{};l=await ma(e).webOperation(a,r,c)}let s=l.ok!==!1;return s&&Br(r),{ok:s,err:s?null:`${a} ${l.status}`}}catch(l){return{ok:!1,err:l.message||String(l)}}}async function Va(e,a,r,i="text/turtle"){return ro(e,"PUT",a,{body:r,contentType:i})}async function ha(e,a){return ro(e,"DELETE",a)}function Ke(e){return'"'+String(e).replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"'}async function io(e,{title:a="New library"}={}){let r=e.endsWith("/")?e:e+"/",i=$t(),o={"index.ttl":`@prefix dct: <http://purl.org/dc/terms/> .
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
`};for(let[l,s]of Object.entries(o)){let c=await Va(i,r+l,s);if(!c.ok)return{ok:!1,err:`PUT ${l}: ${c.err}`,url:r+"index.ttl"}}return{ok:!0,url:r+"index.ttl"}}function no(e,a){let r=a?Gt(a):null,i=new Set;for(let o of e.match(null,le("type"),Ht)){let l=o.subject.value.split("#")[0];l&&l!==r&&i.add(l)}return[...i]}function Ya(e,a){let r=new Set((a||[]).map(o=>o.split("#")[0])),i=new Set;for(let o of e.match(null,B("item"),null)){let l=o.why&&o.why.value;if(!l||!r.has(l.split("#")[0]))continue;let s=o.object&&o.object.value;s&&i.add(s.split("#")[0])}return[...i]}function oo(e,a){let r=$e(a),i=new Set;for(let o of e.match(r.releasesCatalog,ce("dataset"),null))o.object?.value&&i.add(o.object.value.split("#")[0]);for(let o of e.match(r.releasesDoc,dt("seeAlso"),null))o.object?.value&&i.add(o.object.value.split("#")[0]);return[...i]}function Zr(e,a){let r=$e(a),i=new Set;for(let o of e.match(r.playlistsCatalog,ce("dataset"),null))o.object?.value&&i.add(o.object.value.split("#")[0]);for(let o of e.match(r.playlistsDoc,dt("seeAlso"),null))o.object?.value&&i.add(o.object.value.split("#")[0]);return[...i]}async function ei(e,a,r,i){let o=a.endsWith("/")?a:a+"/",l=0,s=0,c=[],f=0;for(let v of r){f++,i?.(f,r.length,v.relPath);let h=o+v.relPath;if(v.skipIfExists)try{let y=await e(h,{method:"HEAD"});if(y&&y.status===200){s++;continue}}catch{}try{let y=await e(h,{method:"PUT",headers:{"Content-Type":v.contentType||"text/turtle"},body:v.body}),g=!!y&&y.ok===!0,b=g?"2xx":"";if(!g&&y)try{let p=await e(h,{method:"GET",headers:{Accept:"*/*"}});g=!!p&&(p.ok===!0||p.status===304),b=`verified-get(${p?p.status:"no-resp"})`}catch(p){b=`verify-threw(${p.message||p})`}if(g)l++;else{let p="";try{p=(await y.text()).slice(0,120)}catch{}let L=`${v.relPath} \u2192 ${y?`${y.status} ${y.type||""}`:"no response"} [${b}] ${p}`.trim();c.push(L),console.warn("[install] PUT FAIL",L)}}catch(y){let g=`${v.relPath}: ${y.message||y}`;c.push(g),console.warn("[install] PUT THREW",g)}}return{ok:c.length===0,put:l,skipped:s,failed:c}}function Ha(e,a,r){return(e.statementsMatching(a,null,null)[0]||e.statementsMatching(null,null,a)[0])?.why||r}function so(e,a){if(!a)return null;for(let r of e.match(null,we("name"),te(a)))for(let i of Yr)if(e.holds(r.subject,le("type"),i))return r.subject;return null}async function lo(e,a,r){let i=$e(a),o=i.genresDoc,l=Gr(r),s=o.value+"#"+l,c=1;for(;e.any(F(s),null,null);)s=o.value+"#"+l+"_"+c,c++;let f=F(s),v=F(i.musicRootUri),h=[M(f,le("type"),ct("Concept"),o),M(f,le("type"),_l,o),M(f,ct("prefLabel"),te(r),o),M(f,ct("topConceptOf"),v,o)];return{...await Ae(e,o.value,[],h),id:s,label:r}}async function co(e,a,r){let i=$e(a),o=i.genresDoc,l=i.agentsDoc,s=F(r),c=e.match(s,null,null).map(h=>M(h.subject,h.predicate,h.object,o)),f=await Ae(e,o.value,c,[]);if(!f.ok)return f;let v=e.match(null,X("genre"),s).map(h=>h.subject);if(v.length){let h=[];for(let g of v)for(let b of e.match(g,null,null))h.push(M(b.subject,b.predicate,b.object,l));let y=await Ae(e,l.value,h,[]);if(!y.ok)return y}return{ok:!0}}async function uo(e,a,r,i){let l=$e(a).genresDoc,s=F(r),c=e.any(s,ct("prefLabel")),f=c?[M(s,ct("prefLabel"),c,l)]:[],v=[M(s,ct("prefLabel"),te(i),l)];return Ae(e,l.value,f,v)}async function fo(e,a,r,i,o){let s=$e(a).agentsDoc,c=crypto.randomUUID?.()??`${Date.now()}-${Math.random().toString(36).slice(2)}`,f=F(`urn:uuid:${c}`),v=[M(f,le("type"),Hr,s),M(f,we("name"),te(i),s),M(f,X("genre"),F(r),s)];return o&&v.push(M(f,ce("landingPage"),F(o),s)),{...await Ae(e,s.value,[],v),node:f}}async function po(e,a,r){let o=$e(a).agentsDoc,l=e.match(r,null,null).map(s=>M(s.subject,s.predicate,s.object,o));return Ae(e,o.value,l,[])}async function ti(e,a,r,i){let l=$e(a).agentsDoc,s=e.any(r,we("name")),c=s?[M(r,we("name"),s,l)]:[],f=[M(r,we("name"),te(i),l)];return Ae(e,l.value,c,f)}async function ai(e,a,r){typeof r=="string"&&(r={name:r});let{name:i="Untitled playlist",maker:o="",description:l=""}=r||{},s=$e(a),c=Al(e,a,i),f=s.playlistsDirUrl+c,v=["@prefix dct: <http://purl.org/dc/terms/> .","@prefix dcat: <http://www.w3.org/ns/dcat#> .","@prefix foaf: <http://xmlns.com/foaf/0.1/> .","@prefix schema: <http://schema.org/> .","","<>","    a schema:ItemList, schema:MusicPlaylist, dcat:Dataset ;","    dct:isPartOf <../playlists.ttl#it> ;","    schema:itemListOrder schema:ItemListOrderAscending ;",`    dct:title ${Ke(i)}`];o&&v.push(`    ; foaf:maker ${Ke(o)}`),l&&v.push(`    ; dct:description ${Ke(l)}`),v.push("    .","");let h=v.join(`
`),y=o?`${i} (${o})`:i,g=await Va(e,f,h);if(!g.ok)return{ok:!1,err:g.err,id:f,label:y};let b=M(s.playlistsCatalog,ce("dataset"),F(f),s.playlistsDoc),p=await Ae(e,s.playlistsDoc.value,[],[b]);if(!p.ok)return await ha(e,f),{...p,id:f,label:y};try{await ma(e).load(f,{force:!0})}catch(E){console.warn("Could not reload new playlist file for protocol detection:",E)}let L=F(f);return e.add(L,le("type"),B("ItemList"),L),e.add(L,le("type"),Ht,L),e.add(L,le("type"),ce("Dataset"),L),e.add(L,B("itemListOrder"),B("ItemListOrderAscending"),L),e.add(L,H("isPartOf"),s.playlistsCatalog,L),e.add(L,H("title"),te(i),L),o&&e.add(L,we("maker"),te(o),L),l&&e.add(L,H("description"),te(l),L),{ok:!0,id:f,label:y,name:i,maker:o,description:l}}function Gt(e){return $e(e).playlistsDirUrl+"deleted"}async function Ml(e,a){let r=$e(a),i=Gt(a),o=F(i);if(e.holds(o,le("type"),Ht))return{ok:!0,id:i};let l=["@prefix dct: <http://purl.org/dc/terms/> .","@prefix dcat: <http://www.w3.org/ns/dcat#> .","@prefix schema: <http://schema.org/> .","","<>","    a schema:ItemList, schema:MusicPlaylist, dcat:Dataset ;","    dct:isPartOf <../playlists.ttl#it> ;","    schema:itemListOrder schema:ItemListOrderAscending ;",'    dct:title "Deleted" .',""].join(`
`),s=await Va(e,i,l);if(!s.ok)return{ok:!1,err:s.err,id:i};let c=M(r.playlistsCatalog,ce("dataset"),o,r.playlistsDoc),f=await Ae(e,r.playlistsDoc.value,[],[c]);if(!f.ok)return await ha(e,i).catch(()=>{}),{...f,id:i};try{await ma(e).load(i,{force:!0})}catch(v){console.warn("Could not reload Deleted-bin file for protocol detection:",v)}return e.add(o,le("type"),B("ItemList"),o),e.add(o,le("type"),Ht,o),e.add(o,le("type"),ce("Dataset"),o),e.add(o,B("itemListOrder"),B("ItemListOrderAscending"),o),e.add(o,H("isPartOf"),r.playlistsCatalog,o),e.add(o,H("title"),te("Deleted"),o),{ok:!0,id:i}}async function mo(e,a,r,i={}){let o=F(r),l=[],s=[];if(i.name!=null){for(let c of[H("title"),dt("label"),ct("prefLabel")]){let f=e.any(o,c);f&&l.push(M(o,c,f,o))}s.push(M(o,H("title"),te(i.name),o))}if(i.maker!=null){for(let c of e.match(o,we("maker"),null))l.push(M(c.subject,c.predicate,c.object,o));i.maker&&s.push(M(o,we("maker"),te(i.maker),o))}if(i.description!=null){for(let c of e.match(o,H("description"),null))l.push(M(c.subject,c.predicate,c.object,o));i.description&&s.push(M(o,H("description"),te(i.description),o))}return!l.length&&!s.length?{ok:!0}:Ae(e,o.value,l,s)}async function ho(e,a,r){let i=$e(a),o=F(r),l=Gt(a);if(r!==l){let f=[];for(let v of e.match(o,B("itemListElement"),null)){let h=e.any(v.object,B("item"));if(!h)continue;let y=e.any(h,X("item"))?.value;if(!y)continue;let g=e.any(h,H("isPartOf"))||e.match(null,X("track"),h)[0]?.subject;f.push({url:y,source:g&&e.any(g,ce("landingPage"))?.value||null,name:e.any(h,H("title"))?.value||"",album:g&&e.any(g,H("title"))?.value||""})}if(f.length){let v=await Ml(e,a);if(!v.ok)return v;let h=await Ja(e,a,l,f);if(!h.ok)return h}}let s=M(i.playlistsCatalog,ce("dataset"),o,i.playlistsDoc),c=await Ae(e,i.playlistsDoc.value,[s],[]);if(!c.ok)return c;await ha(e,r).catch(()=>{});for(let f of e.match(o,null,null))e.remove(f);for(let f of e.match(null,null,o))e.remove(f);return{ok:!0}}async function Ja(e,a,r,i,o={}){if(!i||!i.length)return{ok:!0,nodes:[],skipped:0};let l=$e(a),s=F(r),c=!!o.inlineTracks,f=S=>String(S).padStart(2,"0"),v=new Set;for(let S of e.match(s,B("itemListElement"),null)){let N=e.any(S.object,B("item")),V=N&&e.any(N,X("item"))?.value;V&&v.add(V)}let h=new Set,y=i.filter(S=>!S||!S.url||v.has(S.url)||h.has(S.url)?!1:(h.add(S.url),!0)),g=i.length-y.length;if(!y.length)return{ok:!0,nodes:[],added:[],skipped:g};if(c){let me=function(Q,Ee,qe){if(!Q&&!Ee)return null;if(Q&&V.has(Q))return V.get(Q);if(Q&&de.has(Q))return de.get(Q).node;N+=1;let Ie=F(`${s.value}#a${f(N)}`),Ve=[M(Ie,le("type"),Bt,s)];return Ee&&Ve.push(M(Ie,H("title"),te(Ee),s)),Q&&Ve.push(M(Ie,ce("landingPage"),F(Q),s)),qe&&Ve.push(M(Ie,we("maker"),te(qe),s)),de.set(Q||`__nolp:${Ie.value}`,{node:Ie,inserts:Ve}),Ie},S=0,N=0,V=new Map,Z=Q=>Q&&Q.value&&Q.value.startsWith(s.value+"#");for(let Q of e.match(s,B("itemListElement"),null)){let Ee=e.any(Q.object,B("item"));if(Z(Ee)){let Ie=Ee.value.match(/#t(\d+)$/);Ie&&(S=Math.max(S,parseInt(Ie[1],10)))}let qe=Ee&&e.any(Ee,H("isPartOf"));if(Z(qe)){let Ie=qe.value.match(/#a(\d+)$/);Ie&&(N=Math.max(N,parseInt(Ie[1],10)));let Ve=e.any(qe,ce("landingPage"))?.value;Ve&&V.set(Ve,qe)}}let de=new Map,xe=0,Le=0;for(let Q of e.match(s,B("itemListElement"),null)){let Ee=parseInt(e.any(Q.object,B("position"))?.value,10);Number.isFinite(Ee)&&(xe=Math.max(xe,Ee));let qe=Q.object.value.match(/#e(\d+)$/);qe&&(Le=Math.max(Le,parseInt(qe[1],10)))}let ge=[],ie=[],vt=[];y.forEach((Q,Ee)=>{let qe=Q.album||"",Ie=Q.artist||"",Ve=Q.source||null,va=me(Ve,qe,Ie);S+=1;let Qe=F(`${s.value}#t${f(S)}`);ge.push(M(Qe,le("type"),jr,s)),Q.name&&ge.push(M(Qe,H("title"),te(Q.name),s)),Ie&&ge.push(M(Qe,we("maker"),te(Ie),s)),ge.push(M(Qe,X("item"),F(Q.url),s));let Kt=Or(Q.time);Number.isFinite(Kt)&&Kt>0&&ge.push(M(Qe,X("duration"),te(String(Kt),void 0,bt("decimal")),s)),va&&ge.push(M(Qe,H("isPartOf"),va,s));let ut=F(`${s.value}#e${f(Le+Ee+1)}`);ge.push(M(s,B("itemListElement"),ut,s),M(ut,le("type"),B("ListItem"),s),M(ut,B("position"),te(String(xe+Ee+1),void 0,bt("integer")),s),M(ut,B("item"),Qe,s)),ie.push(Qe),vt.push(Q)});let it=[];for(let Q of de.values())it.push(...Q.inserts);let ga=[...it,...ge],ya=120;for(let Q=0;Q<ga.length;Q+=ya){let Ee=await Ae(e,s.value,[],ga.slice(Q,Q+ya));if(!Ee.ok)return{...Ee,nodes:ie,added:vt,skipped:g}}return{ok:!0,nodes:ie,added:vt,skipped:g}}let b=new Map;for(let S of e.match(null,ce("landingPage"),null)){if(!e.holds(S.subject,le("type"),Bt))continue;let N=Ha(e,S.subject,l.releasesDoc);b.set(S.object.value,{releaseNode:S.subject,fileDoc:F(N.value)})}let p=new Map;for(let[S,N]of b)for(let V of e.match(N.releaseNode,X("track"),null)){let Z=e.any(V.object,X("item"))?.value;Z&&p.set(`${S}
${Z}`,V.object)}let L=new Set,E=(S,N)=>{let V=S&&S.match(/archive\.org\/details\/(.+?)\/?$/);return V?decodeURIComponent(V[1]):N.split("/").pop().replace(/\$?\.ttl$/,"")},D=new Map,z=S=>{let N=D.get(S.fileDoc.value);if(N==null){N=0;for(let V of e.match(S.releaseNode,X("track"),null)){let Z=V.object.value.match(/#t(\d+)$/);Z&&(N=Math.max(N,parseInt(Z[1],10)))}}return N+=1,D.set(S.fileDoc.value,N),S.fileDoc.value+"#t"+f(N)},q=new Map,ue=new Map,oe=[],Se=[];for(let S of y){let N=S.source||null,V=S.url,Z=N?`${N}
${V}`:null,de=Z?p.get(Z):null;if(!de&&N&&b.has(N)){let me=b.get(N);de=F(z(me));let xe=ue.get(me.fileDoc.value)||{fileDoc:me.fileDoc,inserts:[]};xe.inserts.push(M(de,le("type"),jr,me.fileDoc)),S.name&&xe.inserts.push(M(de,H("title"),te(S.name),me.fileDoc)),xe.inserts.push(M(de,X("item"),F(V),me.fileDoc));let Le=Or(S.time);Number.isFinite(Le)&&Le>0&&xe.inserts.push(M(de,X("duration"),te(String(Le),void 0,bt("decimal")),me.fileDoc)),xe.inserts.push(M(de,H("isPartOf"),me.releaseNode,me.fileDoc)),xe.inserts.push(M(me.releaseNode,X("track"),de,me.fileDoc)),ue.set(me.fileDoc.value,xe),Z&&p.set(Z,de)}if(!de){let me=N||`urn:nolp:${V}`,xe=q.get(me);if(!xe){let Le=Tl(e,l,S.album||S.name||"release",L);L.add(Le),xe={fileUrl:Le,lp:N,ident:E(N,Le),releaseNode:F(Le+"#it"),title:S.album||"(untitled album)",artist:S.artist||"",tracks:[]},q.set(me,xe)}de=F(`${xe.fileUrl}#t${f(xe.tracks.length+1)}`),xe.tracks.push({node:de,name:S.name,dl:V,dur:Or(S.time)}),Z&&p.set(Z,de)}oe.push(de),Se.push(S)}let Oe=S=>({...S,nodes:oe,added:Se,skipped:g});for(let S of q.values()){let N=S.artist?so(e,S.artist):null,V=S.artist?N?`<${N.value}>`:Ke(S.artist):null,Z=["a mo:Release, dcat:Dataset",`dct:title ${Ke(S.title)}`,`dct:identifier ${Ke(S.ident)}`,"dct:isPartOf <../releases.ttl#it>"];S.lp&&Z.push(`dcat:landingPage <${S.lp}>`),Z.push("mo:track "+S.tracks.map(ie=>`<#t${f(S.tracks.indexOf(ie)+1)}>`).join(", ")),V&&Z.push(`foaf:maker ${V}`);let de=["@prefix dct: <http://purl.org/dc/terms/> .","@prefix mo: <http://purl.org/ontology/mo/> .","@prefix dcat: <http://www.w3.org/ns/dcat#> .","@prefix foaf: <http://xmlns.com/foaf/0.1/> .","",`<#it>
    `+Z.join(` ;
    `)+" .",""];S.tracks.forEach((ie,vt)=>{let it=["a mo:Track",`dct:title ${Ke(ie.name||"")}`];Number.isFinite(ie.dur)&&ie.dur>0&&it.push(`mo:duration ${Ke(String(ie.dur))}`),it.push(`mo:item <${ie.dl}>`),it.push("dct:isPartOf <#it>"),de.push(`<#t${f(vt+1)}>
    `+it.join(` ;
    `)+" .","")});let me=await Va(e,S.fileUrl,de.join(`
`));if(!me.ok)return Oe(me);let xe=[M(l.releasesCatalog,ce("dataset"),S.releaseNode,l.releasesDoc)],Le=await Ae(e,l.releasesDoc.value,[],xe);if(!Le.ok)return await ha(e,S.fileUrl).catch(()=>{}),Oe(Le);try{await ma(e).load(S.fileUrl,{force:!0})}catch(ie){console.warn("reload new release file failed:",ie?.message||ie)}let ge=F(S.fileUrl);e.add(S.releaseNode,le("type"),Bt,ge),e.add(S.releaseNode,le("type"),ce("Dataset"),ge),e.add(S.releaseNode,H("title"),te(S.title),ge),e.add(S.releaseNode,H("identifier"),te(S.ident),ge),e.add(S.releaseNode,H("isPartOf"),l.releasesCatalog,ge),S.lp&&e.add(S.releaseNode,ce("landingPage"),F(S.lp),ge),S.artist&&e.add(S.releaseNode,we("maker"),N||te(S.artist),ge);for(let ie of S.tracks)e.add(ie.node,le("type"),jr,ge),ie.name&&e.add(ie.node,H("title"),te(ie.name),ge),e.add(ie.node,X("item"),F(ie.dl),ge),Number.isFinite(ie.dur)&&ie.dur>0&&e.add(ie.node,X("duration"),te(String(ie.dur),void 0,bt("decimal")),ge),e.add(ie.node,H("isPartOf"),S.releaseNode,ge),e.add(S.releaseNode,X("track"),ie.node,ge)}for(let S of ue.values()){let N=await Ae(e,S.fileDoc.value,[],S.inserts);if(!N.ok)return Oe(N)}let We=0,P=0;for(let S of e.match(s,B("itemListElement"),null)){let N=parseInt(e.any(S.object,B("position"))?.value,10);Number.isFinite(N)&&(We=Math.max(We,N));let V=S.object.value.match(/#e(\d+)$/);V&&(P=Math.max(P,parseInt(V[1],10)))}let K=[];oe.forEach((S,N)=>{let V=F(`${s.value}#e${f(P+N+1)}`);K.push(M(s,B("itemListElement"),V,s),M(V,le("type"),B("ListItem"),s),M(V,B("position"),te(String(We+N+1),void 0,bt("integer")),s),M(V,B("item"),S,s))});let ae=160;for(let S=0;S<K.length;S+=ae){let N=await Ae(e,s.value,[],K.slice(S,S+ae));if(!N.ok)return Oe(N)}return{ok:!0,nodes:oe,added:Se,skipped:g}}async function bo(e,a,r,i){let o=F(r),l=[],s=null;for(let h of e.match(o,B("itemListElement"),null)){let y=h.object,g=e.any(y,B("item")),b=parseInt(e.any(y,B("position"))?.value,10);if((g&&e.any(g,X("item"))?.value)===i&&!s){s={ent:y,trk:g,pos:b};continue}l.push({ent:y,trk:g,pos:Number.isFinite(b)?b:Number.MAX_SAFE_INTEGER})}if(!s)return{ok:!0};let c=[M(o,B("itemListElement"),s.ent,o),M(s.ent,le("type"),B("ListItem"),o),M(s.ent,B("position"),te(String(s.pos),void 0,bt("integer")),o),M(s.ent,B("item"),s.trk,o)],f=[];l.sort((h,y)=>h.pos-y.pos).forEach((h,y)=>{let g=y+1;h.pos!==g&&(c.push(M(h.ent,B("position"),te(String(h.pos),void 0,bt("integer")),o)),f.push(M(h.ent,B("position"),te(String(g),void 0,bt("integer")),o)))});let v=await Ae(e,o.value,c,f);if(!v.ok)return v;if(a&&r===Gt(a))try{let h=$e(a),y=o,g=e.any(s.trk,H("isPartOf"))||e.match(null,X("track"),s.trk)[0]?.subject;if(g&&e.holds(g,le("type"),Bt)){let b=e.match(g,X("track"),null).map(L=>L.object),p=!1;e:for(let L of b)for(let E of e.match(null,B("item"),L)){let D=e.match(null,B("itemListElement"),E.subject)[0]?.subject;if(D&&D.value!==y.value){p=!0;break e}}if(!p){let L=Ha(e,g,h.releasesDoc),E=[];for(let D of e.match(h.releasesCatalog,ce("dataset"),g))E.push(M(D.subject,D.predicate,D.object,h.releasesDoc));for(let D of e.match(h.releasesDoc,dt("seeAlso"),null))D.object.value===L.value&&E.push(M(D.subject,D.predicate,D.object,h.releasesDoc));E.length&&await Ae(e,h.releasesDoc.value,E,[]),await ha(e,L.value).catch(()=>{});for(let D of b){for(let z of e.match(D,null,null))e.remove(z);for(let z of e.match(null,null,D))e.remove(z)}for(let D of e.match(g,null,null))e.remove(D);for(let D of e.match(null,null,g))e.remove(D)}}}catch(h){console.warn("Deleted-bin release GC failed (orphan left for sweep):",h?.message||h)}return{ok:!0}}async function go(e,a,r,i={}){let o=$e(a),l=Ha(e,r,o.releasesDoc),s=[],c=[];if(i.title!=null){for(let f of e.match(r,H("title"),null))s.push(M(f.subject,f.predicate,f.object,l));i.title&&c.push(M(r,H("title"),te(i.title),l))}if(i.artist!=null){for(let f of e.match(r,we("maker"),null))s.push(M(f.subject,f.predicate,f.object,l));i.artist&&c.push(M(r,we("maker"),te(i.artist),l))}if(i.album!=null){let f=e.match(null,X("track"),r)[0]?.subject;if(f){let v=Ha(e,f,l);for(let h of e.match(f,H("title"),null))s.push(M(h.subject,h.predicate,h.object,v));i.album&&c.push(M(f,H("title"),te(i.album),v))}}return!s.length&&!c.length?{ok:!0}:Ae(e,l.value,s,c)}function yo(e,a){let r=e.match(null,X("track"),a)[0]?.subject;if(!r)return 0;let i=e.match(r,X("track"),null).length;return Math.max(0,i-1)}function ri(e,a){let r=[],i=new Set,o=s=>{e.holds(s,le("type"),Bt)&&(i.has(s.value)||(i.add(s.value),r.push({name:e.any(s,H("title"))?.value||e.any(s,ce("landingPage"))?.value||s.value,url:s.value,_local:!0,_releaseNode:s})))},l=e.any(a,H("source"));if(l){for(let s of e.match(l,B("itemListElement"),null)){let c=e.any(s.object,B("item")),f=c&&e.any(c,H("isPartOf"));f&&o(f)}return r}for(let s of e.match(null,we("maker"),a))o(s.subject);return r}function vo(e,a){if(!e||!a)return null;let r=e.match(null,X("item"),F(a));return r.length?r[0].subject:null}function wo(e,a){let r=[];for(let i of e.match(a,X("track"),null)){let o=i.object,l=e.any(o,X("item"))?.value;if(!l)continue;let s=e.any(o,X("duration"))?.value;r.push({url:l,name:e.any(o,H("title"))?.value||o.value,time:Ul(s),node:o,_lengthSec:s!=null?parseFloat(s):NaN,_bitrate:NaN})}return r}function Ul(e){let a=parseFloat(e);if(!Number.isFinite(a)||a<=0)return"";let r=Math.floor(a/60),i=Math.floor(a%60);return`${r}:${String(i).padStart(2,"0")}`}async function xo(e,a,r,i={}){let l=$e(a).agentsDoc,s=F(r),c=(i.name||e.any(s,H("title"))?.value||"Untitled Artist").trim(),f=i.genreId;if(!f)return{ok:!1,err:"a genre is required"};let v=new Set;for(let L of e.match(s,B("itemListElement"),null)){let E=e.any(L.object,B("item")),D=E&&e.any(E,H("isPartOf"));D&&e.holds(D,le("type"),Bt)&&v.add(D.value)}let h=e.match(null,H("source"),s)[0]?.subject||so(e,c),y=h||F(`urn:uuid:${crypto.randomUUID?.()??`${Date.now()}-${Math.random().toString(36).slice(2)}`}`),g=h?e.statementsMatching(h,null,null).filter(L=>(L.why?.value||l.value)===l.value):[],b=[M(y,le("type"),Hr,l),M(y,we("name"),te(c),l),M(y,X("genre"),F(f),l),M(y,H("source"),s,l)],p=await Ae(e,l.value,g,b);return p.ok?{ok:!0,node:y,name:c,genreId:f,albumCount:v.size,relinked:!!h}:{...p,node:null}}async function ii(e,a,r){let o=$e(a).agentsDoc,l=F(r),s=e.match(null,H("source"),l)[0]?.subject;if(!s)return{ok:!0,node:null};let c=e.statementsMatching(s,null,null).filter(v=>(v.why?.value||o.value)===o.value),f=await Ae(e,o.value,c,[]);return f.ok?(await ni(e,a,r,!1).catch(()=>{}),{ok:!0,node:s}):{...f,node:s}}async function ni(e,a,r,i){let o=F(r),l=e.statementsMatching(o,qr("styleClass"),null),s=i?[M(o,qr("styleClass"),te("hidden"),o)]:[];return!l.length&&!s.length?{ok:!0}:Ae(e,o.value,l,s)}function Or(e){if(!e)return NaN;let a=String(e).trim();if(!a)return NaN;if(/^[0-9.]+$/.test(a))return parseFloat(a);let r=a.split(":").map(Number);return r.some(i=>!Number.isFinite(i))?NaN:r.length===3?r[0]*3600+r[1]*60+r[2]:r.length===2?r[0]*60+r[1]:r[0]}function ko(e){let a=String(e).trim();if(!a)return null;let r=a.match(/archive\.org\/details\/([^\/?\s#]+)/);return r?{id:r[1],url:`https://archive.org/details/${r[1]}`}:/^[a-zA-Z0-9._-]+$/.test(a)?{id:a,url:`https://archive.org/details/${a}`}:null}var kd=(()=>{try{return/[?&](code|state)=/.test(location.search)}catch{return!1}})();function Xa(e){return typeof e=="string"&&e.startsWith("file:")?"dkfile:"+e.slice(5):e}var Rl=!0;function Nl({libraryConfigs:e,libs:a,host:r}){let i=()=>ft()[0]?.mediaType||"audio",o=r?.getAttribute?.("storage-ns")||"",l=o?":"+o:"",s=!!o,c=!!r?.hasAttribute?.("favourites-only"),f=()=>i()==="video"?"MovingImage":"Sound",v=new Set,h=[],y=on({mediaType:i(),panel:s}),{container:g,audio:b,status:p,trackCount:L,nowPlaying:E,filmIntro:D,filmIntroTitle:z,filmIntroLength:q,filmIntroAbout:ue,filmIntroRights:oe,prevBtn:Se,playBtn:Oe,nextBtn:We,seekSlider:P,timeCur:K,timeDur:ae,volumeSlider:S,sourcesList:N,favouritesList:V,librariesList:Z,genreList:de,artistList:me,albumList:xe,trackTable:Le,trackHead:ge,trackBody:ie,trackEmpty:vt,randomizeBtn:it,clearTracksBtn:ga,helpMenuItem:ya,helpLinkMenuItem:Q,loginHelpMenuItem:Ee,filtersMenuItem:qe,savePlaylistMenuItem:Ie,installPodMenuItem:Ve,updateAppMenuItem:va,viewDeletedMenuItem:Qe,importMusicMenuItem:Kt,addPlaylistBtn:ut,addSourceBtn:Co,addGenreBtn:er,addArtistBtn:tr,genreColumnFooter:Wt,artistColumnFooter:It,themeToggle:Vt,fontSizeBtn:wa,setMenuOpen:Ze}=y,Ct=document.documentElement,xa=()=>document.querySelector("sol-default");function ar(){return Ct.getAttribute("data-theme")||xa()?.getAttribute("theme")||(matchMedia("(prefers-color-scheme: light)").matches?"light":"dark")}function rr(){return Ct.getAttribute("data-fontsize")||xa()?.getAttribute("fontsize")||"medium"}function fi(){let t=ar()!=="light";if(Vt){Vt.setAttribute("aria-checked",t?"true":"false");let d=Vt.querySelector(".gear-theme-ico"),u=Vt.querySelector(".gear-theme-label");d&&(d.textContent=t?"\u{1F319}":"\u2600\uFE0F"),u&&(u.textContent=t?"Dark mode":"Light mode")}let n=rr();if(wa){let d=wa.querySelector(".gear-fontsize-label");d&&(d.textContent="Text size: "+n[0].toUpperCase()+n.slice(1));let u=wa.querySelector(".gear-fontsize-ico");u&&(u.style.fontSize=n==="small"?"0.8rem":n==="large"?"1.2rem":"1rem")}}let ir=["small","medium","large"];function Po(t){Ct.setAttribute("data-theme",t);try{localStorage.setItem("dk:theme",t)}catch{}document.dispatchEvent(new CustomEvent("omp:appearance"))}function Do(t){Ct.setAttribute("data-fontsize",t);try{localStorage.setItem("dk:fontsize",t)}catch{}document.dispatchEvent(new CustomEvent("omp:appearance"))}xa()?.hasAttribute("theme")||Ct.setAttribute("data-theme",ar()),xa()?.hasAttribute("fontsize")||Ct.setAttribute("data-fontsize",rr()),Vt?.addEventListener("click",()=>Po(ar()==="light"?"dark":"light")),wa?.addEventListener("click",()=>{Do(ir[(ir.indexOf(rr())+1)%ir.length])}),document.addEventListener("omp:appearance",fi),fi();function Mo(){try{return!!document.querySelector("sol-default")?.hasAttribute("solid-kitchen")}catch{return!1}}function Yt(){return document.querySelector("sol-login")}function ka(){let t=Yt();return!!(t&&t.isLoggedIn)}function nt(){return ka()||Mo()}function Sa(){let t=!nt();g.classList.toggle("guest-mode",t);let n=ka(),d=n&&Yt()?.webId||"",u=g.querySelector(".manage-btn");u&&(u.classList.toggle("logged-in",n),u.title=d||"Menu");try{r?.dispatchEvent(new CustomEvent("omp:access",{detail:{guest:t,real:n,webId:d}}))}catch{}}function nr(t,n){return t.map(d=>({...d,_lib:n.config.id}))}let wt=[],re=[],Ne=[],Pe=new Set,xt=new Set;function ft(){return a.filter(t=>t.store&&e.find(n=>n.id===t.config.id)?.enabled)}function ot(){let t=ft();wt=t.flatMap(n=>nr(n.genres,n)),re=t.flatMap(n=>nr(n.bookmarks,n)),Ne=t.flatMap(n=>nr(n.playlists,n)),Pe=new Set(Ne.map(n=>n.id)),xt=new Set(t.map(n=>Vr(n.baseURI)))}function or(t=i()){return t==="video"?{genre:"Film Types",artist:"Collections",album:"Movies",addGenre:"+ Add film type",addArtist:"+ Add collection",allGenre:"(All film types)",allArtist:"(All collections)",allAlbum:"(All movies)",find:"Find a film\u2026",chooseArtist:"Choose a collection to see films.",loadingAlbums:"Loading films\u2026",noAlbums:"No films found."}:{genre:"Genres",artist:"Artists",album:"Albums",addGenre:"+ Add genre",addArtist:"+ Add artist",allGenre:"(All genres)",allArtist:"(All artists)",allAlbum:"(All albums)",find:"Search the Internet Archive\u2026",chooseArtist:"Choose an artist to see albums.",loadingAlbums:"Loading albums\u2026",noAlbums:"No albums found."}}function pi(){let t=i();g.classList.toggle("media-video",t==="video"),g.classList.toggle("media-audio",t!=="video");let n=or(t);for(let x of["genre","artist","album"]){let k=g.querySelector(`[data-column="${x}"] .ia-column-header`);k&&(k.textContent=n[x])}er&&(er.textContent=n.addGenre),tr&&(tr.textContent=n.addArtist),lt.setAllLabel(n.allGenre),tt.setAllLabel(n.allArtist),ye.setAllLabel(n.allAlbum);let d=g.querySelector(".ia-artist-search-input");d&&(d.placeholder=n.find);let u=g.querySelector(".ia-artist-search"),m=g.querySelector(".ia-nowplaying"),w=g.querySelector(".ia-toolbar");u&&(t==="video"&&m&&u.parentElement!==m?m.appendChild(u):t!=="video"&&w&&u.parentElement===m&&w.appendChild(u)),tt.getSelection().size===0&&!at&&U==="library"&&ye.setMessage(n.chooseArtist),g.classList.toggle("has-video",t==="video"&&Xt)}function et(t){if(!t?.store)return;let n=Jr(t.store,t.baseURI,t.mediaType);t.genres=n.genres,t.bookmarks=n.bookmarks,t.playlists=Xr(t.store,t.baseURI),ot()}async function La(t,n){if(!t?.store||typeof t.loadDocs!="function"||!n?.length)return!1;let d=0;try{d=await t.loadDocs(n)}catch(u){console.warn("[lazy] release load failed:",u?.message||u)}return d&&et(t),d>0}function Uo(t,n){return t?.store?Ya(t.store,[String(n).split("#")[0]]):[]}function Fe(){return ft()[0]||null}function _a(t){return a.find(n=>n.config.id===t)||null}let Ye=null,kt=!1,pt=!1,Pt=!1,Je=null;function sr(){ot(),Be(),ve(),Ue(),Me(),mt(),U="library",ht("library")}function mi(){ot(),Be(),ve(),Ue(),Me(),mt(),ht(U)}async function Ro(t){for(let u=a.length-1;u>=0;u--)a[u].config.solid&&a.splice(u,1);for(let u=e.length-1;u>=0;u--)e[u].solid&&e.splice(u,1);Ye||(Ye=e.map(u=>[u.id,u.enabled])),e.forEach(u=>{u.enabled=!1});let n={id:"solid",label:"My Pod",url:t,enabled:!0,solid:!0};e.push(n);let d=await gt(n);if(!d.store){let u=e.indexOf(n);if(u>=0&&e.splice(u,1),Ye){for(let[m,w]of Ye){let x=e.find(k=>k.id===m);x&&(x.enabled=w)}Ye=null}for(let m of e){if(m.solid||!m.enabled||a.some(k=>k.config.id===m.id&&k.store))continue;let w=await gt(m),x=a.findIndex(k=>k.config.id===m.id);x>=0?a[x]=w:a.push(w)}return kt=!1,pt=!1,sr(),{ok:!1,err:d.error}}a.push(d);try{let u=new URL(t,location.href).href,m=w=>w&&!w.solid&&w.url&&(()=>{try{return new URL(w.url,location.href).href===u}catch{return!1}})();for(let w=a.length-1;w>=0;w--)m(a[w].config)&&a.splice(w,1);for(let w=e.length-1;w>=0;w--)m(e[w])&&e.splice(w,1);Ye&&(Ye=Ye.filter(([w])=>e.some(x=>x.id===w)))}catch(u){console.warn("[pod] self-hosted dedupe skipped:",u?.message||u)}return kt=!!(Ce&&Ce.isLoggedIn),pt=!kt,Pt=!1,sr(),{ok:!0,authed:kt}}function Yl(){To();for(let t=a.length-1;t>=0;t--)a[t].config.solid&&a.splice(t,1);for(let t=e.length-1;t>=0;t--)e[t].solid&&e.splice(t,1);if(Ye){for(let[t,n]of Ye){let d=e.find(u=>u.id===t);d&&(d.enabled=n)}Ye=null}else e.forEach(t=>{t.enabled=!0});kt=!1,pt=!1,Pt=!1,sr()}let Dt="random",Jt="off",No=!1,lr=!1,U="library",Mt=[];ot();let hi="ia-player:state"+l;o&&g.classList.add("panel-instance"),e.length===1&&g.classList.add("single-library");let St=null,cr=!1;function Fo(){try{let t=localStorage.getItem(hi);return t?JSON.parse(t):null}catch(t){return console.warn("Could not read saved state:",t),null}}function bi(t){try{localStorage.setItem(hi,JSON.stringify(t))}catch(n){console.warn("Could not write state:",n)}}let gi=new Set(["title","artist","album"]);function zo(){let t={};return Le&&Le.querySelectorAll("col").forEach(n=>{n.style.width&&!gi.has(n.dataset.col)&&(t[n.dataset.col]=n.style.width)}),t}function jo(t){if(!(!t||!Le))for(let[n,d]of Object.entries(t)){if(gi.has(n))continue;let u=Le.querySelector(`col[data-col="${CSS.escape(n)}"]`);u&&(u.style.width=d)}}function yi(){let t=sa?.getSort?.()??{col:null,dir:"asc"};return{shuffle:Dt==="random",repeat:Jt,volume:b.volume,source:U,genreSel:[...lt.getSelection()],artistSel:[...tt.getSelection()],albumSel:[...ye.getSelection()],sortCol:t.col,sortDir:t.dir,columnWidths:zo(),sourcesWidth:g.style.getPropertyValue("--ia-sources-width")||"",browserHeight:g.style.getPropertyValue("--ia-browser-height")||"",libraryTracks:ne.map(n=>({id:n.id,url:n.url,name:n.name,artist:n.artist||"",album:n.album||"",albumUrl:n.albumUrl||"",time:n.time||"",node:n.node?.value||null,_lib:n._lib})),currentTrackUrl:J?.url||null,currentTrack:J?{id:J.id,url:J.url,name:J.name,artist:J.artist||"",album:J.album||"",albumUrl:J.albumUrl||"",time:J.time||"",node:J.node?.value||null,_lib:J._lib}:null,currentTime:J&&b.src===Xa(J.url)&&Number.isFinite(b.currentTime)?b.currentTime:0}}function Te(){cr||(St&&clearTimeout(St),St=setTimeout(()=>{St=null,bi(yi())},400))}function Oo(){St&&(clearTimeout(St),St=null),bi(yi())}window.addEventListener("beforeunload",Oo);async function qo(){let t=Fo();if(t){cr=!0;try{typeof t.volume=="number"&&(b.volume=Math.min(1,Math.max(0,t.volume)),S.value=String(b.volume)),Lr(t.shuffle?"random":"ordered"),zi(t.repeat||"off"),jo(t.columnWidths),t.sourcesWidth&&g.style.setProperty("--ia-sources-width",t.sourcesWidth),t.browserHeight&&g.style.setProperty("--ia-browser-height",t.browserHeight),t.sortCol&&sa.setSort&&sa.setSort(t.sortCol,t.sortDir),Array.isArray(t.genreSel)&&t.genreSel.length&&lt.setSelection(t.genreSel,{notify:!1}),ve(),Array.isArray(t.artistSel)&&t.artistSel.length&&tt.setSelection(t.artistSel,{notify:!1});let n=new Set(e.filter(m=>m.enabled).map(m=>m.id));Array.isArray(t.libraryTracks)&&t.libraryTracks.length&&(ne=t.libraryTracks.map(m=>({...m,node:m.node?F(m.node):null})).filter(m=>!m._lib||n.has(m._lib)));let d=t.source&&t.source!=="library"&&Pe.has(t.source);t.source==="favorites"?(U="favorites",st.setSelection(["favorites"],{notify:!1}),g.classList.add("source-favorites"),Ui(),Pa()):d?(U=t.source,st.setSelection([t.source],{notify:!1}),ia(t.source)):(t.source&&t.source!=="library"&&t.source!=="favorites"&&(Qt=t.source),U="library",j=ne,He=_t(),fe()),ea(),d||(await Ue(),Array.isArray(t.albumSel)&&t.albumSel.length&&ye.setSelection(t.albumSel,{notify:!1}));let u=!1;for(let m of ne)if(!m.node)for(let w of ft()){let x=w.store&&vo(w.store,m.url);if(x){m.node=x,u=!0;break}}if(u&&U==="library"&&fe(),t.currentTrackUrl){let m=ne.find(k=>k.url===t.currentTrackUrl)||j.find(k=>k.url===t.currentTrackUrl),w=!m&&t.currentTrack&&t.currentTrack.url===t.currentTrackUrl,x=m||(w?{...t.currentTrack,node:t.currentTrack.node?F(t.currentTrack.node):null}:null);if(x&&(w||!x._lib||n.has(x._lib))){J=x,Xt=i()==="video",g.classList.toggle("has-video",Xt),Fa(E,Fi(x)),fe(),b.src=Xa(x.url);let k=Number.isFinite(t.currentTime)&&t.currentTime>0?t.currentTime:0;if(k>0){let _=()=>{b.removeEventListener("loadedmetadata",_);try{b.currentTime=k}catch{}};b.addEventListener("loadedmetadata",_)}b.load()}}}finally{cr=!1}}}let j=[],ne=[],Ut=null,Aa=!1,J=null,Xt=!1,Qt=null,Lt=new Map,Rt=new Map;function Ta(t){t&&Lt.delete(t)}function dr(t){let n=Ne.find(d=>d.id===t);n?.artistNode&&Ta(n.artistNode.value)}let vi="omp-player:quality-filter"+l,$a={minTrackDurationSec:180,minTrackBitrateKbps:0,minItemRuntimeSec:0,minDownloads:0,blockedCollections:[],applyToCatalogArtists:!1};function Bo(){try{let t=localStorage.getItem(vi);if(!t)return{...$a};let n=JSON.parse(t);return{...$a,...n}}catch{return{...$a}}}function Ho(t){try{localStorage.setItem(vi,JSON.stringify(t))}catch(n){console.warn("Could not persist filter:",n)}}let Nt=Bo();function ur(t){return t[Math.floor(Math.random()*t.length)]}function Go(t){return t?.match(/(?:\/details\/|archive\.org\/details\/)([^/?]+)/)?.[1]??null}function Ft(t){return t.node?.value||t.url}function Zt(t,n){return t.label.localeCompare(n.label,void 0,{sensitivity:"base"})}function Ko(t){return/\b40[13]\b|unauthor|forbidden|not allowed|permission|credential/i.test(String(t||""))}function fr(){let t=Yt();if(!t)return!1;if(!s)try{Ze(!0)}catch{}try{t.scrollIntoView?.({block:"nearest",inline:"nearest"});let n=t.shadowRoot&&t.shadowRoot.querySelector(".auth-btn");if(n)return n.click(),!0;if(typeof t._handleClick=="function")return t._handleClick(),!0;if(t.issuers&&t.issuers[0])return t.login(t.issuers[0]),!0}catch{}return!1}function Wo(t){if(!pt)return!1;let n=!!(Ce&&Ce.isLoggedIn);return T(p,n?`"${t}" not saved \u2014 your pod denied the write (no permission). Changes stay in this browser only.`:`"${t}" not saved \u2014 log in to save to your pod. Changes stay in this browser only.`),Pt||n||(Pt=!0,confirm(`Couldn't save "${t}" to your pod.

You're in guest mode (not signed in). This change needs a Solid login to save \u2014 creating playlists works without one, but editing the library does not.

Log in now?

OK = Log in (you'll need to redo this change after signing in)
Cancel = keep working in this browser (changes won't be saved)`)&&(fr()||T(p,'Open the gear menu and click "Log in" to sign in to your pod.'))),!0}function Re(t,n){if(t&&t.ok)return!0;let d=t?.err||"persistence failed";return console.warn(`checkSaved: ${n}:`,t),pt&&Ko(d)?Wo(n):T(p,`Couldn't ${n}: ${d}. No changes saved.`),!1}function Ea(t){return`<button type="button" class="ia-src-edit ia-row-kebab" data-action="edit" aria-label="Edit ${se(t)}" aria-haspopup="menu" title="Edit" tabindex="-1">\u22EF</button>`}function wi(t,n,{onCommit:d}){if(!t)return;let u=t.innerHTML;t.innerHTML=`<input type="text" class="ia-row-rename" value="${se(n)}" aria-label="Rename" spellcheck="false">`;let m=t.querySelector("input");m.focus(),m.select();let w=!1,x=()=>{t.innerHTML=u},k=()=>{if(w)return;w=!0;let A=m.value.trim();A&&A!==n?d(A):x()},_=()=>{w||(w=!0,x())};m.addEventListener("keydown",A=>{A.stopPropagation(),A.key==="Enter"?(A.preventDefault(),k()):A.key==="Escape"&&(A.preventDefault(),_())}),m.addEventListener("click",A=>A.stopPropagation()),m.addEventListener("dblclick",A=>A.stopPropagation()),m.addEventListener("mousedown",A=>A.stopPropagation()),m.addEventListener("blur",k)}let xi=Tt(Z,{onChange:t=>Yo(t),showAll:!1,multiSelect:!1,allowDeselect:!1,renderItemActions:t=>Ea(t.label),onItemAction:(t,n,d)=>{t==="edit"&&as(n,d)}}),st=Tt(N,{onChange:t=>ht([...t][0]||"library"),showAll:!1,multiSelect:!1,allowDeselect:!0,renderItemActions:t=>Ea(t.label),onItemAction:(t,n,d)=>{t==="edit"&&Li(n,d)},onItemDrop:(t,n)=>ls(t,n)}),ki=Tt(V,{onChange:t=>{let n=[...t][0];if(!n)return;let d=h.find(u=>(u.item||u.link)===n);d&&Vo(d)},showAll:!1,multiSelect:!1,allowDeselect:!0,renderItemActions:()=>nt()?'<button type="button" class="ia-row-favdel" data-action="favdel" title="Remove from the communal favourites" aria-label="Remove favourite" tabindex="-1">\u2715</button>':"",onItemAction:(t,n)=>{t==="favdel"&&confirm("Remove this favourite from the communal wall?")&&Da(n)}});function Si(){let t=h.map(n=>({id:n.item||n.link,label:n.canonicalTitle||"Untitled",title:n.contributors?.length?`Favourited by ${n.contributors.map(d=>d.name).join(", ")}`:"",_fav:n})).sort((n,d)=>n.label.localeCompare(d.label,void 0,{sensitivity:"base"}));ki.setItems(t),ki.setMessage(t.length?null:i()==="video"?"No favourite films yet \u2014 tap \u2606 on a film.":"No favourites yet \u2014 tap \u2606 on a track.")}function Vo(t){let n=t.link||t.item,d=t.canonicalTitle||"Untitled";if(i()==="video"){$i({url:n,name:d});return}Ge({id:n,url:n,name:d,album:"Community Favorites",albumUrl:"",time:"",artist:""})}function mt(){let t=d=>d==="video"?"\u{1F3AC}":"\u{1F3B5}";xi.setItems(e.map(d=>{let u=a.find(w=>w.config.id===d.id),m=u&&u.mediaType||d.mediaType||"audio";return{id:d.id,label:`${t(m)} ${d.label}`}}));let n=e.filter(d=>d.enabled).map(d=>d.id);xi.setSelection(n,{notify:!1})}mt();function Me(){let t=Ne.filter(n=>!n.hidden&&!n.id.endsWith("/playlists/deleted")).map(n=>({id:n.id,label:n.label,title:n.description||""}));st.setItems(t),t.some(n=>n.id===U)?st.setSelection([U],{notify:!1}):(U==="favorites"&&(U="library"),st.setSelection([],{notify:!1})),ea()}function ea(){g.classList.toggle("viewing-playlist",Pe.has(U)),g.classList.toggle("viewing-library",U==="library")}Me(),Si(),c&&(g.classList.add("favourites-only"),ut&&(ut.hidden=!0));function zt(){if(!o){ui(e);for(let t of e)t.url&&!t.solid&&Ol(t.url,t.enabled)}}async function Yo(t){e.forEach(n=>{n.enabled=t.has(n.id)}),zt();for(let n of e){if(!n.enabled)continue;let d=a.findIndex(u=>u.config.id===n.id);d>=0&&a[d].unloaded&&(T(p,`Loading "${n.label}"\u2026`),a[d]=await gt(n),T(p,a[d].error?`Could not load "${n.label}": ${a[d].error}`:`Loaded "${n.label}".`))}ot(),pi(),U!=="library"&&U!=="favorites"&&!Pe.has(U)&&(U="library"),lt.setSelection([],{notify:!1}),tt.setSelection([],{notify:!1}),ye.setSelection([],{notify:!1}),j=ne,Be(),ve(),Ue(),Me(),U==="library"?(j=ne,He=_t(),fe()):U==="favorites"?Mi():ia(U)}async function pr(t){if(!(!Je||!Je.typeIndex||!t||t.solid||!t.url))try{await Wa(Je.authedFetch,Je.typeIndex,{id:t.id,url:new URL(t.url,location.href).href,label:t.label})}catch(n){console.warn("type-index register failed (kept locally):",n?.message||n)}}async function Jo(t){if(!(!Je||!Je.typeIndex||!t))try{await to(Je.authedFetch,Je.typeIndex,{id:t.id,url:t.url?new URL(t.url,location.href).href:null})}catch(n){console.warn("type-index unregister failed:",n?.message||n)}}async function Jl(t,n){let d;try{d=await eo(t,n)}catch(k){console.warn("listRegisteredLibraries failed:",k?.message||k);return}let u=d.typeIndex;if(Je=u?{authedFetch:t,webId:n,typeIndex:u}:null,!u)return;let m=new Set(d.libraries.map(k=>k.url));for(let k of e){if(k.solid||!k.url)continue;let _=new URL(k.url,location.href).href;if(!m.has(_))try{await Wa(t,u,{id:k.id,url:_,label:k.label})}catch(A){console.warn("push register failed:",A?.message||A)}}let w=new Set(e.filter(k=>k.url).map(k=>new URL(k.url,location.href).href)),x=!1;for(let k of d.libraries){if(w.has(k.url))continue;let _={id:So(),label:k.label||k.url,url:k.url,enabled:Eo(k.url,!1)},A=await gt(_);if(A.error){console.warn("discovered library failed to load:",k.url,A.error);continue}a.push(A),e.push(_),x=!0}x&&(zt(),ot(),mt(),Me(),Be(),ve(),Ue(),U==="library"&&(j=ne,fe()))}async function mr(t,n){let u={id:So(),label:t,url:n,enabled:!0};T(p,`Loading "${t}"\u2026`);let m=await gt(u);if(m.error){T(p,`Could not load "${t}": ${m.error}`);return}a.push(m),e.push(u),zt(),ot(),mt(),Me(),Be(),ve(),Ue(),await pr(u),T(p,Je?`Added "${t}" (registered on your pod).`:`Added "${t}".`)}async function Xo(t){let n=e.find(_=>!_.solid&&yt(_.url)),u=new URL(n?n.url:"./dk-pod/dk/plugins/ia-player/libraries/_/index.ttl",location.href).href.match(/^(.*\/libraries\/)/)?.[1];if(!u){T(p,"Could not locate the libraries/ root.");return}let m=new Set(e.map(_=>(_.url||"").match(/\/libraries\/([^/]+)\//)?.[1]).filter(Boolean)),w=Lo(t);for(let _=2;m.has(w);_++)w=`${Lo(t)}_${_}`;let x=u+w+"/";T(p,`Creating library "${t}"\u2026`);let k=await io(x,{title:t});if(!k.ok){T(p,`Couldn't create "${t}": ${k.err}`);return}await mr(t,k.url)}async function Qo(){Ze(!1);let t=window.dkElectron;if(!t||typeof t.importMusic!="function"){T(p,"Importing local music is only available in the Data Kitchen desktop app.");return}let n;try{n=await t.importMusic()}catch(I){T(p,`Import failed: ${I.message}`);return}if(!n||n.status==="cancelled")return;if(n.status==="error"){T(p,`Import failed: ${n.message||"scan error"}`);return}let d=Bn(n.tracks||[]);if(!d.releases.length){T(p,"No tagged audio files were found in that folder.");return}let u=e.find(I=>!I.solid&&yt(I.url)),w=new URL(u?u.url:"./dk-pod/dk/plugins/ia-player/libraries/_/index.ttl",location.href).href.match(/^(.*\/libraries\/)/)?.[1];if(!w){T(p,"Could not locate the libraries/ root.");return}let x=new Set(e.map(I=>(I.url||"").match(/\/libraries\/([^/]+)\//)?.[1]).filter(Boolean)),k="my_music";for(let I=2;x.has(k);I++)k=`my_music_${I}`;let _=w+k+"/",A=I=>(I=String(I||"").toLowerCase(),I.includes("png")?"png":I.includes("jpeg")||I.includes("jpg")?"jpg":I.includes("webp")?"webp":I.includes("gif")?"gif":"img"),$=I=>String(I||"").includes("/")?I:`image/${A(I)}`,C=I=>{let G=atob(I),he=new Uint8Array(G.length);for(let De=0;De<G.length;De++)he[De]=G.charCodeAt(De);return he},R=async(I,G,he)=>{let De=await fetch(I,{method:"PUT",headers:{"content-type":he},body:G});if(!De.ok)throw new Error(`PUT ${I} \u2192 ${De.status}`)},O=new Map,W=[];for(let I of d.releases){if(!I.artFromAbsPath)continue;let G;try{G=await t.readCover(I.artFromAbsPath)}catch{G=null}if(!G||!G.base64)continue;let he=`art-${I.slug}.${A(G.format)}`;O.set(I.slug,{file:he}),W.push({url:_+"releases/"+he,mime:$(G.format),base64:G.base64})}let ee=Hn(d,{title:"My Music",covers:O});T(p,`Importing ${d.releases.length} album(s), ${n.count} track(s)\u2026`);try{for(let[De,$r]of Object.entries(ee))await R(_+De,$r,"text/turtle");for(let De of W)await R(De.url,C(De.base64),De.mime);let I=w+"imported.ttl",G=[];try{let De=await fetch(I,{headers:{accept:"text/turtle"}});De.ok&&(G=[...(await De.text()).matchAll(/<([^>]*index\.ttl[^>]*)>/g)].map($r=>$r[1]))}catch{}G=[...new Set([...G,`./${k}/index.ttl#it`])];let he=`@prefix dct: <http://purl.org/dc/terms/> .
@prefix dcat: <http://www.w3.org/ns/dcat#> .

<#it>
    a dcat:Catalog ;
    dct:title "Imported libraries" ;
    dcat:catalog ${G.map(De=>`<${De}>`).join(", ")} .
`;await R(I,he,"text/turtle")}catch(I){T(p,`Import write failed: ${I.message}`);return}await mr("My Music",_+"index.ttl")}function Zo(t,n){let d=e.find(u=>u.id===t);d&&(d.label=n,zt(),mt(),pr(d))}async function es(t,n){let d=e.find(w=>w.id===t);if(!d)return;d.url=n,zt(),T(p,`Reloading "${d.label}" from ${n}\u2026`);let u=await gt(d),m=a.findIndex(w=>w.config.id===t);m>=0?a[m]=u:a.push(u),ot(),mt(),Me(),Be(),ve(),Ue(),U==="library"&&(j=ne,fe()),await pr(d),u.error?T(p,`Could not load: ${u.error}`):T(p,`Reloaded "${d.label}".`)}function ts(t){let n=e.findIndex(m=>m.id===t);if(n<0)return;let d=e[n];Jo(d),e.splice(n,1);let u=a.findIndex(m=>m.config.id===t);u>=0&&a.splice(u,1),zt(),ne=ne.filter(m=>m._lib!==t),ot(),mt(),Me(),Be(),ve(),Ue(),U==="library"&&(j=ne,fe())}function as(t,n){let d=e.find(u=>u.id===t);d&&bn({title:"Edit library",values:{label:d.label,url:d.url},canDelete:e.length>1,onSave:async({label:u,url:m})=>{u!==d.label&&Zo(t,u),m!==d.url&&await es(t,m)},onDelete:()=>{if(!confirm(`Delete library "${d.label}"?
Its contents stay on disk; only this player will forget about it.`))return!1;ts(t)}})}function Li(t,n){if(!Pe.has(t))return;let d=Ne.find($=>$.id===t);if(!d)return;let u=jt(t);if(!u)return;function m($,C,R){for(let O=re.length-1;O>=0;O--)re[O].node&&re[O].node.value===$.value&&re.splice(O,1);re.push({node:$,label:C,topic:R,url:null,source:null,localData:!0,sourcePlaylist:t,_lib:u.config.id})}async function w(){let $=wt.filter(I=>!xt.has(I.id));if(!$.length){T(p,"Add a genre first \u2014 a converted artist needs one.");return}let C=(prompt("Artist name:",d.name)||"").trim();if(!C)return;let R=$.slice().sort(Zt),O=prompt(`Genre? Enter a number:
`+R.map((I,G)=>`  ${G+1}. ${I.label}`).join(`
`),"1");if(O==null)return;let W=R[parseInt(O,10)-1];if(!W){T(p,"Conversion cancelled \u2014 no valid genre picked.");return}let ee=await xo(u.store,u.baseURI,t,{name:C,genreId:W.id});Re(ee,`convert "${d.name}" to an artist`)&&(d.artistNode=ee.node,m(ee.node,C,W.id),Ta(ee.node.value),ve(),Ue(),T(p,`${ee.relinked?"Relinked":"Converted"} "${d.name}" \u2192 artist "${C}" (${ee.albumCount} album${ee.albumCount===1?"":"s"}). Playlist kept.`))}async function x(){if(!confirm(`Unlink the artist from "${d.name}"?
The playlist and its tracks stay; it just stops also appearing as an artist.`))return!1;let $=await ii(u.store,u.baseURI,t);if(Re($,`unlink artist from "${d.name}"`)){if($.node){for(let C=re.length-1;C>=0;C--)re[C].node&&re[C].node.value===$.node.value&&re.splice(C,1);Ta($.node.value)}d.artistNode=null,d.hidden=!1,ve(),Ue(),Me(),T(p,`Unlinked artist from "${d.name}". Playlist kept.`)}}async function k(){if(!confirm(`Delete playlist "${d.name}"?`))return!1;let $=await ho(u.store,u.baseURI,t);if(!Re($,`delete playlist "${d.name}"`))return;for(let R=re.length-1;R>=0;R--)re[R].topic===t&&re.splice(R,1);let C=Ne.findIndex(R=>R.id===t);C>=0&&Ne.splice(C,1),Pe.delete(t),U===t&&(U="library",ht("library")),Me()}let A=!nt()?[]:[d.artistNode?{label:"Unlink artist",onClick:x}:{label:"Convert to artist\u2026",onClick:w},{label:"Remove playlist",danger:!0,onClick:k}];Cr({title:"Edit playlist",values:{name:d.name,maker:d.maker,description:d.description},actions:A,onSave:async({name:$,maker:C,description:R})=>{let O=await mo(u.store,u.baseURI,t,{name:$,maker:C,description:R});if(!Re(O,`edit playlist "${d.name}"`))return;if(d.artistNode&&$&&$!==d.name){let ee=await ti(u.store,u.baseURI,d.artistNode,$);if(!Re(ee,`update linked artist "${d.name}" \u2192 "${$}"`))return}let W=C?`${$} (${C})`:$;et(u),Me(),ve(),T(p,`Updated "${W}".`)}})}function rs(t){return de.querySelector(`.ia-listbox-item[data-id="${CSS.escape(t)}"]`)}function is(t){return me.querySelector(`.ia-listbox-item[data-id="${CSS.escape(t)}"]`)}function ns(t){return re.find(n=>Ft(n)===t)}function os(t,n){let d=wt.find(u=>u.id===t);d&&ua(n,[{id:"rename",label:"Rename"},{id:"delete",label:"Delete"}],async u=>{let m=us(t);if(m){if(u==="rename")wi(rs(t),d.label,{onCommit:async w=>{let x=await uo(m.store,m.baseURI,t,w);if(!Re(x,`rename genre "${d.label}"`)){Be();return}et(m),Be(),ve()}});else if(u==="delete"){let w=re.filter(_=>_.topic===t&&Ia(_)).length,x=w?`Delete genre "${d.label}" and its ${w} artist${w===1?"":"s"}?`:`Delete genre "${d.label}"?`;if(!confirm(x))return;let k=await co(m.store,m.baseURI,t);if(!Re(k,`delete genre "${d.label}"`))return;et(m),Be(),ve(),Ue()}}})}function ss(t,n){let d=ns(t);if(!d)return;if(d.sourcePlaylist&&Pe.has(d.sourcePlaylist)){let w=d.sourcePlaylist,x=Ne.find($=>$.id===w),k=jt(w),_=br(d),A=[{id:"edit",label:"Edit playlist\u2026"},{id:"toggle-hide",label:x?.hidden?"Show in Playlists":"Hide from Playlists"},{id:"unlink",label:"Unlink artist"},{id:"visit-ia",label:"Visit on the Internet Archive"}];ua(n,A,async $=>{if($==="visit-ia"){window.open(_,"_blank","noopener");return}if($==="edit"){Li(w);return}if(k){if($==="toggle-hide"){let C=!x?.hidden,R=await ni(k.store,k.baseURI,w,C);if(!Re(R,`${C?"hide":"show"} playlist "${x?.name||""}"`))return;x&&(x.hidden=C),C&&U===w&&(U="library",ht("library")),Me(),T(p,C?`"${x?.name}" hidden from Playlists (still an artist).`:`"${x?.name}" shows in Playlists again.`)}else if($==="unlink"){if(!confirm(`Unlink the artist from "${x?.name}"?
The playlist and its tracks stay; it just stops appearing as an artist.`))return;let C=await ii(k.store,k.baseURI,w);if(!Re(C,`unlink artist from "${x?.name||""}"`))return;let R=re.indexOf(d);R>=0&&re.splice(R,1),C.node&&Ta(C.node.value),x&&(x.artistNode=null,x.hidden=!1),ve(),Ue(),Me(),T(p,`Unlinked artist from "${x?.name}". Playlist kept.`)}}});return}let u=br(d);ua(n,[{id:"rename",label:"Rename"},{id:"delete",label:"Delete"},{id:"visit-ia",label:"Visit on the Internet Archive"}],async w=>{if(w==="visit-ia"){window.open(u,"_blank","noopener");return}let x=Ca(d);if(x){if(w==="rename")wi(is(t),d.label,{onCommit:async k=>{let _=await ti(x.store,x.baseURI,d.node,k);if(!Re(_,`rename artist "${d.label}"`)){ve();return}et(x),ve()}});else if(w==="delete"){if(!confirm(`Delete artist "${d.label}"?`))return;let k=await po(x.store,x.baseURI,d.node);if(!Re(k,`delete artist "${d.label}"`))return;et(x),ve(),Ue()}}})}function _i(){if(Wt.querySelector(".ia-column-addform"))return;Wt.innerHTML=Gn;let t=Wt.querySelector("form"),n=t.querySelector("input"),d=()=>Ai();n.focus(),t.addEventListener("submit",async u=>{u.preventDefault();let m=n.value.trim();if(!m){d();return}let w=Fe();if(!w){T(p,"Enable a library first."),d();return}let x=await lo(w.store,w.baseURI,m);Ai(),Re(x,`add genre "${m}"`)&&(wt.push({id:x.id,label:m,_lib:w.config.id}),Be())}),t.querySelector(".ia-column-addcancel").addEventListener("click",d),n.addEventListener("keydown",u=>{u.key==="Escape"&&d()})}function Ai(){Wt.innerHTML='<button type="button" class="ia-add-genre-btn">+ Add genre</button>',Wt.querySelector(".ia-add-genre-btn").addEventListener("click",_i)}er.addEventListener("click",_i);function Ti(){if(It.querySelector(".ia-column-addform"))return;let t=wt.filter(k=>!xt.has(k.id));if(!t.length){T(p,"Add a genre first.");return}It.innerHTML=Kn;let n=It.querySelector(".ia-column-addselect");for(let k of t.slice().sort(Zt)){let _=document.createElement("option");_.value=k.id,_.textContent=k.label,n.appendChild(_)}let d=It.querySelector("form"),u=d.querySelector("input"),m=d.querySelector("select"),w=[...lt.getSelection()];w.length===1&&t.some(k=>k.id===w[0])&&(m.value=w[0]);let x=()=>hr();u.focus(),d.addEventListener("submit",async k=>{k.preventDefault();let _=u.value.trim();if(!_){x();return}let A=ko(_),$;if(A)$=A.url;else try{$=new URL(_).href}catch{T(p,`Not a valid URL: "${_}". Enter a full http(s) URL or an archive.org item id.`),u.focus(),u.select();return}let C=A?A.id:(prompt("Display name for this artist:","")||"").trim();if(!C){x();return}let R=m.value,O=Fe();if(!O){T(p,"Enable a library first."),x();return}let W;try{W=await fo(O.store,O.baseURI,R,C,$)}catch(ee){hr(),T(p,`Couldn't add artist "${C}": ${ee.message||ee}`);return}hr(),Re(W,`add artist "${C}"`)&&(re.push({node:W.node,label:C,topic:R,url:$,source:null,_lib:O.config.id}),ve())}),d.querySelector(".ia-column-addcancel").addEventListener("click",x),u.addEventListener("keydown",k=>{k.key==="Escape"&&x()})}function hr(){It.innerHTML='<button type="button" class="ia-add-artist-btn">+ Add artist</button>',It.querySelector(".ia-add-artist-btn").addEventListener("click",Ti)}tr.addEventListener("click",Ti),Co?.addEventListener("click",async()=>{let t=prompt(`Add a library:

  1 = create a new empty library
  2 = add an existing one by URL`,"1");if(t!=null)if(t.trim()==="1"){let n=prompt("New library name:");if(!n||!n.trim())return;await Xo(n.trim())}else{let n=prompt("Library RDF URL (its index.ttl):");if(!n||!n.trim())return;let d=n.trim().split("/").filter(Boolean).pop()||"Library",u=prompt("Display name:",d);if(!u||!u.trim())return;await mr(u.trim(),n.trim())}});async function ls(t,n){if(!Pe.has(t))return;let d=n.getData("application/x-ia-tracks");if(!d)return;let u;try{u=JSON.parse(d)}catch{return}if(!Array.isArray(u)||!u.length)return;let m=u.map(C=>j.find(R=>R.id===C)).filter(Boolean);if(!m.length)return;let w=jt(t);if(!w)return;T(p,`Adding ${m.length} track${m.length===1?"":"s"} to playlist\u2026`);let x=m.map(C=>({label:[C.artist,C.album,C.name].filter(Boolean).join(" \u2014 ")||C.name,url:C.url,source:C.albumUrl,artist:C.artist,album:C.album,name:C.name,time:C.time})),k=!nt(),_=await Ja(w.store,w.baseURI,t,x,{inlineTracks:k}),A=_.added||[];A.forEach((C,R)=>{re.push({node:_.nodes?.[R],label:C.label,topic:t,url:C.url,source:C.source,_lib:w.config.id})});let $=_.skipped||0;if(_.ok)A.length?T(p,`Added ${A.length} track${A.length===1?"":"s"}`+($?` (${$} already in playlist)`:"")+"."):T(p,$?`All ${$} track${$===1?"":"s"} already in this playlist.`:"Nothing to add.");else{let C=_.err||"persistence failed";T(p,A.length?`Saved ${A.length} track${A.length===1?"":"s"}, then the server failed: ${C}. Retry to add the rest.`:`Couldn't add tracks to playlist: ${C}. No changes saved.`),console.warn("add tracks to playlist (partial/failed):",_)}A.length&&dr(t),U===t&&ia(t)}ut.addEventListener("click",()=>{if(!nt()){T(p,"Sign in to create playlists.");return}let t=Fe();if(!t){T(p,"Enable a library to add playlists.");return}Cr({title:"New playlist",values:{name:`Playlist ${Ne.length+1}`,maker:"jeffz",description:""},onSave:async({name:n,maker:d,description:u})=>{let m=await ai(t.store,t.baseURI,{name:n,maker:d,description:u});Re(m,`add playlist "${n}"`)&&(Ne.push({id:m.id,name:m.name,maker:m.maker,description:m.description,label:m.label,_lib:t.config.id}),Pe.add(m.id),Me(),T(p,`Added playlist "${m.label}". Drag tracks onto it to fill it.`))}})});function ht(t){U=t,Ut=null,Aa=!1,g.classList.remove("source-no-browser"),g.classList.remove("source-favorites"),t==="library"?(j=ne,He=_t(),fe()):t==="favorites"?(g.classList.add("source-favorites"),Mi()):Pe.has(t)?(ia(t),T(p,"Tip: select tracks (Shift/Ctrl-click) and press Delete to remove them.")):(U="library",Me(),j=ne,fe()),ea(),Te()}let lt=Tt(de,{onChange:gs,allLabel:"(All genres)",renderItemActions:t=>xt.has(t.id)?"":Ea(t.label),onItemAction:(t,n,d)=>{t==="edit"&&os(n,d)}});function br(t){let n=t.url||"";if(/(?:^|\/\/)(?:www\.)?archive\.org\//.test(n))return n;let d=`${t.label||""} AND mediatype:${i()==="video"?"movies":"audio"}`;return`https://archive.org/search?query=${encodeURIComponent(d)}`}function cs(t){let n=br(t),d="Visit on the Internet Archive",u=`<button type="button" class="ia-row-ialink" data-action="ialink" data-url="${se(n)}" title="${d}" aria-label="${d}" tabindex="-1">\u2197</button>`;return Ea(t.label)+u}let tt=Tt(me,{onChange:ys,allLabel:"(All artists)",renderItemActions:cs,onItemAction:(t,n,d)=>{if(t==="edit")ss(n,d);else if(t==="ialink"){let u=d?.dataset?.url;u&&window.open(u,"_blank","noopener")}}}),ye=Tt(xe,{onChange:vs,allLabel:"(All albums)",renderItemActions:t=>{if(i()!=="video")return"";let n=!!t._album&&v.has(t._album.url);return`<button type="button" class="ia-row-fav${n?" on":""}" data-action="fav" title="Add to the communal favourites" aria-label="Favourite" tabindex="-1">${n?"\u2605":"\u2606"}</button>`},onItemAction:(t,n)=>{t==="fav"&&ms(n)}});function Be(){let t=wt.filter(n=>!xt.has(n.id)).map(n=>({id:n.id,label:n.label,title:n.label})).sort(Zt);lt.setItems(t)}function Ia(t){return!xt.has(t.topic)&&!Pe.has(t.topic)}function ds(t){return xt.has(t.topic)}function us(t){let n=wt.find(d=>d.id===t);return n?_a(n._lib):Fe()}function Ca(t){return t._lib?_a(t._lib):Fe()}function jt(t){let n=Ne.find(d=>d.id===t);return n?_a(n._lib):Fe()}function fs(t){let n=re.find(d=>ds(d)&&d.url===t);return n?_a(n._lib):Fe()}async function Pa(){try{h=(await Oa(Fe()?.baseURI)).filter(n=>n.bucket===f()),v=new Set(h.flatMap(n=>[n.item,n.link].filter(Boolean)))}catch{}try{fe(),ps(),Si()}catch{}}function ps(){i()==="video"&&ye.setItems(ye.getItems())}function ms(t){let d=ye.getItems().find(u=>u.id===t)?._album;if(d){if(v.has(d.url)){Da(d.url);return}r?.dispatchEvent(new CustomEvent("item-favourite",{detail:{item:d.url,bucket:"MovingImage",schemaType:"VideoObject",name:d.name||d.url,link:d.url,download:!1,thumbnail:d.thumbnail||"",libraryBase:Fe()?.baseURI},bubbles:!0,composed:!0}))}}async function $i(t){let n=t.url||"";if(/\/download\//.test(n)||/\.(mp4|m4v|ogv|ogg|webm|mov|mkv|avi|mpe?g)(\?|#|$)/i.test(n)){let w={id:n,url:n,name:t.name||n,time:"",artist:"",album:t.name||"",albumUrl:""};Ge(w,{autoplay:!1}),vr(w,{name:t.name});return}let u={url:n,name:t.name};T(p,"Loading film\u2026");let m=null;try{m=Ri(await aa(u))}catch{}if(!m){T(p,""),oa(`Can't play \u201C${t.name}\u201D \u2014 no playable video found at the Internet Archive.`);return}T(p,""),Ge(m,{autoplay:!1}),vr(m,u)}function Ei(t){if(!t||!t.url)return;if(ta(t.url)){Da(t.url);return}let n=i()==="video";r?.dispatchEvent(new CustomEvent("item-favourite",{detail:{item:t.url,bucket:n?"MovingImage":"Sound",schemaType:n?"VideoObject":"AudioObject",name:t.name||t.url,link:t.url,download:!0,libraryBase:Fe()?.baseURI},bubbles:!0,composed:!0}))}function ta(t){return v.has(t)}async function Da(t){let n=h.find(u=>u.item===t||u.link===t);if(!n)return!1;let d=0;for(let u of n.contributors||[])if(u.file)try{await pa(u.file),d++}catch(m){T(p,`Couldn't remove favourite: ${m.message}`)}return d&&document.dispatchEvent(new CustomEvent("omp:favourited")),d>0}function gr(){let t=lt.getSelection();return t.size===0?re.filter(Ia):re.filter(n=>t.has(n.topic)&&Ia(n))}function yr(t){if(!t)return!1;if(t.sourcePlaylist)return!0;let n=u=>(u||"").trim().toLowerCase(),d=n(t.label);for(let u of Ne)if(u.name&&n(u.name)===d||u.maker&&n(u.maker)===d)return!0;if(t.localData&&t.node){let u=Ca(t);try{return!!u?.store&&ri(u.store,t.node).length>0}catch{return!1}}return!1}function ve(){let n=gr().map(w=>({id:Ft(w),label:w.label,title:w.label,url:w.url,_b:w})),d=n.filter(w=>yr(w._b)).sort(Zt),u=n.filter(w=>!yr(w._b)).sort(Zt),m=i()==="video";u.forEach((w,x)=>{w.className="ia-item-raw",w.ariaLabel=`${w.label} \u2014 raw archive.org search, not curated`,x===0&&!m&&(w.section="Raw \u2014 uncurated archive.org searches")}),tt.setItems([...d,...u])}async function Ii(t){let n=Ft(t);if(Lt.has(n))return Lt.get(n);if(t.localData&&t.node){let m=Ca(t);if(m?.store){let w=(async()=>{t.sourcePlaylist&&m.loadDocs&&await m.loadDocs([String(t.sourcePlaylist).split("#")[0]]);let x=t.sourcePlaylist?Ya(m.store,[String(t.sourcePlaylist).split("#")[0]]):oo(m.store,m.baseURI);return await La(m,x)&&ve(),ri(m.store,t.node).map(_=>({..._,_artist:t}))})();return Lt.set(n,w),w}}let d=Rr(t.url);if(!d){let m=Promise.resolve([]);return Lt.set(n,m),m}let u=Nr(d,Nt,{mediaType:i()}).then(m=>m.map(w=>({...w,_artist:t}))).catch(m=>(console.error("getAlbums",m),[]));return Lt.set(n,u),u}let Ma=0,at=null;function hs(){return xe.closest(".ia-column")}function Ua(t){let n=hs();if(!n)return;let d=n.querySelector(".ia-album-note");if(!t){d?.remove();return}d||(d=document.createElement("div"),d.className="ia-album-note",n.querySelector(".ia-column-header")?.after(d)),d.textContent=t}function Ci(){at&&(at=null,Ua(""))}function Pi(){ye.setItems(at.map(t=>{let n=i()==="video"?t.name:`${t._artist.label} \u2014 ${t.name}`;return{id:t.url,label:n,title:n,_album:t}}))}async function Ue(){if(U==="favorites")return;if(at){Pi(),At();return}let t=or(),n=tt.getSelection();if(n.size===0){ye.setMessage(t.chooseArtist),At();return}let d=++Ma;ye.setMessage(t.loadingAlbums);let m=gr().filter(k=>n.has(Ft(k))),w=await Promise.all(m.map(Ii));if(d!==Ma)return;let x=w.flat();if(!x.length){ye.setMessage(t.noAlbums),At();return}ye.setItems(x.map(k=>{let _=i()==="video"?k.name:`${k._artist.label} \u2014 ${k.name}`;return{id:k.url,label:_,title:_,_album:k}})),(Ut||Aa)&&i()!=="video"&&ye.setSelection(x.map(k=>k.url),{notify:!1}),At()}async function aa(t){let n=t.url;if(Rt.has(n))return Rt.get(n);if(t._local&&t._releaseNode){let A=Ca(t._artist);if(A?.store){let $=String(t._releaseNode.value||t._releaseNode).split("#")[0],C=(async()=>(await La(A,[$]),wo(A.store,t._releaseNode).map(R=>({id:R.url,url:R.url,name:R.name,time:R.time||"",artist:t._artist?.label||"",album:t.name,albumUrl:t.url,node:R.node||null,_lib:t._artist?._lib}))))();return Rt.set(n,C),C}}let d=Go(t.url);if(!d)return Promise.resolve([]);let u=Array.isArray(t._creator)?t._creator[0]:t._creator,m=u?String(u).trim():"",x=/^(various(\s+artists?)?|v\.?a\.?)$/i.test(m)?"":m,k=t._artist?.label||"",_=On(d,Nt,{mediaType:i()}).then(A=>(A||[]).map($=>({id:$.url,url:$.url,name:$.name,time:$.time||"",artist:$.artist||x||k,album:t.name,albumUrl:t.url,_lib:t._artist?._lib,_rights:$._rights||t._rights||null,_detailUrl:$._detailUrl||t._detailUrl||t.url||""}))).catch(A=>(console.error("getTracks",A),[]));return Rt.set(n,_),_}let Di=0,He="Choose an album to add tracks.";function _t(){return tt.getSelection().size===0?"Choose an artist to see albums.":ye.getSelection().size===0?"Choose an album to add tracks.":"No tracks in selected album(s)."}async function At(){if(U!=="library"||i()==="video")return;let t=ye.getSelection();if(!t.size){j=ne,He=_t(),fe();return}let n=++Di;ne.length||(He="Loading tracks\u2026",j=ne,fe());let u=ye.getItems().filter(k=>t.has(k.id)).map(k=>k._album),m=await Promise.all(u.map(aa));if(n!==Di)return;let w=new Set(ne.map(k=>k.id)),x=m.flat().filter(k=>!w.has(k.id));x.length&&(ne=x.concat(ne),Te()),j=ne,He=_t(),ca(),fe()}function Mi(){if(i()==="video"){wr(),g.classList.remove("has-video");try{b.pause()}catch{}}Ui(),Pa()}function Ui(){let t=new Map(ne.map(n=>[n.url,n]));j=h.map(n=>{let d=n.item||n.link,u=t.get(d)||n.link&&t.get(n.link)||n.item&&t.get(n.item);return u||{id:d,url:n.link||n.item,name:n.canonicalTitle||"Untitled",time:"",artist:"",album:"Favorites",albumUrl:"",thumbnail:n.thumbnail||""}}),He=c?"No favourite films yet \u2014 tap \u2606 on a film to add one.":"No favourites yet \u2014 tap \u2606 on a track to add one.",ca(),fe()}function bs(t){let n=t.name||"",d=t.artist||"",u=t.album||"";if(!n&&!d&&!u){let m=(t.label||"").split(" \u2014 ");m.length>=3?(d=m[0],u=m[1],n=m.slice(2).join(" \u2014 ")):m.length===2?(u=m[0],n=m[1]):n=t.label||""}return{id:t.url,url:t.url,name:n||t.label,artist:d,album:u,albumUrl:t.source||"",time:"",node:t.node||null,_lib:t._lib}}let ra=0;function ia(t){let n=++ra,d=jt(t);if(d?.loadDocs){let u=Uo(d,t),m=re.some(w=>w.topic===t&&w.url);if(u.length&&!m){j=[],He="Loading playlist\u2026",fe(),La(d,u).then(()=>{n!==ra||U!==t||(Ra(t,n),ve())}).catch(()=>{n===ra&&U===t&&Ra(t,n)});return}u.length&&La(d,u).then(w=>{w&&n===ra&&U===t&&Ra(t,n)}).catch(()=>{})}Ra(t,n)}function Ra(t,n){j=re.filter(m=>m.topic===t).map(bs),He="This playlist is empty.",ca(),fe();let u=new Map;for(let m of j)m.albumUrl&&(u.has(m.albumUrl)||u.set(m.albumUrl,[]),u.get(m.albumUrl).push(m));for(let[m,w]of u){let x={url:m,name:w[0].album||"",_artist:{label:w[0].artist||""}};aa(x).then(k=>{if(n!==ra)return;let _=new Map(k.map($=>[$.url,$])),A=!1;for(let $ of w){let C=_.get($.url);C&&(C.time&&!$.time&&($.time=C.time,A=!0),C.name&&$.name!==C.name&&($.name=C.name,A=!0))}A&&U===t&&(ca(),fe())}).catch(()=>{})}}function fe(){if(J&&!j.includes(J)){let u=j.find(m=>m.url===J.url);u&&(J=u)}let t=U==="favorites",n=nt(),d=U&&Pe.has(U);if(dn(ie,vt,j,{currentTrackId:J?.id,isFav:u=>ta(u.url),favouritable:u=>!u.node,wallDelete:t&&n,emptyMessage:He,useKebab:u=>t||!u.node?!1:Ar(u)?!0:!!(u.albumUrl&&/(?:^|\/\/)(?:www\.)?archive\.org\//.test(u.albumUrl))}),qi?.applySelection(),L){let u=j.length;if(!u)L.textContent="";else{let m=0;for(let A of j)m+=la(A.time);let w=Math.round(m/60),x=Math.floor(w/60),k=w%60,_=m>0?x>0?` \xB7 ${x}h ${String(k).padStart(2,"0")}m`:` \xB7 ${k}m`:"";L.textContent=`${u} track${u===1?"":"s"}${_}`}}}function na(){return U==="library"?!1:(U="library",st.setSelection([],{notify:!1}),ea(),!0)}function gs(t){na(),Ci(),ve(),Ue(),Te()}function ys(t){if(na(),Ci(),Ut=null,Aa=!1,t&&t.size===1){let n=gr().filter(d=>t.has(Ft(d)));n.length===1&&(Aa=yr(n[0]),n[0].sourcePlaylist&&(Ut=n[0].sourcePlaylist))}Ue(),Te()}function vs(t){if(i()==="video"){ws(t);return}na()&&(ne=[]),At(),Te()}function Ri(t){if(!t||!t.length)return null;let n=t[0],d=la(n.time);for(let u of t){let m=la(u.time);m>d&&(n=u,d=m)}return n}let Ni=0;async function ws(t){na();let n=[...t],d=n[n.length-1];if(!d){j=[],fe(),Te();return}ye.setSelection([d],{notify:!1});let m=ye.getItems().find(_=>_.id===d)?._album;if(!m)return;let w=++Ni;T(p,"Loading film\u2026");let x=await aa(m);if(w!==Ni)return;let k=Ri(x);if(!k){T(p,""),oa(`Can't play \u201C${m.name}\u201D \u2014 no playable video found at the Internet Archive.`);return}j=[k],T(p,""),Ge(k,{autoplay:!1}),vr(k,m),Te()}let xs=null;function vr(t,n){if(!D)return;z.textContent=n?.name||t.album||t.name||"Untitled",q.textContent=t.time?`Running time: ${t.time}`:"";let d=t.albumUrl||n?.url||"";if(ue.innerHTML=d?`See more about this film at the <a href="${se(d)}" target="_blank" rel="noopener">Internet Archive</a>`:"",oe){let u=t._rights||n?._rights||null;oe.textContent=`\u2696 ${u?u.label:"Rights unknown"}`}xs={track:t,album:n},g.classList.add("film-intro")}function wr(){g.classList.remove("film-intro")}if(D){let t=()=>{wr(),b.play().catch(()=>{})};D.addEventListener("click",t),D.addEventListener("keydown",n=>{(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),t())}),b.addEventListener("play",wr)}function ks(){J&&(Mt.push({track:J}),Mt.length>200&&Mt.shift())}let xr=null;function oa(t,n={}){let d=g.querySelector(".ia-notice");d||(d=document.createElement("div"),d.className="ia-notice",d.setAttribute("role","alert"),d.innerHTML=Wn,d.querySelector(".ia-notice-close").addEventListener("click",()=>kr()),g.appendChild(d)),d.querySelector(".ia-notice-msg").textContent=t,d.classList.add("show"),clearTimeout(xr),n.sticky||(xr=setTimeout(kr,n.duration||4e3))}function kr(){clearTimeout(xr),g.querySelector(".ia-notice")?.classList.remove("show")}function Ge(t,n={}){if(!t)return;kr();let d=n.autoplay!==!1;J&&J.id!==t.id&&!n.fromHistory&&ks(),J=t,d&&(No=!0),b.src=Xa(t.url),b.load(),Xt=i()==="video",g.classList.toggle("has-video",Xt),Fa(E,Fi(t)),T(p,""),Te(),fe(),d&&b.play().catch(u=>{if(u.name==="NotAllowedError"||u.name==="AbortError"){console.warn("Playback deferred:",u.name),T(p,"Press \u25B6 to start playback");return}T(p,`Error playing ${t.name}`),oa(`Can't play \u201C${t.name}\u201D. The media may be unavailable or in an unsupported format.`),console.error("Playback error:",u)})}function Fi(t){let n=t.albumUrl?` <a class="ia-link" href="${se(t.albumUrl)}" target="_blank" rel="noopener">[IA]</a>`:"",d=t._rights?` \xB7 <span class="ia-np-rights">\u2696 ${se(t._rights.label)}</span>`:"";if(i()==="video")return`Now playing: ${se(t.album||t.name||"Untitled")}${d}${n}`;let u=[t.artist,t.album,t.name].filter(Boolean).map(se),m=j.findIndex(x=>x.id===t.id),w=m>=0&&j.length>1?` (${m+1}/${j.length})`:"";return`Now playing: ${u.join(" \u2014 ")}${w}${d}${n}`}async function Na(){let t=re.filter(n=>Ia(n)&&n.url);if(!(!t.length||lr)){lr=!0;try{for(let n=0;n<6;n++){let d=ur(t),u=await Ii(d);if(!u.length)continue;let m=ur(u),w=await aa(m);if(!w.length)continue;let x=ur(w);U!=="library"&&(st.setSelection(["library"],{notify:!1}),ht("library")),lt.setSelection([d.topic],{notify:!1}),ve(),tt.setSelection([Ft(d)],{notify:!1}),await Ue(),ye.setSelection([m.url],{notify:!1}),await At(),Ge(x);return}T(p,"Could not find a random track to play")}finally{lr=!1}}}function Ss(){return J?j.findIndex(t=>t.id===J.id):-1}function Sr(){if(Dt==="random"){Na();return}if(Jt==="one"&&J){b.currentTime=0,b.play().catch(()=>{});return}let t=Ss();if(t<0){j[0]&&Ge(j[0]);return}if(t+1<j.length){Ge(j[t+1]);return}if(Jt==="all"&&j[0]){Ge(j[0]);return}T(p,"Reached the end of the list")}function Ls(){if(!Mt.length){T(p,"No previous track");return}let t=Mt.pop();Ge(t.track,{fromHistory:!0})}function Lr(t){Dt=t,Te()}function zi(t){Jt=t,Te()}ln(Le),Le.addEventListener("mouseup",()=>Te());let ji=g.querySelector(".ia-sources-resize");ji&&ji.addEventListener("mousedown",t=>{t.preventDefault();let n=t.clientX,d=g.querySelector(".ia-sources")?.offsetWidth||260,u=w=>{let x=Math.max(140,Math.min(600,d+(w.clientX-n)));g.style.setProperty("--ia-sources-width",x+"px")},m=()=>{document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",m),g.classList.remove("resizing-sources"),Te()};document.addEventListener("mousemove",u),document.addEventListener("mouseup",m),g.classList.add("resizing-sources")});let Oi=g.querySelector(".ia-browser-resize");Oi&&Oi.addEventListener("mousedown",t=>{t.preventDefault();let n=t.clientY,d=g.querySelector(".ia-browser")?.offsetHeight||220,u=w=>{let x=Math.max(120,Math.min(640,d+(w.clientY-n)));g.style.setProperty("--ia-browser-height",x+"px")},m=()=>{document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",m),g.classList.remove("resizing-browser"),Te()};document.addEventListener("mousemove",u),document.addEventListener("mouseup",m),g.classList.add("resizing-browser")});let Ce=Yt();if(Ce){let t=!$o;$o=!0,t&&(Ce._manualInit=!0,Ce.addEventListener("click",()=>{try{Ce.isLoggedIn||oi()}catch{}},!0)),document.addEventListener("omp:reapply-gating",Sa);let n=!1,d=async u=>{T(p,"Loading library from your pod\u2026");let m=await Ro(u);return m.ok||T(p,`Couldn't load the pod library: ${m.err}. Staying on the local library.`),!!m.ok};document.addEventListener("sol-login",async u=>{let m=u.detail?.webId||Ce.webId||"";if(!m)return;let w=Hl();if(w){try{let x=(w.search||"")+(w.hash||"");x&&location.search+location.hash!==x&&Mt.replaceState(null,"",location.pathname+x)}catch{}To()}console.info("[omp] sol-login handler upgrade fired: webId=",m);try{Qr(!0),kt=!0,pt=!1,Pt=!1;let x=ft().find(k=>k.store&&!k.config.solid&&yt(k.config.url));if(x){try{Ao(m,new URL(x.config.url,location.href).href)}catch{}et(x)}mi(),Sa(),T(p,`Signed in: ${m} \u2014 your library is now writable.`)}catch(x){console.warn("[omp] pod login upgrade failed:",x),T(p,`Signed in, but: ${x.message}.`)}if(t&&!n&&Kl()){n=!0,setTimeout(async()=>{try{await Ki()}finally{n=!1}},1500);return}if(t&&!n&&Vl()){n=!0,setTimeout(async()=>{try{await Wi()}finally{n=!1}},1500);return}}),document.addEventListener("sol-logout",()=>{Je=null,Qr(!1),kt=!1,pt=!0,Pt=!1;let u=ft().find(m=>m.store&&!m.config.solid&&yt(m.config.url));u&&et(u),mi(),Sa(),T(p,"Signed out. Viewing in guest mode \u2014 you may browse, search, listen, and favourite anything.")}),t&&Promise.resolve().then(()=>Ce.initialize()).then(()=>document.dispatchEvent(new CustomEvent("omp:reapply-gating"))).catch(u=>console.warn("sol-login init skipped (no auth library?):",u?.message||u)),Ce.isLoggedIn||(pt=!0,T(p,"Viewing in guest mode. You may browse, search, listen, and favourite anything."))}let _r=g.querySelector(".ia-artist-search");if(_r){let t=_r.querySelector("input");_r.addEventListener("submit",async n=>{n.preventDefault();let d=t.value.trim();if(!d)return;let u=Fe(),m=new URL("https://archive.org/search");m.searchParams.set("query",`creator:"${d}"`),m.searchParams.append("and[]",`mediatype:"${i()==="video"?"movies":"audio"}"`),na(),lt.setSelection([],{notify:!1}),tt.setSelection([],{notify:!1}),st.setSelection([],{notify:!1}),ea(),at=[],Ua(`Searching \u201C${d}\u201D\u2026`),ye.setMessage("Searching\u2026");let w=++Ma,x=[];try{x=await Nr(Rr(m.href),Nt,{mediaType:i()})}catch(_){console.error("find-artist search",_)}if(w!==Ma)return;let k={label:d,_lib:u?.config.id};if(at=x.map(_=>({..._,_artist:k})),!at.length){Ua(""),ye.setMessage(`No audio results for \u201C${d}\u201D.`);return}Ua("Temporary search results \u2014 add tracks to a playlist to keep them."),Pi(),At(),T(p,`${at.length} result${at.length===1?"":"s"} for \u201C${d}\u201D.`)})}let sa=cn(ge,{onSort:()=>{ca(),fe(),Te()}});function la(t){if(!t)return 0;let n=String(t).split(":").map(Number);if(n.length===2)return n[0]*60+n[1];if(n.length===3)return n[0]*3600+n[1]*60+n[2];let d=parseFloat(t);return isFinite(d)?d:0}function _s(t,n,d){if(d==="time")return la(t.time)-la(n.time);if(d==="fav"){let w=ta(t.url)?1:0,x=ta(n.url)?1:0;return w-x}let u=(t[d]||"").toString(),m=(n[d]||"").toString();return u.localeCompare(m,void 0,{sensitivity:"base",numeric:!0})}function ca(){let{col:t,dir:n}=sa.getSort();if(!t)return;let d=n==="asc"?1:-1;j=j.slice().sort((u,m)=>d*_s(u,m,t)),U==="library"&&(ne=j)}let qi=sn(ie,{onPlay:t=>{let n=j.find(d=>d.id===t);if(n){if(Dt==="random"&&Lr("ordered"),i()==="video"){$i(n);return}Ge(n)}},onRemove:(t,n)=>{Tr(t,n)},onEdit:(t,n)=>{As(t,n)},onFavourite:t=>Ei(t)});Pa(),document.addEventListener("omp:favourited",Pa);function Ar(t){return!t||!t.node?!1:nt()?!0:U&&Pe.has(U)?t.node.value.startsWith(U+"#"):!1}function As(t,n){let d=j.find(_=>_.id===t);if(!d)return;let u=d.albumUrl||"",m=/(?:^|\/\/)(?:www\.)?archive\.org\//.test(u),w=U&&Pe.has(U);if(Ar(d)){Bi(t);return}let x=[];Ar(d)&&x.push({id:"edit",label:"Edit\u2026"}),m&&x.push({id:"visit",label:"Visit on the Internet Archive"}),x.push({id:"remove",label:w?"Remove from playlist":"Remove from list",danger:!0});let k=_=>{if(_==="visit"){u&&window.open(u,"_blank","noopener");return}if(_==="remove"){Tr([t],{fromButton:!0});return}if(_==="edit"){Bi(t);return}};if(x.length<=1){k(x[0]?.id||"remove");return}ua(n,x,k)}async function Bi(t){let n=j.find(_=>_.id===t);if(!n||!n.node){T(p,"Can't edit this track (no RDF node).");return}let d=jt(U)||Fe();if(!d)return;let u=yo(d.store,n.node),m=U&&Pe.has(U),w=n.albumUrl||"",x=/(?:^|\/\/)(?:www\.)?archive\.org\//.test(w),k=[{label:ta(n.url)?"\u2605 Remove from favourites":"\u2606 Add to favourites",onClick:()=>Ei(n)}];x&&k.push({label:"Visit on the Internet Archive",onClick:()=>{window.open(w,"_blank","noopener")}}),k.push({label:m?"Remove from playlist":"Remove from list",danger:!0,onClick:()=>Tr([t],{fromButton:!0})}),gn({title:"Track options",values:{title:n.name,artist:n.artist,album:n.album},siblingCount:u,actions:k,onSave:async({title:_,artist:A,album:$})=>{let C=await go(d.store,d.baseURI,n.node,{title:_,artist:A,album:$});if(!Re(C,`edit "${n.name}"`))return;let R=re.find(O=>O.node&&O.node.value===n.node.value);if(R&&(R.name=_,R.artist=A,R.album=$,R.label=[A,$,_].filter(Boolean).join(" \u2014 ")||_),$!=null)for(let O of re)O.source&&n.albumUrl&&O.source===n.albumUrl&&(O.album=$,O.label=[O.artist,O.album,O.name].filter(Boolean).join(" \u2014 ")||O.name);if(m)dr(U),ia(U);else{for(let O of j)O.node&&O.node.value===n.node.value&&(O.name=_,O.artist=A),$!=null&&n.albumUrl&&O.albumUrl===n.albumUrl&&(O.album=$);n.albumUrl&&Rt.delete(n.albumUrl),fe()}T(p,`Updated "${_}".`)}})}async function Tr(t,n={}){if(!t||!t.length)return;let d=new Set(t);if(U==="library"&&!Ut){ne=ne.filter(A=>!d.has(A.id)),j=ne,He=_t(),fe(),Te();return}if(U==="favorites"){if((n.fromButton||t.length>1)&&!confirm(t.length===1?"Remove this favourite from the communal wall?":`Remove ${t.length} favourites from the communal wall?`))return;let $=j.filter(C=>d.has(C.id));for(let C of $)await Da(C.url);return}let u=U==="library"?Ut:null;if(n.fromButton||t.length>1){let A=u||U,$=Ne.find(R=>R.id===A)?.label||(U==="favorites"?"Favorites":"this playlist"),C=t.length===1?`Remove this track from "${$}"?`:`Remove ${t.length} tracks from "${$}"?`;if(!confirm(C))return}let w=j.filter(A=>d.has(A.id)),x=U==="favorites"?Vr(Fe()?.baseURI):u||U,k=[];for(let A of w){let $=U==="favorites"?fs(A.url):jt(x);if(!$)continue;let C=await bo($.store,$.baseURI,x,A.url);if(Re(C,`remove "${A.name}" from playlist`)){k.push(A);for(let R=re.length-1;R>=0;R--)if(re[R].url===A.url&&re[R].topic===x){re.splice(R,1);break}}}let _=new Set(k.map(A=>A.id));j=j.filter(A=>!_.has(A.id)),u&&(ne=ne.filter(A=>!_.has(A.id))),k.length&&U!=="favorites"&&dr(x),fe()}un({audio:b,playBtn:Oe,prevBtn:Se,nextBtn:We,seekSlider:P,timeCur:K,timeDur:ae,volumeSlider:S},{onPlayToggle:()=>{if(!J){j[0]?Ge(j[0]):Na();return}if(!b.src||b.src!==Xa(J.url)){Ge(J);return}b.paused?b.play().catch(()=>{}):b.pause()},onPrev:()=>Ls(),onNext:()=>Sr()}),b.addEventListener("volumechange",()=>Te());let Hi=0;b.addEventListener("timeupdate",()=>{let t=Date.now();t-Hi<5e3||(Hi=t,Te())}),b.addEventListener("pause",()=>Te());let da=0,Ts=5;b.addEventListener("playing",()=>{da=0}),b.addEventListener("error",()=>{if(!b.src||!J)return;let t=b.error;if(console.warn("Audio error",t?.code,t?.message,"for",J.url),da++,da>=Ts){T(p,`Stopped: ${da} tracks in a row couldn't be played.`),oa(`Stopped \u2014 ${da} items in a row couldn't be played. The source may be offline.`,{sticky:!0});return}T(p,`Skipped (couldn't play "${J.name}")`),i()==="video"&&oa(`Can't play \u201C${J.name}\u201D. The media may be unavailable or in an unsupported format.`),Dt==="random"?Na():Sr()}),b.addEventListener("ended",()=>{if(Jt==="one"){b.currentTime=0,b.play().catch(()=>{});return}if(Dt==="random"){Na();return}Sr()}),ya.addEventListener("click",()=>{Ze(!1),za()}),Q?.addEventListener("click",()=>{Ze(!1),za({url:"./assets/ia-help.html",title:"Help",useBundle:!1,size:"large"})}),Ee?.addEventListener("click",()=>{Ze(!1),za({url:"./assets/ia-login-help.html",title:"Solid login help",useBundle:!1,size:"large"})}),Qe?.addEventListener("click",()=>{Ze(!1);let t=Fe();if(!t?.store){T(p,"Enable a library to view deleted items.");return}for(let d of ft())et(d);let n=Gt(t.baseURI);if(!Pe.has(n)){T(p,"Nothing has been deleted yet.");return}ht(n)});async function Gi(){let t=location.href.split("#")[0].split("?")[0],n=/\/[^/]*\.[^/]+$/.test(t)?t:new URL("index.html",t.endsWith("/")?t:t+"/").href,d=await fetch(n),u=await d.text();if(!d.ok||!/<html[\s>]|<ia-player[\s>]|<script[\s>]/i.test(u))throw new Error(`won't install: ${n} returned ${d.status} and not HTML (${u.length} bytes). The app page must be reachable as a file, not a container listing.`);u=u.replace(/(?:\.?\/)?(?:dist\/)?ia-player(?:\.esm)?\.js/g,"./ia-player.js"),u=u.replace(/(<sol-default\b[^>]*?)\s+solid-kitchen\b(\s*=\s*(?:"[^"]*"|'[^']*'|\S+))?/gi,"$1").replace(/<script\b[^>]*>(?:(?!<\/script>)[\s\S])*?window\.SolidKitchen(?:(?!<\/script>)[\s\S])*?<\/script>\s*/gi,"").replace(/window\.SolidKitchen\s*=\s*true/gi,"window.SolidKitchen = false");let m="";for(let k of document.querySelectorAll("script[src]")){let _=k.getAttribute("src")||"";if(/ia-player(?:\.esm)?\.js(?:[?#]|$)/.test(_)){m=k.src;break}}m||(m=new URL("dist/ia-player.js",n).href);let w=await fetch(m),x=await w.text();if(!w.ok||x.length<1e3||!/customElements|function|=>/.test(x))throw new Error(`won't install: ${m} returned ${w.status} and not the JS bundle (${x.length} bytes).`);return[{relPath:"index.html",body:u,contentType:"text/html"},{relPath:"ia-player.js",body:x,contentType:"text/javascript"}]}async function $s(t){let n=t.baseURI,d=n.slice(0,n.lastIndexOf("/")+1),u=d.replace(/\/$/,"").split("/").pop()||"library",m=`libraries/${u}/`,w=t.config?.label||u;if(t.loadDocs)try{await t.loadDocs(Zr(t.store,t.baseURI))}catch(W){console.warn("[install] playlist force-load failed",W?.message||W)}let x=[],k=[],_=[];for(let W of no(t.store,t.baseURI)){if(!W.startsWith(d)){console.warn("[install] SKIP playlist outside library",W);continue}let ee=W.slice(d.length);try{let I=await fetch(W),G=Ga(await I.text(),u,ee);x.push({relPath:m+ee,body:G,contentType:"text/turtle",skipIfExists:!0}),k.push(`<./${ee}>`),_.push(W)}catch(I){console.warn("[install] gather playlist FAILED",W,I?.message||I)}}let A=[];for(let W of Ya(t.store,_)){if(!W.startsWith(d)){console.warn("[install] SKIP release outside library",W);continue}let ee=W.slice(d.length);try{let I=await fetch(W),G=Ga(await I.text(),u,ee);x.push({relPath:m+ee,body:G,contentType:"text/turtle",skipIfExists:!0}),A.push(`<./${ee}>`)}catch(I){console.warn("[install] gather release FAILED",W,I?.message||I)}}let $=A.map(W=>W.replace(/>$/,"#it>")),C=`@prefix dct: <http://purl.org/dc/terms/>.
@prefix dcat: <http://www.w3.org/ns/dcat#>.
<#it>
    a dcat:Catalog ;
    dct:title ${JSON.stringify(w+" \u2014 releases")}${$.length?` ;
    dcat:dataset ${$.join(`,
                 `)}`:""} .
`,R=`@prefix dct: <http://purl.org/dc/terms/>.
@prefix dcat: <http://www.w3.org/ns/dcat#>.
<#it>
    a dcat:Catalog ;
    dct:title ${JSON.stringify(w+" \u2014 playlists")}${k.length?` ;
    dcat:dataset ${k.join(`,
                 `)}`:""} .
`,O=[{relPath:m+"releases.ttl",body:C,contentType:"text/turtle"},{relPath:m+"playlists.ttl",body:R,contentType:"text/turtle"}];for(let W of["index.ttl","agents.ttl","genres.ttl"]){let ee=await fetch(d+W);if(!ee.ok)throw new Error(`couldn't read ${W} (${ee.status})`);let I=Ga(await ee.text(),u,W);O.push({relPath:m+W,body:I,contentType:"text/turtle"})}return{files:[...O,...x],podLibPrefix:m,title:w}}function Es(){let t=[...document.querySelectorAll("ia-player[src]")].map(n=>{try{return new URL(n.getAttribute("src"),location.href).href}catch{return null}}).filter(n=>n&&yt(n));if(!t.length){let n=e.find(d=>!d.solid&&yt(d.url));n&&t.push(new URL(n.url,location.href).href)}return[...new Set(t)]}async function Ki(){if(Ze(!1),!Ce||!Ce.isLoggedIn){Gl(),oi(),T(p,"Choose your Solid provider to sign in \u2014 the install resumes automatically once you\u2019re signed in."),fr()||T(p,'Open the gear menu and click "Log in" to sign in, then choose Install on my Pod again.');return}let t=Ce.webId,n=Ce.fetchFor(t),d=Es();if(!d.length){T(p,"No local library available to install.");return}let u=[];try{u=await Wr(n,t)}catch{}u.length||(u=[new URL("/",t).href]);let m=u.map((I,G)=>`  ${G+1}. ${I}`).join(`
`),w=prompt(`Install Open Media Player \u2014 choose where it goes.

Enter a number, or type a full container URL:

`+m,"1");if(w==null||!w.trim())return;let x,k=parseInt(w,10);if(Number.isInteger(k)&&u[k-1]?x=u[k-1]:/^https?:\/\/.+/.test(w.trim())&&(x=w.trim()),!x){T(p,"Install cancelled \u2014 no valid location chosen.");return}let _=x.endsWith("/")?x:x+"/",A=prompt("Confirm or edit the install location:",new URL("open_media_player/",_).href);if(!A||!A.trim())return;let $=A.trim();$.endsWith("/")||($+="/");let C=[];try{C=await Gi()}catch(I){T(p,`Couldn't read the app files to install: ${I.message}`);return}let R=[];for(let I of d){let G=a.find(he=>he.baseURI===I&&he.store);if(!G)try{G=await gt({id:I,url:I,enabled:!0})}catch{G=null}if(!G||!G.store){console.warn("[install] skipping unreadable library",I);continue}try{let he=await $s(G);C.push(...he.files),R.push({podLibPrefix:he.podLibPrefix,title:he.title})}catch(he){T(p,`Couldn't prepare ${I} to install: ${he.message}`);return}}if(!R.length){T(p,"No readable libraries to install.");return}console.info(`[install] writing ${C.length} files (${R.length} libraries) to ${$}`),T(p,`Installing ${C.length} files to ${$}\u2026`);let O=await ei(n,$,C,(I,G,he)=>{(I===G||I%10===0)&&T(p,`Installing ${I}/${G}: ${he}`)}),W=!1;try{let I=(await Xn(n,t)).typeIndex;if(I||(I=await Qn(n,t)),I){for(let G of R){let he=$+G.podLibPrefix+"index.ttl";await Wa(n,I,{id:"omp-pod-"+G.podLibPrefix.replace(/[^a-z0-9]+/gi,"-").replace(/-+$/,""),url:he,label:`${G.title} (my pod)`}),Ao(t,he)}W=!0}}catch(I){console.warn("type-index record skipped:",I?.message||I)}let ee=W?" Registered in your type index.":" (type index not updated).";T(p,O.ok?`Installed ${R.length} ${R.length===1?"library":"libraries"} \u2014 open ${$}index.html (${O.put} written${O.skipped?`, ${O.skipped} kept`:""}).${ee}`:`Installed ${O.put} files with ${O.failed.length} problem(s): ${O.failed.slice(0,3).join("; ")}${ee}`)}Ve?.addEventListener("click",Ki),Kt?.addEventListener("click",Qo);async function Wi(){if(Ze(!1),!Ce||!Ce.isLoggedIn){Wl(),oi(),T(p,"Choose your Solid provider to sign in \u2014 the app update resumes automatically once you\u2019re signed in."),fr()||T(p,'Open the gear menu and click "Log in" to sign in, then choose Update app on Pod again.');return}let t=Ce.webId,n=Ce.fetchFor(t),d="",u=ql();if(u){let I=u.indexOf("libraries/");I>0&&(d=u.slice(0,I))}let m=[];try{m=await Wr(n,t)}catch{}m.length||(m=[new URL("/",t).href]);let w=m.map((I,G)=>`  ${G+1}. ${I}`).join(`
`),x=prompt(`Update app on Pod \u2014 choose where the app lives.

Enter a number, or type a full container URL:

`+w,"1");if(x==null||!x.trim())return;let k,_=parseInt(x,10);if(Number.isInteger(_)&&m[_-1]?k=m[_-1]:/^https?:\/\/.+/.test(x.trim())&&(k=x.trim()),!k){T(p,"Update cancelled \u2014 no valid location chosen.");return}let A=k.endsWith("/")?k:k+"/",$=(()=>{let I=location.href.split("#")[0].split("?")[0];return I.endsWith("/")?I:I.slice(0,I.lastIndexOf("/")+1)})(),C=(()=>{try{if(new URL($).origin===new URL(A).origin&&!/^https?:\/\/(localhost|127\.0\.0\.1)/.test($))return $}catch{}if(d)try{if(new URL(d).origin===new URL(A).origin)return d}catch{}return new URL("open_media_player/",A).href})(),R=prompt("Confirm the existing install location to overwrite:",C);if(!R||!R.trim())return;let O=R.trim();O.endsWith("/")||(O+="/");let W;try{W=await Gi()}catch(I){T(p,`Couldn't read the app files: ${I.message}`);return}T(p,`Updating app (${W.length} files) at ${O}\u2026`);let ee=await ei(n,O,W,(I,G,he)=>T(p,`Updating ${I}/${G}: ${he}`));T(p,ee.ok?`App updated \u2014 hard-reload ${O}index.html (${ee.put} files written).`:`App update: ${ee.put} written, ${ee.failed.length} problem(s): ${ee.failed.slice(0,3).join("; ")}`)}va?.addEventListener("click",Wi),qe?.addEventListener("click",()=>{Ze(!1),pn({filter:Nt,onSave:t=>{Nt=t===null?{...$a}:t,Ho(Nt),Lt.clear(),Rt.clear(),Ue(),T(p,"Filter updated.")}})}),it?.addEventListener("click",t=>{if(t.stopPropagation(),!j.length){T(p,"Nothing to randomize \u2014 the tracklist is empty.");return}let n=j;for(let d=n.length-1;d>0;d--){let u=Math.floor(Math.random()*(d+1));[n[d],n[u]]=[n[u],n[d]]}sa?.clear?.(),fe(),T(p,`Randomized ${n.length} track${n.length===1?"":"s"}.`),Te()}),ga?.addEventListener("click",t=>{if(t.stopPropagation(),U!=="library"){T(p,"Clear tracklist only applies to the Library view. Use the playlist menu to delete a playlist.");return}b.pause(),b.removeAttribute("src"),b.load(),ne=[],j=[],J=null,ye.setSelection([],{notify:!1}),qi?.clearSelection?.(),He=_t(),fe(),Fa(E,""),T(p,"Library queue cleared."),Te()}),Ie?.addEventListener("click",async()=>{if(Ze(!1),!j.length){T(p,"Nothing to save \u2014 pick some albums first.");return}let t=Fe();if(!t){T(p,"Enable a library to save playlists.");return}let n=`Playlist ${Ne.length+1}`,d=prompt("Save current tracks as a playlist named:",n);if(!d||!d.trim())return;let u=d.trim();T(p,`Saving playlist "${u}"\u2026`);try{let w=(await ai(t.store,t.baseURI,u)).id;Ne.push({id:w,label:u,_lib:t.config.id}),Pe.add(w);let x=j.map(_=>({label:[_.artist,_.album,_.name].filter(Boolean).join(" \u2014 ")||_.name,url:_.url,source:_.albumUrl})),k=await Ja(t.store,t.baseURI,w,x,{inlineTracks:!nt()});j.forEach((_,A)=>{re.push({node:k.nodes?.[A],label:x[A].label,topic:w,url:_.url,source:_.albumUrl,_lib:t.config.id})}),T(p,`Saved playlist "${u}" (${j.length} track${j.length===1?"":"s"}). Click it in Sources to view.`),Me()}catch(m){console.error("Save playlist failed:",m),T(p,`Could not save playlist: ${m.message}`)}}),Lr("ordered"),zi("off"),pi(),Be(),ve(),ye.setMessage(or().chooseArtist),fe(),Sa(),qo();function Is(){for(let t of ft()){if(!t.loadDocs)continue;let n=Zr(t.store,t.baseURI);n.length&&t.loadDocs(n).then(d=>{if(d&&(et(t),Me(),ve(),Qt&&Pe.has(Qt)&&U==="library")){let u=Qt;Qt=null,st.setSelection([u],{notify:!1}),ht(u)}}).catch(d=>console.warn("background playlist load failed:",d))}}return(window.requestIdleCallback||(t=>setTimeout(t,300)))(()=>Is()),r.appAction=t=>{let n={help:".gear-help-link",about:".gear-help",loginHelp:".gear-login-help",filters:".gear-filters",viewDeleted:".gear-view-deleted",installPod:".gear-install-pod",updateApp:".gear-update-app",importMusic:".gear-import-music"}[t];n&&g.querySelector(n)?.click()},r.appState=()=>({guest:!nt(),real:ka(),webId:ka()&&Yt()?.webId||"",mediaType:i()}),r.getMediaElement=()=>b,r.nowPlayingText=()=>J?[J.artist,J.album,J.name].filter(Boolean).join(" \u2014 "):"",g}var Qa="ia-player:libraries";function So(){return"lib-"+(crypto.randomUUID?.()??Date.now().toString(36)+Math.random().toString(36).slice(2,6))}function Lo(e){return String(e).toLowerCase().replace(/\s+/g,"_").replace(/[^a-z0-9_]/g,"").replace(/_+/g,"_").replace(/^_|_$/g,"")||"library"}function Fl(e){if(typeof e!="string")return e;let a=e.replace("/ia-music-library/","/plugins/ia-player/libraries/internet_archive_music/");return(a==="./ia-music.ttl"||a.endsWith("/ia-music.ttl"))&&(a=a.replace(/(^|\/)ia-music\.ttl$/,(r,i)=>`${i}plugins/ia-player/libraries/internet_archive_music/index.ttl`)),a.includes("/plugins/ia-player/libraries/")||(a=a.replace(/(^|\/)libraries\/(internet_archive_music|internet_archive_movies)\//,(r,i,o)=>`${i}plugins/ia-player/libraries/${o}/`)),a}function yt(e){try{return new URL(e,location.href).origin===location.origin}catch{return!1}}function zl(e){try{let a=localStorage.getItem(Qa);if(a){let r=JSON.parse(a),i=Array.isArray(r)?r.filter(o=>o&&!o.solid):[];if(i.length){let o=!1;for(let l of i){let s=Fl(l.url);s!==l.url&&(l.url=s,o=!0),l.id==="default"&&l.label==="Internet Archive"&&(l.label="Internet Archive Music",o=!0),l.enabled=yt(l.url)}return o&&ui(i),i}}}catch(a){console.warn("Could not read library configs from localStorage:",a)}return[{id:"default",label:"Internet Archive Music",url:e,enabled:!0}]}async function jl(e){if(Rl)return[];let a=String(e||"").match(/^(.*\/libraries\/)/)?.[1];if(!a)return[];let r;try{let l=await fetch(new URL("imported.ttl",new URL(a,location.href)).href,{headers:{accept:"text/turtle"}});if(!l.ok)return[];r=await l.text()}catch{return[]}let i=[],o=new Set;for(let l of r.matchAll(/<([^>]*index\.ttl[^>]*)>/g)){let s;try{s=new URL(l[1],new URL(a,location.href)).href.split("#")[0]}catch{continue}let c=s.match(/\/libraries\/([^/]+)\//)?.[1];if(!c||o.has(s)||c==="internet_archive_music"||c==="internet_archive_movies")continue;o.add(s);let f=c.replace(/_/g," ").replace(/\b\w/g,v=>v.toUpperCase());i.push({id:"imported-"+c,label:f,url:s,enabled:!1})}return i}function ui(e){try{localStorage.setItem(Qa,JSON.stringify((e||[]).filter(a=>a&&!a.solid)))}catch(a){console.warn("Could not write library configs to localStorage:",a)}}var si="omp:lib-enabled";function Ol(e,a){if(e)try{let r=JSON.parse(localStorage.getItem(si)||"{}");r[e]=!!a,localStorage.setItem(si,JSON.stringify(r))}catch(r){console.warn("rememberLibEnabled failed:",r)}}function Eo(e,a){try{let r=JSON.parse(localStorage.getItem(si)||"{}");return e in r?!!r[e]:a}catch{return a}}var _o="omp:pod-library",Io="omp:pod-library:last";function Ao(e,a){try{let r=JSON.parse(localStorage.getItem(_o)||"{}");r[e]=a,localStorage.setItem(_o,JSON.stringify(r))}catch(r){console.warn("podLibRemember failed:",r)}try{localStorage.setItem(Io,a)}catch{}}function ql(){try{return localStorage.getItem(Io)||null}catch{return null}}var Za="omp:auth-inflight",Bl=12e4;function oi(){try{localStorage.setItem(Za,JSON.stringify({search:location.search,hash:location.hash,t:Date.now()}))}catch{}}function Hl(){try{let e=JSON.parse(localStorage.getItem(Za)||"null");return e?Date.now()-(e.t||0)>Bl?(localStorage.removeItem(Za),null):e:null}catch{return null}}function To(){try{localStorage.removeItem(Za)}catch{}}var li="omp:install-pending";function Gl(){try{localStorage.setItem(li,"1")}catch{}}function Kl(){try{let e=localStorage.getItem(li);return e&&localStorage.removeItem(li),!!e}catch{return!1}}var ci="omp:updateapp-pending";function Wl(){try{localStorage.setItem(ci,"1")}catch{}}function Vl(){try{let e=localStorage.getItem(ci);return e&&localStorage.removeItem(ci),!!e}catch{return!1}}async function gt(e){try{let a=!!e.solid||yt(e.url),{store:r,baseURI:i,loadDocs:o}=await Jn(e.url,{shared:a,lazyReleases:!0,lazyPlaylists:!0}),l=ao(r,i),{genres:s,bookmarks:c}=Jr(r,i,l),f=Xr(r,i);return{config:e,store:r,baseURI:i,loadDocs:o,mediaType:l,genres:s,bookmarks:c,playlists:f,error:null}}catch(a){return console.error("Failed to load library",e.url,a),{config:e,store:null,baseURI:null,loadDocs:null,mediaType:"audio",genres:[],bookmarks:[],playlists:[],error:a.message}}}var $o=!1;async function ba(e,a){try{console.info("[omp] BUILD","omp 0.1.0 2026-07-04T18:16:17.032Z")}catch{}if(vn(e),a.length>1){let r=a.map(i=>Eo(i.url,i.enabled));r.filter(Boolean).length===1&&a.forEach((i,o)=>{i.enabled=r[o]})}try{let r=l=>({config:l,store:null,baseURI:null,genres:[],bookmarks:[],playlists:[],error:null,unloaded:!0}),i=await Promise.all(a.map(l=>l.enabled?gt(l):Promise.resolve(r(l)))),o=Nl({libraryConfigs:a,libs:i,host:e});xn(e,o)}catch(r){console.error("Initialization error:",r),wn(e,r.message)}}var di=class extends HTMLElement{static get observedAttributes(){return["src","source"]}connectedCallback(){this._mounted||(this._mounted=!0,!this.hasAttribute("defer")&&this.ensureLoaded())}ensureLoaded(){this._loaded||(this._loaded=!0,this._loadFromConfig())}attributeChangedCallback(a,r,i){!this._mounted||a!=="src"&&a!=="source"||r===i||localStorage.getItem(Qa)||this._loadFromConfig()}_loadFromConfig(){let a=this.getAttribute("src")||this.getAttribute("source"),r=this.getAttribute("storage-ns");if(r&&a){let o=[{id:r,label:r,url:a,enabled:!0}];jl(a).then(l=>ba(this,l.length?o.concat(l):o)).catch(()=>ba(this,o));return}if(!a&&!localStorage.getItem(Qa)){yn(this,o=>{let l=[{id:"default",label:"Internet Archive Music",url:o,enabled:!0}];ui(l),ba(this,l)});return}let i=zl(a||"./dk-pod/dk/plugins/ia-player/libraries/internet_archive_music/index.ttl");ba(this,i)}reload(a){ba(this,a)}};customElements.get("ia-player")||customElements.define("ia-player",di);Rn();
