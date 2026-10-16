import React, { useContext } from 'react'
import { userContext } from '../context/UserContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const {user} = useContext(userContext)
  return (
    <nav>
        <h3>Welcome {user.loggedIn ? user.name : "Guest"}</h3>
        <Link to="/profile">Profile</Link>
    </nav>
  )
}

export default Navbar