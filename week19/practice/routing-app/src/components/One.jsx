import React from 'react'
import Two from './Two'

const One = (prps) => {
  return (
    <div style={{backgroundColor:'red', width:'300px'}}>
        <h1>Layer One</h1>
        <Two />
    </div>
  )
}

export default One