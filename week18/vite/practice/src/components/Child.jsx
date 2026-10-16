import React from 'react'

function Child({sendDataToParent}) {

    const sendMessage = () =>{
        sendDataToParent("Hello from the Child!")

    }
  return (
    <div>
        <h1>Child component</h1>

        <button onClick={sendMessage}>Send Message to parent</button>
    </div>
  )
}

export default Child