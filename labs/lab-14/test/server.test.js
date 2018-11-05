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

xdescribe('API SERVER', () => {

  xit('should respond with a 404 on an invalid route', async () => {

    const response =
      await mockRequest.get('/invalidRoute');

    expect(response.status).toBe(404);

  });

  xit('should respond with a 200 on a get request to a valid model', async () => {

    const response = await mockRequest.get(url);

    expect(response.status).toBe(200);

  });

  // FIXME: More work is needed here
  xit('should respond properly on a get request with a bad id', async () => {

    const response = await mockRequest.get('/api/v1/books/12345');

    expect(response.status).toBe(400);

  });

  xit('should be able to post to /api/v1/books and retrun a 200', async () => {

    const response =
      await mockRequest
        .post(url)
        .send(newBook);
    expect(response.status).toBe(200);
    expect(response.body.title).toEqual(newBook.title);

  });

  xit('following a post, should find a single record', async () => {

    const postResponse = await mockRequest.post(url).send(newBook);

    const bookId = postResponse.body._id;

    const getResponse = await mockRequest.get(`/api/v1/books/${bookId}`);

    const book = getResponse.body;

    expect(book.title).toEqual(newBook.title);

  });

  xit('following multiple posts, should return the correct count', async () => {

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

  // FIXME: WORKS WITH HTTPie but not JEST
  xit('should update a record with revised information', async () => {

    const postResponse = await mockRequest.post(url).send(newBook);

    console.log(postResponse.body);

    const bookId = postResponse.body._id;
    console.log(bookId);

    // const putResponse = await mockRequest.put(`/api/v1/books/${bookId} {title: 'PUT-TEST'}`);

    // console.log(putResponse.body);

    // const updatedBook = putResponse.body;
    // fail(putResponse.body);
    expect().toBe('PUT-TEST');


  });

});