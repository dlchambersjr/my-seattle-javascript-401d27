import mongoose, { Schema } from 'mongoose';

// Book Schema
const bookSchema = new Schema({
  title: String,
  genre: String,
  author: { type: Schema.Types.ObjectId, ref: 'Author' },
});


//Custom Schema methods
bookSchema.allInfo('findOne', function (next) {
  this.populate('author');
  next();
});


// Books Model
const Book = mongoose.model('Books', bookSchema);

export default Book;