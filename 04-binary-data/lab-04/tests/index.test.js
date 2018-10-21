'use script';

// const fs = require('fs');

const readFile = require('../libs/read-file.js');
const writeFile = require('../libs/write-file.js');


xdescribe('Test to verify that CLI arguments can be received', () => { });

describe('Test to verify file I/O for read and write ', () => {

  it('should successfully load a file into the buffer', () => {

    readFile(`${__dirname}/../assets/baldy.bmp`, (err, actual) => {
      if (err) throw console.error(err);
      let expected = 0;
      expect(actual.toString().length).not.toBe(expected);
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


describe('Test to verify the file is a BMP and can be parsed', () => {

  it('should verify that the file is a BMP', () => {

    const actual = 'TBD';
    const expected = 'TBF';

    expect(actual).toBe(expected);

  });

  xit('should find the color table for the BMP', () => { });

  xit('should find the start of the pixel data for the BMP', () => { });

});

xdescribe('Test to verify color table transformations', () => { });

xdescribe('Test to verify rasterization can take place', () => { });