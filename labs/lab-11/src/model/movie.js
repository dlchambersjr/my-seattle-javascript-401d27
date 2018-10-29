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
    console.log(`ID TO GET:`, id);
    let result = storage.get(id);

    console.log(`\n\n#################\n${result}\n#################\n\n`);

    return result;
  }

  static getAllId() {
    //Get all the movies
    console.log(`RETRIEVING ALL MOVIES:`);

    return storage.getAll();
  }

  //WORKING ON THIS FOR STRETCH GOAL
  // ###############################
  // static updateOne(TBD) {
  //   // update a specific movie
  //   console.log(`UPDATING movie with ????`);
  //   return storage.update(this);
  // }
  // ###############################


  static deleteOne(id) {
    // delete a specifc movie
    console.log(`DELETING MOVIE: ${id}`);
    return storage.delete(id);
  }

}

export default Movie;

