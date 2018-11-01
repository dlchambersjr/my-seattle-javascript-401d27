// Require dotenv for environemnt variables
require('dotenv').config();

// require babel compliler for ES6 Compatability
require('babel-register');

// Start the MongoDB server using Mongoose
const mongoose = require('mongoose');
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

mongoose.connect(process.env.MONGODB_URI, options);


// Start the server
require('./src/server.js').start(process.env.PORT);