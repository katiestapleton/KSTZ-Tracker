const express = require("express");
const mongoose = require("mongoose")
const portfinder = require('portfinder');
require('dotenv').config()

const app = express();


// finds free port. removes need for hard-coded port
portfinder.getPort((err, port) => {
  if (err) {
    console.log(err)
  } else {
    app.listen(port, () => {
    // console.log(`Server is running on port: http://${config.dev.host}:${port}`)
    console.log(`Server is running on port: http://localhost:${port}!`)
    })
  }
});


// connect to database via mongoose
// .env file required to access mongo DB
var mongoUri = process.env.DB_CONNECT_DEFAULT;
mongoose.connect(mongoUri, { 
  useUnifiedTopology: true, 
  useNewUrlParser: true })
  .then(() => 
    console.log('MongoDB database connection established successfully!'))
  .catch(err => {
    console.log(Error, err.message);
});

