'use strict';

//require the module to test
const arithmetic = require('../../lib/arithmetic.js');

describe('Test the arithmetic function for proper and improper response', () => {
  it('should return null for non-numbers', () => {
    expect(arithmetic('a','b')).toBe(null);
  })

  it('should return the sum of the two numbers and subtract the second number from the first', () => {
    expect(arithmetic(3,2)).toBe({add:5, subtract:1});
  })
})