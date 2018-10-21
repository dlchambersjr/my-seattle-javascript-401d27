'use strict';

// Change all blues in color table to green.

const makeGreen = () => {
  console.log(this);
  for (let i = this.colorChart; i < this.pixels; i += 4) {
    this.buffer[i + 1] = 255;
  }
  return this;
};

module.exports = makeGreen;