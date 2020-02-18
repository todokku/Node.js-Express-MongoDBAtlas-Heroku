const mongoose = require('mongoose')
const CouponSchema = mongoose.Schema({
 title:{
    type:String,
    required:true
 },
 code:{
    type:String,
    required:true
 },
 due_date:{
    type:String,
    required:true
 },
 percent:{
    type:Number,
    required:true
 },
 is_enabled:{
    type:Boolean,
    required:true
 }
})
module.exports = mongoose.model('Coupons',CouponSchema)