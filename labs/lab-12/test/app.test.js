import request from 'supertest';
const { app } = require('../src/app.js');

describe('Test for invalid endpoints', () => {

  it('should return status code 404 for unregistered routes.', (done) => {

    request(app)
      .post('/unregistered')
      .send({ title: 'Star Wars', genre: 'Sci-Fi' })
      .then((response => {
        expect(response.status).toBe(404);
        done();
      }));

  });

});

describe('Test for valid routes and INVALID requests', () => {

  it(`should respond 404-Not Found when it can't find the id for a GET`, (done) => {

    request(app)
      .get('/api/v1/movies')
      .send({ id: 'ping' })
      .then((response => {
        expect(response.status).toEqual(404);
        expect(response.message).toBe('NOT FOUND');
        done();
      }));

  });

  it(`should respond 400-Bad Request when no id for a GET`, (done) => {

    request(app)
      .get('/api/v1/movies')
      .send()
      .then((response => {
        expect(response.status).toEqual(400);
        expect(response.message).toBe('BAD REQUEST');
        done();
      }));

  });

  xit(`should respond 200 and a reponse body when successful GET is made`, (done) => {

    request(app)
      .get('/api/v1/movies')
      .send({ id: '10249352-0dce-4bea-b02b-a968b86d3d6' })
      .then((response => {
        expect(response.status).toEqual(200);
        expect(response.message).toBe({ title: 'Hoosiers', genre: 'Drama' });
        done();
      }));

  });

  xit(`should respond 400 - Bad Request when no request body is provided or body is invalid for a POST`, (done) => {

    request(app)
      .post('/api/v1/movies')
      .send()
      .then((response => {
        expect(response.status).toEqual(400);
        expect(response.message).toBe('BAD REQUEST');
        done();
      }));

  });

  xit(`should respond 200 and return the body when a valid POST is made`, (done) => {

    request(app)
      .post('/api/v1/movies')
      .send({ title: 'Pride and Prejudice', genre: 'Romance' })
      .then((response => {
        expect(response.status).toEqual(200);
        expect(response.message).toBe({ title: 'Pride and Prejudice', genre: 'Romance' });
        done();
      }));

  });

});
