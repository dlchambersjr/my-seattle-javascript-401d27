import mongoose from 'mongoose';
import MongoMemoryServer from 'mongodb-memory-server';
import supertest from 'supertest';

let mongoServer;

export default (server) => supertest(server);

export const startDB = async () => {
  mongoServer = new MongoMemoryServer();
  const mongoUri = await mongoServer.getConnectionString();
  await mongoose.connect(mongoUri, (err) => {
    if (err) console.error(err);
  });
};

export const stopDB = () => {
  mongoose.disconnect();
  mongoServer.stop();
};