const { errors: { DuplicityError, NonExistenceError, CredentialsError } } = require('../../commons')
const { JsonWebTokenError } = require('jsonwebtoken')

const handleError = (error, res)=>{
    let status = 500

    switch (true) {
        case error instanceof TypeError:
            status = 400
            break
        case error instanceof DuplicityError || error instanceof NonExistenceError:
            status = 409
            break
        case error instanceof CredentialsError || error instanceof JsonWebTokenError:
            status = 401
            break
    }

    res.status(status).json({})
}

module.exports = {
    handleError
}