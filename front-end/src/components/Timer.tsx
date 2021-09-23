import React from 'react'
import { transformMsToTimeString } from '../utils/formatting'
import './Timer.css'
import { TimerButton } from './Button'

const Timer = ()=>{
    return (
        <div className="timer-container">
            <TimeDisplay time = {242361453}/>
            <TimerButton time = {242361453}/>
        </div>
    )
}

interface ITimerDisplayProps{
    time: number;
}

const TimeDisplay =(props: ITimerDisplayProps)=>{
    return (
        <div className = "timer-display">
            {transformMsToTimeString(props.time)}
        </div>
    )
}

export default Timer