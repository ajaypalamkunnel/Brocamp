import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { decrement, increment, incrementByValue } from '../features/counterSlice'

const Counter = () => {


    const count = useSelector((state)=>state.counter.value)

    const dispatch = useDispatch()


  return (
    <div>
        <h1>{count}</h1>

        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button> 
        <button onClick={()=>dispatch(incrementByValue(5))}>Increment by value</button> 
    </div>
  )
}

export default Counter