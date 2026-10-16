

import React, { useState } from 'react'
import Child from './Child'

const ParentC = () => {

    const [message,setMessage] = useState("")


    const handleParentMessage = (message) =>{
        setMessage(message)
    }

  return (
    <div>

        <h3>Parent compo</h3>

        <h5>Hi Message From child compo : {message}</h5>

        <Child sendMessageToParent={handleParentMessage}/>

    </div>
  )
}

export default ParentC