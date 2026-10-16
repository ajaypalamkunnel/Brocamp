import React from 'react'

const WithLoading = (WrappedComponent) => {
  return ({name,loading}) =>{
    
    
    if(loading){
      return <p>loading...</p>
    }
    return <WrappedComponent name={name}/>
  }
}

export default WithLoading