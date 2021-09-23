import React from 'react';
import './Header.css';
import { EThemes } from '../modules/theme/theme.interfaces';
import { HeaderLogo, MoonIcon, SunIcon } from './Icons';
import Switch from './Switch';

const Header = () => {
    return  <header className="header-container">
        <HeaderLogo theme = {EThemes.LIGHT}/>
        <div className = "theme-selection-container">
            <MoonIcon theme = {EThemes.LIGHT}/>
            <Switch name = "header-switch"/>
            <SunIcon theme = {EThemes.LIGHT}/>
        </div>
    </header>
}

export default Header