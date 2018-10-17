'use strict';

const List = require('../labs/lab-02/list.js');

describe('Testing the list class', () => {

  //Test for the length property
  it('should have a length of zero to start', () => {

    let initialList = new List();
    const actual = initialList.length;
    const expected = 0;

    expect(actual).toBe(expected);

  });

  //Test for push()
  it('should push a new element to the end of the List', () => {
    
    let pushList = new List();

    pushList.push(2);
    pushList.push(4);
    pushList.push(6);
    pushList.push(8);

    const actual = pushList.length;
    const expected = 4;

    expect(actual).toBe(expected);
  });

  //Test for pop()


  describe('Check for pop method',() => {
   
    it('should pop the last element of the list and return it.', () => {

      let popList = new List();

      popList.push(5);
      popList.push(10);
      popList.push(20);
      popList.push(30);

      const actual = popList.pop();
      const expected = 30;

      expect(actual).toBe(expected);

    });

    it('should remove the last element of the list.', () => {

      let popList = new List();

      popList.push(5);
      popList.push(10);
      popList.push(20);
      popList.push(30);
      
      popList.pop();

      const actual = popList.length;
      const expected = 3;

      expect(actual).toBe(expected);
      
    });

  });

  describe('Check for slice method',() => {

    //Test for slice()
    it('should return the first element if the start is undefined', () => {
      let sliceList = new List();

      sliceList.push('a');
      sliceList.push('b');
      sliceList.push('c');
      sliceList.push('d');

      const actual = sliceList.slice();
      const expected='a';

      expect(actual).toBe(expected);
    });

    

    it('should return empty/undefined when start is greater than length', () => {
      let sliceList3 = new List();

      sliceList3.push('a');
      sliceList3.push('b');
      sliceList3.push('c');
      sliceList3.push('d');

      const actual = sliceList3.slice(5);
      const expected = undefined;

      expect(actual).toBe(expected);
    });

    it('should return the elements at the start position when no end is provided', () => {
      let sliceList2 = new List();

      sliceList2.push('a');
      sliceList2.push('b');
      sliceList2.push('c');
      sliceList2.push('d');

      const actual = sliceList2.slice(2);
      const expected='c';

      expect(actual).toBe(expected);
    });

    it('should return the elements from start to end-1', () => {
      let sliceList4 = new List();

      sliceList4.push('a');
      sliceList4.push('b');
      sliceList4.push('c');
      sliceList4.push('d');

      const actual = sliceList4.slice(1,5);
      const expected = 'b';

      expect(actual[0]).toEqual(expected);
      expect(actual[actual.length-1]).toEqual('d');
      expect(actual.length).toEqual(3);
    });

    xit('should return the elements starting at the end when start is a negative number', () => {});

    xit('should return the elements between -start and -end+1', () => {});

    xit('should return an empty list when start is greater than the length', () => {});

    xit('should return the list when end is greater than the length ', () => {});

  });

  //Test for map()
  it('should iterate (map) over the list and run a callback for each element', () => {
    let mapList = new List();

    mapList.push(1);
    mapList.push(2);
    mapList.push(3);
    mapList.push(4);
  
    let actual = mapList.map(num => num * 2);

    console.log('map',mapList);

    expect(actual.length).toEqual(mapList.length);
    expect(actual).not.toEqual(mapList);
  });

  //Test for filter()
  xit('should return an array of elements that meet a specific criteria', () => {});

  //Test for reduce()
  xit('should pass each element through a callback that summs the values and returns a single output value', () => {});

});