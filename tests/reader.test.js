'use strict';

const reader = require(`${__dirname}/../libs/reader.js`);

describe('Test the reader for single input', () => {

  it(`should return 'a little text'`, (done) => {

    const finshedReading = (err, fileContents) => {
      console.log(err);
      expect(fileContents).toEqual('a little text');
      done();
    };

    reader(`${__dirname}/eenie.txt`, finshedReading);

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

  xit('should verify that the return order is eeine, meenie, moe', (done) => {

    const desiredPaths = ['../data/eenie.txt', '../data/meenie.txt', '../data/moe.txt'];
    const expectedPaths = ['../data/eenie.txt', '../data/meenie.txt', '../data/moe.txt'];
    const expectedLengths = [13, 18, 377561];

    for (let i = 0; i < desiredPaths.length; i++) {
      const verifyReturnOrder = (err, fileContents, path) => {

        expect(path).toEqual(expectedPaths[i]);
        expect(fileContents.length).toEqual(expectedLengths[i]);
        done();
      };
      reader(desiredPaths[i], verifyReturnOrder);
    }
  });

  xit('should verify that the return order is meenie, moe, eeine', (done) => {

    const desiredPaths = ['../data/meenie.txt', '../data/moe.txt', '../data/eenie.txt'];
    const expectedPaths = ['../data/meenie.txt', '../data/moe.txt', '../data/eenie.txt'];
    const expectedLengths = [18, 377561, 13];

    for (let i = 0; i < desiredPaths.length; i++) {
      const verifyReturnOrder = (err, fileContents, path) => {

        expect(path).toEqual(expectedPaths[i]);
        expect(fileContents.length).toEqual(expectedLengths[i]);
        done();
      };
      reader(desiredPaths[i], verifyReturnOrder);
    }
  });

  xit('should verify that the return order is moe, eeine, meine', (done) => {

    const desiredPaths = ['../data/moe.txt', '../data/eenie.txt', '../data/meenie.txt'];
    const expectedPaths = ['../data/moe.txt', '../data/eenie.txt', '../data/meenie.txt'];
    const expectedLengths = [377561, 13, 18];
    // const outputArray = [];

    for (let i = 0; i < desiredPaths.length; i++) {
      const verifyReturnOrder = (err, fileContents, path) => {

        // outputArray.push(path);
        // console.log(outputArray);
        // console.log(`PATH-${i}`, path);
        // console.log(fileContents.length);

        expect(path).toEqual(expectedPaths[i]);
        expect(fileContents.length).toEqual(expectedLengths[i]);
        done();
      };

      reader(desiredPaths[0], verifyReturnOrder);
    }
    done();
  });

});
