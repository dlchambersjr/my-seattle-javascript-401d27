<<<<<<< HEAD
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

=======
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

>>>>>>> 97c1bd37dcee754be11be3ee6d9e731be157c1a8
export default Book;