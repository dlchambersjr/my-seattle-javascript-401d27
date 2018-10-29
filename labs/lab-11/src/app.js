
import movieRouter from './routes/movie-router.js';

import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(movieRouter);





app.listen();


module.exports = {
  app,
  start: (port) => app.listen(port, () => {
    console.log(`EXPRESS server running on PORT:${port}`);
  }),
};

// export default {
//   start: (port) => console.log(`EXPRESS server running on PORT:${port}`);
// }