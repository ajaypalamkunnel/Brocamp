import React, { useContext } from 'react'
import { checkBoxContext } from '../context/CheckBoxContextProvider'

const CheckBox = () => {


    const {ischecked} = useContext(checkBoxContext)


  return (
    <div>

        <label>Check Box
            <input type="checkbox" checked={ischecked} readOnly/>
        </label>

    </div>
  )
}

export default CheckBox