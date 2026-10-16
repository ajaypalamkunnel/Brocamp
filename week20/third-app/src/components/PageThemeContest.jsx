import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContextProvider'

const PageThemeContest = () => {
    const {theme,toggleTheme} = useContext(ThemeContext)

  return (
    <div>
        <button onClick={toggleTheme}>
            current {theme} (click to change)
        </button>
    </div>
  )
}

export default PageThemeContest