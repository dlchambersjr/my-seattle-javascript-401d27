'use strict';

// Third party reuirements
const dotenv = require('dotenv').config();

// Local Modules
const server = require('./src/app.js');

// Start the server
server.start(process.env.PORT, () => console.log(`HTTP SERVER started on PORT: ${process.env.PORT}`));