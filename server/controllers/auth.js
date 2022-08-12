const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/User')

const signIn = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })

        if (!user) {
            return res.status(404).json({ message: 'User not found!' })
        }

        const isPassCorrect = await bcrypt.compare(password, user.password)

        if (!isPassCorrect) {
            return res.status(404).json({ message: 'Incorrect password!' })
        }

        const token = jwt.sign({ email: user.email, id: user._id }, 'test', { expiresIn: '2h' })

        res.status(200).json({ user, token })
    } catch (error) {
        res.status(500).json('Something went wrong')
    }
}

const signUp = async (req, res) => {
    const { email, password, confirmPassword, firstName, lastName } = req.body
    try {
        const existingUser = await User.findOne({ email })

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' })
        }

        if (!password === confirmPassword) {
            return res.status(404).json({ message: 'Passwords must match' })
        }

        const newUser = await User.create({ email: email, password: password, name: `${firstName} ${lastName}` })

        const token = jwt.sign({ email: newUser.email, id: newUser._id }, 'test', { expiresIn: '2h' })

        res.status(200).json({ newUser, token })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

module.exports = {
    signIn,
    signUp
}