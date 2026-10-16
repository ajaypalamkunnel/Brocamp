    import React from 'react'
    import { useState } from 'react'

    const FeedBackForm = () => {

        const [formData,setFormData] = useState({
            name:"",
            email:"",
            feedBack:"",
        })
    
        const [errors,setErrors] = useState({})

        const handleChange = (event) =>{
            const {name,value} = event.target;
            setFormData({...formData,[name]:value})
        }

        const [submitForm,setSubmitForm] = useState('')



        const validateForm = () =>{
            let newError = {}
            let testEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

            if(!formData.name.trim()){
                newError.name = 'Name is required'
            }

            if(!formData.email.trim()){
                newError.email = 'email is required'
            }else if(!testEmail.test(formData.email)){
                newError.emailValidation = 'Enter valid Email'
            }

            

            if(!formData.feedBack.trim()){
                newError.feedBack = 'Feedback is required'
            }

            return newError
        }

        const handleSubmit = (event) =>{
            event.preventDefault()

            let isValid = validateForm()

            if(Object.keys(isValid).length === 0){
                setSubmitForm('Form submited succesfully')
                setErrors({})
                setFormData({name:"",email:"",feedBack:""})
            }else{
                setErrors(isValid)

            }
        }  



    return (
        <div>

            <div>
                <h1>FeedBack please</h1>

                <form style={{display:'flex', flexDirection:'column',gap:"10px"}} onSubmit={handleSubmit}>
                    <label>
                        Name : <input value={formData.name} type="text" name='name' onChange={handleChange} />
                        {errors&&(<p style={{color:'red'}}>{errors.name}</p>)}
                    </label>
                    <label>
                        Email : <input value={formData.email} type="text" name='email' onChange={handleChange} />
                        {errors&&(<p style={{color:'red'}}>{errors.email}</p>)}
                        {errors&&(<p style={{color:'red'}}>{errors.emailValidation}</p>)}
                    </label>
                    <label>
                    Feedback : <textarea name="feedBack" value={formData.feedBack} onChange={handleChange}></textarea>
                    {errors&&(<p style={{color:'red'}}>{errors.feedBack}</p>)}
                    </label>

                    <button type='submit' >Submit</button>
                </form>


                {submitForm && <h1 style={{ color: 'green' }}>{submitForm}</h1>}

                
            </div>


        </div>

    )
    }

    export default FeedBackForm