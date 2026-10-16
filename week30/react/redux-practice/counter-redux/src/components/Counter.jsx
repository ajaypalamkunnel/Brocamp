import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../features/counterReducer'

const Counter = () => {

    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()
   

  return (
    <div style={{border:"3px red solid", padding:"7px"}}>
        <h4>Redux counter</h4>
        <h3>{count}</h3>
        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={()=>dispatch(decrement())}>decrement</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter