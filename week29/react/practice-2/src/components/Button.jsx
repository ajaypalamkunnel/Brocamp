
import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContexProvider'

 const Button = () => {

    const {setCount} = useContext(CounterContext)

  return <button onClick={()=>setCount((prev)=>prev+1)}>increment</button>

}

export default Button