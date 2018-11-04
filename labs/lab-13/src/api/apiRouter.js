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
//returns all documents if no id provided
router.get('/api/v1/books', (req, res, next) => {
  books.find()
    .then(result => sendJSON(result, res))
    .catch(next);
});

//returns a specific id
router.get('/api/v1/books/:id', (req, res, next) => {

  const id = req.params.id;

  if (id) {
    books.findById(id)
      .then(book => sendJSON(book, res))
      .catch(next);
  } else next;

});

// POST ROUTE
router.post('/api/v1/books', (req, res, next) => {
  const body = req.body;

  books.create(body)
    .then(result => sendJSON(result, res))
    .catch(next);
});

// PUT ROUTE
router.put('/api/v1/books/:id', (req, res, next) => {
  const id = req.params.id;
  const body = req.body;
  const updateOptions = {
    new: true,
  };

  books.findByIdAndUpdate(id, body, updateOptions)
    .then(result => sendJSON(result, res))
    .catch(next);
});

// TODO: I'm not sure I fully understand the differnece between PUT and PATCH:

// PATCH ROUTE
router.patch('/api/v1/books/:id', (req, res, next) => {

  const id = req.params.id;
  const body = req.body;
  const updateOptions = {
    new: true,
  };

  books.findByIdAndUpdate(id, body, updateOptions)
    .then(result => sendJSON(result, res))
    .catch(next);
});

// DELETE ROUTE
router.delete('/api/v1/books/:id', (req, res, next) => {
  const id = req.params.id;
  books.findByIdAndDelete(id)
    .then(result => sendJSON(result, res))
    .catch(next);
});

export default router;