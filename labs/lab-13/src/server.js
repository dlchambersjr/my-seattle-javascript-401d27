// Load 3rd Party Resources
import express from 'express';
import cors from 'cors';

//Load locally created middleware


// prepare express
const app = express();

// Load app level middleware
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use(apiRouter);

//Catchalls
// app.use(notFound);
// app.use(errorHandler);

let isRunning = false;

module.exports = {
  server: app,
  start: (port) => {
    if (!isRunning) {
      app.listen(port, () => {
        isRunning = true;
        console.log(`LAB-13 SERVER up on PORT: ${port}`);
      });
    }
    else {
      console.log('LAB-13 SERVER is already running');
    }
  },
};



