

import React from 'react'

const WithLoading = (WrappedComponent) => {
  return function EnhancedComponent(props){
    //Enhancing
    if(props.isLoading){
      return <div>Loading..please wait</div>
    }
    return <WrappedComponent {...props}/>
  }
}

export default WithLoading