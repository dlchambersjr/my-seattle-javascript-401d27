'use strict';

const uuid = require('uuid/v4');

const storage = require('../lib/memory.js');

class Note {
  constructor(subject = 'Enter a body', body = 'Enter some info') {
    this.id = uuid();
    this.subject = subject;
    this.body = body;
  }

  save() {
    //save the note here
    storage.save(this);

    console.log('Told to Save');
  }


  static getAll() {
    //Get all the notes

    console.log(Object.values(notesTable));

    return storage.getAll();
  }

}




module.exports = {};