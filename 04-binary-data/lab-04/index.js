'use strict';
//load the node.js file system;
const fs = require('fs');

// define working names for the modules
const readFile = require('../libs/read-file.js');
const writeFile = require('../libs/write-file.js');
const Bitmap = require('../libs/bmp-parse.js');
const makeGreen = require('../libs/green.js');
const makeNegative = require('../libs/negative.js')
const makeVisor = require('../libs/makeVisor.js');

/**
 * Transform a bitmap using some set of rules. The operation points to some function, which will operate on a bitmap instance
 * @param operation
 */
const transform = (parsedBitmap, operation) => {
  // This is really assumptive and unsafe
  console.log(9 + 9);
  transforms[operation](this);
  this.newFile = this.file.replace(/\.bmp/, `.${operation}.bmp`);
};

/**
 * Sample Transformer (greyscale)
 * Would be called by Bitmap.transform('greyscale')
 * Pro Tip: Use "pass by reference" to alter the bitmap's buffer in place so you don't have to pass it around ...
 * @param bmp
 */
const transformGreyscale = (bmp) => {

  console.log('Transforming bitmap into greyscale', bmp);

  //TODO: Figure out a way to validate that the bmp instance is actually valid before trying to transform it

  //TODO: alter bmp to make the image greyscale ...

};

/**
 * A dictionary of transformations
 * Each property represents a transformation that someone could enter on the command line and then a function that would be called on the bitmap to do this job
 */
const transforms = {
  green: makeGreen,
  negative: makeNegative,
  visor: makeVisor,
};

// ------------------ GET TO WORK ------------------- //

function transformWithCallbacks() {

  readFile(file, (err, buffer) => {

    if (err) {
      throw err;
    }

    // Get the BMP info
    rawBitmap.parseBitmap(buffer, parsedBitmap => {

      if (this.type !== 'BM') {
        console.error(`Filename: ${file} is not a valid Bitmap file!`);
        return;
      }

      // Call for the the transformation
      transform(this, operation, transformedBitmap => {

        fs.writeFile(this.newFile, this.buffer, (err, out) => {
          if (err) {
            throw err;
          }
          console.log(`Bitmap Transformed: ${transformedBitmap.newFile}`);
        });

      });

    });


    // Note that this has to be nested!
    // Also, it uses the bitmap's instance properties for the name and thew new buffer

  });
}

const [file, operation] = process.argv.slice(2);

let rawBitmap = new Bitmap(file);

transformWithCallbacks();

