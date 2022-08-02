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

    try {
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            res.status(404).send('No post with that id found')
        }
        const updatedPost = await Post.findByIdAndUpdate(_id, { ...post, _id }, { new: true })

        res.status(200).json(updatedPost)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}

const deletePost = async (req, res) => {
    const { id } = req.params

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(404).send('No post with that id found')
        }

        const deletedPost = await Post.findByIdAndDelete(id)

        res.status(200).json(deletedPost)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const likePost = async (req, res) => {
    const { id } = req.params

    try {
        if (!req.userId) {
            return res.json({ message: 'You are not authenticated' })
        }

        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(404).send('No post with that id found')
        }

        const post = await Post.findById(id)

        const index = post.likes.finIndex((id) => id === String(req.userId))

        if (index === -1) {
            post.likes.push(req.userId)
        } else {
            post.likes = post.likes.filter((id) => id !== String(req.userId))
        }

        const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true })

        res.status(200).json(updatedPost)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

module.exports = {
    getPosts,
    createPost,
    updatePost,
    deletePost,
    likePost
}