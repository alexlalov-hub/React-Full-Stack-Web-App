const router = require('express').Router()

const authController = require('../controllers/auth.js')

router.post('/signin', authController.signIn)
router.post('/signUp', authController.signUp)

module.exports = router