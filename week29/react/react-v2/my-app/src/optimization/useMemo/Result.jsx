import React, { useMemo, useState } from 'react'

const Result = () => {

    const [count,setCount] = useState(0)
    const [number,setNumber] = useState(10)

    const expensiveCalculation = (num) =>{

        console.log("expensive calculation...");

        let total = 0

        for(let i = 0 ; i < 1e7;i++){
            total+=i
        }

       console.log("completed");

       console.log(total);
       
        
        
        return total
    }
    
    const result = useMemo(()=>expensiveCalculation(number),[number])
   


  return (


    <div>
      <h1 style={{color:"yellow"}}>Expensive calculation 🔥</h1>
        <h1>expensive Result : {result}</h1>
        <button onClick={()=>setCount(count+1)}>increment count: {count}</button>

    </div>
  )
}

export default Result