import supergoose, { startDB, stopDB } from '../src/supergoose.js';
import Books from '../src/models/books-model.js';

// Hooks for Jest
beforeAll(startDB);
afterAll(stopDB);
afterEach(async () => {
  // Clear the documents after tests
  await Books.deleteMany({});
});


