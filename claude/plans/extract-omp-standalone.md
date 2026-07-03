# Plan: Release open-media-player (omp) as a standalone npm package + read-only GitHub Pages app

**STATUS (2026-07-03):** Phase 1 DONE. Phase 2 DONE locally (dk symlink cutover;
live-pod index.html + dk.manifest.json hand-merged). G1 repo
(github.com/jeff-zucker/open-media-player), G2 push, and G4 Pages
(https://jeff-zucker.github.io/open-media-player/ — .ttl MIME + archive.org/Commons
CORS verified live) DONE. G3 npm publish approved and ready (name available, pack
reviewed) — blocked only on interactive `npm login`. Post-plan additions: audio
toolbar resize + "Search the Internet Archive…" rename (both versions); web-only
short tab labels.

## Context

The ia/wikidata media tabs in data-kitchen are already an internally-branded **omp** subsystem:
two custom elements — `<ia-player>` (Internet Archive audio/video: Music, Spoken Word, Movies
tabs) and `<omp-images>` (Wikimedia Commons images tab) — built by esbuild into ONE bundle
(`plugins/ia-player/dist/ia-player.esm.js`, external: rdflib only), plus shared favourites/rdf
files in `src/shared/`. Owner decisions: **new sibling repo** `/home/jeff/solid/open-media-player`;
**dk consumes the package afterwards** (npm/CDN prod, sibling tree dev — the sol-components
pattern); **full curated libraries ship** (~2.4 MB, 372 TTLs incl. music `releases/`);
**GitHub Pages** for the read-only web deployment. The dk-wide static web variant
(`claude/plans/three-release-variants.md`) is **DEFERRED — not in scope**; only its read-only
techniques are borrowed. dk stays Electron-only.

Verified ground truth that shapes the plan:
- Moving set from `src/shared/`: `omp-favourites-store.js`, `omp-favourites-ui.js`,
  `rdf-shared.js`, `modal-favourite-prompt.html`, `favourite-prompt.css`. (`html-escape.js` and
  `oidc-issuers.js` are dk-only — they stay.)
- The bundle keeps `rdflib` external (single shared instance via component-interop importmap);
  sol-components deep imports (`core/rdf.js`, `core/auth-fetch.js`, `web/utils/contract.js`) are
  bundled in — safe because `core/rdf.js` is a window-level singleton.
- omp touches **no proxy** (archive.org + commons.wikimedia.org are CORS-open); `ui:proxy` is a
  dk-wide concern.
- Guest gating already exists (`applyAccessGating` → `.guest-mode` hides edit affordances;
  writes fail quietly; `listFavourites` returns `[]` on non-OK) → read-only web needs **no new
  mode, no new attributes**.
- The Install-on-Pod flow discovers its own bundle/library URLs from the live page — survives
  the move untouched.
- Bug found: `plugins/ia-player/sources/smoke-test.mjs` imports a non-existent `./commons.js`
  — broken in place today; gets re-homed and fixed during the move.

## Phase 1 — build the standalone repo (all local; no outward actions)

New tree at `/home/jeff/solid/open-media-player` (work on `main`, no branches):

```
open-media-player/
├── package.json  esbuild.config.mjs  omp.manifest.json  index.html
├── README.md  LICENSE  .nojekyll  .gitignore (dist/ IS committed)
├── src/
│   ├── ia-player/    bundle-entry.js bundle-init.js ia3.js ia-rdf.js ia-ui.js
│   │                 import-id3-build.js manifest.jsonld sources/ assets/ (17 files)
│   ├── omp-images/   omp-images.js omp-images.css manifest.jsonld sources/
│   └── shared/       omp-favourites-{store,ui}.js rdf-shared.js
│                     modal-favourite-prompt.html favourite-prompt.css
├── libraries/        internet_archive_{music,movies,spoken_word}/ wikimedia_images/
├── shapes/           music.shacl(.shaclc) images/image-libraries/image-topics.shacl(.shaclc) …
├── ui-data/          omp-tabs.ttl  omp-settings.ttl
├── demo/             mini-player.js (page-level controller adapted from dk-tabs-shell.js:384-420)
├── dist/             ia-player.esm.js (committed)
├── tests/            favourites-store, import-id3, shapes, manifest-jsonld, sources-smoke
└── tools/            serve-static.mjs (.ttl→text/turtle, .jsonld→application/ld+json)
```

