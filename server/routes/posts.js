const router = require('express').Router()

const postController = require('../controllers/posts.js')

router.get('/', postController.getPosts)
router.post('/', postController.createPost)

module.exports = router

