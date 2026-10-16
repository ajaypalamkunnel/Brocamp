import React from 'react'

const Child = ({sendDataToParent}) => {

    const data = "Hello from child"
    const handleClick = ()=>{
        sendDataToParent(data)
    }
  return (
    <div>
        <button onClick={handleClick}>Send Data to Parent</button>

    </div>
  )
}

export default Child