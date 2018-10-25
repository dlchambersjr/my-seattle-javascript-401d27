'use strinct';

const router = require('../lib/router.js');
const Note = require('../models/notes.js');

/**
 * GET Route (/)
 * Accepts an optional "name" query string parameter and says Hello
 * test with httpie:
 *     http http://localhost:8080
 *     http http://localhost:8080?name=John
 */

// router.get('/', (request, response) => {
//   response.statusCode = 200;
//   response.statusMessage = 'OK';
//   let name = request.query.name || '';
//   response.write(`Hello ${name}`);
//   response.end();
// });

router.get('/api/v1/notes', (request, response) => {
  response.statusCode = 200;
  response.statusMessage = 'OK';

  let id = request.query.id;

  if (id) {

  }



  response.write('Got to the GET');
  // let notes = Note.getAll();

  // response.write(JSON.stringify(notes));

  // let id = request.query.id || '';
  // response.write(`ID: ${id} was requested`);
  response.end();
});


/**
 * POST Route (/data)
 * Accepts a JSON object and simply regurgitates it back to the browser
 * test with httpie:
 *     echo '{"title":"Go Home","content":"foobar"}' | http post http://localhost:8080/data
 */

// router.post('/data', (request, response) => {
//   response.statusCode = 200;
//   response.statusMessage = 'OK';
//   response.write(JSON.stringify(request.body));
//   response.end();
// });

router.post('/api/v1/notes', (request, response) => {
  response.statusCode = 200;
  response.statusMessage = 'OK';

  const note = new Note(request.body.subject, request.body.body);

  note.save();
  response.write('saved');

  response.write(('GOT TO THE POST ROUTER'));
  response.end();



  // // response.write(`You sent this JSON data to the server via POST: ` + JSON.stringify(request.body));
  // response.end();
});

router.put('/api/v1/notes', (request, response) => {
  response.statusCode = 200;
  response.statusMessage = 'OK';
  response.write(`You sent this ID to the server via PUT: ` + JSON.stringify(request.body));
  response.end();
});

router.delete('/api/v1/notes', (request, response) => {
  response.statusCode = 200;
  response.statusMessage = 'OK';
  response.write(`ID ${JSON.stringify(request.query.id)} was DELETED: `);
  response.end();
});

module.exports = {};
