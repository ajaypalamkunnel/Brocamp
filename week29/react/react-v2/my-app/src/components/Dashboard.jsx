import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContextProvider'

const Dashboard = () => {

    const {user} = useContext(AuthContext)


  return (
    <div>

        <h1>Dashboard</h1>
        {
            user.isAuthenticated?
            <h4>Welocome {user.name}</h4>:
            "please login"
        }
       
        
    </div>
  )
}

export default Dashboard