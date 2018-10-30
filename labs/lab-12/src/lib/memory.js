let movieCollection = {};

module.exports = {

  // save movies from POST
  save: (movie) => {
    console.log(`\n\n Data saved in MEMORY`);
    movieCollection[movie.id] = movie;

  },

  // GET a specific movie
  get: (id) => {
    console.log(`GOT TO THE GET ONE ID REQUEST`);
    if (movieCollection[id]) { return movieCollection[id]; }
    else return;
  },

  // GET all movies if a specific movie is not returned
  getAll: () => {
    return Object.values(movieCollection);
  },

  // Update the contents of a movie with PUT
  put: (id, contents) => {

  },

  delete: (id) => {
    let movieToRemove = movieCollection[id];
    console.log(`\n#################\nBEFORE DELETE: ${movieCollection[id]}`);
    movieToRemove.id = null;
    movieToRemove.date = null;
    movieToRemove.subject = null;
    movieToRemove.body = null;
    movieToRemove.owner = null;

    console.log(`\n=================\nAFTER DELETE: ${movieCollection[id]}`);
    return;

  },

}; //end of export

export default movieCollection;

