const mongoose = require("mongoose"); 
mongoose.set('strictQuery', false)
const connection = mongoose.connect(process.env.URL);  
connection
  ? console.log("Connected succesfully..")
  : console.log("not connected");
  