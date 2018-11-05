// import express from 'express';
// import User from './model.js';

// const router = express.Router();

// router.get('/signin', (request, response) => {
//   response.send('token coming soon');
// });

// router.post('/signup', async (request, response) => {

//   try {

//     const user = await User.create(request.body);
    
//     const token = user.generateToken();
    
//     response.send(token);

//   } catch (error) {

//     response.sendStatus(400);
//   }
// });

// router.get('/ping', (request, response) => {
//   response.send('pong');
// });

// export default router;

import express from 'express';
const authRouter = express.Router();

import User from './model.js';
import auth from './middleware.js';

// Generally, these will send a Token Cookie and do a redirect.
// For now, just spew out the token to prove we're ok.

authRouter.post('/signup', (req, res, next) => {
  
  // Create the user
  // handle errors
  // respond with user's generated token if things go well
  res.send('under construction');
});

// note the middleware
authRouter.post('/signin', auth, (req, res, next) => {
  res.send(req.token);
});

export default authRouter;