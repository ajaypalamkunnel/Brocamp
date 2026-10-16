


import React, { createContext, useState } from 'react'
export const counterCounter = createContext()

const CounterContexProvider = ({children}) => {

    const [count,setCount] = useState(0)

    const increment = ()=>setCount(count+1)
    const decrement = ()=>setCount(count-1)
    const reset = ()=>setCount(0)


  return (
    <counterCounter.Provider value={{count,increment,decrement,reset}}>
      {children}
    </counterCounter.Provider>
  )
}

export default CounterContexProvider