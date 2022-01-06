const mongoose=require("mongoose");
const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    passwordhash:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    apartment:{
        type:String,
       default: ''
    },
    city:{
        type:String,
        default: ''
    },
    zip:{
        type:String,
        default: ''
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})


module.exports.User=mongoose.model('user',UserSchema)