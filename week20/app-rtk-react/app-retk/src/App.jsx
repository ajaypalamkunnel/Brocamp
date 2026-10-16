import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CakeShop from './components/CakeShop'
import IceCreamShop from './components/IceCreamShop'
import PizzaShop from './components/PizzaShop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CakeShop/>

      <IceCreamShop/>

      <PizzaShop/>
    </div>
  )
}

export default App
