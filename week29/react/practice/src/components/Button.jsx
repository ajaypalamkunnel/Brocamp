import React, { useContext } from 'react'
import { checkBoxContext } from '../context/CheckBoxContextProvider'

const Button = () => {

    
        const {ischecked,handleCheckBox} = useContext(checkBoxContext)
    
    
  return (
    <div>
        <button onClick={handleCheckBox}>click to check</button>
    </div>
  )
}

export default Button