import React from 'react'
import { useState } from 'react'
import Mychild from './Mychild'

const MyParent = () => {

    const [childMessage,setChildMessage] = useState("")

    const handleMessage = (message)=>{
        setChildMessage(message)
    }



  return (
    <div>

        <h1>Parent component</h1>

        <h4>childMessage : {childMessage}</h4>

        <Mychild onHandleMessage={handleMessage}/>



    </div>
  )
}

export default MyParent