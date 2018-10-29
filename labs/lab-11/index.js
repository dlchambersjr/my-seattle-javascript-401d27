'use script';

// Require dotenv for environemnt variables
require('dotenv').config();

// require babel compliler
require('babel-register');



import app from './src/app.js';

app.start(process.env.PORT);
