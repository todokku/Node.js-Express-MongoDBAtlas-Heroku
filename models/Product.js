const mongoose = require('mongoose')
const ProductSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    remaining:{
        type:Number,
        required:true
    },
    src:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        dafault: Date.now
    }
})
module.exports = mongoose.model('Products' , ProductSchema)
