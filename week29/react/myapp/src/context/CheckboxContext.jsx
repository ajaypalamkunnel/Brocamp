import { createContext, useState } from "react";


export const CheckBoxContext = createContext()


export const CheckBoxProvider = ({children}) =>{

    const [isChecked,setIsChecked] = useState(false)

    const handleToggle = ()=>{
        setIsChecked(true)
    }

    return (
        <CheckBoxContext.Provider value={{isChecked, handleToggle}}>
            {children}
        </CheckBoxContext.Provider>
    )

}