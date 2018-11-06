import express from 'express';
import User from './user-model.js';
// import auth from '../middleware/auth.js';

// import { create } from 'domain';
// import { createUnzip } from 'zlib';
// import { createSecureServer } from 'http2';

const router = express.Router();

// router.get('/signin', auth, (request, response) => {
//   response.send('where can the token be?');
// });

//Add users via signup.
router.post('/signup', async (req, res) => {


  try {

    const body = req.body;

    console.log(body);

    const user = await User.create(body);

    const token = user.generateToken();

    console.log(user);
    console.log(token);

    // respond with the token

  } catch (error) {

    res.sendStatus(400);
  }
});

export default router;