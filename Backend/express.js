const express = require("express");
const app = express();
const PORT = process.env.port ||5000;
const bcrypt = require("bcryptjs");
require("./mongo/db");
const userDetails = require("./model/user");
app.use(express.json());
// sign up code :

app.post("/signUp", async (req, res) => {
  const { username, email, password, gender, address } = req.body;
  if (!username || !email || !password || !gender || !address) {
    return res.status(422).json({ message: "Please fill all the information" });
  }
  try {
    const userfind = await userDetails.findOne({ email: email });
    if (userfind) {
      return res.status(422).json({ message: "Email already exist" });
    }
    const hashedPassword = await bcrypt.hash(password, 12);

    const saveData = new userDetails({
      username,
      email,
      password: hashedPassword,
      gender,
      address,
    });

    const dataSaved = await saveData.save(); 
    if (dataSaved) {
      res.status(200).json({ message: "Data saved Successfully" });
    } else {
      return res.status(422).json({ message: "Data not saved" });
    }
  } catch {
    return res.status(500).json({ message: "Error" });
  }
});

// sign in code :

app.post("/signIn", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      return res
        .status(422)
        .json({ message: "Please fill all the information" });
    }
    const userfind = await userDetails.findOne({ email: email });
    if (!userfind) {
      return res.status(422).json({ message: "Invalid Creditanls" });
    }
    const comparePassword = await bcrypt.compare(password, userfind.password);
    if (comparePassword) {
      return res.send({ message: "successfully signed in" });
    } else {
      return res.status(422).json({ error: "Invalid Credetials" });
    }
  } catch {
    return res.status(500).json({ message: "Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Your server is listening on the post : ${PORT}`);
});
