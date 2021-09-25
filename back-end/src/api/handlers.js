const { getTotalTime, updateTotalTime } = require('../logic/logic')
const { handleError } = require('./helpers')

const handleGetTotalTime = (req, res) => {
    try {        
        getTotalTime()
            .then(totalTime => res.status(200).send({ totalTime }))
            .catch(error => handleError(error, res))
    } catch (error) {
        handleError(error, res)
    }
}

const handlePutTotalTime = (req, res) => {

    const { body: { timeSeconds } } = req

    try {
        updateTotalTime(timeSeconds)
            .then(totalTime => res.status(200).send({ totalTime }))
            .catch(error => handleError(error, res))
    } catch (error) {
        handleError(error, res)
    }
}

module.exports = {
    handleGetTotalTime,
    handlePutTotalTime
}
