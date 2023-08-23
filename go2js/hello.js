// Copyright 2021 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

"use strict";

globalThis.require = require;
globalThis.fs = require("fs");
globalThis.TextEncoder = require("util").TextEncoder;
globalThis.TextDecoder = require("util").TextDecoder;

globalThis.performance = {
  now() {
    const [sec, nsec] = process.hrtime();
    return sec * 1000 + nsec / 1000000;
  },
};

const crypto = require("crypto");
globalThis.crypto = {
  getRandomValues(b) {
    crypto.randomFillSync(b);
  },
};

require("./wasm_exec");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const go = new Go();
  go.env = Object.assign({ TMPDIR: require("os").tmpdir() }, process.env);
  go.exit = process.exit;

  const { instance, module } = await WebAssembly.instantiate(fs.readFileSync("./hello.wasm"), go.importObject)
  go.run(instance)
  await sleep(1)
  globalThis["Print"](1,2,3)
}

main()
