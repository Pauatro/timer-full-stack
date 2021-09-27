import React, { useContext } from 'react'
import { transformSecondsToTimeString } from '../utils/formatting'
import './Timer.css'
import { TimerButton } from './Button'
import { ThemeContext } from '../modules/theme/theme.context'
import { TimerContext } from '../modules/timer/timer.context'

export const Timer = ()=>{

    const { theme } = useContext(ThemeContext)
    const { 
        partialTime, 
        totalTime, 
        timerIsActive,
        toggleTimerIsActive,
        loading
    } = useContext(TimerContext)

    return (
        <div className="timer-container">
            <TimerDisplay time = {totalTime}/>
            <TimerButton 
                theme = {theme} 
                time = {partialTime}
                onTimerClick = {loading?()=>{}:toggleTimerIsActive}
                timerIsActive = {timerIsActive}
            />
        </div>
    )
}

interface ITimerDisplayProps{
    time: number;
}

export const TimerDisplay =(props: ITimerDisplayProps)=>{
    return (
        <div className = "timer-display">
            {transformSecondsToTimeString(props.time)}
        </div>
    )
}