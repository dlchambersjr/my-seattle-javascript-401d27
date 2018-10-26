'use strinct';

const router = require('../lib/router.js');
const Note = require('../models/notes.js');

// Create a new note
router.post('/api/v1/notes', (request, response) => {
  response.statusCode = 200;
  response.statusMessage = 'OK';

  const note = new Note(request.body.subject, request.body.body, request.body.owner);

  note.save();

  response.write((`Your note with\nSubject: ${request.body.subject}\nBody: ${request.body.body}\nOwner: ${request.body.owner}\nhas been saved.`));

  response.end();

});

// Retrieve a single note based on ID or all notes if know ID provided
router.get('/api/v1/notes', (request, response) => {
  response.statusCode = 200;
  response.statusMessage = 'OK';

  let id = request.query.id;
  let requestedNote;

  (id) ? requestedNote = Note.getOne(id) : requestedNote = Note.getAllId();

  if (requestedNote !== undefined) {
    response.write(`\n\n${JSON.stringify(requestedNote)}\n\n`);
  } else {
    response.write('Requested ID does not exist: Please enter a valid id?');
  }

  response.end();
});

// Update a specific note based on ID
router.put('/api/v1/notes', (request, response) => {
  response.statusCode = 200;
  response.statusMessage = 'OK';
  response.write(`You sent this ID to the server via PUT: ` + JSON.stringify(request.body));
  response.end();
});

// Delete a specific note based on ID
router.delete('/api/v1/notes', (request, response) => {
  response.statusCode = 204;
  response.statusMessage = '';

  let id = request.query.id;
  Note.deleteOne(id);

  response.write('REACHED THE DELETE FUNCTION');

  // response.write(`ID ${JSON.stringify(request.query.id)} was DELETED: `);
  response.end();
});

module.exports = {};
