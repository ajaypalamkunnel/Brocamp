import React from 'react'

const Title = () => {
    console.log('rendering title');
    
  return (
    <div>
        <h2>UseCallback Hook </h2>
    </div>
  )
}

export default React.memo(Title)