import React from 'react'

const WithLoader = (WrappedComponent) => {
  return function EnhancedComponent({isLoading,...props}){
    if(isLoading) return <p>Loading...</p>
    return <WrappedComponent {...props}/>
  }
}

export default WithLoader