'use strict';
// Make the connect to the Node.js filesystem methods
const fs = require('fs');

//module for the reader function
module.exports = (path, doneReadingFiles) => {

  console.log('PATH:', path);

  const gotTheFile = (err, fileData) => {
    if (err) {
      doneReadingFiles(err);
      return;
    }
    doneReadingFiles(null, fileData.toString(), path);
  };

  fs.readFile(path, gotTheFile);

};


