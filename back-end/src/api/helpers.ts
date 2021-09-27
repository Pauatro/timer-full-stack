import { NonExistenceError } from "../utils/errors"
import { Response } from 'express'
import winston = require('winston');
const expressWinston = require('express-winston');

export const handleError = (error: Error, res: Response)=>{
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

export const logger = expressWinston.logger({
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
      new winston.transports.File({ filename: 'logs/combined.log' })
    ],
    format: winston.format.json(),
    meta: true,
    msg: "HTTP {{req.method}} {{req.url}}", 
    expressFormat: true, 
    colorize: false,
    ignoreRoute: function (req, res) { return false; }
})