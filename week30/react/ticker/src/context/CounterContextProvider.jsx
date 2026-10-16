import { createContext, useState } from "react";


export const counterContext = createContext()

import React from 'react'

const CounterContextProvider = ({children}) => {

    const [count,setCount] = useState(0)

  return <>

  <counterContext.Provider value={{count,setCount}}>
    {children}

  </counterContext.Provider>
  </>
}

export default CounterContextProvider