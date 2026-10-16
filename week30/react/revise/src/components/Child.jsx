import React, { useState } from 'react'

const Child = ({sendData}) => {
    const [inputValue,setInputValue] = useState("")

    const handleSendMessage = ()=>{
        sendData(inputValue)
    }
  return (
    <div>
        <h1>Child Parent</h1>

        <input
         type="text"
         value={inputValue}
         onChange={(e)=>setInputValue(e.target.value)}
         />

         <button onClick={handleSendMessage}>Send message</button>
    </div>
  )
}

export default Child