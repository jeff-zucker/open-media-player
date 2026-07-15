// The two components carry a folder manifest.jsonld (the plugin standard:
// help, shapes, parts). Each must be valid JSON, declare the required
// component fields, and every file it references must exist on disk — a stale
// path means a broken help link or an unloadable settings shape at runtime.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = join(root, 'src');

const manifestDirs = readdirSync(srcDir, { withFileTypes: true })
  .filter((d) => d.isDirectory() && existsSync(join(srcDir, d.name, 'manifest.jsonld')))
  .map((d) => d.name);

test('found folder manifests to validate', () => {
  assert.ok(manifestDirs.length >= 2, `expected the ia-player + omp-images manifests, got ${manifestDirs.length}`);
});

for (const name of manifestDirs) {
  const dir = join(srcDir, name);
  test(`src/${name}/manifest.jsonld is valid and complete`, () => {
    let m;
    assert.doesNotThrow(() => { m = JSON.parse(readFileSync(join(dir, 'manifest.jsonld'), 'utf8')); },
      'manifest.jsonld must be valid JSON');

    assert.equal(m['@type'], 'Component', '@type must be "Component"');
    assert.ok(typeof m.label === 'string' && m.label, 'needs a label');
    assert.ok(typeof m.name === 'string' && m.name, 'needs a component name');
    assert.ok(typeof m.publisher === 'string' && m.publisher, 'needs a publisher');

    // Every referenced resource must resolve. Absolute paths resolve against
    // the repo root; relative ones against the manifest's own folder; http(s)
    // refs are external and skipped.
    for (const key of ['hasPart', 'requires', 'shape', 'help']) {
      const v = m[key];
      if (!v) continue;
      for (const p of (Array.isArray(v) ? v : [v])) {
        if (/^https?:/.test(p)) continue;
        const abs = p.startsWith('/') ? join(root, p) : resolve(dir, p);
        assert.ok(existsSync(abs), `${key} references a missing file: ${p}`);
      }
    }
  });
}

// omp.manifest.json (the component-interop manifest) gets the same
// dead-reference check: its shape/help metadata and local-stage bundle paths
// must exist relative to the repo root, where the manifest lives.
test('omp.manifest.json references resolve', () => {
  const m = JSON.parse(readFileSync(join(root, 'omp.manifest.json'), 'utf8'));
  const refs = [];
  for (const c of Object.values(m.components || {}))
    for (const key of ['shape', 'help']) if (c[key]) refs.push(c[key]);
  for (const spec of Object.values(m.stages?.local?.components || {})) refs.push(spec);
  for (const p of refs) {
    if (/^https?:/.test(p)) continue;
    assert.ok(existsSync(resolve(root, p)), `omp.manifest.json references a missing file: ${p}`);
  }
});
