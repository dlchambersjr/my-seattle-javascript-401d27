'use strict';

// Function writeFile to write a file to the disk

const fs = require('fs');

module.exports = (path, buffer, doneWritingFile) => {

  fs.writeFile(path, buffer, (err) => {
    if (err) {
      throw doneWritingFile(err);
    }
    doneWritingFile(null);

  });


};
