'use strict';

const fs = require('fs');

const storage = module.exports = {};

const notesDirectory = `${__dirname}/../data`;


// save notes from POST
storage.save = (note) => {
  return new Promise((resolve, reject) => {
    if (!note.id) { reject('No recoed ID Specified'); }

    let file = `${notesDirectory}/${note.id}.json`
    console.log(file)
    let text = JSON.stringify(note);
    fs.writeFile(file, text, (err) => {
      if (err) { reject(err); }
      resolve(note);
    });
  });
};

// GET a specific note
// storage.get: (id) => {
//   console.log(`GOT TO THE GET ONE ID REQUEST`);
//   if (notesTable[id]) { return notesTable[id]; }
//   else return;
// }

// // GET all notes if a specific note is not returned
// storage.getAll: () => {
//   return Object.values(notesTable);
// }

// // Update the contents of a note with PUT
// put: (id, contents) => {

// }

// delete: (id) => {
//   let noteToRemove = notesTable[id];
//   console.log(`\n#################\nBEFORE DELETE: ${notesTable[id]}`);
//   noteToRemove.id = null;
//   noteToRemove.date = null;
//   noteToRemove.subject = null;
//   noteToRemove.body = null;
//   noteToRemove.owner = null;

//   console.log(`\n=================\nAFTER DELETE: ${notesTable[id]}`);
//   return;

// }









