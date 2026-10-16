

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../features/UserSlice';

const UsersData = () => {


    const dispatch = useDispatch();
    const   {users,status,error} = useSelector((state)=>state.users)


    useEffect(()=>{

        if(status === 'idle'){
            dispatch(fetchUser()) 
        }

    },[dispatch,status])


    if(status === 'loading')return <p>Loading users...</p>

    if(status === 'error')return <p>Error:{error}</p>

    // console.log(users.map((user)));
    

  return (
    <div>

    <h2>Users list</h2>

    <ul>

    {
        users.map((user)=>(
            <li key={user.id}>{user.name}</li>
        ))
    }
    </ul>

    </div>
  )
}

export default UsersData