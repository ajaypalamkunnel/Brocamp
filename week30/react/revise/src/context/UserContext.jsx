import { createContext } from "react"


export const userContext = createContext()

import React, { useState } from 'react'

const UserContext = ({children}) => {

    const [user,setUser] = useState({
        name:"Ajay ps",
        loggedIn:true
    })

    const toggleLogin = ()=>{
        setUser((prev)=>({...prev,loggedIn:!prev.loggedIn}))
    }

  return (
    <userContext.Provider value={{user,toggleLogin}}>
        {children}
    </userContext.Provider>
  )
}

export default UserContext