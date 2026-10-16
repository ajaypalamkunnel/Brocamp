import React from 'react'

const ChildCom =React.memo (({handleClick}) => {
    console.log('Child Rendered');
  return (
    <div>
        <button onClick={handleClick}>Click me child</button>
    </div>
  )
})

export default ChildCom