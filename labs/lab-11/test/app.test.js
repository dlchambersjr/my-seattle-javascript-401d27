import request from 'supertest';
const { app } = require('../src/app.js');

describe('API/ROUTER POST Test', () => {

  it('should create a movie', (done) => {

    request(app)
      .post('/api/v1/movies')
      .send({ foo: 'ping' })
      .then((response => {
        expect(response.body).toEqual({ pong: 'pong for POST' });
        done();
      }));

  });


});

describe('API/ROUTER GET Test', () => {

  it('should retrieve a movie', (done) => {

    request(app)
      .post('/api/v1/movies')
      .send({ foo: 'ping' })
      .then((response => {
        expect(response.body).toEqual({ pong: 'pong for GET' });
        done();
      }));

  });

});


xdescribe('API/ROUTER PUT Test', () => { });


describe('API/ROUTER DELETE Test', () => { });

