const mongoose = require('mongoose');

const NotesSchema = new Schema({
   title: {
        type: String,
        required: true
   },
   description: {
        type: String,
        required: true,
   },
   tag: {
        type: String,
        default: "General"
   },
   date: {
        type: date,
        default: date.now
   },

  });

  module.exports = mpngoose.model('notes', NotesSchema);