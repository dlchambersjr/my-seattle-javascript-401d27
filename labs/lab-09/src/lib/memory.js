'use strict';

let notesTable = {};

module.exports = {

  // save notes they are entered
  save: (note) => {
    console.log(`\n\n Data saved in MEMORY`);
    notesTable[note.id] = note;

  },

  // get a specific note
  getOne: (id) => {
    return notesTable[id];
  },

  // get all notes
  getAll: () => {
    return Object.values(notesTable);
  },



}; //end of export



