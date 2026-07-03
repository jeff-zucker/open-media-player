# claude/ — Claude-authored artifacts

- `plans/extract-omp-standalone.md` — the approved extraction plan (Phase 1:
  this repo, DONE 2026-07-02; Phase 2: data-kitchen consumes the package via
  its node_modules symlink, DONE locally 2026-07-02; gates G1–G4 — GitHub repo,
  push, npm publish, Pages enablement — pending explicit owner go).
- `smoke-tests/headless-page-check.mjs` — headless check of the standalone
  page. Start `node tools/serve-static.mjs` (:8082) first; borrows playwright
  from the sibling component-interop working tree.

Conventions: dk's media-tab look is frozen — restyle the standalone page only
in the page layer (`index.html`, `demo/omp-page.css`, `ui-data/`), never in
`src/` component CSS. After editing `src/`, rebuild (`npm run build`) — dk
serves this repo's `dist/` through its symlink.
