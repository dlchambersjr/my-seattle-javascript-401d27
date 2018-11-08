import express from 'express';

import Books from '../models/books-model';
import Authors from '../models/author-model.js';
import notFound from '../middleware/404.js';
import errorHandler from '../middleware/error.js';

//setup the API "dictionary"
const models = {
  'books': Books,
  'author': Authors,
};

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
router.get('/api/v1/:model', (req, res, next) => {
  const model = models[req.params.model];
  if (!model) {
    errorHandler('model not found', req, res, next);
    return;
  }
  model.find({}).populate('author')
    .then(result => sendJSON(result, res))
    .catch(next);
});

//returns a specific id
router.get('/api/v1/:model/:id', (req, res, next) => {
  const model = models[req.params.model];
  const id = req.params.id;

  if (!model) {
    errorHandler('model not found', req, res, next);
    return;
  }

  if (!id) {
    errorHandler('bad request', req, res, next);
    return;
  } else {
    model.findById({ _id: id }).populate('author')
      .then(book => sendJSON(book, res))
      .catch(next);
  }

});

// POST ROUTE
router.post('/api/v1/:model', (req, res, next) => {
  const model = models[req.params.model];

  const body = req.body;

  const authorInfo = {};
  authorInfo.name = body.author;

  console.log(authorInfo);

  if (!model) {
    notFound('model not found', req, res, next);
    return;
  }



  // Authors.create(authorInfo)
  //   .then(author => {
  //     const bookInfo = Object.assign({}, body, { author: author._id });

  //     console.log(bookInfo);

  //     Books.create(bookInfo)
  //       .then(result => {
  //         console.log(result);
  //         const newBook = Books.findById({ _id: result._id }).populate('author');
  //         console.log(newBook.schema);
  //         sendJSON(result, res);
  //       })
  //       .catch(next);
  //   })
  //   .catch(next);



  // model.create(body)
  //   .then(result => sendJSON(result, res))
  //   .catch(next);
});

// PUT ROUTE
router.put('/api/v1/:model/:id', (req, res, next) => {
  const model = models[req.params.model];
  const id = req.params.id;
  const body = req.body;
  const updateOptions = {
    new: true,
  };

  if (!model) {
    errorHandler('model not found', req, res, next);
    return;
  }

  model.findByIdAndUpdate(id, body, updateOptions)
    .then(result => sendJSON(result, res))
    .catch(next);
});

// TODO: I'm not sure I fully understand the differnece between PUT and PATCH:

// PATCH ROUTE
router.patch('/api/v1/:model/:id', (req, res, next) => {

  const model = models[req.params.model];
  const id = req.params.id;
  const body = req.body;
  const updateOptions = {
    new: true,
  };

  if (!model) {
    errorHandler('model not found', req, res, next);
    return;
  }

  model.findByIdAndUpdate(id, body, updateOptions)
    .then(result => sendJSON(result, res))
    .catch(next);

});

// DELETE ROUTE
router.delete('/api/v1/:model/:id', (req, res, next) => {
  const model = models[req.params.model];
  const id = req.params.id;

  if (!model) {
    errorHandler('model not found', req, res, next);
    return;
  }

  model.findByIdAndDelete(id)
    .then(result => sendJSON(result, res))
    .catch(next);
});

export default router;