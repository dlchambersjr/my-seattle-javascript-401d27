import supertest from 'supertest';
const { app } = require('../src/app.js');

const request = supertest(app);


describe('API/ROUTER POST Test', () => {

  it('should create a movie', (done) => {

    request(app)
      .post('/api/v1/movies')
      .send({ foo: 'success' })
      .then((response => {
        expect(response.body).toEqual({ key: 'value' });
        done();
      }));

  });


});


describe('API/ROUTER GET Test', () => { });


describe('API/ROUTER PUT Test', () => { });


describe('API/ROUTER DELETE Test', () => { });

