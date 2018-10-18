'use strict';

const reader = require('./reader.js');


describe('Test the reader for single imput', () => {

  it(`should return 'a little text'`, (done) => {

    const finshedReading = (err, fileContents) => {
      expect(fileContents).toEqual('a little text');
      done();
    };

    reader('../data/eenie.txt', finshedReading);

  });

});


xdescribe('Test the reader for bad input', () => {

  xit('should return an error if the path is invalid.', (done) => {

    const finshedReading = (err) => {
      console.log(typeof code);
      console.error(err);
      expect(err).toEqual('INVALID PATH');
    };

    reader('../data/invalidPath', finshedReading);

  });

  xit('should return an error if the array is empty.', () => {

    const finshedReading = (err) => {
      console.log(typeof code);
      console.error(err);
      expect(err).toEqual('EMPTY STRING');
    };

    reader('', finshedReading);

  });

});

xdescribe('Test the reader for proper return order', () => {

  xit('should verify that the return order is eeine, meenie, moe', () => { });


});
