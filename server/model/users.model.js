const mongoose = require('mongoose');
const schema = mongoose.Schema;

// schema for users
const userSchema = new schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    role: {type: String, required: true}
  }, {
    timestamps: true
});

const user = mongoose.model('User', ticketSchema);
module.exports = user;