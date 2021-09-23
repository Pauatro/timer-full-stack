import React from 'react';
import './Switch.css'

interface ISwitchProps{
    name: string;
}

const Switch = (props: ISwitchProps)=>{
    return (
        <div className = "toggle-switch-container">
            <div className="toggle-switch">
                <input type="checkbox" className="toggle-switch-checkbox" name={props.name} id={props.name} />
                <label className="toggle-switch-label" htmlFor={props.name}>
                    <span className="toggle-switch-inner"/>
                    <span className="toggle-switch-switch"/>
                </label>
            </div>
        </div>
    )
}

export default Switch