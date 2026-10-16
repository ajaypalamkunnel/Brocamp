

import React from 'react'
import useCounter from './useCounter'

const Counter = () => {
    const {count,increment} = useCounter()
  return (
    <div>
        <h1>custom count : {count}</h1>
        <button onClick={increment}>increment</button>

    </div>
  )
}

export default Counter