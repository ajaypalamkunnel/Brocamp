import React, { useCallback, useState } from 'react'
import Child from '../Child';
import ChildCom from './ChildCom';

const ParentCom = () => {
    const [count,setCount] = useState(0)
    const handleClick=useCallback(()=>{
        console.log('Button Clicked');
    })
  return (
    <div>

        <h1>Parent Count: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment count</button>
        <ChildCom handleClick={handleClick}/>
    </div>
  )
}

export default ParentCom