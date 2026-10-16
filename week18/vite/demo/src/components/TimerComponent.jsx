import React from 'react'
import { useEffect } from 'react'

const TimerComponent = () => {

    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log('Timer is running')
        },1000)

        return ()=>{
            clearInterval(timer)
            console.log("Timer cleaned up!");
            
        }
    },[])



  return <p>Timer is active. Check the console for logs!</p>;
   
  
}

export default TimerComponent