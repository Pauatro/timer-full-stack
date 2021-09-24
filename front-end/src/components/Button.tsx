import React from 'react'
import { EThemes } from '../modules/theme/theme.interfaces'
import { transformSecondsToTimeString } from '../utils/formatting'
import './Button.css'
import { PlayIcon, StopIcon } from './Icons'

interface IButtonProps {
    onClick: () => void;
    children?: JSX.Element;
}

const Button = (props: IButtonProps) => {
    return <button onClick={props.onClick}>{props.children}</button>
}

interface ITimerButtonProps {
    time: number;
    theme: EThemes;
    onTimerClick: () => void;
    timerIsActive: boolean;
}

const TimerButton = (props: ITimerButtonProps) => {

    return (
        <Button onClick={props.onTimerClick}>
            <div className="timer-button-content">
                {
                    props.timerIsActive ? 
                    <StopIcon theme={props.theme} /> : 
                    <PlayIcon theme={props.theme} />
                }
                <div>
                    {transformSecondsToTimeString(props.time)}
                </div>
            </div>
        </Button>
    )
}

export {
    Button,
    TimerButton
}