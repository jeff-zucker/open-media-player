/**
 * omp-user-agent.js — the app-identification string sent to external APIs.
 *
 * Browsers refuse a JS-set `User-Agent` (Chromium silently drops it), so this
 * is sent as Wikimedia's sanctioned `Api-User-Agent` header instead — their
 * CORS allows it (verified). Internet Archive's CORS allows NO custom header,
 * so IA requests can't be tagged from JS at all; in the Data Kitchen desktop
 * app the Electron main process appends this same token to the real
 * User-Agent for archive.org/wikimedia hosts (electron-config/main.cjs).
 *
 * `__OMP_VERSION__` is stamped by esbuild from package.json; the fallback
 * covers unbundled dev use.
 */
const version = (typeof __OMP_VERSION__ !== 'undefined') ? __OMP_VERSION__ : 'dev';

export const OMP_USER_AGENT =
  `open-media-player/${version} (+https://jeff-zucker.github.io/open-media-player/)`;
