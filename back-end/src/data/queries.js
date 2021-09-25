const { TimeCount } = require('./models')

const createTimeCount = (totalTimeSeconds = 0)=>{
    return TimeCount.create({totalTimeSeconds})
}

const getAllTimeCounts = ()=>{
    return TimeCount.find({}, 'totalTimeSeconds id').lean()
}

const updateTimeCount = (id, totalTimeSeconds)=>{
    return TimeCount.updateOne({ _id: id }, {totalTimeSeconds})
}

modules.exports = {
    createTimeCount,
    getAllTimeCounts,
    updateTimeCount
}