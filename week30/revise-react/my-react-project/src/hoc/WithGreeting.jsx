

import React from 'react'

const withGreeting = (WrappedComponent) => {
  return function EnhancedComponent(props){
    return (
        <div>
            <h1>Helloo!!!</h1>
            <WrappedComponent {...props}/>
        </div>
    )
  }
}
export default withGreeting