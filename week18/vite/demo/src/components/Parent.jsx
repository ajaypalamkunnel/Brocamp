import React from 'react'
import Child from './Child'

function Parent() {
  return (
    <div>
        <h3>Parent component</h3>

        <Child myname="Ajay"/>
    </div>
  )
}

export default Parent