
import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import {} from "@reduxjs/toolkit"
import { increment } from '../features/CounterSlice'
const Counter = () => {

    const count = useSelector(state=>state.counter)
    console.log(count);
    

    const dispatch = useDispatch()

  return (
    <div>

        <h1>{count.value}</h1>

        <button onClick={()=>dispatch(increment())}>increment</button>



    </div>
  )
}

export default Counter