require('dotenv').config()
const express = require('express')

const db = require('./config/database')
const { port, dbConnection } = require('./config/config')
const routes = require('./routes')

const app = express()

app.use(routes)

const start = async () => {
    try {
        await db(dbConnection)
        require('./config/express')(app, express)

        console.log('Database connected');
        app.listen(port, () => console.log(`App is listening on port ${port}`))
    } catch (error) {
        console.error('Database connection failed\nError message:', error.message)
    }
}

start()
