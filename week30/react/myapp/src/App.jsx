import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import ReduxCounter from './components/ReduxCounter'
import Parent from './components/pToc/Parent'
import CustomeHook from './components/CustomeHook'
import DebouncedSearch from './components/DebouncedSearch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/* <Counter/> */}

        <ReduxCounter/>

        <Parent/>

        <CustomeHook/>

        <DebouncedSearch/>
    </>
  )
}

export default App
