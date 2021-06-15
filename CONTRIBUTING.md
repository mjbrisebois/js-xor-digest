[back to README.md](README.md)

# Contributing

## Overview
This is a micro-package designed to be light-weight and make 1 job as simply as possible.  That job
should only be to reduce a typed array using a simple XOR pattern.

> **NOTE:** Currently, only `Uint8Array` is handled but this pattern should work with any
> `TypedArray`


## Development

### `logging()`
Turns on debugging logs.

```javascript
const { xor_digest, logging } = require('@whi/xor-digest').bindNative();

logging(); // show debug logs
```

### Environment

- Developed using Node.js `v12.20.0`

### Building
No build required.  Vanilla JS only.

### Testing

To run all tests with logging
```
make test-debug
```

- `make test-unit-debug` - **Unit tests only**
- `make test-integration-debug` - **Integration tests only**

> **NOTE:** remove `-debug` to run tests without logging
