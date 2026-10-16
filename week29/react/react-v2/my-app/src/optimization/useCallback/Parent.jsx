import React, { useCallback, useState } from 'react'
import Child from './Child';

const Parent = () => {

    const [count,setCount] = useState(0)

const handleClicked = useCallback(()=>{
    console.log("Clickedd");
    
},[])
  return (
    <div>
        <h1>This is parent</h1>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>incrrement</button>

        <Child onclick={handleClicked}/>
    </div>
  )
}

export default Parent