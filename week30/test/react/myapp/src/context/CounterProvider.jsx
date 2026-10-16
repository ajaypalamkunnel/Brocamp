const { createContext } = require("react");

export const counterContext = createContext()


import React from 'react'

const CounterProvider = ({children}) => {

    

  return (
    <counterContext.Provider>
        {children}
    </counterContext.Provider>
  )
}

export default CounterProvider