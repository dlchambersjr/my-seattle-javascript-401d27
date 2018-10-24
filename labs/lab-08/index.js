'use strict';

// Third party reuirements
require('dotenv').config();

// Local Modules
require('./src/app.js').start(process.env.PORT)