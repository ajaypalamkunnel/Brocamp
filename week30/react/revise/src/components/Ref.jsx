

import React, { useRef } from 'react'

const Ref = () => {
    const clickRef = useRef("")

    const handleColor=()=>{
        clickRef.current.style.color = "Red"
    }
// 2833

  return (
    <div>

        <h1 ref={clickRef} onClick={handleColor}>This is H1</h1>

    </div>
  )
}

export default Ref