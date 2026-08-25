import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    username:{
        type:String,
        unique:[    true, "username already exists"],
        required:true
    },
    email:{
        type:String,
        unique:[true, "Email already exists"],
        required:true
    },
    password:{
        type:String,
        required:true
    }
},
{
    timestamps:true
}
);

const User=mongoose.model("users",userSchema);

export default User;