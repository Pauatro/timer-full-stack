import { EThemes, EThemeVariables } from "./theme.interfaces";

export const themeColors: {
    [key in EThemes]: {[key in EThemeVariables]: string}
} = {
    [EThemes.LIGHT]:{
        [EThemeVariables.BACKGROUNDPC]: "#f7f6f2",
        [EThemeVariables.BUTTONPC]: "#373738",
        [EThemeVariables.FONTPC]: "#373738",
        [EThemeVariables.FONTSC]: "#f7f6f2",
        [EThemeVariables.ICONSPC]: "#373738",   
        [EThemeVariables.ICONSSC]: "#f7f6f2",
        [EThemeVariables.SWITCHPC]: "#f7f6f2",
        [EThemeVariables.SWITCHSC]: "#373738",
    },
    [EThemes.DARK]:{
        [EThemeVariables.BACKGROUNDPC]: "#383838",
        [EThemeVariables.BUTTONPC]: "#f5f4f0",
        [EThemeVariables.FONTPC]: "#f5f4f0",
        [EThemeVariables.FONTSC]: "#383838",
        [EThemeVariables.ICONSPC]: "#f5f4f0",
        [EThemeVariables.ICONSSC]: "#383838",
        [EThemeVariables.SWITCHPC]: "#ffffff",
        [EThemeVariables.SWITCHSC]: "#828282",
    },
}