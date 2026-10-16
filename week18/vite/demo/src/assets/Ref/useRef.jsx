import React from 'react'

const useRefDemo = () => {

    const inputRef = useRef(null)

    const handleFocus = () =>{
        inputRef.current.focus()
    } 


  return (
    <div>
        <input ref={inputRef} type="text" name="" id="" />

        <button onClick={handleFocus}></button>
    </div>
  )
}

export default useRefDemo