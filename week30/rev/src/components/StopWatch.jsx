
import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const StopWatch = () => {

    const [seconds,setSeconds] = useState(0)
    const [isRunning,setIsRunning] = useState(false)
    const timerRef = useRef(null)

    const start = ()=>{
        if(!isRunning){
            setIsRunning(true)
            timerRef.current = setInterval(()=>{
                setSeconds((prev)=>prev+1)
            },1000)
        }
    }
    const stop = ()=>{
        clearInterval(timerRef.current)
        setIsRunning(false)
    }
    const resume = ()=>{
        if(!isRunning){
            setIsRunning(true)
            timerRef.current = setInterval(()=>{
                setSeconds((prev)=>prev+1)
            },1000)
        }    
    }
    const reset = ()=>{
        clearInterval(timerRef.current)
        setIsRunning(false)
        setSeconds(0)
    }



  return (
    <div>

        <h1>{seconds}</h1>

        <button onClick={start}>start</button>
        <button onClick={stop}>stop</button>
        <button onClick={resume}>resume</button>
        <button onClick={reset}>reset</button>

    </div>
  )
}

export default StopWatch