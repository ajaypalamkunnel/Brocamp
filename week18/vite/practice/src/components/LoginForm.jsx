import React, { useState } from 'react'

function LoginForm() {





    const [formData,setFormData] = useState({
        userName:"",
        password:"",
        email:""
    })

    const [error,setErrors] = useState({});
    const [successMessage,setSuccessMessage] = useState("")


    function validateForm(){

        const newErrors = {}

        if(formData.userName.length < 5){
            newErrors.userName = ("Username must be at least 5 characters long.")
            
        }
        if(formData.password.length < 8){
            newErrors.password = ("Password must be at least 8 characters long.")
            
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailRegex.test(formData.email)){
            newErrors.email = "Please enter a valid email address.";
        }

        return newErrors
    } 

    function handleSubmit(event){
        event.preventDefault()

        const validationErrors = validateForm()

        if(Object.keys(validationErrors).length === 0){
            setSuccessMessage("Form Submitted Successfully!")
            setErrors({});
            setFormData({userName:"",email:"", password:""})
        }else{
            setSuccessMessage("");
            setErrors(validationErrors)
        }

        

    }

    function handleChange(event){
        let {name,value} = event.target
        setFormData({...formData,[name]:value})
    }


    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#001f3f',
                color: '#ffffff',
            }}
        >
            <form
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '400px',
                    padding: '20px',
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    color: '#333',
                }}
                onSubmit={handleSubmit}
            >
                <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#001f3f' }}>
                    Sign Up
                </h2>
    
                <label style={{ marginBottom: '10px', fontWeight: 'bold' }}>
                    UserName:
                    <input
                        type="text"
                        name="userName"
                        onChange={handleChange}
                        value={formData.userName}
                        style={{
                            width: '100%',
                            padding: '8px',
                            margin: '5px 0',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                        }}
                    />
                    {error.userName && <p style={{ color: 'red', fontSize: '12px' }}>{error.userName}</p>}
                </label>
    
                <label style={{ marginBottom: '10px', fontWeight: 'bold' }}>
                    Email:
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                        style={{
                            width: '100%',
                            padding: '8px',
                            margin: '5px 0',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                        }}
                    />
                    {error.email && <p style={{ color: 'red', fontSize: '12px' }}>{error.email}</p>}
                </label>
    
                <label style={{ marginBottom: '10px', fontWeight: 'bold' }}>
                    Password:
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={formData.password}
                        style={{
                            width: '100%',
                            padding: '8px',
                            margin: '5px 0',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                        }}
                    />
                    {error.password && (
                        <p style={{ color: 'red', fontSize: '12px' }}>{error.password}</p>
                    )}
                </label>
    
                <button
                    type="submit"
                    style={{
                        padding: '10px 15px',
                        marginTop: '20px',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                    }}
                >
                    Submit
                </button>
            </form>
    
            {successMessage && (
                <p style={{ marginTop: '20px', color: 'green', fontSize: '14px' }}>
                    {successMessage}
                </p>
            )}
        </div>
    );
    
}

export default LoginForm