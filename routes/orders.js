const express = require("express")
const router = express.Router()
const Order = require('../models/Order')

//查询数据库所有数据
router.get('/', async (req, res) => {
    try {
        const fineOrders = await Order.find()
        res.json(fineOrders)
    } catch (err) {
        res.json({ message: err })
    }
})
//添加数据
router.post('/', async (req, res) => {
    const order = new Order({
        id:req.body.id,
        date:req.body.date,
        cart: req.body.cart,
        form: req.body.form,
        totalPrice:req.body.totalPrice,
        discountPrice:req.body.discountPrice,
        paymentStatus:req.body.paymentStatus,
    })
    try {
        const saveOrder = await order.save()
        res.json(saveOrder)
    } catch (err) {
        res.json({ message: err })
    }
})
//查找对应id的数据
router.get('/:orderId', async (req, res) => {
    try {
        const findOrder = await Order.findById(req.params.orderId)
        res.json(findOrder)
    } catch (err) {
        res.json({ message: err })
    }
})
//删除数据
router.delete('/:orderId', async (req, res) => {
    try {
        const removeOrder = await Order.remove({ _id: req.params.orderId })
        res.json(removeOrder)
    } catch (err) {
        res.json({ message: err })
    }
})
//修改数据
router.patch('/:orderId', async (req, res) => {
    try {
        const updateOrder = await Order.updateOne({ _id: req.params.orderId }, 
            { $set: { 
                cart: req.body.cart,
                form: req.body.form,
                paymentStatus:req.body.paymentStatus, } })
        res.json(updateOrder)
    } catch (err) {
        res.json({ message: err })
    }
})

module.exports = router
