// Load id generator
import uuid from 'uuid/v4';

// get the storage functions
import storage from '../lib/data-storage.js';

class Movie {
  constructor(title = 'Enter title', genre = 'Enter a genre') {
    this.id = uuid();
    this.createdDate = Date();
    this.title = title;
    this.genre = genre;
  }

  save() {
    //save the movie here
    console.log('DATA to SAVE:', this);
    storage.save(this);
  }

  static getOne(id) {
    // return a specifc movie 
    console.log(`REACHED - STATIC getOne:\n`);
    let result = storage.get(id);
    return result;
  }

  static getAllId() {
    //Get all the movies
    console.log(`REACHED - STATIC getAllId:\n`);
    return storage.getAll();
  }


  static deleteOne(id) {
    // delete a specifc movie
    console.log(`REACHED - STATIC deleteOne:\n`);
    return storage.delete(id);
  }

}

export default Movie;

