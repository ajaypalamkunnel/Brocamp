

import React, { useContext } from 'react'
import { CheckBoxContex } from '../../context/CheckBoxProvider'

const CheckBox = () => {

  const {checked} = useContext(CheckBoxContex)


  return <input type="checkbox" readOnly checked={checked} />
}

export default CheckBox