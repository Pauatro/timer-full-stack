import * as mongoose from 'mongoose'
import { TimeCount } from './models'

export const createTimeCount = (totalTimeSeconds: number = 0)=>{
    return TimeCount.create({totalTimeSeconds})
}

export const getAllTimeCounts = (): any=>{
    return TimeCount.find({}, 'totalTimeSeconds id').lean()
}

export const updateTimeCount = (_id: mongoose.ObjectId, totalTimeSeconds: number): any=>{
    return TimeCount.updateOne({ _id }, { totalTimeSeconds })
}