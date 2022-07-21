const mongoose = require('mongoose');

// create schema for student

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 16,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    maxlength: [22, 'max length upto 22'],
    minlength: [8, 'minimum  length should be  eight digit'],
    lowercase: true,
  },
  createdAt: {
    type: Date,
    default: () => {
      return Date.now();
    },
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: () => {
      return Date.now();
    },
  },
  subject: {
    type: [String],
    enum: {
      values: ['math', 'science', 'hindi', 'english'],
      message: '{VALUE} is not from the set',
    },
    validate: {
      validator: (s) => s.length > 1,
      message: (props) => 'subject list more then one',
    },
  },
});

module.exports = mongoose.model('Student', studentSchema);
