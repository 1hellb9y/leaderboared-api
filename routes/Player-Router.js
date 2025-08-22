const express=require("express");
const { createPlayer, getAllPlayers, getPlayerById } = require("../controllers/Player-Controller");
const router=express.Router();

router.post("/player",createPlayer);
router.get("/player",getAllPlayers);
router.get("/player/:id",getPlayerById);



module.exports=router;