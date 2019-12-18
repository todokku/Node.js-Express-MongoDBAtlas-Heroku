const express = require("express")
const router = express.Router()
const Product = require('../models/Product')

//查询数据库所有数据
router.get('/', async (req, res) => {
    try {
        const fineProducts = await Product.find()
        res.json(fineProducts)
    } catch (err) {
        res.json({ message: err })
    }
})
//添加数据
router.post('/', async (req, res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        remaining: req.body.remaining,
        src: req.body.src,
        type: req.body.type,
    })
    try {
        const saveProduct = await product.save()
        res.json(saveProduct)
    } catch (err) {
        res.json({ message: err })
    }
})
//查找对应id的数据
router.get('/:productId', async (req, res) => {
    try {
        const findProduct = await Product.findById(req.params.productId)
        res.json(findProduct)
    } catch (err) {
        res.json({ message: err })
    }
})
//删除数据
router.delete('/:productId', async (req, res) => {
    try {
        const removeProduct = await Product.remove({ _id: req.params.productId })
        res.json(removeProduct)
    } catch (err) {
        res.json({ message: err })
    }
})
//修改数据
router.patch('/:productId', async (req, res) => {
    try {
        const updateProduct = await Product.updateOne({ 
            _id: req.params.productId }, 
            { $set: { name: req.body.name,
                price: req.body.price,
                remaining: req.body.remaining,
                src: req.body.src,
                type: req.body.type, } })
        res.json(updateProduct)
    } catch (err) {
        res.json({ message: err })
    }
})

module.exports = router
