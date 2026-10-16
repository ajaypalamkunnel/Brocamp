import React, { useContext } from 'react'
import { ThemeContextcon } from '../Context/ThemeContext'


const Home = () => {
    const theme = useContext(ThemeContextcon)
  return (
    <div>
        <h1>This page in {theme} mode</h1>
    </div>
  )
}

export default Home