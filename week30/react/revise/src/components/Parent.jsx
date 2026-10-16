import React, { Suspense, useState } from 'react'
import Child from './Child'

const Parent = () => {

    const [message,setMessage] = useState("")

    const handleMessage = (data)=>{
        setMessage(data)
    }

    
  return (
    <div>
        <h1>Parent</h1>
        <h4>Message from parent : {message}</h4>
        <Child sendData={handleMessage}/>


    </div>
  )
}

export default Parent