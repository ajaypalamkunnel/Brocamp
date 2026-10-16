import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './features/counter/counter'
import User from './features/user/User'
import Theme from './features/theme/Theme'

function App() {
  

  return (
    <>
     
      <Counter/>
      <User/>

      <Theme/>
    </>
  )
}

export default App
