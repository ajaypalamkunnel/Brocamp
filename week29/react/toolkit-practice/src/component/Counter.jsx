

import React, { useContext } from 'react'
import { counterCounter } from '../context/CounterContexProvider'

const Counter = () => {
    const {count,increment,decrement,reset} = useContext(counterCounter)
   return (
    <div>

        <h4>{count}</h4>

        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>🔄️</button>


    </div>
  )
}

export default Counter