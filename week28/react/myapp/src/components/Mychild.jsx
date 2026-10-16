import React from 'react'

const Mychild = ({onHandleMessage}) => {


   const onSendMessage = ()=>{
        onHandleMessage("Helllo I am from  child")
   }



  return (
    <div>

        <h1>Child component</h1>

        <button onClick={onSendMessage}>send message to parent</button>

    </div>
  )
}

export default Mychild