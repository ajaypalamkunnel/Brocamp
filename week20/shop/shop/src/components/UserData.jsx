import React from 'react'
import { useState } from 'react'

const UserData = () => {

    const [formData,SetFormData] = useState({
        name:"",
        age:""
    })
    const handleChange = (e)=>{
        SetFormData({...formData,[e.target.name]:e.target.value})
    }

    console.log(formData);
    


  return (
    <div>

        <input name='name' onChange={handleChange} type="text" />
        <input name='age' onChange={handleChange} type="text" />

    </div>
  )
}

export default UserData