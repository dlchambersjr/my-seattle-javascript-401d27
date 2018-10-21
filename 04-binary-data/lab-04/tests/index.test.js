'use script';


const readFile = require('../libs/read-file.js');



xdescribe('Test to verify that CLI arguments can be reveived', () => { });

describe('Test to verify a file can be read ', () => {

  it('should successfully load a file into the buffer', () => {
    console.log(`${__dirname}`);
    console.log(`${__dirname}/../assets/baldy.bmp`);



    let actual = readFile(`${__dirname}/../assets/baldy.bmp`, (err, actual) => {
      if (err) throw console.error(err);
      let expected = 0;
      console.log(actual.length);
      expect(actual.length).not.toBe(expected);
    });




  });

});

xdescribe('Test to see if the buffer can be written to a file with a different name', () => { });

xdescribe('Test to verify the file is a BMP and can be parsed', () => {

  it('should verify that the file is a BMP', () => {


  });

  it('should find the color table for the BMP', () => { });

  it('should find the start of the pixel data for the BMP', () => { });

});

xdescribe('Test to verify color table transformations', () => { });

xdescribe('Test to verify rasterization can take place', () => { });