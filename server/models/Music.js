const { Schema, model } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const musicSchema = new Schema({
  artist: {
    type: String,
    required: true,
  },
  preview: {
    type: String,
    required: true,
  },
  // saved book id from GoogleBooks
  musicId: {
    type: String,
    required: true,
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
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
});

const Music = model('Music', musicSchema);

module.exports = Music;
