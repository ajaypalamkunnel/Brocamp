import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../../../redux/src/features/counterSlice'

const Counter = () => {

    const count = useSelector((state)=>state.count.value)

    const dispatch = useDispatch()

  return (
    <div>

        <h1>{count}</h1>

        <button onClick={()=>dispatch(increment())}>increment</button>
        
    </div>
  )
}

export default Counter