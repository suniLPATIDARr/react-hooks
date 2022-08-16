import React, {useContext, useState } from 'react'

const ThemeContext = React.createContext();
const UpdateThemeContext = React.createContext();
export function useThemeContext() {
    return useContext(ThemeContext)
}
export function useUpdateThemeContext() {
    return useContext(UpdateThemeContext)
}
export function ThemeProvider({children}) {

    const [darkTheme, setDarkTheme] = useState(false);
    const onToggle=()=>{
        setDarkTheme(prevDarkTheme=>!prevDarkTheme)
    }
    return(
        <ThemeContext.Provider value={darkTheme}>
            <UpdateThemeContext.Provider value={onToggle}>
            {children}
            </UpdateThemeContext.Provider>
        </ThemeContext.Provider>
    )
}