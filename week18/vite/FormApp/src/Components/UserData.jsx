import React from 'react'
import { useState } from 'react'

const UserData = () => {


    const [formData,setFormData] = useState({
        name:"",
        age:"",
        place:""
    })

    const [errors,setErrors] = useState({})

    const [submittedData,setSubmittedData] = useState(null)

    function handleChange(event){
        const {name,value} = event.target;
        setFormData((prevData)=>({...prevData,[name]:value}))
    }

    function validateForm(){
        let newErrors = {}

        if(!formData.name.trim())newErrors.name="Name is required";
        if(!formData.age.trim())newErrors.age = "Age is required";
        else if(isNaN(formData.age))newErrors.age = "Age must be a number"
        if(!formData.place.trim())newErrors.place="Place is required";

        return  newErrors

    }

    function handleSubmit(event){

        event.preventDefault();

        const ValidDataError = validateForm()

        if(Object.keys(ValidDataError).length>0){
            setErrors(ValidDataError)
        }else{
            console.log("Form data submit successfully");

            // alert("Form data submited succesfully",formData.name," ",formData.age)
            setSubmittedData(formData)
            setFormData({name:"",age:"",place:""})
            setErrors({})
            
        }

    }



  return (
    <div>
        <h1>Form data</h1>

        <form style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}} onSubmit={handleSubmit}>
            <label>
                Name: <input name='name' value={formData.name} onChange={handleChange} type="text" />
                {errors.name&&<p style={{color:'red'}}>{errors.name}</p>}
            </label>
            <label>
                Age: <input name='age' value={formData.age} onChange={handleChange} type="number" />
                {errors.age&&<p style={{color:'red'}}>{errors.age}</p>}
            </label>
            <label>
                Place: <input name='place' value={formData.place} onChange={handleChange} type="text" />
                {errors.place&&<p style={{color:'red'}}>{errors.place}</p>}
            </label>

            <button type='submit'>submit</button>


        </form>

        {submittedData&&

            (<div>
                <h1>Data Response</h1>
    
                <h4>Name:</h4><p>{submittedData.name}</p>
                <h4>Age:</h4><p>{submittedData.age}</p>
                <h4>Place:</h4><p>{submittedData.place}</p>

            </div>)

        }
    </div>
  )
}

export default UserData