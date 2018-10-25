'use strict';

const uuid = require('uuid/v4');

const storage = require('../lib/data-storage.js');

class Note {
  constructor(subject = 'Enter a body', body = 'Enter some info', owner = 'David') {
    this.id = uuid();
    this.date = Date();
    this.subject = subject;
    this.body = body;
    this.owner = owner;
  }

  save() {
    //save the note here
    console.log('DATA to SAVE:', this);
    storage.save(this);
  }

  static getOne(id) {
    // return a specifc note
    console.log(`ID TO GET:`, id);
    return storage.get(id);
  }

  static getAllId() {
    //Get all the notes
    console.log(`RETRIEVING ALL NOTES:`);

    return storage.getAll();
  }

  static updateOne(TBD) {
    // update a specific note
    console.log(`UPDATING NOTE with ????`);
    return storage.update(this);
  }

  static deleteOne(id) {
    // delete a specifc note
    console.log(`DELETING NOTE: ${id}`);
    return storage.delete(id);
  }

}

module.exports = Note;