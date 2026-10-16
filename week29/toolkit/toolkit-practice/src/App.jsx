import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './features/counter/Counter'
import TodoDisplay from './features/todo/TodoDisplay'
import TodoInput from './features/todo/TodoInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Counter/> */}
      <div style={{padding:"2-px"}}>

        <h1>My Todos</h1>

        <TodoInput/>
        <TodoDisplay/>

      </div>
    </>
  )
}

export default App
