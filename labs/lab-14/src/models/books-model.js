import mongoose, { Schema } from 'mongoose';

// Book Schema
const bookSchema = new Schema({

  author: { type: Schema.Types.ObjectId, ref: 'Author' },
  title: String,
  genre: String,
});


//Schema methods


// Books Model
const Book = mongoose.model('Books', bookSchema);

export default Book;