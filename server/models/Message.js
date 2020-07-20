const { Schema, model } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const messageSchema = new Schema({
    senderId: {
        type: String,
        required: true,
      },
    senderName: {
        type: String,
        required: true,
      },
    senderPicture: {
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
    messageText: {
          type: String,
          required: true
        }
      
});

const Message = model('Message', messageSchema);

module.exports = Message;