import supergoose, { startDB, stopDB } from '../src/supergoose.js';
import Books from '../src/models/books-model.js';

const { server } = require('../src/server.js');
const mockRequest = supergoose(server);

const url = '/api/v1/books';
const newBook = { title: 'test', author: 'tester', genre: 'testing' };

// Hooks for Jest
beforeAll(startDB);
afterAll(stopDB);
afterEach(async () => {
  // Clear the documents after tests
  await Books.deleteMany({});
});

describe('API SERVER', () => {

  it('should respond with a 404 on an invalid route', async () => {

    const response =
      await mockRequest.get('/invalidRoute');

    expect(response.status).toBe(404);

  });

  it('should respond properly on a get request to a valid model', async () => {

    const response = await mockRequest.get(url);

    expect(response.status).toBe(200);

  });

  it('should be able to post to /api/v1/books', async () => {

    const response =
      await mockRequest
        .post(url)
        .send(newBook);
    expect(response.status).toBe(200);
    expect(response.body.title).toEqual(newBook.title);

  });

  it('following a post, should find a single record', async () => {

    const postResponse = await mockRequest.post(url).send(newBook);

    const bookId = postResponse.body._id;

    const getResponse = await mockRequest.get(`/api/v1/books/${bookId}`);

    const book = getResponse.body;

    expect(book.title).toEqual(newBook.title);

  });

  it('following multiple posts, should return the correct count', async () => {

    const obj = { title: 'test', text: 'foo' };

    await mockRequest.post('/api/v1/books').send(obj);

    await mockRequest.post('/api/v1/books').send(obj);

    const actual = await Books.where({}).count({});

    expect(actual).toBe(2);

  });

  xit('a get should find zero records still', async () => {

    const actual = await Books.where({}).count();

    expect(actual).toBe(0);

  });

  xit('should update a record with revised information', async () => {


  });

});