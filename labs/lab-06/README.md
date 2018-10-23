# TCP Chat Server
Basic Telnet socket server to create a chat room.  

## Installation
* Clone the repository into your local system
* Navigate to the directory and run ```npm i``` to install the require dependencies.

## Required Dependencies:
* Node.js - ```npm i node```
* dotenv - ```npm i dotenv```
* net - ```npm i net```
* events - ```npm i events```
* uuid - ```npm i uuid```


## TCP Chat Room Commands
```@quit``` - ends your chat room
```@list``` - display a list of users in the room
```@nickname <nickname>``` - change your user nickname
```@dm <username> <message>``` - sends a message to the given user.
```@all <message>``` - sends a message to all users in the room.

