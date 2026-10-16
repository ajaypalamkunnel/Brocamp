

import React from 'react'

import { useDispatch, useSelector } from "react-redux"
import { increment } from '../features/counterReducer'

const Counter = () => {

    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()


  return (
    <div>

        <h4>{count}</h4>

        <button onClick={()=>dispatch(increment())}>increment</button>

    </div>
  )
}

export default Counter