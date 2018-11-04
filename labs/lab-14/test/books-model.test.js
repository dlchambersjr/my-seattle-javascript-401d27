import supergoose, { startDB, stopDB } from '../src/supergoose.js';
import Books from '../src/models/books-model.js';
import Authors from '../src/models/author-model.js';


// Hooks for Jest
beforeAll(startDB);
afterAll(stopDB);
afterEach(async () => {
  // Clear the documents after tests
  await Books.deleteMany({});
});

describe('Test to verify data models', () => {

  it('should create a new book', async () => {
    const bookInfo = { title: 'Pride and Prejudice', genre: 'Romance' };

    const book = await Books.create(bookInfo);

    expect(book.title).toBe(bookInfo.title);
  });

  it('should create a new author', async () => {
    const authorInfo = { title: 'Pride and Prejudice', genre: 'Romance' };

    const author = await Books.create(bookInfo);

    expect(author.name).toBe(authorInfo.name);
  });


});