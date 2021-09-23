import { EThemes } from "./theme.interfaces";

export const themeColors = {
    [EThemes.LIGHT]:{
        background: "#f7f6f2",
        buttons: "#373738",
        fontPrimary: "#373738",
        fontSecondary: "#f7f6f2",
        iconsPrimary: "#373738",
        iconsSecondary: "#f7f6f2",
        switchPrimary: "#f7f6f2",
        switchSecondary: "#373738",
    },
    [EThemes.DARK]:{
        background: "#383838",
        buttons: "#f5f4f0",
        fontPrimary: "#f5f4f0",
        fontSecondary: "#383838",
        iconsPrimary: "#f5f4f0",
        iconsSecondary: "#383838",
        switchPrimary: "#ffffff",
        switchSecondary: "#828282",
    },
}