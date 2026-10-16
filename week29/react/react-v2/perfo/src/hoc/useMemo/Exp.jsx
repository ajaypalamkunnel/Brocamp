import React, { useMemo, useState } from 'react'

const Exp = () => {

    const [count,setCount] = useState(0)
    const [number,setNumber] = useState(20)

    function expensiceCalculation(num){

        console.log("calculating....");
        

        let total = 0
        for(let i = 0 ; i < 1e9;i++){
            total+=num
        }
        return total
    }

        
    
    const result  = useMemo(()=>expensiceCalculation(number),[number])



  return (
    <div>
        <h2>Expensive calculation {result}</h2>
        <button onClick={()=>setCount(count+1)}>Increment count: {count}</button>   
    </div>
  )
}

export default Exp