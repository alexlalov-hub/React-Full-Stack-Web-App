const bodyParser = require('body-parser')
const cors = require('cors')
const whitelist = ['http://localhost:3000']

module.exports = (app, express) => {
    app.use(bodyParser.json({ limit: '30mb', extended: true }))
    app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
    app.use(express.static('public'))
    app.use(cors({ origin: whitelist, credentials: true }))
    app.use(express.json())

    app.use((error, req, res, next) => {
        if (res.headerSent) {
            return next(error)
        }
        res.status(error.code || 500).json({ message: error.message || 'An unknown error occured' })
    })
}