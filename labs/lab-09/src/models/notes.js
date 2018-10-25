'use strict';

const uuid = require('uuid/v4');

const storage = require('../lib/data-storage.js');

class Note {
  constructor(subject = 'Enter a body', body = 'Enter some info', owner = 'David') {
    this.id = uuid();
    this.subject = subject;
    this.body = body;
    this.owner = owner;
  }

  save() {
    //save the note here
    console.log('DATA to SAVE:', this);
    storage.save(this);
  }


  static getAll() {
    //Get all the notes

    console.log(Object.values(notesTable));

    return storage.getAll();
  }

}




module.exports = Note;