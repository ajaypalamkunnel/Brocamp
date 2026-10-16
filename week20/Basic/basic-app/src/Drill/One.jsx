import React from 'react'
import Two from './Two'

const One = (name) => {
    console.log(name);
    
  return (
    <div>

        <Two name={name}/>
    </div>
  )
}

export default One