import React from 'react'
import { useState } from 'react'

const RegtrationForm = () => {

    const [formData,setFormData] = useState({
        "name":"",
        "age" :"",
        "phone":""
    })
    const [submitData,setSubmitData] = useState(null)


    
    const handleChange = (eve)=>{
        const {name,value} = eve.target;

        setFormData({...formData,[name]:value})

    }

    
    const handleSubmit = (eve)=>{
        eve.preventDefault()
        setSubmitData(formData)
        // formData(setFormData({name:"",age:"",phone:""}))

    }


  return (
    <div>
        <h1>Registration Form</h1>


        <form style={{display:'flex',flexDirection:'column', padding:'10px'}} onSubmit={handleSubmit}>
            <input placeholder='Enter name' name='name' value={formData.name} onChange={handleChange} type="text" />
            <input placeholder='Enter age' name='age' value={formData.age} onChange={handleChange} type="number" />
            <input placeholder='Enter phone' name='phone' value={formData.phone} onChange={handleChange} type="number" />

            <button onSubmit={handleSubmit} >Submit</button>
        </form>

        <hr />

        {
            submitData&&(
                <div>
                    <h1>Form Data</h1>
                    <p>Name:{formData.name}</p>
                    <p>Age : {formData.age}</p>
                    <p>Phone : {formData.phone}</p>
                </div>
                
            )
        }
    </div>
  )
}

export default RegtrationForm