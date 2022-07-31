const { default: mongoose } = require('mongoose');
const Post = require('../models/Post')

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find()

        console.log(posts);

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
    const { id: _id } = req.params.id
    const post = req.body

    if (!mongoose.Types.ObjectId.isValid) {
        res.status(404).send('No post with that id found')
    }

    const updatedPost = await Post.findByIdAndUpdate(_id, { ...post, _id }, { new: true })

    res.json(updatedPost)
}

module.exports = {
    getPosts,
    createPost,
    updatePost
}