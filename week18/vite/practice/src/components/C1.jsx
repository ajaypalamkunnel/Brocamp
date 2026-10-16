import React from 'react'

function C1({sendDataToParent}) {

    const sendMessage = () =>{
        sendDataToParent("Hello from the C1")
    }


  return (
    <div>

        <h1>Child component</h1>
        <button onClick={sendMessage}  >Send Data To Parent</button>

    </div>
  )
}

export default C1