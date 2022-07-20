require('dotenv').config()
const express = require('express')

const db = require('./config/config')
const { port, dbConnection } = require('./config/config')

const app = express()
const start = async () => {
    try {
        await db(dbConnection)
        require('./config/express')(app, express)

        console.log('Database connected');
    } catch (error) {
        console.error('Database connection failed\nError message:', error.message)
    }
}

start()