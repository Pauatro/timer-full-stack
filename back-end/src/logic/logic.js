
const { NonExistenceError } = require('../commons/errors');
const { getAllTimeCounts, createTimeCount, updateTimeCount } = require('../data/queries')
require('../commons/polyfills')

const getTotalTime = () => {
    return (async () => {
        const timeCounts = await getAllTimeCounts();

        if (!timeCounts.length) {
            await createTimeCount();
            return 0;
        }

        const [{ totalTimeSeconds }] = timeCounts;

        return totalTimeSeconds;
    })()
}

const updateTotalTime = (additionalTime) => {
    Number.validate(additionalTime)

    return (async () => {
        const timeCounts = await getAllTimeCounts();

        if (!timeCounts.length) throw new NonExistenceError('there are no time counts to update')

        const [{ totalTimeSeconds, _id }] = timeCounts
        const newTotalTime = additionalTime + totalTimeSeconds;

        await updateTimeCount(_id, newTotalTime);

        const [{ totalTimeSeconds: updatedTotalTime }] = await getAllTimeCounts();

        return updatedTotalTime;
    })()
}

module.exports = {
    getTotalTime,
    updateTotalTime
}