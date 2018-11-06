import supergoose, { startDB, stopDB } from '../supergoose.js';
import { app } from '../../src/app.js';

const mockRequest = supergoose(app);

beforeAll(startDB);
afterAll(stopDB);
beforeEach(async () => {
  // clean up as needed
});

describe('app', () => {

  it('should ping pong', async () => {
    const response = await mockRequest.get('/ping');
    expect(response.text).toBe('pong');
  });

  it('should sign up with good creds', async () => {
    const userInfo = {username:'foo',email:'foo@bar.com',password:'foobar'};
    const response = await mockRequest.post('/signup').send(userInfo);
    expect(response.text.split('.').length).toBe(3);
  });

  it('should sign fail with bad creds', async () => {
    
    const userInfo = {username:'foo',email:'foo@bar.com'};

    const response = await mockRequest.post('/signup').send(userInfo);

    expect(response.status).toBe(400);

  });

  it('should sign in', async () => {
    const response = await mockRequest.get('/signin');
    expect(response.text).toBe('token coming soon');
  });


});



