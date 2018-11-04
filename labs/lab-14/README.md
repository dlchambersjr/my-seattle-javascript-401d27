# Lab-13 Single Resource Mongo and Express API

## Installation

1. Copy the "repo" to your local system.
2. Change to the new created repo folder.
2. ```npm i``` to load the dependencies found in ```package.json.```
3. Create a ```.env``` file in the root folder and include the following:
  * ```PORT=3000```
  * ```MONGODB_URI=mongodb://localhost:27017/books```
  * other environment variables as needed
3. Run ```npm start``` in the command line from the root folder to launch the server

## Dependencies

### First Party
* Node.js
* MongoDB
* 

### Third Party
* babel-env
* babel-eslint
* babel-register
* body-parser
* cors
* dotenv
* express
* mongooseJS

### Local Modules
* index.js - entry point
* server.js - primary server code
* apiRouter.js - used for routes and how to execute requests
* books-model.js - Data Structure for information to be saved.
* 404.js - middleware to catch 404 errors
* error.js - middleware to interpret server errors
* supergoose.js - used for testing purposes.
* server.test.js - testing file.