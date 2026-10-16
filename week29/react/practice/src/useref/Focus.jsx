import React, { useEffect } from 'react'
import { useRef } from 'react'

const Focus = () => {

    const inputRef = useRef()

    


    const handleClick=()=>{
      
        let currentValue = parseInt(inputRef.current.textContent)
        
        inputRef.current.textContent = currentValue+1
    }


  return (
    <div>

       <h2 ref={inputRef}>6</h2>


        <button onClick={handleClick}>update</button>

    </div>
  )
}

export default Focus