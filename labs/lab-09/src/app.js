'use strict';

// Load Node requirements
const http = require('http');

// Load local requirements
const router = require('./lib/router.js');
require('./api/api.js');

// Is the server running
let isRunning = false;

// Open an HTTP server connection using router.route as the entry point
const app = http.createServer(router.route);

module.exports = {
  start: (port) => {
    if (!isRunning) {
      app.listen(port, (err) => {
        if (err) { throw err; }
        // change the isRunning flag
        isRunning = true;
        console.log(`HTTP ROUTING server is up on PORT: ${port}`);
      });
    }
    else {
      console.log('Server is already running')
    }
  },

  stop: () => {
    app.close(() => {
      isRunning = false;
      console.log('Server has been stopped');
    });
  },
};