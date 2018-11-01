import express from 'express';

import books from '../models/books-model';

const router = express.Router();

// Process successful results and return the body
let sendJSON = (data, response) => {
  response.statusCode = 200;
  response.statusMessage = 'OK';
  response.setHeader('Content-Type', 'application/json');
  response.write(JSON.stringify(data));
  response.end();
};



// GET ROUTE(S)

router.get('/api/v1/books', (req, res) => {
  res.send('WHOOP');
});

// POST ROUTE
router.post('api/v1/books', (req, res) => {
  const body = req.body;
  books.create(body)
    .then(result => sendJSON(result, response))
    .catch(next);
});

// PUT ROUTE
router.put('api/v1/books', (req, res) => { });


// PATCH ROUTE

// DELETE ROUTE
router.delete('api/v1/books', (req, res) => { });



//Helper Routes







export default router;