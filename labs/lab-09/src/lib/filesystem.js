'use strict';

const fs = require('fs');

const storage = module.exports = {};

const notesDirectory = `${__dirname}/../data`;

// Get a list of files on the system
let readFilesPromise = function (filename) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filename, function (err, note) {
      if (err)
        reject(err);
      else
        resolve(note);
    });
  });
};

// save notes from POST
storage.save = (note) => {
  return new Promise((resolve, reject) => {
    if (!note.id) { reject('No record ID Specified'); }

    let file = `${notesDirectory}/${note.id}.json`;
    console.log(file);
    let text = JSON.stringify(note);
    fs.writeFile(file, text, (err) => {
      if (err) { reject(err); }
      resolve(note);
    });
  });
};

// GET a specific note
storage.get = (id) => {
  return new Promise((resolve, reject) => {
    let file = `${notesDirectory}/${id}.json`;
    fs.readFile(file, (err, note) => {
      if (note) {
        console.log('\n\nBEFORE JSON', note.toString());
        let content = JSON.parse(note.toString());
        console.log('\n\nAFTER JSON', content);
        resolve(content);
      }
      else reject(`${id} not found`);
    });
  });
};

// // GET all notes if a specific note is not returned
storage.getAll = () => {
  return new Promise((resolve, reject) => {
    fs.readdir(notesDirectory, (err, files) => {
      if (err) { reject(err); }
      let promises = [];

      while (files.length) {
        let file = files.shift();
        file = `${notesDirectory}/${file}`;
        if (file.match(/\.json/)) { promises.push(readFilesPromise(file)); }
      }

      Promise.all(promises)
        .then(contents => {
          let allNotes = contents.reduce((note, data) => {
            let content = JSON.parse(data.toString());
            note[content.id] = content;
            return note;
          }, {});
          console.log(allNotes);
          resolve(allNotes);
        })
        .catch((err) => console.log(err));
    });
  });
};

// // Update the contents of a note with PUT
// put: (id, contents) => {

// }

storage.delete = (id) => {
  return new Promise((resolve, reject) => {
    let file = `${notesDirectory}/${id}.json`;
    if (file) {
      fs.unlink(file, (err) => {
        resolve(`${id} ID:${id}`);
      });
    }
    else reject(`${id} not found`);
  });
};










