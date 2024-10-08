import React from 'react';
import { useThemeContext, useUpdateThemeContext } from './ThemeProvider';
const Context = () => {
    const darkTheme = useThemeContext()
    const onToggle =  useUpdateThemeContext('jsdb')
    const themeStyles={
        background:darkTheme?'black':'lightBlue',
        color:darkTheme?'lightBlue':'black',
        padding:'6rem',
        width:300,
        marginTop:20,
        margin:'auto'
    }
    console.log('context')
  return (
    <>
    <div style={themeStyles}>Context</div>
    <button onClick={onToggle}>Submit</button>
    </>
  )
}

export default Context