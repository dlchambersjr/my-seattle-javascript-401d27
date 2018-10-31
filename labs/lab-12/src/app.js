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

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => console.log(`LAB-12 EXPRESS MIDDLEWARE server running on PORT:${port}\n\n`));
  },
};
