import React from 'react'

const Child = React.memo(({name}) => {
    console.log("cahild re-rendered");
    
  return (
    <div>Child hello {name}</div>
  )
})

export default Child