'use strict';

const os = require('os');
console.log(os.endianness());


for (let i = 0; i < 30; i++) {
  console.log(i.toString(16).padStart(4, 0));
}

let buffer = Buffer.from('John is really bald');
console.log(buffer);
console.log(buffer.toString());

//if we want to use hex, it has to be 4 digits
buffer[0] = 0x5A;
console.log(buffer);
console.log(buffer.toString());

//decimal converts as well
buffer[1] = 97;
console.log(buffer);
console.log('decimal convert:', buffer.toString());

const stringify = (buffer) => {
  let str = '';
  for (let char of buffer) {
    str += String.fromCharCode(char);
  }
  return str;
};

console.log(stringify(buffer));

console.log(buffer.readInt16LE(0));
console.log(buffer.readInt16BE(3));