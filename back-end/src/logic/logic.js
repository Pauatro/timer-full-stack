
const { getAllTimeCounts } = require('../data/queries')

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
    return (async () => {
        const [{ totalTimeSeconds, id }] = await getAllTimeCounts();

        const newTotalTime = additionalTime + totalTimeSeconds;

        updateTimeCount(id, newTotalTime);

        return totalTimeSeconds;
    })()
}

module.exports = {
    getTotalTime,
    updateTotalTime
}