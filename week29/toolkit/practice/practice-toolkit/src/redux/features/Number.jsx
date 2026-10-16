import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './counterSilce'

const Number = () => {

    const count = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch()

  return (
    <div>

        <h1>Count : {count}</h1>

        <div style={{display:"flex", flexDirection:'column', gap:"30px"}}>
        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={()=>dispatch(decrement())}>decrement</button>

        </div>

    </div>
  )
}

export default Number