const memory = require('./memory.js');
const fileSystem = require('./filesystem.js');

let storageModule = memory;

// (process.env.STORAGE === 'filesystem') ? storageModule = fileSystem : storageModule = memory;

module.exports = storageModule;