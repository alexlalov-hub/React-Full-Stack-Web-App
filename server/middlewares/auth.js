const jwt = require('jsonwebtoken')

const isAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        isCustomAuth = token.length < 500

        let decodedToken;

        if (token && isCustomAuth) {
            decodedToken = jwt.verify(token, 'test')

            req.userId = decodedToken?.id
        } else {
            jwt.decode(token)

            req.userId = decodedToken?.sub
        }

        next()
    } catch (error) {
        console.log(error);
    }
}

module.exports = isAuth