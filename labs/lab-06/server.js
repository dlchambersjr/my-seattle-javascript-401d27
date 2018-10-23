'use strict';
// Load Node files
const net = require('net');
const EE = require('events');

// Load local  files
const Client = require('./libs/model/client.js');

//Load dotenv for environement variables
require('dotenv').config(); //must load before using env.process
const PORT = process.env.PORT || 3000;

//Create a new server
const server = net.createServer();

// Create a new instance of EE
const ee = new EE();

// Create a clientPool to hold the active users
let clientPool = [];

//Create a connection event
server.on('connection', (socket) => {
  let client = new Client(socket);
  clientPool.push(client);

  client.socket.write('Welcome to the OASIS!.\r\nOur Virtual Reality System is receiving an upgrade.\r\nPlease use the text interface at this time...\r\nHave a nice day!\r\n');

  // Process user input
  socket.on('data', (data) => {
    const command = data.toString().split(' ').shift().trim();

    if (command.startsWith('@')) {
      const restOfCommand = data.toString().split(' ').splice(1).join(' ');
      ee.emit(command, client, restOfCommand);
      return;
    }

    // What to do as the default
    ee.emit('default', client);
  });

});

// ###############
// EVENT LISTENERS
// ###############

// Send a message to all users
ee.on('@all', (client, message) => {
  clientPool.forEach(user => {
    user.socket.write(`${client.nickname}: ${message}\r\n`);
  });
});

ee.on('@nickname', (client, string) => {
  let nickname = string.split(' ').shift().trim();
  client.nickname = nickname;
  client.socket.write(`Your nickname is now ${nickname}\r\n`);
});

ee.on('@list', (client) => {
  let listOfUsers = [];
  clientPool.forEach(user => {
    listOfUsers.push(user.nickname);
  });
  client.socket.write(`The following users are currently in the OASIS: ${listOfUsers}\r\n`);

});

ee.on('@quit', (client, message) => {
  let removeId = client.id;
  clientPool = clientPool.filter(user => user.id !== removeId);
  client.socket.end(message);
});

ee.on('@dm', (client, string) => {
  let dmUser = string.split(' ').shift().trim();
  let dmMessage = string.split(' ').splice(1).join(' ');
  let user = clientPool.find(user => user.nickname === dmUser);

  if (user) {
    user.socket.write(`SENT FROM ${client.nickname}: ${dmMessage}\r\n`);
    client.socket.write(`SENT TO ${dmUser}: ${dmMessage} \r\n`);
  } else client.socket.write(`USER DOES NOT EXIST \r\n`);

});

ee.on('default', (client) => {
  client.socket.write('Please begin all commands with a @\r\n');
});


// Activate the server
server.listen(PORT, () => console.log(`The OASIS is live on PORT: ${PORT} `));