const mongoose = require("mongoose"); 
const connection = mongoose.connect(process.env.URL);
connection
  ? console.log("Connected succesfully..")
  : console.log("not connected");
  