const router = require('express').Router()

const postController = require('../controllers/posts.js')
const isAuth = require('../middlewares/auth.js')

router.get('/', postController.getPosts)
router.get('/search', postController.getPostsBySearch)
router.get('/:id', postController.getPost)
router.post('/', isAuth, postController.createPost)
router.patch('/:id', isAuth, postController.updatePost)
router.delete('/:id', isAuth, postController.deletePost);
router.patch('/:id/likePost', isAuth, postController.likePost)
router.post('/:id/commentPost', isAuth, postController.commentPost)

module.exports = router

