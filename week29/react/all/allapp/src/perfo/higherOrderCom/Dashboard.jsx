

import React, { useState } from 'react'
import WithLoading from './WithLoading'
import UserProfile from './UserProfile'

const Dashboard = () => {

    const UserProfileWithLoading = WithLoading(UserProfile)
    const [isLoading,setIsLoading] = useState(true)

  return (
    <div>

        <h1>My App</h1>

       <UserProfileWithLoading name ="Alice" email="alice@example.com" isLoading={isLoading}/>

       <button onClick={()=>setIsLoading(!isLoading)}>Toggle loading</button>

    </div>
  )
}

export default Dashboard