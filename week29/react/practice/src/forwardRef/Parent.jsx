import React from 'react'
import { useRef } from 'react'
import Child from './Child'

const Parent = () => {

     const inputRef = useRef()

     const focusInput = ()=>{
        inputRef.current.focus()
     }

  return (
    <div>
        <h5>Forword ref</h5>
        <Child ref={inputRef}/>
        <button onClick={focusInput}>focus</button>
    </div>
  )
}

export default Parent