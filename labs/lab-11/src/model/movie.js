'use strict';

// const uuid = require('uuid/v4');
import uuid from 'uuid/v4';

// const storage = require('../lib/data-storage.js');
import storage from '../lib/data-storage.js';

class Movie {
  constructor(title = 'Enter title', genere = 'Enter some info', owner = 'David') {
    this.id = uuid();
    this.createdDate = Date();
    this.titel = title;
    this.genre = genre;
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
    let result = storage.get(id);

    console.log(`\n\n#################\n${result}\n#################\n\n`);

    return result;
  }

  static getAllId() {
    //Get all the notes
    console.log(`RETRIEVING ALL NOTES:`);

    return storage.getAll();
  }

  //WORKING ON THIS FOR STRETCH GOAL
  // ###############################
  // static updateOne(TBD) {
  //   // update a specific note
  //   console.log(`UPDATING NOTE with ????`);
  //   return storage.update(this);
  // }
  // ###############################


  static deleteOne(id) {
    // delete a specifc note
    console.log(`DELETING NOTE: ${id}`);
    return storage.delete(id);
  }

}

export default Movie;

