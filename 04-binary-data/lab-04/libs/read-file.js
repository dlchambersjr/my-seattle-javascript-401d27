'use strict!';

// This module is designed to read a file into the buffer.
const fs = require('fs');

module.exports = (path, doneReadingFile) => {

  const gotTheFile = (err, fileData) => {
    if (err) {
      doneReadingFile(err);
      return;
    }
    doneReadingFile(null, fileData);
  };

  fs.readFile(path, gotTheFile);

};

