import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './components/Main'
import Parent from './components/ChildToParent/Parent'
import ReduxCounter from './reduxComponent/ReduxCounter'
import UserComponent from './components/UserComponent'
import Display from './components/ChildToParent/Display'
import Data from './components/Data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Main/>

    <Parent/>

    <ReduxCounter/>

    <UserComponent/>

    <Display/>

    <Data/>



    </>
  )
}

export default App
