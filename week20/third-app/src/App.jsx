import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Registration from './components/Registration'
import { ThemeContextProvider } from './components/ThemeContextProvider'
import PageThemeContest from './components/PageThemeContest'
import DemoUseReducer from './components/DemoUseReducer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      

      <ThemeContextProvider>
      <Registration/>
      <PageThemeContest/>
      <DemoUseReducer/>

      </ThemeContextProvider>
    </>
  )
}

export default App
