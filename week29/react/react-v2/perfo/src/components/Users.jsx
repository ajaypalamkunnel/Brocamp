import React, { useEffect, useState } from 'react'

const Users = () => {

    const [data,setData] = useState([])

    useEffect(()=>{

        const response = fetch('https://jsonplaceholder.typicode.com/users')
        response.then((data)=>data.json()).then((data)=>setData(data))

    },[])

  return (
    <div>

        {data.map((user)=>(
            <p key={user.id}>{user.name}</p>
        ))}
    </div>
  )
}

export default Users