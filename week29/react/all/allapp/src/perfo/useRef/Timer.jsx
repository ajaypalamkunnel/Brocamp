import React, { useRef, useState } from 'react'

const Timer = () => {

    const [count,setCount] = useState(0)
    const timerRef = useRef()


    const startTimer = ()=>{

        timerRef.current = setInterval(()=>{
            setCount(prev=>prev+1)
        },1000)
        
    }
    const stopTimer = ()=>{    
        clearInterval(timerRef.current)
    }

  return (
    <div>

        <h4>Timer {count}</h4>
        <button onClick={startTimer}>start</button>
        <button onClick={stopTimer}>stop</button>

    </div>
  )
}

export default Timer