import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './child'
import Parent from './Parent'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div>
      <Parent/>
     
      

    </div>
  )
}

export default App
