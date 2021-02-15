const express = require("express");
const app = express();
const mongoose = require("mongoose")
const portfinder = require('portfinder');

// finds free port. renoves need for hard-coded port
portfinder.getPort((err, port) => {
    if (err) {
     console.log(err)
    } else {
     app.listen(port, () => {
      // console.log(`server started at http://${config.dev.host}:${port}`)
      console.log(`Server is running on Port: http://localhost:${port}`)
     })
    }
   })


// connect to database via mongoose
var uri = 'mongodb+srv://adm_user:twIfreTC6Arz4Ktt@trackerdb.dtouv.mongodb.net/default?retryWrites=true&w=majority'
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

//