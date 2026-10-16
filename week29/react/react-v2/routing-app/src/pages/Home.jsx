import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

    const handleClick = ()=>{
        navigate("/profile",{replace:true})
    }

  return (
    <div>
        Home
    <button onClick={handleClick}>profile</button>
    </div>
    
  )
}

export default Home