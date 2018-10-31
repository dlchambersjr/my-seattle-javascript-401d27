import express from 'express';

import Movie from '../model/movie';
// import { request } from 'https';

const router = new express.Router();

//helper functions for routes
let sendJSON = (res, requestedMovie) => {
  res.status = 200;
  res.message = 'OK';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(requestedMovie));
  res.end();
};

let serverError = (res, err) => {
  let error = { error: err };
  res.statusCode = 500;
  res.statusMessage = 'Server Error';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(error));
  res.end();
};

let routeError = (res, req, code, message) => {
  console.log(code, message);

  res.status = code;
  res.message = message;
  res.write(`${code} - ${message}`);
  res.end();
};

//route instructions for each HTTP METHOD

router.get('/ping', (req, res) => {
  res.statusCode = 200;
  res.statusMessage = 'PING PING PING';
  res.send('found the /ping');

});



//get a movie title
router.get('/api/v1/movies', (req, res) => {
  let id = req.query.id;

  console.log('Checking for ID: ', id);

  if (id) {
    Movie.getOne(id)
      .then(movie => sendJSON(res, movie))
      .catch(err => routeError(req, res, err, 'NOT FOUND'));
  } else routeError(req, res, 404, 'not found');

  console.log(`\n\n==============\nTHIS MOVIE IS AFTER THE PROMISES RETURN\nIT RETURNS FIRST\nASYNC FOR THE WIN!!!\n\n==============`);

});

//create a movie title
router.post('/api/v1/movies', (req, res) => {

  res.statusCode = 200;
  res.statusMessage = 'OK';

  if (req.body.title) {
    const movie = new Movie(req.body.title, req.body.genre);
    movie.save();
    res.write((`Your movie with\nTitle: ${req.body.title}\nGenre: ${req.body.genre}\nhas been saved.`));
    res.end();
  } else routeError(req, res, 400, 'bad request');


});

//delete a movie title
router.delete('/api/v1/movies', (req, res) => {
  res.statusCode = 204;
  res.statusMessage = '';

  let id = req.query.id;
  Movie.deleteOne(id);

  res.write('REACHED THE DELETE FUNCTION');
  res.end();


});

router.use((req, res) => {
  console.log('\n\n=====================\n\n', res.statusCode);
  res.statusCode = 404;
  res.statusMessage = `NOT FOUND`;
  res.write(`404 - ${req.path} NOT FOUND`);
  res.end();


});



export default router;