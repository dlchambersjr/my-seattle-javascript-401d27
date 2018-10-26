'use strinct';

const router = require('../lib/router.js');
const Note = require('../models/notes.js');

let sendJSON = (response, requestedNote) => {
  response.statusCode = 200;
  response.statusMessage = 'OK';
  response.setHeader('Content-Type', 'application/json');
  response.write(JSON.stringify(requestedNote));
  response.end();
};

let serverError = (response, err) => {
  let error = { error: err };
  response.statusCode = 500;
  response.statusMessage = 'Server Error';
  response.setHeader('Content-Type', 'application/json');
  response.write(JSON.stringify(error));
  response.end();
};

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
  let id = request.query.id;
  // let requestedNote;

  console.log('Checking for ID: ', id);

  if (id) {
    Note.getOne(id)
      .then(note => sendJSON(response, note))
      .catch(err => serverError(response, err));
  } else {
    Note.getAllId()
      .then(note => sendJSON(response, note))
      .catch(err => serverError(response, err));
  }

  console.log(`\n\n==============\nTHIS NOTE IS AFTER THE PROMISES RETURN\nIT RETURNS FIRST\nASYNC FOR THE WIN!!!\n\n==============`);

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
