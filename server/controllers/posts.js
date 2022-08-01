const { default: mongoose } = require('mongoose');
const Post = require('../models/Post')

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find()

        res.status(200).json(posts)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const createPost = async (req, res) => {
    const post = req.body

    const newPost = new Post(post)

    try {
        await newPost.save()

        res.status(201).json(newPost)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const updatePost = async (req, res) => {
    const { id: _id } = req.params
    const post = req.body

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        res.status(404).send('No post with that id found')
    }

    try {
        const updatedPost = await Post.findByIdAndUpdate(_id, { ...post, _id }, { new: true })

        res.status(200).json(updatedPost)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}

const deletePost = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).send('No post with that id found')
    }

    try {
        const deletedPost = await Post.findByIdAndDelete(id)

        res.status(200).json(deletedPost)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

module.exports = {
    getPosts,
    createPost,
    updatePost,
    deletePost
}