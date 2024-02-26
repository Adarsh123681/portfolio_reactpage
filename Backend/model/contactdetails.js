const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const contactSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message:{
    type: String
  }
});

const contact = mongoose.model("contactDetails", contactSchema);
module.exports = contact;
