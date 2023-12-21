import  mongoose  from "mongoose";

const newUser = new mongoose.Schema({
    name:{
        type:String,
    }, 
    email:{
        type:String,
        unique:true
    }, 
    password:{
        type:String,
     
    }
})

export const User = mongoose.model('User', newUser)