const mongoose = require("mongoose"); 
const connection = mongoose.connect(process.env.URL);
mongoose.set('strictQuery', false);
connection
  ? console.log("Connected succesfully..")
  : console.log("not connected");
  