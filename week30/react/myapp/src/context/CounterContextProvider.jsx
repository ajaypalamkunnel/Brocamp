import { createContext, useState } from "react";


export const counterCountext = createContext()


import React from 'react'

const CounterContextProvider = ({children}) => {

    const [count,setCount] = useState(0)


  return (
    <counterCountext.Provider value={{count,setCount}} >
        {children}
    </counterCountext.Provider>
  )
}

export default CounterContextProvider