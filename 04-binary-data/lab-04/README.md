# 05 - Buffers-Bitmap Transformer

This is a Command Line Interface (CLI) that allows a user to enter a filename and a transformation option.  The system will then return a transformed image based on the users inputed parameters.

## Challenge
The solution requires the ability to receive two arguments entered from the CLI.  The arguments will be interpreted by the code and return the requested results.  The code should be modularized and follow single responsibility principles (SRP).  The solution will require access to the file system for basic file I/O.

## index.js
This is the primary js file and is the one that will receive the users arguments from the CLI. The following is the basic flow of the code:

1. Receive the arguments from the CLI.  
2. Create an instance of the ```Bitmap(arity 1)``` class using the [bmp-parse.js](libs/bmp-parse.js)
3. Starts the process of transformation by invoking ```transformWithCallback (arity 1)```.  This function receives the bitmap instance as it's only argument.
4. The app exists after the completion of ```transformWithCallback```.

## index.js functions

### transformWithCallback (arity 1)
* receives a bitmap instance.
* reads the requested file from the filesystem using the [readFile](libs/read-file.js) module.
* passes the results of the callback into the ```parseBitmap``` method of the instance and verifies the file is actually a bitmap.  If not, it notifies the user and exists the app.
* After the bitmap is confirmed, the ```transform``` function is invoked to begin the requested transformation.
* The newly transformed instance is returned and passed into the [writeFile](libs/write-file.js) module.
* After the module returns it's results, the user is notified that the file has been transformed and what the new file name is.

### transform (arity 3)
* receives the instance of the bitmap, the requested operation, and a callback)
* uses an object called ```transforms``` as a dictionary to look up the name of the requested method in the form of ```transforms[operation](bitmap)```.  There are three available transformation at this time:
  1. [green](libs/green.js): Transform the color blue to green.
  2. [negative](libs/negative.js): Makes an image negative.
  3. [visor](libs/makeVisor.js): Places a "visor" of the eyes (i.e., [Geordi LaForge](https://www.writeups.org/star-trek-levar-burton-geordi-laforge/) from STNG) - its a work in progress and is not scalable.

* upon completion of the requested method, a modified instance of the bitmap is returned and the extension of the filename is updated to reflect the requested change. E.g., when the negative transformation is requested, ```filename.bmp``` becomes ```filename .negative.bmp```.
* the callback then returns the transformed instance.

## Export Modules

### bmp-parse.js
This module creates an instance of the file using a class called ```Bitmap```. The constructor receives the user provided file name as it's only argument.  It then creates an instance of Bitmap that contains the following:

* Property: ```file``` - which is assigned the value of the passed fileName argument.
* Property: ```newFile``` - which receives the initial value of null and will later
* Method: ```parseBitmap (arity 2)``` - this method receives a file buffer and a callback It's purpose is to return the instance with the following parsed information about the passed file buffer:
  * Type - used to confirm a valid bitmap file
  * fileSize - informational at this point
  * bitsPerPixel - useful in understanding the color chart. necessary to understand when scaling to 24bit bitmap images.
  * height - dimensional height of the file.
  * width - dimensional width.
  * sizeOfTheDIBHeader - length of the DIB header and is critical in calculating the start of the color chart.
  * ColorChart - provides the offset for the color chart and is equal to the length of the header (14) + sizeOfTheDIBHeader + optional headers (12)
  * pixels - the starting offset of the actual image pixels.

### read-file.js
This module exports a function with an arity of two - the filename and a callback function to return the results.  It uses the ```node.js``` file system tool ```fs.readFile``` to read the passed filename.  Once read, it verifies there were no errors and returns the files buffer.

### write-file.js
This module exports a function with an arity of three - the filename, a file buffer, and a callback function to return the results.  It uses the ```node.js``` file system tool ```fs.writeFile``` to write the passed buffer data to the passed filename.  The results are returned via the callback.

### green.js
This module exports a function with an arity of one. - an instance of the bitmap.  It then modifies the color chart of the instance to change the color blue to green and returns the modified bitmap instance

### negative.js
This module exports a function with an arity of one. - an instance of the bitmap.  It then modifies the color chart of the instance to create a negative effect and returns the modified instance.

### makeVisor.js
This module exports a function with an arity of one. - an instance of the bitmap.  It then modifies the pixels over the eyes by replacing each pixel value with a random number.  THis essentially randomizes where each pixel points to in the color chart. It then returns the modified instance.

## Testing
All modules passed  with ```94% coverage```.  The following tests were performed:

* Test to verify file I/O for read and write
  * should successfully load a file into the buffer
  * should write a new file with name 'newbaldy'

* Test to verify a new Bitmap instance can be made.
  * should make a new instance of Bitmap with the passed filename

* Test to verify the file is a BMP and can be parsed
  * should verify that the file is a BMP
  * should find the color table for the BMP
  * should find the start of the pixel data for the BMP

* Test to verify color table transformations
  * should transform the file by replacing the blues with greens
  * should creative a photo negative from the color chart

* Test to verify rasterization can take place
  * should creative a visor over the eyes by modifying the pixels.


