const mongoose = require('mongoose');
const ProductSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    
    salePrice:{
        type:String,
        required:true
    },
    quality:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    







})
module.exports=mongoose.model("Product",ProductSchema)