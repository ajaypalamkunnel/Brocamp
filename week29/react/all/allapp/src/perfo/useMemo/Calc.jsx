

import React, { useMemo, useState } from 'react'

const Calc = () => {

    const [count,setCount] = useState(0)
    const [text,setText] = useState("");

    const expensiveCalculation = (num)=>{

        let result = 0

        for(let i = 0 ; i < 1e9*num;i++){
            result+=i

        }
        console.log(result)
        return result

    }

    const memoizedValue = useMemo(()=>expensiveCalculation(count),[count])

  return (
    <div>

        <p>Expensive calculeation :{memoizedValue}</p>

        <button onClick={()=>setCount(count+1)}>Increment</button>
        <input type="text" onChange={(e)=>setText(e.target.value)} />


    </div>
  )
}

export default Calc