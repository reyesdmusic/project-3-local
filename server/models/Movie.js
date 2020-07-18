const { Schema, model } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const movieSchema = new Schema({
  mediaId: {
    type: String,
    required: true,
  },
  mediaType: {
    type: String,
    default: 'Movie'
  },
  timeStamp: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: String,
  },
  likes: {
    type: Number,
    required: true,
    default: 0
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ],
  actors: {
    type: String,
    required: false
  },
  director: {
    type: String,
    required: false
  },
  genre: {
    type: String,
    required: false
  },
  plot: {
    type: String,
    required: false,
  },
  rated: {
    type: String,
    required: false
  },
  released: {
    type: String,
    required: false
  },
  runtime: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false,
  },
  userReview: {
    type: String,
    required: false,
    default: ''
  },
  userRating: {
    type: Number,
    required: false,
    default: 0
  }
});

const Movie = model('Movie', movieSchema);

module.exports = Movie;
