import React, { createContext, useState } from 'react'




export const checkBoxContext = createContext()

const CheckBoxContextProvider = ({children}) => {

    const [ischecked,setIsChecked] = useState(false)

    const handleCheckBox = ()=>{
        setIsChecked(!true)
    }


  return (
    <checkBoxContext.Provider value={{ischecked,handleCheckBox}}>
        {children}
    </checkBoxContext.Provider>
  )
}

export default CheckBoxContextProvider