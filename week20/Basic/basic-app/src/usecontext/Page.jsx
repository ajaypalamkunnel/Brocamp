import React, { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'

const Page = () => {


    const {theme,toogleTheme} = useContext(ThemeContext)
    console.log(theme);
    
    
  return (
    <div>
        <h1>This page theme : {theme}</h1>
        <button onClick={toogleTheme}>Toggle Theme</button>
    </div>
  )
}

export default Page