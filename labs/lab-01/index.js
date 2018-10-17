'use strict';

// Require the files to be used
const greet = require('./lib/greet.js');
const arithmetic = require('./lib/arithmetic.js');

// Call on greet with a number to generate null
console.log(greet(21));

// Call on greet with 'world' to get hello world
console.log(greet('world'));

// Call arithmetic with string parameters to generate null
console.log(arithmetic('a', 'b'));

//Call arithmetic with numbers to add and subtract
console.log(arithmetic(3, 2));

