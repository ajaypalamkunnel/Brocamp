import React from 'react'

const WithLogger = (WrappedComponent) => {
  return function(props){
    console.log("component is rendered with : ",props.name);
    return <WrappedComponent {...props}/>
  }
}

export default WithLogger