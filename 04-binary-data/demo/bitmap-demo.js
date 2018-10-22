'use strict';

const fs = require('fs');

const buffer = fs.readFileSync(`${__dirname}/baldy.bmp`);


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

//134
//finding the color table
/*
for (let i = 800; i < 1146; i++) {
  console.log(buffer[i]);
}

*/
// for (let i = 134; i < 1146; i += 4) {
//   if (buffer[i] === 198 && buffer[i + 1] === 227 && buffer[i + 2] === 250) {
//     buffer[i] = 0;
//     buffer[i + 1] = 0;
//     buffer[i + 2] = 255;
//   }
//   if (buffer[i + 2] === 250) {
//     console.log('red', buffer[i + 2]);
//     console.log('red index', i + 2);
//   }
// }

// buffer[1096] = 0;

// Make Green
// for (let i = 134; i < 1146; i += 4) {
//   buffer[i + 1] = 255;
// }

// // create a negative
// for (let i = this.colorChart; i < this.pixels; i += 4) {
//   this.buffer[i + 1] *= 255;
//   this.buffer[i + 2] *= 255;
//   this.buffer[i + 3] *= 255;
// }

/*
for (let i = 10000; i >= 1146; i--) {
  console.log(buffer[i]);
}
*/

/*
console.log(buffer[1145]);
console.log(buffer[1146]);
console.log(buffer[1147]);
console.log(buffer[1148]);
console.log(buffer[1149]);
*/




// for (let i = 1146; i < buffer.length; i += 4) {
//   buffer[i] = 255;
//   buffer[i + 1] = 192;
//   buffer[i + 2] = 128;
//   buffer[i + 3] = 64;
// }





// ####################### 
// Randomize the pixels
// #######################
for (let i = 8000; i < 9000; i += 4) {
  if (i >= 8000 && i <= 9000) {
    buffer[i] = Math.random() * 255;
    buffer[i + 1] = Math.random() * 255;
    buffer[i + 2] = Math.random() * 255;
    buffer[i + 3] = Math.random() * 255;
  }
}


for (let i = 8000; i < 8001; i++) {
  buffer[i] = 255;
}






//let newbuffer = buffer;
fs.writeFile(`${__dirname}/pixelbaldy.bmp`, buffer, (err, data) => { });