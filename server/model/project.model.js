const mongoose = require('mongoose');
const { stringify } = require('qs');
const schema = mongoose.Schema;

// schema for projects 
const projectSchema = new schema({
    name: {type: String, required: true},
  }, {
    timestamps: true
});

const Project = mongoose.model('Project', ticketSchema);

module.exports = Project;