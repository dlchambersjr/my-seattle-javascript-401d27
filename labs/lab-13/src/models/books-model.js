import mongoose, { Schema } from 'mongoose';

// Book Schema
const bookSchema = new Schema({
  title: String,
  author: String,
  genre: String,
});

// Books Model
const Book = mongoose.model('Books', bookSchema);

export default Book;