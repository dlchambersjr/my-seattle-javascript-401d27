'use strict';

let notesTable = {};

module.exports = {

  // save notes from POST
  save: (note) => {
    console.log(`\n\n Data saved in MEMORY`);
    notesTable[note.id] = note;

  },

  // GET a specific note
  get: (id) => {
    console.log(`GOT TO THE GET ONE ID REQUEST`);
    if (notesTable[id]) { return notesTable[id]; }
    else return;
  },

  // GET all notes if a specific note is not returned
  getAll: () => {
    return Object.values(notesTable);
  },

  // Update the contents of a note with PUT
  put: (id, contents) => {

  },

  delete: (id) => {
    let noteToRemove = notesTable[id];
    console.log(`\n#################\nBEFORE DELETE: ${notesTable[id]}`);
    noteToRemove.id = null;
    noteToRemove.date = null;
    noteToRemove.subject = null;
    noteToRemove.body = null;
    noteToRemove.owner = null;

    console.log(`\n=================\nAFTER DELETE: ${notesTable[id]}`);
    return;

  },





}; //end of export



