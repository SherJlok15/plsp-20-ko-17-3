const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  users: { type: Array, required: true}
},{
  timestamps: true,
});

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;
