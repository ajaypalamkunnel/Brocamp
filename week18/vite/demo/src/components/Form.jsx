import React from 'react'
import { useState } from 'react'

function Form() {

    let [formData,setFormDate] = useState({
        fname: "",
        age:""
    })



    let [submittedData,setSubmittedData] = useState(null)



   
    function handleForm(ev){
        const {name,value} = ev.target
        setFormDate({...formData,[name]:value})
    }

    function handleSubmit(event){
        event.preventDefault()
        setSubmittedData(formData)
        setFormDate({fname:"",age:""})
    }
  return (
    <div>

        <form onSubmit={handleSubmit} action="">

            <label>Name: 
                <input name='fname' onChange={handleForm} value={formData.fname} type="text" />
            </label>
            <label>
                Age:
                <input name='age' onChange={handleForm} value={formData.age} type="text" />
            </label>
            <button type="submit">submit</button>

        </form>

        
        <div>
            {
                submittedData &&(
                    <div>
                        <h3>User Info</h3>

                        <h4>name:{submittedData.fname}</h4>
                        <h4>age:{submittedData.age}</h4>

                    </div>
                )
            }
        </div>


    </div>
  )
}

export default Form