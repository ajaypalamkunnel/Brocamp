import React, { useContext } from 'react'
import { counterContext } from '../context/CounterContextProvider'

const Counter = () => {

    const {count,setCount} = useContext(counterContext)

  return (
    <div style={{border:"solid blue 3px"}}>

        <h1>{count}</h1>

       

    </div>
  )
}

export default Counter