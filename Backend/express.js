const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config()
const cookieParser = require("cookie-parser");
require("./mongo/db");
const userDetails = require("./model/user");
const contact = require("./model/contactdetails");

app.use(express.json());
app.use(cookieParser());
const auth = require("./middleware/jwtVerification");
// middleware
console.log("middleware");

// signUp
app.post("/signUp", async (req, res) => {
  const { username, email, password, address } = req.body;
  if (!username || !email || !password || !address) {
    return res.status(422).json({ message: "Please fill all the information" });
  }
  try {
    const userfind = await userDetails.findOne({ email: email });
    if (userfind) {
      return res.status(400).json({ message: "Email already exist" });
    }
    const hashedPassword = await bcrypt.hash(password, 12);

    const saveData = new userDetails({ 
      username,
      email,
      password: hashedPassword,
      address,
    });

    const dataSaved = await saveData.save();
    if (dataSaved) {
      return res.status(200).json({ message: "Data saved Successfully" });
    } else {
      return res.status(422).json({ message: "Data not saved" });
    }
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

// signIn
app.post("/signIn", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      return res.status(422).json({ message: "Please fill all the information" });
    }
    const userfind = await userDetails.findOne({ email: email });
    if (!userfind) {
      return res.status(401).json({ message: "Invalid Creditanls" });
    }
    const comparePassword = await bcrypt.compare(password, userfind.password);
    if (comparePassword) {
      const token = jwt.sign(
        { userId: userDetails._id },
        process.env.SECRET_KEY
      ); 
      res.cookie("token", token, { httpOnly: true });
      return res.status(200).json({ message: "successfully signed in" });
    } else {
      return res.status(422).json({ error: "Invalid Credetials" });
    }
  } catch {
    return res.status(500).json({ message: "Error" });
  }
});

// contact
app.post("/contact", async (req, res) => {
  const { username, email, message } = req.body;
  if (!username || !email || !message) {
   return res.status(422).json({ message: "Please fill all the information" });
  }
  try {
    const userfind = await userDetails.findOne({ email: email });
    if(userfind){
      return res.status(201).json({message  : "user found"})
    }
    const saveData = new contact({
      username,
      email : userfind,
      message,
    });

    const dataSaved = await saveData.save();
    if(dataSaved){
      return res.status(200).json({message : "Message are succefully sent to server"})
    }
    else{
      return res.status(400).json({message: "Message are not sended ..."})
    }
  } catch {
    return res.status(500).json({ message: "Error" });
  }
});

app.get("/", auth, (req, res) => {
  const userId = req.userId;
  console.log(userId);
  return res.send("Home page accessed ... ");
});

app.listen(PORT, () => {
  console.log(`Your server is listening on the post : ${PORT}`);
});
