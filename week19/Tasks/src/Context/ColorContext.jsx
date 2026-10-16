import React, { createContext, useState } from 'react'


export const ColorContext = createContext()

const ColorContextProvider = ({children}) => {
    const [color,setColor] = useState('red')

    const colorSetter = ()=>{
        setColor(prevColor=>(prevColor==='red'?'green':'red'))
    }
  return (
    <ColorContext.Provider value={{color,colorSetter}}>
    {children}
    </ColorContext.Provider>
  )
}

export default ColorContextProvider