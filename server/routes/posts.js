const router = require('express').Router()

const postController = require('../controllers/posts.js')
const isAuth = require('../middlewares/auth.js')

router.get('/', postController.getPosts)
router.post('/', isAuth, postController.createPost)
router.patch('/:id', isAuth, postController.updatePost)
router.delete('/:id', isAuth, postController.deletePost);
router.patch('/:id/likePost', isAuth, postController.likePost)

module.exports = router

