import { createContext, useContext, useState } from "react";
import React from 'react'

export const CheckBoxContex = createContext()



export const CheckBoxProvider = ({children}) => {

    const [checked,setCheck] = useState(false)

  return (
   <CheckBoxContex.Provider value={{checked,setCheck}}>
    {children}
   </CheckBoxContex.Provider>
  )
}

