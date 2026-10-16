import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { featchUsers } from '../features/UserSlice'

const Users = () => {

    const dispatch = useDispatch()

    const {list,loading,error} = useSelector((state)=>state.users)

    useEffect(()=>{

        dispatch(featchUsers())

    },[dispatch])

    if(loading) return <p>Loading users....</p>
    if(error) return <p style={{color:"red"}}>{error}</p>

  return (
    <div>

    <h2>Users List</h2>

    <ul>
        {
            list.map((user)=>(
                <li key={user.id}>
                     <strong>{user.name}</strong> — {user.email}
                </li>
            ))
        }
    </ul>



    </div>
  )
}

export default Users