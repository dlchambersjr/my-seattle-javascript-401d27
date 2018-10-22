'use strict';

// Make a "visor" by changinging the pixels.

const makeVisor = (bitmap) => {
  for (let i = 8000; i < 9000; i += 4) {
    if (i >= 8000 && i <= 9000) {
      bitmap.buffer[i] = Math.random() * 255;
      bitmap.buffer[i + 1] = Math.random() * 255;
      bitmap.buffer[i + 2] = Math.random() * 255;
      bitmap.buffer[i + 3] = Math.random() * 255;
    }
  }

  for (let i = 8000; i < 8001; i++) {
    bitmap.buffer[i] = 255;
  }
  return bitmap;
};

module.exports = makeVisor;