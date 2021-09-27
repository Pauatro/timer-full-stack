require('dotenv').config()
const { MONGODB_URL } = process.env

import { expect } from 'chai'
import mongoose = require('mongoose')
import { getTotalTime } from './logic'
import { TimeCount } from '../data/models'

describe('server logic - retrieve total time', () => {
    before(() => mongoose.connect(MONGODB_URL))

    let initialTotalTime

    beforeEach(() =>
        TimeCount.deleteMany()
        .then(()=>
            initialTotalTime = Math.random()
        )
    )

    describe('when timecount exist', () => {
        beforeEach(() =>
            TimeCount.create({ totalTimeSeconds: initialTotalTime })
        )

        it('should succeed to return the total time that has been counted', () =>
            getTotalTime()
                .then(totalTimeSeconds => {
                    expect(totalTimeSeconds).to.exist
                    expect(totalTimeSeconds).to.equal(initialTotalTime)
                })
        )
    })

    describe('when timecount does not exist', () => {
        it('should succeed to create a new total time and return it as 0', () =>
            getTotalTime()
                .then(totalTimeSeconds => {
                    expect(totalTimeSeconds).to.exist
                    expect(totalTimeSeconds).to.equal(0)
                })
        )
    })

    afterEach(() => TimeCount.deleteMany())

    after(()=>mongoose.disconnect())
})