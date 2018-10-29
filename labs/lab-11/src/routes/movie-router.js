import express from 'express';

const router = new express.Router();

//do route stuff

router.get('/api/v1/movies', (req, res) => {
  res.send({ pong: 'pong for GET' });
});

router.post('/api/v1/movies', (req, res) => {
  res.send({ pong: 'pong for POST' });

});


export default router;
