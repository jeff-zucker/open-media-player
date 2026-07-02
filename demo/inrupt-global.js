// Publish the Inrupt auth ESM build onto the window global sol-login reads
// (window.solidClientAuthn). Same technique as data-kitchen's
// src/dk-inrupt-global.js, but the import resolves through the loader's
// injected importmap (sol-components' vendored copy) instead of a
// node_modules path.
import * as inrupt from '@inrupt/solid-client-authn-browser';
if (!window.solidClientAuthn) window.solidClientAuthn = inrupt;
