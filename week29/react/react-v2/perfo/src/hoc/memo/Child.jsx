import React from 'react'

const Child = React.memo(({name}) => {
    console.log("child renderd");
  return (
    <div>child {name}</div>
  )
})

export default Child