import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const DemoEffect = () => {
    const [count,setCount] = useState(0);
    const [show,setShow] = useState(true);

    useEffect(()=>{
        console.log("Component mounted");


        return ()=>{
            console.log("Component unmounted");
            
        }
        
    },[])


    useEffect(()=>{
        console.log("Component Updated : current count is :",count);
        
    })
  return (
    <div>
        <h1>Useffect Demo</h1>
        
        <p>Count :{count}</p>


        <button onClick={()=>setCount(count+1)}>Increment count</button>
        <button onClick={()=>setShow(false)}>Umount component</button>


    </div>
  )
}

export default DemoEffect