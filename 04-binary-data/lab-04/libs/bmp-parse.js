'use strict';

// Module to identify the details of the incoming BMP file.

class Parser {

}






const parsedBitmap = {};
// type
// converts hex to ASCII
parsedBitmap.type = buffer.toString('utf-8', 0, 2);
// does not convert hex to ASCII
parsedBitmap.type2 = buffer.readInt16BE(0);

// fileSize
parsedBitmap.fileSize = buffer.readInt32LE(2);
// Bytes Per Pixel
parsedBitmap.bitsPerPixel = buffer.readInt16LE(28);
// Height
parsedBitmap.height = buffer.readInt32LE(22);
// Width
parsedBitmap.width = buffer.readInt32LE(18);

parsedBitmap;

parsedBitmap.sizeOfTheDIBHeader = buffer.readInt32LE(14);

console.log('size of DIB header:', parsedBitmap.sizeOfTheDIBHeader);
// The offset, i.e. starting address, of the byte where the bitmap image data (pixel array) can be found
parsedBitmap.startingAddress = buffer.readInt32LE(10);

console.log(buffer);
console.log('Type', parsedBitmap.type);
console.log('Type', parsedBitmap.type2);
console.log('File Size', parsedBitmap.fileSize);
console.log('Bytes Per Pixel', parsedBitmap.bitsPerPixel);
console.log('Height', parsedBitmap.height);
console.log('Width', parsedBitmap.width);
console.log('starting address', parsedBitmap.startingAddress);