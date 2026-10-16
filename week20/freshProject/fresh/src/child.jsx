import React from 'react'

const Child = (prop) => {
    console.log(prop.name);
    
  return (
    <div>
        <h1>Hi i am Child</h1>
        <h1>Name :{prop.name}</h1>
    </div>
  )
}

export default Child