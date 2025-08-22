const express=require("express");
const ConnectToDb = require("./config/ConnectToDb");
const app=express();
require("dotenv").config();
const port=process.env.PORT;
ConnectToDb();
const playerRouter=require("./routes/Player-Router");
const scoreRouter=require("./routes/Score-Router");
const leaderboardRouter=require("./routes/LeaderBoard-Router");
app.use(express.json());
app.use(playerRouter);
app.use(scoreRouter);
app.use(leaderboardRouter);



app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})