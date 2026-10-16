
import React, { useMemo, useState } from 'react'

const UseMemo = () => {

    const [count,setcount] = useState(0)
    const [num, setNum] = useState(5);

    const expCalc = useMemo(()=>{
        let sum = 0
        console.log("Runnign exxppeeee");
        for(let i =0 ; i < 1e9; i++){
            sum+=i
        }
        return sum

    },[num])

  return (
    <div>


    <button onClick={()=>setcount(count+1)}>{count}</button>

    <h3>Number : {num}</h3>

    <h3>ExpCal :{expCalc}</h3>
        
    </div>
  )
}

export default UseMemo