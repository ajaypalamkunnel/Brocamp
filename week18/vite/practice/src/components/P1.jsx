import React, { useState } from 'react'
import C1 from './C1'

function P1() {

    const [message,setMessage] = useState("")

    function handleChildData(data){
        setMessage(data)
    }



  return (
    <div>
        <h1>P1 component</h1>
        <p>Message form C1: {message}</p>

        <C1 sendDataToParent={handleChildData}/>
    </div>
  )
}

export default P1