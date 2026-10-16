import React, { useRef, useState } from 'react'

const StopWatch = () => {

    const [seconds,setSeconds] = useState(0)

    const intervalRef = useRef(null)

    const startTimer = () =>{

        if(intervalRef.current !== null)return

        intervalRef.current = setInterval(()=>{

            setSeconds((prev)=>prev+1)

        },1000)

    }

    const stopTimer = () =>{

        clearInterval(intervalRef.current)
        intervalRef.current = null

    }

    const resetTimer = () =>{
        stopTimer()
        setSeconds(0)
    }




  return (
    <div>

        <h4>Stopwatch</h4>

        <h3>Seconds: {seconds}</h3>

        <button onClick={startTimer}>start</button>
        <button onClick={stopTimer}>stop</button>
        <button onClick={resetTimer}>reset</button>

    </div>
  )
}

export default StopWatch