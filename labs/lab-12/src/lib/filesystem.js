import fs from 'fs';

const storage = {};

const dataDirectory = `${__dirname}/../data`;

// Get a list of files on the system
let readFilesPromise = function (filename) {
  console.log('READING FROM DRIVE');
  return new Promise(function (resolve, reject) {
    fs.readFile(filename, function (err, movie) {
      if (err) {
        console.error(err);
        reject(err);
      }
      else
        resolve(movie);
    });
  });
};

// save notes from POST
storage.save = (movie) => {
  return new Promise((resolve, reject) => {
    if (!movie.id) { reject('No record ID Specified'); }

    let file = `${dataDirectory}/${movie.id}.json`;
    console.log(file);
    let text = JSON.stringify(movie);
    fs.writeFile(file, text, (err) => {
      if (err) reject(err);
      resolve(movie);
    });
  });
};

// GET a specific note
storage.get = (id) => {
  console.log('FILESYTEM GET ID:', id);
  return new Promise((resolve, reject) => {
    let file = `${dataDirectory}/${id}.json`;
    fs.readFile(file, (err, movie) => {
      if (movie) {
        let content = JSON.parse(movie.toString());
        resolve(content);
      }
      else { reject(404); }
    });
  });
};

// // GET all notes if a specific note is not returned
storage.getAll = () => {
  return new Promise((resolve, reject) => {
    fs.readdir(dataDirectory, (err, files) => {
      if (err) { reject(err); }
      let promises = [];

      while (files.length) {
        let file = files.shift();
        file = `${dataDirectory}/${file}`;
        if (file.match(/\.json/)) { promises.push(readFilesPromise(file)); }
      }

      Promise.all(promises)
        .then(contents => {
          let allMovies = contents.reduce((note, data) => {
            let content = JSON.parse(data.toString());
            note[content.id] = content;
            return note;
          }, {});
          console.log(allMovies);
          resolve(allMovies);
        })
        .catch((err) => console.log(err));
    });
  });
};

// Update the contents of a note with PUT
storage.update = (id, title, genre) => {
  console.log('FILESYTEM PUT ID:', id);
  console.log('FILESYTEM PUT TITLE:', title);
  console.log('FILESYTEM PUT GENRE:', genre);
  return new Promise((resolve, reject) => {
    let file = `${dataDirectory}/${id}.json`;
    fs.readFile(file, (err, movie) => {
      if (movie) {
        console.log(movie);
        let content = JSON.parse(movie.toString());
        console.log(content);
        resolve(content);
      }
      else { reject(404); }
    });
  });

}

storage.delete = (id) => {
  return new Promise((resolve, reject) => {
    let file = `${dataDirectory}/${id}.json`;
    if (file) {
      fs.unlink(file, (err) => {
        resolve(`DELETED ID:${id}`);
      });
    }
    else reject(`${id} not found`);
  });
};


export default storage;







