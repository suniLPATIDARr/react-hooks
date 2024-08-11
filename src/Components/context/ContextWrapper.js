import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import ContextFunction from './Context';

const ContextWrapper = () => {
    console.log('contextWrapper')
  return (
    <ThemeProvider>
    <ContextFunction/>
    </ThemeProvider>
  )
}

export default ContextWrapper