

const ExpensiveCalculation = (num)=>{
    console.log("calculatingg.....");

    let total = 0
    for(let i = 0 ; i < 10000000;i++){
        total += i
    }
    return total+num
    
}


import React, { useMemo, useState } from 'react'

const UseMemoEx = () => {

    const [count,setCount] = useState(0)
    const [input, setInput] = useState('');

    const memoizedResult = useMemo(()=>ExpensiveCalculation(count),[count])
  return (
    <div>

        <input value={input} onChange={(e)=>setInput((e.target.value))} />
        <button onClick={()=>setCount(count+1)}>Increment: {count}</button>
        <h4>Result :{memoizedResult}</h4>

    </div>
  )
}

export default UseMemoEx