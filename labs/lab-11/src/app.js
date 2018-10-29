// Load express middleware
import express from 'express';

// load the router specific to movie data
import movieRouter from './routes/movie-router.js';

// assign express to app
const app = express();

// Load the built in express modules
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// activate the router for movie data
app.use(movieRouter);

//Start listening to the server
// TODO: Why use module.exports herre
module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => console.log(`LAB-11 EXPRESS server running on PORT:${port}`));
  },
};
