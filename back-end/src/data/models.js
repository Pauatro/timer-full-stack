const { Schema, model } = require('mongoose')

const timeCount = new Schema({
    totalTimeSeconds: {
        type: Number,
        required: true  
    }
})

module.exports = {
    TimeCount: model('TimeCount', timeCount)
}