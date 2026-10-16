import React from 'react'


const Counter = React.memo(({count}) => {
    console.log("Rendering Counter");
  return (
    <div>
        <h1>{count}</h1>
    </div>
  )
}
)
export default Counter