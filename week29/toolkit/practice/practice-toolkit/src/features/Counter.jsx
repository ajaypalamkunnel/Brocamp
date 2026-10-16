import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './counterSlice'

const Counter2 = () => {

    const count = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch()
    const [intervalId,setIntervalId] = useState(null)

    
    const autoIncrement = ()=>{
      let id  = setInterval(()=>{

        dispatch(increment())

        setIntervalId(id)

       },1000)
    }
    
    const stop = () =>{
      if(intervalId){
        clearInterval(intervalId)
        setIntervalId(null)
      }
    }



   


  return (
    <div>

        <h1>count : {count}</h1>

        <button onClick={()=>dispatch(increment())} >Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={autoIncrement}>Auto Increment</button>
        <button onClick={stop}>stop</button>
        

    </div>
  )
}

export default Counter2