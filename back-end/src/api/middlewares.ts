import * as express from 'express'

export const parseBody = express.json()

export const cors = (req: express.Request, res: express.Response, next: ()=>{}) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    res.setHeader('Access-Control-Allow-Methods', '*')

    next()
}