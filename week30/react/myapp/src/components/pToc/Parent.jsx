

import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {

    const [message,setMessage] = useState("")

    const handleChildMessage = (message)=>{
        setMessage(message)
    }

  return (
    <div>
        <p>Parent comp</p>
        <h4>Message from child : {message}</h4>

        <Child sendMessageToParent={handleChildMessage}/>

    </div>
  )
}

export default Parent