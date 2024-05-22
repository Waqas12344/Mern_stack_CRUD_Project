const mongoose=require('mongoose');

// create Schema
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        unique:true,
        require:true,
    },
    age:{
        type:Number,
    }
},
{timestamps:true});

// create Model 
const User = mongoose.model('User',userSchema)
module.exports=User;