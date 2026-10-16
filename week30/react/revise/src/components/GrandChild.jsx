

import React, { useState } from 'react'
import GrandParent from './GrandParent'

const GrandChild = () => {

    const [count,setCount] = useState(0)
  return (
    <div>
        <GrandParent/>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  )
}

export default GrandChild