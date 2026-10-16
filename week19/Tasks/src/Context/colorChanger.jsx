import React, { createContext, useState } from 'react'

export const GlobalColorContext = createContext()
const ColorChanger = ({children}) => {


    const [color,setColor] = useState('pink')

    const colorChanger = ()=>{
        setColor(prevColor=>prevColor==='pink'?'green':'pink')
    }
  return (
    <div>
        <GlobalColorContext.Provider value={{color,colorChanger}}>
            {children}
        </GlobalColorContext.Provider>
    </div>
  )
}

export default ColorChanger