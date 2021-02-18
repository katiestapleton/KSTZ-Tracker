const mongoose = require('mongoose');
const schema = mongoose.Schema;

// schema for tickets 
const ticketSchema = new schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    projectName: {type: String, required: true},
    assignee: {type: String, required: true},
    priority: {type: String, required: true},
    status: {type: String, required: true},
    type: {type: String, required: true}
  }, {
    timestamps: true
});


const ticket = mongoose.model('User', ticketSchema);
module.exports = ticket;