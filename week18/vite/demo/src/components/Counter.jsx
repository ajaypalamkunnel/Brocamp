import React from 'react'
import { useState } from 'react'

function Counter() {

    const [count,setCount] = useState(0)

    let decrement = ()=>{

        if(count>0){
            setCount(count-1)
        }
    }
  return (
    <div>
        <h1>Counter</h1>

        <button onClick={()=>setCount(count+1)}>+</button>
        <h1>{count}</h1>
        <button onClick={decrement}>-</button>

        <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}

export default Counter