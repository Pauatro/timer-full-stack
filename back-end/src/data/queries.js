const { TimeCount } = require('./models')

const createTimeCount = (totalTimeSeconds = 0)=>{
    return TimeCount.create({totalTimeSeconds})
}

const getAllTimeCounts = ()=>{
    return TimeCount.find({}, 'totalTimeSeconds id').lean()
}

const updateTimeCount = (_id, totalTimeSeconds)=>{
    return TimeCount.updateOne({ _id }, {totalTimeSeconds})
}

module.exports = {
    createTimeCount,
    getAllTimeCounts,
    updateTimeCount
}