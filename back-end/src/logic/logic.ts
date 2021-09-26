
import { NonExistenceError } from '../commons/errors'
import { NumberValidations } from '../commons/validations'
import { getAllTimeCounts, createTimeCount, updateTimeCount } from '../data/queries'
import '../commons/validations'

export const getTotalTime = () => {
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

export const updateTotalTime = (additionalTime) => {
    NumberValidations.validate(additionalTime)

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