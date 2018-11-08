import supergoose, { startDB, stopDB } from './supergoose.js';
import { app } from '../src/server.js';

import User from '../src/userApi/user-model';

const mockRequest = supergoose(app);

const newUserInfo = { username: 'foo', email: 'foo@bar.com', password: 'foobar' };

// Hooks for Jest
beforeAll(startDB);
afterAll(stopDB);

afterEach(async () => {
  // Clear the documents after tests
  await User.deleteMany({});
});

describe('Test the API', () => {

  it('should signup a user with good credentials', async () => {

    const response =
      await mockRequest.post('/signup')
        .send(newUserInfo);

    expect(response.text.split('.').length).toBe(3);
  });

  it('should NOT signup a user with BAD/incomplete credentials', async () => {

    const userInfo = { username: 'foo', email: 'foo@bar.com' };

    const response = await mockRequest.post('/signup').send(userInfo);

    expect(response.status).toBe(400);

  });

  it('should allow a valid USER to sign in.', async () => {

    const userInfo = { username: 'foo', email: 'foo@bar.com', password: 'foobar' };

    await mockRequest.post('/signup').send(userInfo);

    const response = await mockRequest.get('/signin').auth('foo', 'foobar');

    expect(response.text.split('.').length).toBe(3);
  });

  it('should NOT allow an invalid USER to sign in.', async () => {

    const userInfo = { username: 'foo', email: 'foo@bar.com', password: 'foobar' };

    await mockRequest.post('/signup').send(userInfo);

    try {
      await mockRequest.get('/signin').auth('foobar', 'barfoo');
    }
    catch (error) {
      expect(error.status).toBe(401);

      console.log(error.text);

      // expect(response.message).toBe('Unauthorized');

    }


  });

});