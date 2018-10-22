'use strict';

// Change all blues in color table to green.

const makeGreen = (bitmap) => {
  for (let i = bitmap.colorChart; i < bitmap.pixels; i += 4) {
    bitmap.buffer[i + 1] = 255;
  }
  return bitmap;
};

module.exports = makeGreen;