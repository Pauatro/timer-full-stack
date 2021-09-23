import React from 'react'
import { transformMsToTimeString } from '../utils/formatting'
import Button from './Button'
import './Timer.css'

const Timer = ()=>{
    return (
        <div className="timer-container">
            <TimeDisplay />
            <TimerButton/>
        </div>
    )
}

const TimerButton = ()=>{

    const time = 242361453

    return (
        <Button onClick = {()=>{}}>
            <div>{transformMsToTimeString(time)}</div>
        </Button>
    )
}

const TimeDisplay =()=>{

    const time = 242361453

    return (
        <div className = "timer-display">
            {transformMsToTimeString(time)}
        </div>
    )
}

export default Timer