import React from 'react';
import './Icons.css';
import lightLogo from '../resources/logo-light.svg'
import darkLogo from '../resources/logo-dark.svg'
import lightMoonIcon from '../resources/moon-light.svg'
import darkMoonIcon from '../resources/moon-dark.svg'
import lightSunIcon from '../resources/sun-light.svg'
import darkSunIcon from '../resources/sun-dark.svg'
import lightPlayIcon from '../resources/play-icon-light.svg'
import darkPlayIcon from '../resources/play-icon-dark.svg'
import { EThemes } from '../modules/theme/theme.interfaces'

interface IconProps{
    class: string;
    icon: string;
    alt: string;
}

const Icon = (props: IconProps)=>{
    return (
        <img 
            className = {props.class} 
            src = {props.icon} 
            alt = {props.alt}
        />
    )
}

interface ThemedIconProps{
    theme: EThemes;
}

const HeaderLogos = {
    [EThemes.DARK]: darkLogo,
    [EThemes.LIGHT]: lightLogo
}

const HeaderLogo = (props: ThemedIconProps)=>{
    return (
        <Icon 
            class = "header-logo" 
            icon = {HeaderLogos[props.theme]??lightLogo} 
            alt = "MVST"
        />
    )
}

const SunIcons = {
    [EThemes.DARK]: darkSunIcon,
    [EThemes.LIGHT]: lightSunIcon
}

const SunIcon = (props: ThemedIconProps)=>{
    return (
        <Icon 
            class = "sun-icon" 
            icon = {SunIcons[props.theme]??lightLogo} 
            alt = "Sun"
        />
    )
}

const MoonIcons = {
    [EThemes.DARK]: darkMoonIcon,
    [EThemes.LIGHT]: lightMoonIcon
}

const MoonIcon = (props: ThemedIconProps)=>{
    return (
        <Icon 
            class = "moon-icon" 
            icon = {MoonIcons[props.theme]??lightLogo} 
            alt = "Moon"
        />
    )
}

const PlayIcons = {
    [EThemes.DARK]: darkPlayIcon,
    [EThemes.LIGHT]: lightPlayIcon
}

const PlayIcon = (props: ThemedIconProps)=>{
    return (
        <Icon 
            class = "play-icon" 
            icon = {PlayIcons[props.theme]??lightLogo} 
            alt = "Start"
        />
    )
}

export {
    HeaderLogo,
    SunIcon,
    MoonIcon,
    PlayIcon
}