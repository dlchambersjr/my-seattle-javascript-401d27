'use strict';

// Make a negative of the current picture.

const makeNegative = (bitmap) => {
  for (let i = bitmap.colorChart; i < bitmap.pixels; i += 4) {
    bitmap.buffer[i + 1] *= 255;
    bitmap.buffer[i + 2] *= 255;
    bitmap.buffer[i + 3] *= 255;
  }
  return bitmap;
};

module.exports = makeNegative;