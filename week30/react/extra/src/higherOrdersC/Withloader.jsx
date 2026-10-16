

import React from 'react'

const Withloader = (WrappedComponent) => {
  return function({isLoading,...prop}){
    if(isLoading){
        return <p>Loading...</p>
    }
    return <WrappedComponent {...prop}/>

  }
}

export default Withloader