const { Schema, model } = require('mongoose');

const bcrypt = require('bcrypt')

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            match: [/^[A-Za-z0-9_\.]+@[A-Za-z]+\.[A-Za-z]{2,3}$/, 'Email is not valid!'],
        },
        password: {
            type: String,
            required: true
        }
    }
);

userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 12)
        .then(hashedPassword => {
            this.password = hashedPassword

            next()
        })
})

const User = model('User', userSchema);
module.exports = User