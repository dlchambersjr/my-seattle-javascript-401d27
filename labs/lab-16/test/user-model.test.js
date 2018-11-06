require('dotenv').config();

import supergoose, { startDB, stopDB } from './supergoose.js';
import User from '../src/userApi/user-model.js';

beforeAll(startDB);
afterAll(stopDB);

beforeEach(async () => {
  await User.deleteMany({});
});

// helper function to make a user for each test
function createUser(username = 'foo', email = 'foo@bar.com', password = 'foobar') {
  return User.create({ username, email, password });
}

describe('Test the User Model', () => {

  it('should create a new user', () => { });
  it('should find a user', () => { });
  it('should fail if username is missing', () => { });
  it('should fail if email is missing', () => { });
  it('should fail if password is missing', () => { });
  it('should fail if username is NOT unique', () => { });
  it('should generate a token', () => { });
  it('should match a good password', () => { });
  it('should authenticate if credientials match', () => { });
  it('should NOT authenticate if credientials DO NOT match', () => { });


});

