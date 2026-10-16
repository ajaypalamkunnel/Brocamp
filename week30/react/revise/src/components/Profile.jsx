

import React, { useContext } from 'react'
import { userContext } from '../context/UserContext'
import { Link } from 'react-router-dom'

const Profile = () => {

    const {user,toggleLogin} = useContext(userContext)

  return (
    <div>

        <h2>Profile page</h2>
        <p>Name : {user.name}</p>
        <p>Status : {user.loggedIn ? "Online" : "Offline"}</p>

        <button onClick={toggleLogin}>{user.loggedIn ? "Logout" :"Login"}</button>
        <Link to="/nav">Home</Link>


    </div>
  )
}

export default Profile