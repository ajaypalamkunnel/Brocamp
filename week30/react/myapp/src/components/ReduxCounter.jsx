

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../../features/counterSlice'

const ReduxCounter = () => {

    const dispatch = useDispatch()
    const count = useSelector((state)=>state.counterReducer.value)
   
  return (
    <div>

        <h1>Redux counter</h1>

        <h4>{count}</h4>

        <button onClick={()=>dispatch(increment())}>increment</button>

    </div>
  )
}

export default ReduxCounter