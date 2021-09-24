import React, { useContext } from 'react'
import { transformSecondsToTimeString } from '../utils/formatting'
import './Timer.css'
import { TimerButton } from './Button'
import { ThemeContext } from '../modules/theme/theme.context'
import { TimerContext } from '../modules/timer/timer.context'

const Timer = ()=>{

    const { theme } = useContext(ThemeContext)
    const { 
        partialTime, 
        totalTime, 
        timerIsActive,
        toggleTimerIsActive
    } = useContext(TimerContext)

    return (
        <div className="timer-container">
            <TimeDisplay time = {totalTime}/>
            <TimerButton 
                theme = {theme} 
                time = {partialTime}
                onTimerClick = {toggleTimerIsActive}
                timerIsActive = {timerIsActive}
            />
        </div>
    )
}

interface ITimerDisplayProps{
    time: number;
}

const TimeDisplay =(props: ITimerDisplayProps)=>{
    return (
        <div className = "timer-display">
            {transformSecondsToTimeString(props.time)}
        </div>
    )
}

export default Timer