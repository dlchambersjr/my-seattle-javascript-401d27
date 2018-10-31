import express from 'express';

import Movie from '../model/movie';
// import { request } from 'https';

const router = new express.Router();

//helper functions for routes
let sendJSON = (res, movieInfo, code, message) => {
  res.statusCode = code;
  res.statusMessage = message;
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(movieInfo));
  res.end();
};

// Helper function to return the status of HTTP Methods
let returnStatus = (req, res, code, message, result) => {
  res.statusCode = code;
  res.statusMessage = message;
  res.send(result);
};


//get a movie title
router.get('/api/v1/movies', (req, res) => {
  let id = req.query.id;

  console.log('GETting ID: ', id, '\n');

  if (id) {
    Movie.getOne(id)
      .then(movie => sendJSON(res, movie, 200, 'OK'))
      .catch(err => returnStatus(req, res, err, 'NOT FOUND', 'NOT FOUND'));
  } else returnStatus(req, res, 400, 'Bad Request', 'Bad Request');

});

//create a movie title
router.post('/api/v1/movies', (req, res) => {

  res.statusCode = 200;
  res.statusMessage = 'OK';

  if (req.body.title && req.body.genre) {
    const movie = new Movie(req.body.title, req.body.genre);
    movie.save();
    sendJSON(res, movie, 200, 'OK');
  } else returnStatus(req, res, 400, 'Bad Request', 'Bad Request');

});

//update a movie title
router.put('/api/v1/movies', (req, res) => {

  let id = req.query.id;
  let title = req.query.title;
  let genre = req.query.location;

  Movie.updateOne(id, title, genre)
    .then(movie => sendJSON(res, movie, 200, 'OK'))
    .catch(err => returnStatus(req, res, err, 'NOT FOUND', 'NOT FOUND'));
});

//delete a movie title
router.delete('/api/v1/movies', (req, res) => {
  res.statusCode = 204;
  res.statusMessage = '';

  let id = req.query.id;
  Movie.deleteOne(id);

  returnStatus(req, res, 204, '', '');

});

router.use((req, res) => {
  returnStatus(req, res, 404, 'NOT FOUND', 'NOT FOUND');
});



export default router;