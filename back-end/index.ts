require('dotenv').config()
import express = require('express')
import mongoose = require('mongoose')
const { MONGODB_URL, PORT_CLI } = process.env
const PORT = PORT_CLI 
const { name, version } = require('./package.json')
import { api } from './src/api/routes'
import { cors } from './src/api/middlewares'
import { logger } from './src/api/helpers'

console.debug('starting server')

try {
    console.debug('connecting to database')
    mongoose.connect(MONGODB_URL)
        .then(() => {
            console.info(`connected to database ${MONGODB_URL}`)

            const app = express()

            app.use(cors)
            app.use(logger);
            
            app.use('/api', api)


            // other

            app.get('*', (req: express.Request, res: express.Response) => {
                res.status(404).send('This is not the endpoint you\'re looking for')
            })

            app.listen(PORT, () => console.info(`server ${name} ${version} running on port ${PORT}`))

            let interrupted = false

            process.on('SIGINT', () => {
                if (!interrupted) {
                    interrupted = true

                    console.debug('stopping server')

                    console.debug('disconnecting database')

                    mongoose.disconnect()
                        .then(() => console.info('disconnected database'))
                        .catch(error => console.error('could not disconnect from mongo', error))
                        .finally(() => {
                            console.info(`server ${name} ${version} stopped`)
                            return process.exit()
                        })
                }
            })
        })
        .catch((error: Error) => {
            console.error('could not connect to mongo', error)
        })
} catch (error) {
    console.error(error)
}