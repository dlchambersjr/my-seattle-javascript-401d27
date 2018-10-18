'use strict';
// Make the connect to the Node.js filesystem methods
const fs = require('fs');

//module for the reader function
module.exports = (path, doneReadingFiles) => {

  const gotTheFile = (err, fileData) => {
    if (err) {
      doneReadingFiles(err);
      return;
    }
    doneReadingFiles(null, fileData.toString());
  };

  fs.readFile(path, gotTheFile);

};


