const express = require("express");
const app = express();
const mongoose = require("mongoose")
//temporary: hard port will be changed to static
const port=3005;

app.listen(port, function() {
    console.log("Server is running on Port: " + port);
  });

// connect to database via mongoose
var uri = 'mongodb+srv://adm_user:twIfreTC6Arz4Ktt@trackerdb.dtouv.mongodb.net/default?retryWrites=true&w=majority'
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

//