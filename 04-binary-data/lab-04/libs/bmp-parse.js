'use strict';

// Module to identify the details of the incoming BMP file.

class Bitmap {
  constructor(fileName) {
    this.file = fileName;
    this.newFile = null;
  }

  //the following information is need to manipulate the bitmap.

  parseBitmap(buffer, parsed) {

    // file buffer
    this.buffer = buffer;

    // fileType
    this.type = buffer.toString('utf-8', 0, 2);
    // fileSize
    this.fileSize = buffer.readInt32LE(2);
    // Bytes Per Pixel
    this.bitsPerPixel = buffer.readInt16LE(28);
    // Height
    this.height = buffer.readInt32LE(22);
    // Width
    this.width = buffer.readInt32LE(18);
    // DIB Header size   
    this.sizeOfTheDIBHeader = buffer.readInt32LE(14);
    // Start of color chart
    this.colorChart = (this.sizeOfTheDIBHeader + 14 + 12);
    // Start of pixels
    this.pixels = buffer.readInt32LE(10);

    parsed(this);
  }
}

module.exports = Bitmap;