import { createContext,useContext } from "react";

export const ThemeContext =createContext({
    thememode:'light',
    darkTheme:()=>{},
    lightTheme:()=>{}
})