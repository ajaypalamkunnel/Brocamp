import React, { useState } from 'react'
import useCounter from '../customHooks/useCounter'

const SimpleCounter = () => {

    const {count,increment,decrement,reset} = useCounter()

  return (
    <div>

        <h3>{count}</h3>

        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>

        
    </div>
  )
}

export default SimpleCounter