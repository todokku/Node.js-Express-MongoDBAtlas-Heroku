const mongoose = require('mongoose')
const OrderSchema = mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    cart:{
        type:Array,
        required:true
    },
    form:{
        type:Object,
        required:true
    },
    paymentStatus:{
        type:Boolean,
        required:true
    }
})
module.exports = mongoose.model('Orders' , OrderSchema)
