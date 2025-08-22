const Score=require("../models/Score-Model");
const Player=require("../models/Player-Model");
const asyncHandler=require("../utils/asyncHandler");

exports.submitScore=asyncHandler(async(req,res)=>{
    const playerId=req.params.id;
    const {value}=req.body;
    const player=await Player.findById(playerId);
    if(typeof value!=="number" ||value<=0){
        return res.status(400).json({
            success:false,
            message:"score value must be a number greater then 0"
        })
    }
    if(!player){
        return res.status(400).json({
            success:false,
            message:"player not found",
        });
    };
    const newScore=new Score({
        playerId:player._id,
        value,
    });
    await newScore.save();
    return res.status(200).json({
        success:true,
        message:"score has been submitted",
        newScore,
    });
});
exports.getScore=asyncHandler(async(req,res)=>{
    const scores=await Score.find({});
    return res.status(200).json({
        success:true,
        scores
    })
});
