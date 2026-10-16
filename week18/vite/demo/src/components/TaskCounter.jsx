import React, { useState } from 'react'

function TaskCounter() {

    let [count,setCount] = useState(0)
  return (
    <div>

        <button onClick={()=>setCount(count+1)}>+</button>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count-1)}>-</button>
        <button onClick={()=>setCount(0)}>Reset</button>



    </div>
  )
}

export default TaskCounter