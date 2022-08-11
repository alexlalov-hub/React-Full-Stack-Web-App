const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title required!'],
        minLength: [3, 'The title must be at least 3 characters long'],
        maxLength: [20, 'The title must not be longer than 20 characters']
    },
    message: {
        type: String,
        required: [true, 'Message required!']
    },
    name: {
        type: String,
        required: [true, 'Name is required!']
    },
    creator: {
        type: String,
        required: [true, 'Creator required!']
    },
    tags: [{
        type: String,
        required: [true, 'Tags are required!']
    }],
    selectedFile: {
        type: String,
        required: [true, 'Image required!']
    },
    likes: [{
        type: String,
    }],
    comments: [{
        type: String,
    }],
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Post = mongoose.model('PostMessage', postSchema)

module.exports = Post