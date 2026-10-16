import React, { useContext } from 'react'
import { CheckContext } from '../context/CheckContexProvider'

export const Button = () => {

    const{setIsChecked} = useContext(CheckContext)

  return (
    <button onClick={()=>setIsChecked(true)}>Click me to check</button>
  )
}
