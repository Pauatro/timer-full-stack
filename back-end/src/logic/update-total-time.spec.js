require('dotenv').config()

const { env: { MONGODB_URL } } = process
const { updateTotalTime } = require('./logic')
const { expect } = require('chai')
const mongoose = require('mongoose')
const { TimeCount } = require('../data/models')
const { NonExistenceError } = require('../commons/errors')

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
                updateTotalTime().then(()=>{throw new Error()})
            }catch(error){
                expect(error).to.be.an.instanceof(TypeError)
                expect(error.message).to.equal('undefined is not a number')
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