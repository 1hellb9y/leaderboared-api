const Score=require("../models/Score-Model");
const asyncHandler=require("../utils/asyncHandler");

exports.getLeaderBoared=asyncHandler(async(req,res)=>{
    const limit=parseInt(req.query.limit) || 10;
    const leaderboard = await Score.aggregate([
        {
            $group: {
                _id: "$playerId",           // group by player
                maxScore: { $max: "$value" } // get max score per player
            }
        },
        { $sort: { maxScore: -1 } },      // sort descending
        { $limit: limit },                 // top N players
        {
            $lookup: {
                from: "players",           // join with Player collection
                localField: "_id",
                foreignField: "_id",
                as: "player"
            }
        },
        { $unwind: "$player" },            // flatten the player array
        {
            $project: {
                _id: 0,
                username: "$player.username",
                score: "$maxScore"
            }
        }
    ]);
    const result=leaderboard.map((item,index)=>({
        rank:index+1,
        username:item.username,
        score:item.score,    
    }));
    return res.status(200).json({
        success:true,
        leaderboard:result,
    });

})