`src/ia-player/` and `src/omp-images/` stay siblings so `../omp-images/omp-images.js` in
bundle-entry survives. Libraries are self-contained (relative IRIs; favourites/install derive
paths from live base URL) — relocation is free. Plain `cp`, no git-history surgery (dk history
remains the record; note in README).

**Import rewrites (the complete list — only 6):** `../../src/shared/X` → `../shared/X` in
`bundle-entry.js` (1), `ia3.js` (1), `ia-rdf.js` (1), `omp-images.js` (2); smoke test's broken
`./commons.js` → `../src/omp-images/sources/commons.js` (1). Bare `sol-components/…` and
`rdflib` specifiers unchanged. The two `manifest.jsonld` files repoint `requires`/`shape` to
`../../libraries/…` / `../../shapes/…`.

**package.json essentials:** name `open-media-player` (availability checked at publish gate;
scoped fallback ripples into jsDelivr URLs), `type: module`,
`peerDependencies: { rdflib, sol-components }` (solid-logic / solid-ui arrive transitively via
sol-components — not direct deps; component-interop is a host-page requirement, not a dep),
`devDependencies: { esbuild }`, exports for `.` (dist bundle), `./manifest`, `./dist/*`,
`./src/*`, `./libraries/*`, `./shapes/*`, `./ui-data/*`; scripts build/watch/test/serve +
`prepublishOnly: build && test`. esbuild config = dk's `iaPlayerOptions` verbatim with new
entry/outfile and versioned `__OMP_BUILD__` define (format esm, minify, es2020,
external: ['rdflib'], .css/.html text loaders).

