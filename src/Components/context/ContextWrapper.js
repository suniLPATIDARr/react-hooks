import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import ContextFunction from './Context';

export const ThemeContext=React.createContext()
const ContextWrapper = () => {
  return (
    <ThemeProvider>
    <ContextFunction/>
    </ThemeProvider>
  )
}

export default ContextWrapper