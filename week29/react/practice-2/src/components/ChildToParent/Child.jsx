
import React from 'react'

const Child = ({sendMsgToParent}) => {

    
  return (
    <div>
        <h3>child components</h3>
        <button onClick={()=>sendMsgToParent("I am from child")}>send message to parent</button>
    </div>
  )
}

export default Child