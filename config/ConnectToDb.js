const mongoose=require("mongoose");
const ConnectToDb=async()=>{
    await mongoose.connect("mongodb://localhost:27017/LeaderBoaredApi").then(()=>{console.log("Connected")}).catch((err)=>{console.log("Error")});
    console.log("/")
};
module.exports=ConnectToDb;