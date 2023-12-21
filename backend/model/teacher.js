import  mongoose  from "mongoose";

const newTeacher = new mongoose.Schema({
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

export const Teacher = mongoose.model('Teacher', newTeacher)