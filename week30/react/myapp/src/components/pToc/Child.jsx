

import React from 'react'

const Child = ({sendMessageToParent}) => {

    const handleMessage = ()=>{
        sendMessageToParent("heiii")
    }
  return (
    <div>
        <p>Child</p>
        <button onClick={handleMessage}>send to parent</button>
    </div>
  )
}

export default Child