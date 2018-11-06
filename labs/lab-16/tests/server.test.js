import supergoose, { startDB, stopDB } from './supergoose.js';
import { app } from '../src/server.js';


const mockRequest = supergoose(app);

beforeAll(startDB);
afterAll(stopDB);

beforeEach(async () => {
  //pre-load info
});

afterEach(async () => {
  //clear test data
});

describe('Test API Routes', () => {

  it('should sign up with good creds', async () => {
    const userInfo = { username: 'foo', email: 'foo@bar.com', password: 'foobar' };

    const response = await mockRequest.post('/signup').send(userInfo);

    expect(response.text.split('.').length).toBe(3);

  });

  // xit('should sign fail with bad creds', async () => {

  //   const userInfo = { username: 'foo', email: 'foo@bar.com' };

  //   const response = await mockRequest.post('/signup').send(userInfo);

  //   expect(response.status).toBe(400);

  // });

  // xit('should sign in', async () => {

  //   const userInfo = { username: 'foo', email: 'foo@bar.com', password: 'foobar' };

  //   await mockRequest.post('/signup').send(userInfo);

  //   const response = await mockRequest.get('/signin').auth('foo', 'foobar');

  //   expect(response.text.split('.').length).toBe(3);
  // });


});

