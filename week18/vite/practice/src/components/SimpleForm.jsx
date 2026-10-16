import React, { useState } from 'react'

function SimpleForm() {

    const [inputValue,setInputValue] = useState('')


    const handleInputChange=(event)=>{
        setInputValue(event.target.value)
    }

    const handleSubmit=(event)=>{
        event.preventDefault()

        alert(`You entered: ${inputValue}`)
    }
  return (
    <div>

        <form onSubmit={handleSubmit}>
        <label htmlFor="nameInput">Enter something: </label>
        <input name='nameInput' value={inputValue} onChange={handleInputChange} type="text" />
        <button type="submit">Submit</button>
        </form>

        <h4>Live Preview : {inputValue}</h4>
    </div>
  )
}

export default SimpleForm