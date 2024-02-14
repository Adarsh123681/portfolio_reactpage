const mongoose = require("mongoose");
const DB = "mongodb://localhost:27017/portfolio"

mongoose.connect(DB).then(()=>{
    console.log("connection successfull....")
}).catch((err)=>{
     console.log(err);
})
