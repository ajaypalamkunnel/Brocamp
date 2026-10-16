import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase } from './CounterSlice'

const Counter = () => {


    
    const count = useSelector((state)=>state.counter.value)

    const dispatch = useDispatch()


  return (
    <div>

    <h1>{count}</h1>

    <button onClick={()=>dispatch(increase())}>increment</button>
    <button onClick={()=>dispatch(decrease())}>Decrement</button>

    {
        (count < 0)&&
        <div>
            <h1>negative value</h1>
        </div>

    }


        

    </div>
  )
}

export default Counter