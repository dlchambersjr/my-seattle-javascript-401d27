import mongoose, { Schema } from 'mongoose';

//Author Schema
const authorSchema = new Schema({
  _id: Schema.Types.ObjectsId,
  name: String,
});


//Schema methods



// Author Model

const Author = mongoose.model('Authors', authorSchema);

export default Author;