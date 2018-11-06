// Load mongoose to work with mongo
import mongoose, { Schema } from 'mongoose';

// Load the hashing module
import bcrypt from 'bcrypt';

// Load JSON tokensation module
import jwt from 'jsonwebtoken';

// define the user schema
const userSchema = new Schema({

  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

});

// create the pre methods
userSchema.pre('save', async function () {
  this.password = await bcrypt.hash(this.password, 11); //TODO:
});

// Create a JSON Token from the user id and a password
userSchema.methods.generateToken = function () {
  return jwt.sign({ username: this.username }, this.password);//TODO:
};

// Compare a plain text password against the hashed one on file
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password)
    .then(valid => valid ? this : null);
};

// Validate the a token if that was sent
userSchema.statics.authenticate = function (auth) {
  let query = auth.token;
  return this.findOne(query)
    .then(user => user && user.comparePassword(auth.password))
    .catch(error => error);
};

export default mongoose.model('Users', userSchema);