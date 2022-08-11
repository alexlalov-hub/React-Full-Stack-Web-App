const { default: mongoose } = require('mongoose');
const Post = require('../models/Post')

const getPosts = async (req, res) => {
    const { page } = req.query

    try {
        const limit = 4
        const startIndex = (Number(page) - 1) * limit
        const totalCountPosts = await Post.countDocuments({})

        const posts = await Post.find()
            .sort({ _id: -1 })
            .limit(limit)
            .skip(startIndex)

        res.status(200).json({ posts, currentPage: Number(page), numberOfPages: Math.ceil(totalCountPosts / limit) })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const getPost = async (req, res) => {
    const { id } = req.params

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ message: 'No post with that id found' })
        }

        const post = await Post.findById(id)

        res.status(200).json(post)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const getPostsBySearch = async (req, res) => {
    const { searchQuery } = req.query

    try {
        const title = new RegExp(searchQuery, 'i')

        const foundPosts = await Post.find({ title })

        res.status(200).json({ data: foundPosts })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const createPost = async (req, res) => {
    const post = req.body

    const newPost = new Post({ ...post, creator: req.userId, createdAt: new Date().toISOString() })

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
            return res.status(404).json({ message: 'No post with that id found' })
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
            return res.status(404).json({ message: 'No post with that id found' })
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
            return res.status(404).json({ message: 'No post with that id found' })
        }

        const post = await Post.findById(id)

        const index = post.likes.findIndex((id) => id === String(req.userId))

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

const commentPost = async (req, res) => {
    const { id } = req.params
    const { comment } = req.body

    try {
        const post = await Post.findById(id)

        post.comments.push(comment)

        const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true })

        res.status(200).json(updatedPost)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getPosts,
    getPostsBySearch,
    createPost,
    updatePost,
    deletePost,
    likePost,
    getPost,
    commentPost
}