const express = require("express")
const router = express.Router()
const Post = require('../models/Post')

//查询数据库所有数据
router.get('/', async (req, res) => {
    try {
        const finePosts = await Post.find()
        res.json(finePosts)
    } catch (err) {
        res.json({ message: err })
    }
})
//添加数据
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        connect: req.body.connect
    })
    try {
        const savePost = await post.save()
        res.json(savePost)
    } catch (err) {
        res.json({ message: err })
    }
})
//查找对应id的数据
router.get('/:postId', async (req, res) => {
    try {
        const findPost = await Post.findById(req.params.postId)
        res.json(findPost)
    } catch (err) {
        res.json({ message: err })
    }
})
//删除数据
router.delete('/:postId', async (req, res) => {
    try {
        const removePost = await Post.remove({ _id: req.params.postId })
        res.json(removePost)
    } catch (err) {
        res.json({ message: err })
    }
})
//修改数据
router.patch('/:postId', async (req, res) => {
    try {
        const updatePost = await Post.updateOne({ _id: req.params.postId }, { $set: { title: req.body.title } })
        res.json(updatePost)
    } catch (err) {
        res.json({ message: err })
    }
})

module.exports = router
