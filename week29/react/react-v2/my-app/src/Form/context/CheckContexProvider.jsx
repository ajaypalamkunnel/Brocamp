import { createContext, useState } from "react";



export const CheckContext = createContext()


import React from 'react'

export const CheckContexProvider = ({children}) => {

  const [isChecked,setIsChecked] = useState(false)

  


  return (
    <CheckContext.Provider value={{isChecked,setIsChecked}}>

      {children}

    </CheckContext.Provider>
  )
}
