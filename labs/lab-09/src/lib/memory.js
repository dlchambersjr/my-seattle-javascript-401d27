'use strict';

let notesTable = {};

module.exports = {

  // save notes they are entered
  save: (note) => {
    console.log(`\n\n Data saved in MEMORY`);
    notesTable[note.id] = note;

  },

  // get a specific note
  get: (id) => {
    console.log(`GOT TO THE GET ONE ID REQUEST`)
    return notesTable[id];
  },

  // get all notes
  getAll: () => {
    return Object.values(notesTable);
  },



}; //end of export



