'use script';


const readFile = require('../libs/read-file.js');



describe('Test to verify that CLI arguments can be reveived', () => { });

describe('Test to verify a file can be read ', () => {

  it('should successfully load a file into the buffer', () => {

    let actual = readFile('../assets/baldy.bmp', (err, actual) => {
      let expected = 0;
      expect(actual.length).not.toBe(expected);
    });

  });

});

describe('Test to see if the buffer can be written to a file with a different name', () => { });

describe('Test to verify the file is a BMP and can be parsed', () => { });

describe('Test to verify color table transformations', () => { });

describe('Test to verify rasterization can take place', () => { });