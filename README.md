# Open Media Player

Two web components with curated media libraries:

- **`<ia-player>`** — browse, search, and play audio and video collections
  from the Internet Archive (Music, Spoken Word, and Movies libraries ship
  in this package).
- **`<omp-images>`** — browse curated Wikimedia Commons image galleries.

Reading works logged out. The components are Solid-aware: with a Solid login
(via `sol-login`) owners can favourite, edit playlists/genres/topics, and
install the whole player onto their own pod.

## Try it

The read-only web app is this repo's `index.html`, deployed at
<https://jeff-zucker.github.io/open-media-player/>.

Local development:

```
npm install
npm run build     # esbuild → dist/ia-player.esm.js
npm test          # node --test tests/
npm run serve     # http://localhost:8082/ (serves .ttl as text/turtle)
```

## Using the components in your own page

The package is loaded through
[component-interop](https://github.com/jeff-zucker/component-interop)
alongside [sol-components](https://github.com/solid-contrib/solid-web-components),
which supplies the shared Solid stack (rdflib, solid-logic, solid-ui) and the
`sol-*` elements the player renders into:

```html
<script src="https://cdn.jsdelivr.net/npm/component-interop@0.3/component-interop.js"
        data-stage="local"
        data-manifest="https://cdn.jsdelivr.net/npm/sol-components@2/dist/sol-components.manifest.json
                       https://cdn.jsdelivr.net/npm/open-media-player@0/omp.manifest.json"
        data-components="sol-basic sol-gallery sol-login ia-player"></script>
...
<ia-player storage-ns="music"
           source="https://cdn.jsdelivr.net/npm/open-media-player@0/libraries/internet_archive_music/index.ttl">
</ia-player>
```

The single bundle (`dist/ia-player.esm.js`) defines both `<ia-player>` and
`<omp-images>`. `rdflib` stays external — the loader's importmap resolves it
to the one shared instance. See `index.html` here for a complete page
(tabbed shell from `ui-data/omp-tabs.ttl`, mini player, login).

## Layout

- `src/ia-player/`, `src/omp-images/`, `src/shared/` — component sources.
- `libraries/` — the curated library documents (Turtle): per-library
  `index / genres / agents / playlists / releases`.
- `shapes/` — SHACL shapes for the library data (`.shaclc` files are
  generated from `.shacl`, never hand-edited).
- `ui-data/` — the demo page's tabset and settings documents.
- `demo/` — page-level glue for `index.html` (mini-player controller, page CSS).
- `dist/` — committed build artifact (served by GitHub Pages and the CDN).

## Provenance

Extracted from [data-kitchen](https://github.com/SolidOS/data-kitchen), where
this player grew up; that repo holds the pre-extraction history.

MIT © Jeff Zucker
