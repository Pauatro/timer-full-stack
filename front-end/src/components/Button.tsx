import React from 'react'
import { EThemes } from '../modules/theme/theme.interfaces'
import { transformMsToTimeString } from '../utils/formatting'
import './Button.css'
import { PlayIcon } from './Icons'

interface IButtonProps{
    onClick: ()=>void;
    children?: JSX.Element;
}

const Button = (props: IButtonProps)=>{
    return <button onClick = {props.onClick}>{props.children}</button>
}

interface ITimerButtonProps{
    time: number;
    theme: EThemes;
}

const TimerButton = (props: ITimerButtonProps)=>{

    return (
        <Button onClick = {()=>{}}>
            <div className = "timer-button-content">
                <PlayIcon theme = {props.theme}/>
                <div>
                    {transformMsToTimeString(props.time)}
                </div>
            </div>
        </Button>
    )
}

export {
    Button,
    TimerButton
}