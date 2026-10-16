import React from 'react'

const Child = ({sendMessageToParent}) => {


    const handleMessage = ()=>{
        sendMessageToParent("helloo I am you childd")
    }

  return (
    <div>

        <h4>Child component</h4>

        <button onClick={handleMessage}>send to parent</button>

    </div>
  )
}

export default Child