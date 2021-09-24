import React, { useState } from "react";
import { EThemes, EThemeVariables } from "./theme.interfaces";
import { themeColors } from "./theme.config"

interface IThemeContext {
    theme: EThemes;
    switchTheme: ()=>void;
}

const ThemeContext = React.createContext<IThemeContext>({
    theme: EThemes.LIGHT,
    switchTheme: ()=>{},
});

const ThemeProvider = (props: any) => {

    const [ theme, setTheme ] = useState<EThemes>(EThemes.LIGHT)

    const switchTheme = ()=>{
        const newTheme = theme === EThemes.LIGHT?EThemes.DARK:EThemes.LIGHT
        setTheme(newTheme);

        const variables = Object.keys(themeColors[newTheme]) as EThemeVariables[]

        variables.forEach((variable: EThemeVariables)=>{
            document.documentElement.style.setProperty(`--${variable}`, themeColors[newTheme][variable])
        })
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                switchTheme
            }}
        >
            {props.children}
        </ThemeContext.Provider>
    );
};

export { ThemeProvider, ThemeContext };