import React, { useMemo, useState } from 'react'

const MemoCounter = () => {

    const [count1,setCount1] = useState(0)
    const [count2,setCount2] = useState(0)

    const isEven = useMemo(()=>{
        let i = 0
        while(i<2000000000)i++
        return count1%2===0
    },[count1])
  return (
    <div>
        <h3>MemoCounter</h3>

        <button onClick={()=>{setCount1(count1+1)}}>Increment {count1}</button>
        <h4>{isEven?'Even':'ODD'}</h4>
        <button onClick={()=>{setCount2(count2+1)}}>Decrement {count2}</button>

    </div>
  )
}

export default MemoCounter