const mongoose=require("mongoose");
const ProductSchema=mongoose.Schema({
    name:{
      type:String,
      required:true
    },
    Description:{
        type:String,
        required:true
    },

    Richdescripton:{
        type:String,
        default:''
    },
    image:{
        type:String,
        default:''

    },
    images:[{
        type:String,
    
    }],

    brand:{
        type:String,
        default:''
    },
    price:{
        type:Number,
        require:true

    },
    categaray:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"category"
    },
    countStack:{
      type:Number,
      required:true
    },
    rating:{
        type:Number,
        required:true
    },
    isFeature:{
        type:Boolean,
        required:true

    }, 
    Datecreate:{
        type:Date,
        default:Date.now

    }


})


module.exports.Prodcut=mongoose.model("prodcut",ProductSchema);