import React, { useContext } from 'react'
import { CheckBoxContext } from '../contexts/CheckBoxContexProvider'

const CheckBox = () => {

    const {isChecked,setIsChecked} = useContext(CheckBoxContext)

 
  return (
    <div>

        <input type="checkbox" readOnly checked={isChecked} />

    </div>
  )
}

export default CheckBox