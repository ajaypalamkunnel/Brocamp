
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../features/counterSlice'

const ReduxCounter = () => {

    const dispatch = useDispatch()
    const count= useSelector((state)=>state.counter.value)

  return (
    <div>

        <h5>Redux counter</h5>

        <h1>count:{count}</h1>

        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={()=>dispatch(decrement())}>decrement</button>

    </div>
  )
}

export default ReduxCounter