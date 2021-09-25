const { NonExistenceError } = require("../commons/errors")

const handleError = (error, res)=>{
    let status = 500

    switch (true) {
        case error instanceof TypeError:
            status = 400
            break
        case error instanceof NonExistenceError:
            status = 409
            break
    }

    res.status(status).json({})
}

module.exports = {
    handleError
}