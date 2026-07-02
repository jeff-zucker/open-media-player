import * as esbuild from 'esbuild';
import { readFileSync } from 'node:fs';

const watch = process.argv.includes('--watch');
const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'));

// The omp bundle (defines <ia-player> and <omp-images>). rdflib stays
// external — the host page's component-interop importmap maps it to the one
// shared instance. CSS/HTML are inlined as text by bundle-init.js.
const options = {
  entryPoints: ['src/ia-player/bundle-entry.js'],
  outfile: 'dist/ia-player.esm.js',
  format: 'esm',
  bundle: true,
  minify: true,
  target: ['es2020'],
  platform: 'browser',
  mainFields: ['module', 'browser', 'main'],
  conditions: ['module', 'import', 'browser', 'default'],
  treeShaking: true,
  legalComments: 'none',
  logLevel: 'info',
  external: ['rdflib'],
  loader: { '.css': 'text', '.html': 'text' },
  define: { __OMP_BUILD__: JSON.stringify(`omp ${pkg.version} ${new Date().toISOString()}`) },
};

if (watch) {
  const ctx = await esbuild.context(options);
  await ctx.watch();
  console.log('esbuild: watching src/');
} else {
  await esbuild.build(options);
}
