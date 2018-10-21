'use strict';

// Make a negative of the current picture.

const makeNegative = (bitmap) => {
  for (let i = this.colorChart; i < this.pixels; i += 4) {
    this.buffer[i + 1] = this.buffer[i + 1] - 255;
    this.buffer[i + 2] = this.buffer[i + 2] - 255;
    this.buffer[i + 3] = this.buffer[i + 3] - 255;
  }
  return this;
};