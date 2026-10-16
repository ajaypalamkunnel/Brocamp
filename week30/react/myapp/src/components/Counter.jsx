

import React, { useContext } from 'react'
import { counterCountext } from '../context/CounterContextProvider'

const Counter = () => {

    const {count,setCount} = useContext(counterCountext)

  return (
    <div>
        <h1>counter</h1>

        <h3>{count}</h3>

        <button onClick={()=>setCount(count+1)}>increment</button>
    </div>
  )
}

export default Counter