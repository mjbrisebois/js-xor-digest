[![](https://img.shields.io/npm/v/@whi/xor-digest/latest?style=flat-square)](http://npmjs.com/package/@whi/xor-digest)

# `xor_digest( bytes, length )`
This micro-package provides a single method for reducing a `Uint8Array` to the given length using an
XOR pattern.

[![](https://img.shields.io/github/issues-raw/mjbrisebois/js-xor-digest?style=flat-square)](https://github.com/mjbrisebois/js-xor-digest/issues)
[![](https://img.shields.io/github/issues-closed-raw/mjbrisebois/js-xor-digest?style=flat-square)](https://github.com/mjbrisebois/js-xor-digest/issues?q=is%3Aissue+is%3Aclosed)
[![](https://img.shields.io/github/issues-pr-raw/mjbrisebois/js-xor-digest?style=flat-square)](https://github.com/mjbrisebois/js-xor-digest/pulls)


## Overview

## Install

```bash
npm i @whi/xor-digest
```

## Usage

```javascript
const { xor_digest } = require('@whi/xor-digest');

let input = new Uint8Array([
    207,  39,   6,  42, 162,   2,  95, 176,
     73, 215,  86, 158, 133, 121,  16, 209,
    230, 217, 119, 208,  52, 155,  79,  31,
    250, 159,  28, 212, 252, 178, 226, 227
]);

xor_digest( input, 4 );
// Uint8Array([ 117, 228, 217, 45 ])
```

Alternatively, attach `xor_digest` to the native `Uint8Array.prototype` as a method (`xorDigest()`).

```javascript
require('@whi/xor-digest').bindNative();

let input = new Uint8Array([
    207,  39,   6,  42, 162,   2,  95, 176,
     73, 215,  86, 158, 133, 121,  16, 209,
    230, 217, 119, 208,  52, 155,  79,  31,
    250, 159,  28, 212, 252, 178, 226, 227
]);

input.xorDigest( 4 );
// Uint8Array([ 117, 228, 217, 45 ])
```

### Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)
