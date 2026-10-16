import React, { useRef, useState } from 'react'
import ChildP from './ChildP'
import CustomInput from './CustomInput'

const Parent = () => {

    const [message,setMessage] = useState("")

    const handleMessage = (childData) =>{
        setMessage(childData)
    }

    const inputRef = useRef()

    const handleFocus = ()=>{
        inputRef.current.focus()
    }

  return (
    <div>

        <h1>Parent componetn</h1>
        <h4>Message from parent :{message}</h4>
        <ChildP onSendMessage={handleMessage}/>

        <h5 style={{color:"orange"}}>Custom input</h5>

        <CustomInput ref={inputRef}/>

        <button onClick={handleFocus}>focus input</button>



    </div>
  )
}

export default Parent