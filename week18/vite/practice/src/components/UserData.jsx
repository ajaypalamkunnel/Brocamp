import React, { useState } from 'react'

function UserData() {

    const [formData,setFormData] = useState({
        name:'',
        email:''
    })

    function handleChange(event){
        const {name,value} = event.target
        setFormData({...formData,[name]:value})
    }
    function handSubmit(event){
        event.preventDefault();
        setFormData(formData)
        console.log(`Name:${formData.name} Email:${formData.email}`);
        
        setFormData({name:"",email:""})
    }



  return (
    <div>
        <form onSubmit={handSubmit}>
            <label >
                Name:
                <input value={formData.name} onChange={handleChange} name='name' type="text" />
            </label>
            <label >
                Email:
                <input  value={formData.email} onChange={handleChange} name='email' type="text" />
            </label>

            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default UserData