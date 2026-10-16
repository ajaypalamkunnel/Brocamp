import React, { useState } from 'react'


const MyComponent = ({name})=>{
    console.log("Rendering my component");
    return (
        <div>
            <h2>Hello {name}</h2>
        </div>
    )
    
}
const MemoizedComponent = React.memo(MyComponent)

const RDotMemoDemo = () => {

    const [count,setCount] = useState(0)
    const [name,setName] = useState('Ajay');
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Increase Count: {count}</button>
        <button onClick={()=>setName('Silpa')}>Change Name: {name}</button>
        <MemoizedComponent name={name} />
    </div>
  )
}

export default RDotMemoDemo