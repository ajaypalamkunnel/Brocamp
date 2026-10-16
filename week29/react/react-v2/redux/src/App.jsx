import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import UsersList from './thunk-features/UsersList'
import { Todos } from './components/Todos'
import InputBox from './components/InputBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Counter/> */}
     {/* <UsersList/> */}


     <Todos/>
     <InputBox/>


    </>
  )
}

export default App
