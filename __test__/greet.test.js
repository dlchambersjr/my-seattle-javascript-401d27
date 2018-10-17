'use strict';

// require the module to test
const greet = require('../labs/lab-01/greet.js');

describe('Test to see if the parameter is null or returns a valid response', () => {
  it('should return null when the string is empty', () => {
    expect(greet(18)).toBe(null);
  });

  it('should return hello world', () => {
    expect(greet('world')).toBe('hello world');
  });
});


