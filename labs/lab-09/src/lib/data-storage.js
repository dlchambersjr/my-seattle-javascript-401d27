const memory = require('./memory.js');
const fileSystem = require('./filesystem.js');

let storageModule;

console.log(`\n\nPersistence Method:`, process.env.STORAGE);

(process.env.STORAGE === 'filesystem') ? storageModule = fileSystem : storageModule = memory;

module.exports = storageModule;