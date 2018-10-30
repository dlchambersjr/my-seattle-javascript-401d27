# Lab-11 Express and Babel

## Installation

1. copy the "repo" to your local system.
2. npm i to load the dependencies found in package.json.
3. create a .env file in the root folder and add PORT = 3000 (or your desired port).  
3. run ```npm start``` in the root folder to launch the server

## Dependencies

### First Party
* http
* 

### Third Party
* babel-env
* babel-eslint
* babel-register
* dotenv
* express
* uuid

### .env
You should  create a variable called ```STORAGE``` in the .env file which will equal either ```memory``` or ```filesystem``` depending on which persistence method is required. If no value is defined, the system will default to memory.

### Local Modules
* index.js - entry point
* app.js - primary server code
* movie-router.js - used to routes and how to execute requests
* data-storage.js - Provide a switch between memory and filesystem storage
* filesystem.js - methods to process storage to and from the filesystem.
* memory.js - methods to process storage to memory.
* movie.js - Data Structure for information to be saved.






