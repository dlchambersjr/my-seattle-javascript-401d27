require('dotenv').config();

import { startDB, stopDB } from './supergoose.js';
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

  // FIXME:
  xit('should create a new user', async () => {

    const newUser = await createUser();

    expect(newUser.username).toBe('foo');
    expect(newUser.email).toBe('foo@bar.com');
    expect(newUser.password).toBe('foobar');

  });

  it('should find a user', async () => {

    const user = await createUser();

    const foundUser = await User.findById(user._id);

    expect(foundUser.username).toBe(user.username);


  });

  it('should fail if username is missing', async () => {

    try {

      await createUser(null);

    } catch (err) {

      expect(err.message).toEqual(expect.stringContaining('Users validation failed: username'));

    }

  });

  it('should fail if email is missing', async () => {

    try {

      await createUser(undefined, null);

    } catch (err) {

      expect(err.message).toEqual(expect.stringContaining('Users validation failed: email'));

    }

  });

  it('should fail if password is missing', async () => {

    try {

      await createUser(undefined, undefined, null);

    } catch (err) {

      expect(err.message).toEqual(expect.stringContaining('Users validation failed: password'));

    }

  });

  it('should fail if username is NOT unique', async () => {

    await createUser();

    try {

      await createUser(undefined, undefined, 'foobar');

    } catch (err) {

      expect(err.message).toEqual(expect.stringContaining('E11000 duplicate key error dup key'));

    }

  });

  it('should generate a token', async () => {

    const user = await createUser();
    const token = user.generateToken();

    expect(token).toBeDefined();

    expect(token.split('.').length).toBe(3);

  });

  it('should match a good password', async () => {

    const password = 'testPassword';

    const user = await createUser(undefined, undefined, password);

    const passwordsMatch = await user.comparePassword(password);

    expect(passwordsMatch).toBeTruthy();

  });

  it('should authenticate if credientials match', () => {




  });

  it('should NOT authenticate if credientials DO NOT match', () => { });


});

