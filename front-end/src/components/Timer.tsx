import React, { useContext } from 'react'
import { transformMsToTimeString } from '../utils/formatting'
import './Timer.css'
import { TimerButton } from './Button'
import { ThemeContext } from '../modules/theme/theme.context'

const Timer = ()=>{

    const { theme } = useContext(ThemeContext)

    return (
        <div className="timer-container">
            <TimeDisplay time = {242361453}/>
            <TimerButton 
                theme = {theme} 
                time = {242361453}
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
            {transformMsToTimeString(props.time)}
        </div>
    )
}

export default Timer