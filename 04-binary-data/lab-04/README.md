# 05 - Buffers-Bitmap Transformer

This is a Command Line Interface (CLI) that allows a user to enter a filename and a transformation option.  The system will then return a transformed image based on the users inputed parameters.

## Challenge
The solution requires the ability to receive two arguments entered from the CLI.  The arguments will be interpreted by the code and return the requested results.  The code should be modularized and follow single responsibility principles (SRP).  The solution will require access to the file system for basic file I/O.

## index.js
This is the primary js file and is the one that will receive the users arguments from the CLI. The following is the basic flow of the code:

1. Receive the arguments from the CLI
2. Create an instance of the Bitmap class using the [```bmp-parse.js```](libs/bmp-parse.js)


## Export Modules
### bmp-parse.js
This module creates an instance of the file using a class called ```Bitmap```. The constructor receives the user provided file name as it's only argument.  It then creates an instance of Bitmap that contains the following:

* Property: ```file``` - which is assigned the value of the passed fileName argument.
* Property: ```newFile``` - which receives the initial value of null and will later
* Method: ```parseBitmap``` - this is a callback that receives a file buffer as a single argument and return the updated Bitmap instance. It's purpose is to provide the following parsed information about the passed file buffer:
  * 




<!-- // TODO: Explain how this works (in your README) -->
<!-- const [file, operation] = process.argv.slice(2); -->