'use script';

// const fs = require('fs');

const readFile = require('../libs/read-file.js');
const writeFile = require('../libs/write-file.js');
const Bitmap = require('../libs/bmp-parse.js');


xdescribe('Test to verify that CLI arguments can be received', () => { });

describe('Test to verify file I/O for read and write ', () => {

  xit('should successfully load a file into the buffer', () => {

    readFile(`${__dirname}/../assets/baldy.bmp`, (err, actual) => {
      if (err) throw console.error(err);
      let expected = 0;
      expect(actual.toString().length).not.toBe(expected);
    });

  });

  xit(`should write a new file with name 'newbaldy'`, (done) => {

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

    const nameArg = '../assets/baldy.bmp';
    const path = `${__dirname}/${nameArg}`;
    const bitmap = new Bitmap(nameArg);

    readFile(path, (err, buffer) => {
      if (err) throw console.error(err);
      const actual = bitmap.parseBitmap(buffer);
      const expected = 'BM';
      expect(actual.type).toBe(expected);
      done();
    });

  });

  it('should find the color table for the BMP', (done) => {

    const nameArg = '../assets/baldy.bmp';
    const path = `${__dirname}/${nameArg}`;
    const bitmap = new Bitmap(nameArg);

    readFile(path, (err, buffer) => {
      if (err) throw console.error(err);
      const actual = bitmap.parseBitmap(buffer);
      const expected = 134;
      expect(actual.colorChart).toBe(expected);
      done();
    });
  });

  it('should find the start of the pixel data for the BMP', (done) => {

    const nameArg = '../assets/baldy.bmp';
    const path = `${__dirname}/${nameArg}`;
    const bitmap = new Bitmap(nameArg);

    readFile(path, (err, buffer) => {
      if (err) throw console.error(err);
      const actual = bitmap.parseBitmap(buffer);
      const expected = 1146;
      expect(actual.pixels).toBe(expected);
      done();
    });
  });

});

xdescribe('Test to verify color table transformations', () => { });

xdescribe('Test to verify rasterization can take place', () => { });