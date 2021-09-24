import React, { useContext } from 'react';
import './Header.css';
import { HeaderLogo, MoonIcon, SunIcon } from './Icons';
import Switch from './Switch';
import { ThemeContext } from '../modules/theme/theme.context';

const Header = () => {

    const { theme } = useContext(ThemeContext)

    return  <header className="header-container">
        <HeaderLogo theme = {theme}/>
        <div className = "theme-selection-container">
            <MoonIcon theme = {theme}/>
            <Switch name = "header-switch"/>
            <SunIcon theme = {theme}/>
        </div>
    </header>
}

export default Header