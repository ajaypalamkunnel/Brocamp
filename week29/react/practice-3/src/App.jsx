import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import User from './components/User'
import UseContextCounter from './components/UseContextCounter'
import UserComponent from '../../practice-2/src/components/UserComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Counter/> */}

     {/* <User/> */}
     <UserComponent/>

     <UseContextCounter/>
    </>
  )
}

export default App
