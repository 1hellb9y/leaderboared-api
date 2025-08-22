const mongoose=require("mongoose");
const PlayerShema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username is required"],
        trim:true,
        unique:true,
        minLength:3,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
},{timestamps:true});

const PlayerModel=mongoose.model("Player",PlayerShema);
module.exports=PlayerModel;
