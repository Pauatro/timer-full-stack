import { Schema, model } from 'mongoose';

const timeCount = new Schema({
    totalTimeSeconds: {
        type: Number,
        required: true  
    }
})

export const TimeCount = model('TimeCount', timeCount)
