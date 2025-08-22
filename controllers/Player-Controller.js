const Player=require("../models/Player-Model");
const asyncHandler = require("../utils/asyncHandler");


exports.createPlayer=asyncHandler(async(req,res)=>{
    const {username}=req.body;
    if(!username){
        return res.status(400).json({
            success:false,
            message:"username field is missing",
        })
    };
    const newPlayer=new Player({
        username
    })
    await newPlayer.save();
    return res.status(200).json({
        success:true,
        message:"Player submitted"
    })
})
exports.getAllPlayers=asyncHandler(async(req,res)=>{
    const players=await Player.find({});
    return res.status(200).json({
        success:true,
        players
    });
});
exports.getPlayerById=asyncHandler(async(req,res)=>{
    const playerId=req.params.id;
    const player=await Player.findById(playerId);
    if(player){
        return res.status(400).json({
            success:true,
            player
        })
    }
})