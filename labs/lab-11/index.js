// Require dotenv for environemnt variables
require('dotenv').config();

// require babel compliler
require('babel-register');

// Start the server
require('./src/app.js').start(process.env.PORT);