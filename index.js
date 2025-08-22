const express=require("express");
const ConnectToDb = require("./config/ConnectToDb");
const app=express();
require("dotenv").config();
const port=process.env.PORT;
ConnectToDb();
app.use(express.json());



app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})