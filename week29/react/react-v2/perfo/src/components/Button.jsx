import React, { useContext } from 'react'
import { CheckBoxContext } from '../contexts/CheckBoxContexProvider.jsx'

const Button = () => {

    const {isChecked,setIsChecked} = useContext(CheckBoxContext)

  return (
    <div>

        <button onClick={()=>setIsChecked(!isChecked)}>
            click to Check
        </button>

    </div>
  )
}

export default Button