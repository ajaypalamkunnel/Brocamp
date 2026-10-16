import React, { useMemo, useState } from 'react'

const UseMemoDemo = () => {

     const [counter1,setCounter1] = useState(0);
     const [counter2,setCounter2] = useState(0);

     const incrementCounter1 = ()=>{
        
        setCounter1((prevCount)=>prevCount+1)
     }
     const incrementCounter2 = ()=>{
        setCounter2((prevCount)=>prevCount+1)
     }

     const isOddOrEven=useMemo(()=>{
        let i = 0;
        while(i<2000000000)i++
        return counter1%2===0
     },[counter1])

     

  return (
    <div>


        <h1>Counter1: {counter1}</h1>
        <button onClick={()=>incrementCounter1()}>increment Counter 1</button>
        <span>{isOddOrEven?'EVEN':'ODD'}</span>
        <h1>Counter2: {counter2}</h1>
        <button onClick={()=>incrementCounter2()}>increment Counter 2</button>

    </div>
  )
}

export default UseMemoDemo