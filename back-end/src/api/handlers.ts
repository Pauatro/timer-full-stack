import { getTotalTime, updateTotalTime } from '../logic/logic'
import { handleError } from './helpers'
import { Request, Response } from 'express';

export const handleGetTotalTime = (req: Request, res: Response) => {
    try {        
        getTotalTime()
            .then(totalTime => res.status(200).send({ totalTime }))
            .catch(error => handleError(error, res))
    } catch (error) {
        handleError(error, res)
    }
}

export const handlePutTotalTime = (req: Request, res: Response) => {

    const { body: { timeSeconds } } = req

    try {
        updateTotalTime(timeSeconds)
            .then(totalTime => res.status(200).send({ totalTime }))
            .catch(error => handleError(error, res))
    } catch (error) {
        handleError(error, res)
    }
}