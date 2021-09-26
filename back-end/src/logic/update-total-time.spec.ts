require('dotenv').config()
const { MONGODB_URL } = process.env
import { expect } from 'chai'
import mongoose = require('mongoose')
import { updateTotalTime } from './logic'
import { TimeCount } from '../data/models'
import { NonExistenceError } from '../utils/errors'

describe('server logic - retrieve total time', () => {
    before(() => mongoose.connect(MONGODB_URL))

    let initialTotalTime, additionalTime

    beforeEach(() =>
        TimeCount.deleteMany()
        .then(()=>{
            initialTotalTime = Math.random()
            additionalTime = Math.random()
            return
        })
    )

    describe('when timecount exist', () => {
        beforeEach(() =>
            TimeCount.create({ totalTimeSeconds: initialTotalTime })
        )

        it('should succeed to return the total time that has been counted', () =>
            updateTotalTime(additionalTime)
                .then(totalTimeSeconds => {
                    expect(totalTimeSeconds).to.exist
                    expect(totalTimeSeconds).to.equal(initialTotalTime + additionalTime)
                })
        )

        it('should fail when input is not a number', () =>{
            try{
                updateTotalTime('hello').then(()=>{throw new Error()})
            }catch(error){
                expect(error).to.be.an.instanceof(TypeError)
                expect(error.message).to.equal('hello is not a number')
            }
        })
    })

    describe('when timecount does not exist', () => {
        it('should return an error', () =>
        updateTotalTime(additionalTime)
            .then(() => {
                throw new Error()
            })
            .catch(error => {
                expect(error).to.be.an.instanceof(NonExistenceError)
                expect(error.message).to.equal('there are no time counts to update')
            })
        )
    })

    afterEach(() => TimeCount.deleteMany())

    after(()=>mongoose.disconnect())
})