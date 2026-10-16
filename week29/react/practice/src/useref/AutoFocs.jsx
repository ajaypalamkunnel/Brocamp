import React, { useRef } from 'react'

const AutoFocs = () => {

    const inputRef = useRef(null)


    const handle = ()=>{
        inputRef.current.value = ""
        inputRef.current.focus()
    }



  return (
    <div>
        <h3>AutoFocs and clear</h3>

        <input type="text" ref={inputRef} placeholder='type somthig..'/>

        <button onClick={handle}>click</button>

    </div>
  )
}

export default AutoFocs