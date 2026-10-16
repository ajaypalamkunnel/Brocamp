import React, { useState } from 'react'
import Counter from './Counter'

const Actions = () => {
    const [count,setCount] = useState(0)
    const [text,setText] = useState("")
 
  return (
    <div>
        <Counter count={count}/>
        <button onClick={()=>setCount(count+1)}>increment</button>
        <input type="text" onChange={(e)=>setText(e.target.value)} />
    </div>
  )
}

export default Actions