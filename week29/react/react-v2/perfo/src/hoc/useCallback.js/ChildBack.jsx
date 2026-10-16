import React from 'react'

const ChildBack = React.memo(({onClick}) => {

    console.log("child rendered");
    
  return (
    <div>

        <button onClick={onClick}>click Me I'm UseCallback</button>
        
    </div>
  )
})

export default ChildBack