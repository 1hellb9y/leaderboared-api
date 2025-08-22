const express=require("express");
const { getLeaderBoared } = require("../controllers/LeaderBoard.");
const router=express.Router();

router.get("/leaderboared",getLeaderBoared);


module.exports=router;