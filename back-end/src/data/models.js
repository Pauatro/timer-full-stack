const { Schema, model } = require('mongoose')

const timeCount = new Schema({
    totalTimeSeconds: {
        type: number,
        required: true  
    }
})

module.exports = {
    timeCount: model('TimeCount', timeCount)
}