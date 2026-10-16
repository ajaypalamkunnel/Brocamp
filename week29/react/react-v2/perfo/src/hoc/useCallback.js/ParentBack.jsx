import React, { useCallback, useState } from 'react'
import ChildBack from './ChildBack';

const ParentBack = () => {

    const [count,setCount] = useState(0)

    const handleClick = useCallback(()=>{
        console.log('clickedd');
        
    },[count])
  return (
    <div>

        <button onClick={()=>setCount(count+1)}>incremet {count}</button>
        <ChildBack onClick={handleClick}/>

    </div>
  )
}

export default ParentBack