const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
});

const Users = module.exports = mongoose.model('Users', usersSchema, 'Users');
