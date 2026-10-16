import React, { useRef } from 'react'
import ForwardChild from './ForwardChild'

const ForwardParent = () => {

  const inputRef = useRef()

  const handleFocus = () =>{
   inputRef.current.focus()
    
  }



  return (
    <div>
      <h5>Forward ref example demonstaration</h5>
      <ForwardChild ref={inputRef}/>
      <button onClick={handleFocus}>click to focus</button>
    </div>
  )
}

export default ForwardParent