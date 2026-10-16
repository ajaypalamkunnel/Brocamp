

import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContextProvider'

const Login = () => {

    const [name,setName] = useState('')

    const {handleLogin} = useContext(AuthContext)

  return (
    <div>

        <h3>Login form</h3>

        <input type="text" placeholder='Enter your name' onChange={(e)=>setName(e.target.value)} />
        <button onClick={()=>handleLogin(name.trim())}>Login</button>


    </div>
  )
}

export default Login