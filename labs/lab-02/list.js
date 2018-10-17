'use strict';

class List {
  constructor() {
    this.length=0;
  }

  push(value) {
    // Add a value to the end of the list
    this[this.length] = value;

    // increase the length to account for new element
    this.length++;

    //Return the length
    return this.length;
  }

  pop() {
    //identify the last element in the list
    let lastIndex = this.length-1;
    let lastEle = this[lastIndex];

    //remove the last element of the list
    delete this.lastIndex;
    this.length--;

    // Return the last element
    return lastEle;
  }

  slice(start,end) {
  //Accepts a starting index position and an optional ending postion.

    // returns index 0 if start is undefined
    if (isNaN(start)) {return this[0];}

    //If no end return the index position
    if (isNaN(end)) {return this[start];}
    
    // FIXME: Not sure this is right
    // If start is greater than length - return empty/undefined
    if (start > this.length) {return undefined;}

    // Return elements between start and end when end is greater than length

    if (isNaN(end) || end > this.length) {
      let newList = new List();

      for (let i = start; i < this.length; i++) {
        newList.push(this[i]);       
      }

      return newList;
    }

    // Return elements between start and end-1

  }

  map(callback) {
    let newList = new List();
    for(let i = 0; i < this.length; i++) {
      newList.push( callback( this[i] ) );
    }

    return newList;
  }




}

module.exports = List;