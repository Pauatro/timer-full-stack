export const transformSecondsToTimeString = (totalSeconds: number)=>{

    const hours = Math.trunc(totalSeconds/3600)
    const minutes = Math.trunc((totalSeconds%3600)/60)
    const seconds = (totalSeconds%3600)%60
    const hourString = hours.toString()
    const minutesString = numberToMinTwoDigitsString(minutes)
    const secondsString = numberToMinTwoDigitsString(seconds)

    return `${hourString}:${minutesString}:${secondsString}`
}

const numberToMinTwoDigitsString = (number: number)=>{
    if (number >= 10) return number.toString()
    return '0' + number.toString()
}