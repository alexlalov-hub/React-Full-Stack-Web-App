const router = require('express').Router()

const gameController = require('./controllers/gameController')

router.use('/games', gameController)

module.exports = router