'use strict';

let notesTable = {};

module.exports = {

  // save notes they are entered
  save: (note) => {
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



