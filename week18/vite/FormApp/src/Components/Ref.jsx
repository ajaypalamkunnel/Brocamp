import React from 'react'
import { useRef } from 'react'

const Refe = () => {

    const countRef = useRef(0);

    const handleIncrement = ()=>{
        countRef.current += 1
        console.log(countRef.current);
        
    }


  return (
    <div>
        <p>Count : {countRef.current}</p>
        <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Refe