

import React, { useRef } from 'react'

const Focus = () => {

    const inputRef = useRef()

    const handleFocus = ()=>{

        inputRef.current.focus()

    }
  return (
    <div>
        <input ref={inputRef} type="text" />
        <button onClick={handleFocus}>focus</button>
    </div>
  )
}

export default Focus