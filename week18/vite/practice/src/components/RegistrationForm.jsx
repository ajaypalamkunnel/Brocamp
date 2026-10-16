import React, { useEffect, useState } from 'react'

function RegistrationForm() {

    const [formData,setFormData] = useState({
        name:"",
        password:"",
        confirmPassword:""

    })
    const [error,setError] = useState("")

    const handleChange  = (event)=>{
        const {name,value} = event.target;
        setFormData({...formData,[name]:value})
    }
    const handleSubmit  = (event)=>{
        event.preventDefault()
        if(formData.password !== formData.confirmPassword){
            setError("Passwords do not match!")
            return 
        }
        setFormData({name:"",password:"",confirmPassword:""})
        setError("")
    }

    


  return (
    <div style={{padding:"11px"}}>
        <h1>Registration Form</h1>

        <form style={{display:'flex', flexDirection:"column", }} onSubmit={handleSubmit}>
            <label>UserName:
                <input name='name' value={formData.name} onChange={handleChange} type="text" />
            </label>
            <label>Password:
                <input name='password' value={formData.password} onChange={handleChange} type="text" />
            </label>
            <label>Confirm Password:
                <input name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} type="text" />
            </label>

            <p style={{color:"red"}}>{error === "" ? null:error}</p>
            

            <button type='submit'>submit</button>

        </form>

        <h3>User Data</h3>
        <p>Name: {formData.name === ""?null:formData.name}</p>
    </div>
  )
}

export default RegistrationForm