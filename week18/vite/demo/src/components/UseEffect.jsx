import React from 'react'
import { useEffect } from 'react';

export const UseEffect = () => {

    const [count, setCount] = React.useState(0);


    useEffect(()=>{
        console.log("Effect ran after every render");
        
    },[count])


    // useEffect(()=>{
    //     const timer = setInterval(()=>{
    //        console.log("Timer running");
            
    //     },50000)

    //     return ()=>{
    //         clearInterval(timer);
    //         console.log("Timer cleaned up");
    //     }
    // },[])
  return (
    <div>

        <p>You Clicked {count} times</p>
        <button onClick={()=>setCount(count+1)}>Click Me</button>


    </div>
  )
}
