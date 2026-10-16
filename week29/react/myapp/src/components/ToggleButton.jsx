import React, { useContext } from 'react'
import { CheckBoxContext } from '../context/CheckBoxContext'

const ToggleButton = () => {

    const {handleToggle} = useContext(CheckBoxContext)


  return (
    <div>
        <button onClick={handleToggle}>click me to check</button>
    </div>
  )
}

export default ToggleButton