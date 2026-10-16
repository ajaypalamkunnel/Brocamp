import React, { useState } from 'react'
import Child from './Child';

function Parent() {

    const [message,setMessage] = useState("");

    const handleChildData = (data) =>{
        setMessage(data)
    }



  return (
    <div>
        <h1>Parent component</h1>
        <p>Messge form child: {message}</p>

        <Child sendDataToParent={handleChildData}   />
    </div>
  )
}

export default Parent