

import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/CounterContextProvider'

const UseContextCounter = () => {
    const {count,setCount} = useContext(CounterContext)
  return (
    <div>
        <h1>Use context API</h1>
        {count}

        <button onClick={()=>setCount(count+1)}>increment</button>

    </div>
  )
}

export default UseContextCounter