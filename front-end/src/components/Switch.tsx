import React, { useContext, useState } from 'react';
import { ThemeContext } from '../modules/theme/theme.context';
import './Switch.css'

interface ISwitchProps {
    name: string;
}

const Switch = (props: ISwitchProps) => {

    const { switchTheme } = useContext(ThemeContext)
    const [ checked, setChecked ] = useState(true)

    const switchChecked = ()=>{
        setChecked(!checked)
        switchTheme()
    }

    return (
        <div className="toggle-switch-container">
            <div className="toggle-switch">
                <input
                    onChange = {switchChecked}
                    type="checkbox"
                    className="toggle-switch-checkbox"
                    name={props.name}
                    id={props.name}
                    checked = {checked}
                />
                <label className="toggle-switch-label" htmlFor={props.name}>
                    <span className="toggle-switch-inner" />
                    <span className="toggle-switch-switch" />
                </label>
            </div>
        </div>
    )
}

export default Switch