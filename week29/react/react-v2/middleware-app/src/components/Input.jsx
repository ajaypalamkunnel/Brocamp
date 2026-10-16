import React, { useState } from 'react'

const Input = () => {

    const [size,setSize] = useState(0)
    const handleChange = (e)=>{
        let length = e.target.value.length
        
        setSize(length)
    }


  return (
    <div>
        <h1>{size}</h1>
        <input onChange={(e)=>handleChange(e)} type="text" />
    </div>
  )
}

export default Input