
import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../context/CounterContextProvider'

const Button = () => {

    const {count,setCount} = useContext(counterContext)

  return (
    <button onClick={()=>setCount(count+1)}>Increment</button>
  )
}

export default Button