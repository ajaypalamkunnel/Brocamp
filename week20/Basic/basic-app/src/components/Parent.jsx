import React from 'react'
import { useState } from 'react'
import Child from './Child'

const Parent = () => {

    const [message,setMessage] = useState("")

    const handleChildData = (data) =>{
        setMessage(data)
    }
  return (
    <div>
        <h2>Parent</h2>

        <Child sendDataToParent={handleChildData}/>

        <h4>Message From child: {message} </h4>

    </div>
  )
}

export default Parent