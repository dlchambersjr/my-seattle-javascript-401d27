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
router.get('/api/v1/books', (req, res, next) => {
  books.getAll()
    .then(result => sendJSON(result, res))
    .catch = (next);
});

router.get('/api/v1/books/:id', (req, res, next) => {
  const id = req.params.id;

  if (id) {
    books.getOne(id)
      .then(book => sendJSON(res, res))
      .catch(next);
  } else next;

  books.getAll()
    .then(result => sendJSON(result, res))
    .catch = (next);
});

// POST ROUTE
router.post('/api/v1/books', (req, res, next) => {
  const body = req.body;
  console.log(JSON.stringify(body));

  books.create(body)
    .then(result => sendJSON(result, res))
    .catch(next);
});

// PUT ROUTE
router.put('api/v1/books/:id', (req, res, next) => {
  const id = req.params.id;
  const body = req.body;

  books.updateOne(id, body)
    .then(result => sendJSON(result, res))
    .catch(next);
});

// FIXME:
// PATCH ROUTE

// DELETE ROUTE
router.delete('api/v1/books/:id', (req, res, next) => {
  const id = req.params.id;
  books.deleteOne(id)
    .then(result => sendJSON(result, res))
    .catch(next);

});



//Helper Routes







export default router;