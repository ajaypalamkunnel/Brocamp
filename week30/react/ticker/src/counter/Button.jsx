import React, { useContext } from 'react'
import { counterContext } from '../context/CounterContextProvider'

const Button = () => {
    const {count,setCount} = useContext(counterContext)
    
  return (
    <div>

        <button onClick={()=>setCount(count+1)}>increment</button>

    </div>
  )
}

export default Button