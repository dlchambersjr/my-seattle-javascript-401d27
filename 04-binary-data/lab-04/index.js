'use strict';

// define working names for the modules
const readFile = require('./libs/read-file.js');
const writeFile = require('./libs/write-file.js');
const Bitmap = require('./libs/bmp-parse.js');
const makeGreen = require('./libs/green.js');
const makeNegative = require('./libs/negative.js');
const makeVisor = require('./libs/makeVisor.js');

const transform = (bitmap, operation, transformedBitmap) => {
  transforms[operation](bitmap);
  bitmap.newFile = bitmap.file.replace(/\.bmp/, `.${operation}.bmp`);
  transformedBitmap(bitmap);
};

const transforms = {
  green: makeGreen,
  negative: makeNegative,
  visor: makeVisor,
};

function transformWithCallbacks(bitmap) {

  console.log(`Loading FILENAME: ${bitmap.file} and applying the ${operation} filter`);

  readFile(file, (err, buffer) => {
    if (err) {
      throw console.log(err);
    }

    // Get the BMP info
    bitmap.parseBitmap(buffer, bitmap => {
      if (bitmap.type !== 'BM') {
        console.error(`Filename: ${file} is not a valid Bitmap file!`);
        return;
      }

      // Call for the the transformation
      transform(bitmap, operation, newBitmap => {

        writeFile(newBitmap.newFile, newBitmap.buffer, (err, out) => {
          if (err) {
            throw err;
          }
          console.log(`The ${operation} filter has been applied and the bitmap has transformed into: ${newBitmap.newFile}`);
        });
      });
    });
  });
}

const [file, operation] = process.argv.slice(2);

let bitmap = new Bitmap(file);

transformWithCallbacks(bitmap);

