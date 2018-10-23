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
const clientPool = [];

//Create a connection event
server.on('connection', (socket) => {
  const client = new Client(socket);
  clientPool.push(client);

  client.socket.write('Welcome to the OASIS!.  Our Virtual Reality System is receiving an upgrade. Please use the text interface at this time...  Have a nice day!');

  // Process user input
  socket.on('data', (data) => {
    const command = data.toString().split(' ').shift().trim();

    if (command.startsWith('@')) {
      const restOfCommand = data.toString().split(' ').splice(1).join(' ');
      ee.emit(command, client, restOfCommand);
      return;
    }

    // What to do as teh default
    ee.emit('default', client);
  })

});

// ###############
// EVENT LISTENERS
// ###############

// Send a message to all users
ee.on('@all', (client, message) => {
  clientPool.forEach(user => {
    user.socket.write(`${client.nickname}: ${message}`);
  });
});

ee.on('@nickname', (client, string) => {
  let nickname = string.split(' ').shift().trim();
  client.nickname = nickname;
  client.socket.write(`Your nickname is now ${nickname}\n`);
});

ee.on('@list', (client) => {
  let listOfUsers = []
  clientPool.forEach(user => {
    listOfUsers.push(user.nickname);
  });
  client.socket.write(`The following users are currently in the OASIS: ${listOfUsers}`);
});

// FIXME:
ee.on('@quit', (client, message) => {
  client.socket.end(message);
  let removeUser = client.nickname;
  clientPool.filter(nickname => nickname !== removeUser);
});



ee.on('default', (client) => {
  client.socket.write('Please begin all commands with a @\n');
});


// Activate the server
server.listen(PORT, () => console.log(`The OASIS is live on PORT: ${PORT}`));
