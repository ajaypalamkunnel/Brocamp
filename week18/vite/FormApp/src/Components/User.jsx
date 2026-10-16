import React, { useState } from 'react'

const User = () => {

    let [formData,setFormData] = useState({fname:'',age:''})
    let [submit,setSubmit] = useState(false)

    const handleChange = (event)=>{

        let {name,value} = event.target
        console.log(event.target.value);
    

        setFormData({...formData,[name]:value})

    }

    const  handleSubmit=(event) =>{
        event.preventDefault()
        setSubmit(true)
       
    }



  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input placeholder='Name' type="text" name='fname' value={formData.fname} onChange={handleChange}  /><br /><br />
            <input placeholder='age' type="text" name='age' value={formData.age} onChange={handleChange}  /><br /><br />
            <button>submit</button>
            {submit&&
                (<h3>Name : {formData.fname} === Age : {formData.age}</h3>)
            }
        </form>
    </div>
  )
}

export default User