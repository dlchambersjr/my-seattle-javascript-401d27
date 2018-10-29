import express from 'express';

const router = new express.Router();

//do route stuff

router.get('/ping', (req, res) => {
  res.send('pong for GET');
});

router.post('/api/v1/movies', (req, res) => {

});



export default router;
