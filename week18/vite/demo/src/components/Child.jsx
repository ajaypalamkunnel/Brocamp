import React from 'react'

function Child(props) {
  return (
    <div>
        <h4>Child component</h4>
        <p>My name is: {props.myname}</p>

    </div>

  )
}

export default Child