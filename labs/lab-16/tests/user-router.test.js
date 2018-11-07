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

  it('should sign up with good creds', async () => {

    const response =
      await mockRequest.post('/signup')
        .send(newUserInfo);

    expect(response.text.split('.').length).toBe(3);
  });

  it('should sign fail with bad creds', async () => {

    const userInfo = { username: 'foo', email: 'foo@bar.com' };

    const response = await mockRequest.post('/signup').send(userInfo);

    expect(response.status).toBe(400);

  });

  xit('should sign in', async () => {

    const userInfo = { username: 'foo', email: 'foo@bar.com', password: 'foobar' };

    await mockRequest.post('/signup').send(userInfo);

    const response = await mockRequest.get('/signin').auth('foo', 'foobar');

    expect(response.text.split('.').length).toBe(3);
  });


});