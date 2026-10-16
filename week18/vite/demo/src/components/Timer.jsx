import React, { useEffect, useState } from 'react'

function Timer() {

    const [time,setTime] = useState(0)
    const [isRunning,setIsrunning] = useState(false)


    let startTimer = ()=>{setIsrunning(true)}
    let pauseTimer = ()=>{setIsrunning(false)}
    let resetTimer = ()=>{setTime(0)}

    useEffect(()=>{

        let timer;
        if(isRunning){
            timer = setInterval(()=>{
                setTime(prevTime => prevTime+1)
            },1000)
        }else{
            clearInterval(timer)
        }
        return ()=> clearInterval(timer)
    },[isRunning])


  return (
    <div style={{width:'500px' , height:'300px', backgroundColor:'blue',padding:'10px'}}>

        <h1 style={{color:'yellow'}}>Timer</h1>

        <h1>Timer: {time} seconds</h1>

        <div style={{display:'flex' , justifyContent:'space-around'}}>

        <button onClick={startTimer}>Start</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
        </div>




    </div>
  )
}

export default Timer