import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Profile = () => {

    const user = useContext(UserContext)
  return (
    <div>
        
        <h3>Profile</h3>

        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>



    </div>
  )
}

export default Profile