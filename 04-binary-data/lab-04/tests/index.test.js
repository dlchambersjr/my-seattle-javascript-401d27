'use script';

const readFile = require('../libs/read-file.js');
const writeFile = require('../libs/write-file.js');
const Bitmap = require('../libs/bmp-parse.js');
const makeGreen = require('../libs/green.js');
const makeNegative = require('../libs/negative.js')
const makeVisor = require('../libs/makeVisor.js');

const nameArg = '../assets/baldy.bmp';
const path = `${__dirname}/${nameArg}`;

describe('Test to verify file I/O for read and write ', () => {

  it('should successfully load a file into the buffer', (done) => {

    readFile(`${__dirname}/../assets/baldy.bmp`, (err, actual) => {
      if (err) throw console.error(err);
      let expected = 0;
      expect(actual.toString().length).not.toBe(expected);
      done();
    });

  });

  it(`should write a new file with name 'newbaldy'`, (done) => {

    readFile(`${__dirname}/../assets/baldy.bmp`, (err, buffer) => {
      if (err) throw console.error(err);
      if (buffer) {
        writeFile(`${__dirname}/../assets/newbaldy.bmp`, buffer, (err) => {
          if (!err) {
            readFile(`${__dirname}/../assets/newbaldy.bmp`, (err, actual) => {
              if (err) throw console.error(err);
              let expected = 15146;
              expect(actual.length).toBe(expected);
              done();
            });
          } else {
            throw console.log(err);
          }
        });
      }
    });

  });

});

describe('Test to verify a new Bitmap instance can be made.', () => {

  it('should make a new instance of Bitmap with the passed filename', () => {

    const nameArg = '/../assets/baldy.bmp';
    const actual = new Bitmap(nameArg);
    const expected = '/../assets/baldy.bmp';

    expect(actual.file).toBe(expected);
  });

});

describe('Test to verify the file is a BMP and can be parsed', () => {

  it('should verify that the file is a BMP', (done) => {

    const bitmap = new Bitmap(nameArg);

    readFile(path, (err, buffer) => {
      if (err) throw console.error(err);
      bitmap.parseBitmap(buffer, actual => {
        const expected = 'BM';
        expect(actual.type).toBe(expected);
        done();
      });
    });

  });

  it('should find the color table for the BMP', (done) => {

    const bitmap = new Bitmap(nameArg);

    readFile(path, (err, buffer) => {
      if (err) throw console.error(err);
      bitmap.parseBitmap(buffer, actual => {
        const expected = 134;
        expect(actual.colorChart).toBe(expected);
        done();
      });
    });
  });

  it('should find the start of the pixel data for the BMP', (done) => {

    const bitmap = new Bitmap(nameArg);

    readFile(path, (err, buffer) => {
      if (err) throw console.error(err);
      bitmap.parseBitmap(buffer, actual => {
        const expected = 1146;
        expect(actual.pixels).toBe(expected);
        done();
      });
    });
  });

});

describe('Test to verify color table transformations', () => {

  it(`should transform the file by replacing the blues with greens`, (done) => {

    const operationArg = 'makeGreen.bmp';
    const outputPath = `${__dirname}/../assets/${operationArg}`;
    const bitmap = new Bitmap(nameArg);
    console.log(outputPath);

    readFile(path, (err, buffer) => {
      if (err) throw console.error(err);
      bitmap.parseBitmap(buffer, bitmap => {
        makeGreen(bitmap);
        writeFile(outputPath, bitmap.buffer, (err) => {
          if (!err) {
            readFile(outputPath, (err, actual) => {
              if (err) throw console.error(err);
              let expected = 15146;
              expect(actual.length).toBe(expected);
              done();
            });
          } else {
            throw console.log(err);
          }
        });
      });
    });

  });

  it('should creative a photo negative from the color chart', (done) => {

    const operationArg = 'makeNegative.bmp';
    const outputPath = `${__dirname}/../assets/${operationArg}`;
    const bitmap = new Bitmap(nameArg);
    console.log(outputPath);

    readFile(path, (err, buffer) => {
      if (err) throw console.error(err);
      bitmap.parseBitmap(buffer, bitmap => {
        makeNegative(bitmap);

        writeFile(outputPath, bitmap.buffer, (err) => {
          if (!err) {
            readFile(outputPath, (err, actual) => {
              if (err) throw console.error(err);
              let expected = 15146;
              expect(actual.length).toBe(expected);
              done();
            });
          } else {
            throw console.log(err);
          }
        });
      });
    });
  });
});

describe('Test to verify rasterization can take place', () => {

  it('should creative a visor over the eyes by modifying the pixels.', (done) => {

    const operationArg = 'makeVisor.bmp';
    const outputPath = `${__dirname}/../assets/${operationArg}`;
    const bitmap = new Bitmap(nameArg);
    console.log(outputPath);

    readFile(path, (err, buffer) => {
      if (err) throw console.error(err);
      bitmap.parseBitmap(buffer, bitmap => {
        makeVisor(bitmap);

        writeFile(outputPath, bitmap.buffer, (err) => {
          if (!err) {
            readFile(outputPath, (err, actual) => {
              if (err) throw console.error(err);
              let expected = 15146;
              expect(actual.length).toBe(expected);
              done();
            });
          } else {
            throw console.log(err);
          }
        });
      });
    });
  });

});