**omp.manifest.json (component-interop):** name `open-media-player`; `components` metadata for
`ia-player` (label, `./shapes/music.shacl`, help) and `omp-images` (label, shape); stages map
only `ia-player` (one bundle defines both elements — dk's current pattern): local
`./dist/ia-player.esm.js` (manifest-relative resolution is verified loader behavior →
subpath-safe), cdn `https://cdn.jsdelivr.net/npm/open-media-player@0/dist/ia-player.esm.js`.
**jsDelivr, not esm.sh** — jsDelivr serves the file verbatim so the bundle's bare
`import "rdflib"` resolves through the page importmap to the ONE shared rdflib; esm.sh would
rewrite it and create a second instance. `shared-modules` empty (rdflib, solid-logic, solid-ui
mappings are owned by sol-components' manifest, first-wins). `provides.webid` copied verbatim
from dk.manifest.json.

**Standalone read-only index.html:** loads component-interop + sol-components manifest from
CDN URLs, `data-stage="auto"` (localhost → fresh local `dist/`, deployed → CDN),
`data-manifest="…sol-components.manifest.json omp.manifest.json"`,
`data-components="sol-basic sol-gallery sol-login menu-from-rdf ia-player"`,
`data-objects="webid:open-media-player auth:sol-components"`. Body: `<sol-default>` with
`source="ui-data/omp-settings.ttl#Settings"` (existing predicates only; NO `ui:proxy` line, NO
`solid-kitchen` attribute), chrome bar with `<sol-login>` and
`<sol-include source="src/ia-player/assets/mini-player.html" trusted>` (visible source=, rule
respected), `<sol-tabs keep-alive from-rdf="ui-data/omp-tabs.ttl#Tabs">`, and
`demo/mini-player.js`. `ui-data/omp-tabs.ttl` = four `ui:Component` entries copied from dk's
plugin TTLs with `source` rewritten `./dk-pod/dk/plugins/ia-player/libraries/…` →
`./libraries/…`; `storage-ns`/`defer`/`favourites-only` kept as-is.
**Every repo-relative URL is relative → zero absolute-path fixes for subpath hosting.**
**New-vocabulary audit: NONE** — only ui:/schema: terms already in dk's TTLs; no new HTML/data-*
attributes. If implementation discovers a needed addition: STOP and ask.

**Read-only strategy: existing content + existing gating, nothing new.** Guests see no edit
affordances; favourites wall is cleanly empty on Pages (404 → `[]`); guest ★ POST fails →
router `console.warn`, quiet. One code check: `omp-images.js` calls `star()` directly — verify
it catches; if not, add try/catch (code fix, not new attribute). PATCH/install paths already
guest-gated and unreachable anonymously.

**.shaclc rule:** regenerated, never hand-edited — the generator is `scripts/regen-shaclc.mjs`
in the sol-components tree (per project memory); invoke it from there or copy it into `tools/`
(verify location at implementation). No `#` comments in any RDF file.

Steps: scaffold + copy + rewrites → `npm install`, `npm run build` (commit dist/), `npm test`
→ local verification (below) → `git init`, commit on main.

## Approval gates (each is a separate stop-and-ask at execution time; none automatic)

- **G1**: create GitHub repo `jeff-zucker/open-media-player`.
- **G2**: first `git push` (tests green first — hard rule).
- **G3**: npm publish — immediately preceded by `npm view open-media-player` (name
  availability), `npm pack --dry-run` review; if name taken, stop and confirm scoped fallback
  + update jsDelivr URLs before publishing.
- **G4**: enable GitHub Pages (main / root, `.nojekyll`), then live verification.

## Phase 2 — dk consumes the package (separate, later; dk must not break until cutover)

1. dk package.json: add `open-media-player` dep; dev via the same sibling-tree mechanism dk
   uses for sol-components (verify: file:/link/symlink — mirror exactly).
2. dk index.html: add `node_modules/open-media-player/omp.manifest.json` to `data-manifest`;
   keep `ia-player` in `data-components`; repoint mini-player include to
   `node_modules/open-media-player/src/ia-player/assets/mini-player.html`.
3. dk.manifest.json: delete ia-player/omp-images component + stage entries (kills one of dk's
   absolute-path landmines for free); dk keeps its `webid` provider.
4. `electron-config/seed.cjs`: seed libraries FROM the package into the same pod paths
   (`dk-pod/dk/plugins/ia-player/libraries/…`) → plugin TTLs/catalog/menus/favourites keep
   working with zero TTL edits. Libraries must stay pod-hosted in dk (favourites need live LDP).
5. esbuild.config.mjs: drop `iaPlayerOptions`; delete `plugins/ia-player/`,
   `plugins/omp-images/`, the 5 moved `src/shared` files, moved tests; adjust glob-driven test
   suites; add pruned `node_modules/open-media-player/**` to electron `build.files`.
6. Verify in the real app (npm start: four media tabs, playback, mini-player, favourites
   against local pod, Install-on-Pod smoke), land as one cutover commit on main.

## Verification

- `npm test` + `npm run build` clean; `npm pack --dry-run` lists all 372 TTLs + shapes + src +
  dist.
- `npm run serve` → browser: four tabs render from omp-tabs.ttl; music search/playback; images
  gallery from Commons; favourites wall empty without errors; guest mode hides edits;
  mini-player binds when audio plays on another tab. Headless playwright-core check:
  both elements defined, first library card rendered, zero uncaught exceptions.
- Verify in step 1 (before anything outward): `sol-tabs from-rdf` works without dk shell JS,
  and menu-from-rdf resolves attribute `source` values against the page URL; the element's
  `getMediaElement()`/`nowPlayingText()` API for the mini controller.
- Post-Pages: `curl -sI …/libraries/internet_archive_music/index.ttl` → `text/turtle`;
  full read-path spot-check at the subpath URL; archive.org + commons requests succeed
  cross-origin (the real proxyless test); single-rdflib sanity; guest ★ fails quietly.
- CI guard (normal commit, not gated): `npm ci && build && test && git diff --exit-code dist/`
  to catch stale committed bundles.

## Risks

- npm name squatted (checkable only at G3); esm.sh double-rdflib avoided via jsDelivr; GH Pages
  .ttl MIME asserted-not-proven until G4 curl; proxyless archive.org at scale unverified until
  live; guest ★ visible-but-fails-quietly accepted for v1; committed dist/ churn (CI guard);
  sol-basic's exact component set assumed to cover sol-tabs/sol-include/sol-default (verify).

## Open questions (defaults chosen; correct me at review)

1. npm fallback if name taken: `@jeff-zucker/open-media-player`.
2. Keep `<sol-login>` on the web page v1 — **recommended keep** (signed-in visitors get real
   favourites/edits against their own pod; costs nothing when unused).
3. Guest ★ on the static site: accept fails-quietly v1 (hiding it would need a new gating
   mechanism → would require asking before inventing).
4. License for code AND the curated library metadata (372 TTLs): same MIT?
5. Phase 2 timing: immediately after G4, or let the package soak first?
