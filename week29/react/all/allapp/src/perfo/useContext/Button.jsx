

import React, { useContext } from 'react'
import { CheckBoxContex } from '../../context/CheckBoxProvider'

const Button = () => {
    const {checked,setCheck} = useContext(CheckBoxContex)
   return (
    <div onClick={()=>setCheck(!checked)}>Button</div>
  )
}

export default Button