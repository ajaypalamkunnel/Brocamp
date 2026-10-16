import React, { useState } from 'react'
import Child from './Child'


const Parent = () => {
    const [count,setcount] = useState(0)
  return (
    <div>
        <h4>Memo</h4>
        <h2>{count}</h2>
        <button onClick={()=>setcount(count+1)}>Increment</button>
        <Child name="Ajay" />
    </div>
  )
}

export default Parent