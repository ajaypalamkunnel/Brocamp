import React, { useContext } from 'react'
import { CheckBoxContext } from '../context/CheckBoxContext'

const CheckboxDisplay = () => {


    const  {isChecked} = useContext(CheckBoxContext)


  return (
    <div>

        <label>
            <input type="checkbox" checked={isChecked} readOnly />
            check Box
        </label>
        
    </div>
  )
}

export default CheckboxDisplay