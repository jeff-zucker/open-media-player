// Repro: Bessie Smith curated-artist album resolution, from real pod data.
// Phase 1 = startup spine only (agents.ttl loaded, playlist docs NOT) — what
// fetchAlbumsForArtist sees if clicked before the background playlist load.
// Phase 2 = playlist + release docs loaded — what it should show.
// Run from the open-media-player repo root (its node_modules has rdflib).
import { readFileSync } from 'node:fs';
import $rdf from 'rdflib';
import { getLocalArtistAlbums, releaseDocsForPlaylistDocs }
  from '../../src/ia-player/ia-rdf.js';

const LIB_FS = '/home/jeff/solid/dk-pod/dk/plugins/ia-player/libraries/internet_archive_music';
const LIB_URL = 'http://localhost:8000/dk-pod/dk/plugins/ia-player/libraries/internet_archive_music';

const store = $rdf.graph();
// Serve-view of a pod file: strip CSS's $.ttl extension-hiding suffix.
const load = (rel) => {
  const fsPath = `${LIB_FS}/${rel}`;
  const url = `${LIB_URL}/${rel.replace(/\$\.ttl$/, '')}`;
  $rdf.parse(readFileSync(fsPath, 'utf8'), store, url, 'text/turtle');
  return url;
};

// ── Phase 1: startup spine only ─────────────────────────────────────────────
load('index.ttl'); load('agents.ttl'); load('genres.ttl');
load('releases.ttl'); load('playlists.ttl');

const FOAF = $rdf.Namespace('http://xmlns.com/foaf/0.1/');
const DCT = $rdf.Namespace('http://purl.org/dc/terms/');
const artist = store.match(null, FOAF('name'), $rdf.literal('Bessie Smith'))[0]?.subject;
console.log('artist node:', artist?.value);
const srcPlaylist = store.any(artist, DCT('source'));
console.log('sourcePlaylist:', srcPlaylist?.value);

const playlistDoc = String(srcPlaylist.value).split('#')[0];
let need = releaseDocsForPlaylistDocs(store, [playlistDoc]);
console.log('phase 1 (spine only): releaseDocs needed =', need.length,
  '| albums =', getLocalArtistAlbums(store, artist).length);

// ── Phase 2: playlist doc loaded (what backgroundLoadPlaylists does) ────────
load('playlists/Bessie_Smith$.ttl');
need = releaseDocsForPlaylistDocs(store, [playlistDoc]);
console.log('phase 2 (playlist loaded): releaseDocs needed =', need.length);

// Load the needed release docs (what ensureReleaseDocs does).
let missing = 0;
for (const doc of need) {
  const rel = doc.replace(`${LIB_URL}/`, '');
  try { load(`${rel}$.ttl`); } catch { missing++; console.log('  MISSING on pod:', rel); }
}
const albums = getLocalArtistAlbums(store, artist);
console.log('phase 3 (releases loaded): albums =', albums.length,
  missing ? `(${missing} release docs missing)` : '');
for (const a of albums.slice(0, 8)) console.log('  •', a.name);
