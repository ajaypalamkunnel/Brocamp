

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearIntervalId, reset, setIntervalId, tick } from '../features/StopWatch'

const StopWatch = () => {

    const dispatch = useDispatch()
    const time = useSelector((state)=>state.stopWatch.time)
    const intervalId = useSelector((state)=>state.stopWatch.intervalId)

    const handleStart = ()=>{
        console.log("hello");
        
        if(intervalId)return

        dispatch(tick())
        const id = setInterval(()=>{
            dispatch(tick())
        },1000)

        dispatch(setIntervalId(id))
    }


    const handleStop = () =>{
        dispatch(clearIntervalId())
    }

    const handleRest = () =>{
        dispatch(reset())
    }


  return (
    <div>
        <h4>StopWatch</h4>
        <h1>{time}</h1>
        <button onClick={handleStart}>start</button>
        <button onClick={handleStop}>stop</button>
        <button onClick={handleRest}>reset</button>
        

    </div>
  )
}

export default StopWatch