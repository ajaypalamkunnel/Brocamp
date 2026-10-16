import React, { useRef } from 'react'

const DemoUserf = () => {
    const foucusRef = useRef(null)

    const handleRef = ()=>{
        foucusRef.current.focus()
    }
  return (
    <div>
        <input ref={foucusRef} type="text" />
        <button onClick={handleRef}>Focus</button>
    </div>
  )
}

export default DemoUserf