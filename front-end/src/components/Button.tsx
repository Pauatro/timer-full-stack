import React from 'react'
import './Button.css'

interface IButtonProps{
    onClick: ()=>void;
    children?: JSX.Element;
}

const Button = (props: IButtonProps)=>{
    return <button onClick = {props.onClick}>{props.children}</button>
}

export default Button