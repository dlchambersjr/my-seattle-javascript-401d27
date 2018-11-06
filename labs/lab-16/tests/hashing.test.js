'use script';

import myBcrypt from '../src/middleware/hashing.js';

const bcrypt = new myBcrypt();

const hash = bcrypt.hash('testPassword', 10);

console.log(hash);

it('test', () => {

  expect(hash).toBe(3325440);


});
