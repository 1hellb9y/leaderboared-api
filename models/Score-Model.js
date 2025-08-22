const mongoose=require("mongoose");
const ScoreShema=new mongoose.Schema({
    playerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Player",
    },
    value:{
        type:Number,
        min:0,
        default:0,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
},{timestamps:true});
const ScoreModel=mongoose.model("Score",ScoreShema);
module.exports=ScoreModel;