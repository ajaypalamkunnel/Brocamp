import React, { createContext } from 'react'

export const ThemeContextcon = createContext();
const ThemeContext = ({children}) => {
    
    const theme = 'dark'

  return (
    <div>
        <ThemeContextcon.Provider value={theme}>
            {children}
        </ThemeContextcon.Provider>

    </div>
  )
}

export default ThemeContext