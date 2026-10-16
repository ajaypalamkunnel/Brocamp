import React, { createContext, useState } from 'react'


export const CheckBoxContext = createContext()


const CheckBoxContexProvider = ({children}) => {
  const [isChecked,setIsChecked]  = useState(false)
  return (
    <CheckBoxContext.Provider value={{isChecked,setIsChecked}}>
      {children}
    </CheckBoxContext.Provider>
  )
}

export default CheckBoxContexProvider