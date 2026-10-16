import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, multiplyByx } from './CounterSlice'

const Counter = () => {

    const [inp,setInp] = useState(0)
    const count = useSelector(state=>state.counter.count)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Counter : {count}</h1>

        <input type="text" name='inp' value={inp} onChange={(e)=>setInp(e.target.value)} />
        
        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={()=>dispatch(multiplyByx(inp))}>multiply by 5</button>






    </div>
  )
}

export default Counter