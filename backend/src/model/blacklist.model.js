import mongoose from "mongoose";

const blacklistTokenSchema=mongoose.Schema({
    token:{
        type:String,
        required:[true, "token is required"]
    }
},
{
    timestamps:true
}
);

const Blacklist=mongoose.model("blacklistToken",blacklistTokenSchema);

export default Blacklist;