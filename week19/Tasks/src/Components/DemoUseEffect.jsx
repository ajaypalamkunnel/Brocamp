import React, { useEffect, useState } from 'react'

const DemoUseEffect = () => {

    const [count,setCount] = useState(0)


    useEffect(()=>{

        document.title = `Count ${count}`;
        console.log(`Document title updated to: Count: ${count}`);

        return ()=>{
            console.log('Cleanup before next effect or on unmount');
        }
    },[count])
  return (
    <div>

        <h1>Count :{count}</h1>
        <button onClick={()=>setCount(count+1)}>increment</button>

    </div>
  )
}

export default DemoUseEffect