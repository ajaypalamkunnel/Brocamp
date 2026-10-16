import React from 'react'

const WithGreeting = (WrappedComponent) => {
 return (prop)=>{
    return(
        <div>
            <p>Welcome to our site</p>
            <WrappedComponent {...prop}/>
        </div>
    )
 }
}

export default WithGreeting