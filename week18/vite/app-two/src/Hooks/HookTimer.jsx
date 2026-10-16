import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function HookTimer() {
    const [timer,setTimer] = useState(0)

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTimer(prevTimer=>prevTimer+1)
        },1000)
        return ()=>{
            clearInterval(interval)
        }
    },[])
  return (
    <div>
        Hook TImer - {timer}
    </div>
  )
}

export default HookTimer