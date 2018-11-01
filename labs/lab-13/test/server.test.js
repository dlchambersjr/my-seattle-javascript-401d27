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

  // FIXME:
  xit('should respond with a 500 on an invalid model/path', async () => {

    const response =
      await mockRequest.get('/nothere');

    expect(response.status).toBe(0);

  });

  it('should respond with a 404 on an invalid method', async () => {

    const response =
      await mockRequest.get('/api/v1/badMethod/12');

    expect(response.status).toBe(404);

  });

  it('should respond properly on a get request to a valid model', async () => {

    const response = await mockRequest.get(url);

    expect(response.status).toBe(200);

  });

  xit('should be able to post to /api/v1/notes', async () => {

    const response =
      await mockRequest
        .post('/api/v1/notes')
        .send(newBook);

    expect(response.status).toBe(200);
    expect(response.body.title).toEqual(newBook.titles);

  });


  xit('following a post, should find a single record', async () => {

    const postResponse = await mockRequest.post(url).send(newBook);

    const noteId = postResponse.body._id;

    const getResponse = await mockRequest.get(`/api/v1/notes/${noteId}`);

    const note = getResponse.body[0];

    expect(note.title).toEqual(newBook.title);

  });

  xit('following multiple posts, should return the correct count', async () => {

    const obj = { title: 'test', text: 'foo' };

    await mockRequest.post('/api/v1/notes').send(obj);

    await mockRequest.post('/api/v1/notes').send(obj);

    const { body } = await mockRequest.get('/api/v1/notes');

    expect(body.count).toBe(2);

  });

  xit('a get should find zero records still', async () => {

    const { body } = await mockRequest.get('/api/v1/notes');

    expect(body.count).toBe(0);

  });

});