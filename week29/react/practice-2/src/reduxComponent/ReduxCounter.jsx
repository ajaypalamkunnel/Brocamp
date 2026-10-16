import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../features/CounterSlice'

const ReduxCounter = () => {

    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()

  return (
    <div>


        <div style={{border:"orange 4px solid"}}>

        <h1 style={{color:"pink"}}>ReduxCounter</h1>
        <h4>{count}</h4>

        <button onClick={()=>dispatch(increment())}>increment </button>
        </div>


        
    </div>
  )
}

export default ReduxCounter