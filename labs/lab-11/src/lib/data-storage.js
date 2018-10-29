import memory from './memory.js';

import fileSystem from './filesystem.js';

let storageModule;

console.log(`\n\nPersistence Method:`, process.env.STORAGE);

(process.env.STORAGE === 'filesystem') ? storageModule = fileSystem : storageModule = memory;

export default storageModule;