import { useCallback, useState } from "react";
import React from "react";


const Button = React.memo(({onClick,children})=>{
    console.log("Rendering button: ",children)
    return<button onClick={onClick}>{children}</button>
})


const UseApp = () => {

    const [count,setCount] = useState(0)
    const [text,setText] = useState("")




    const handleIncement = useCallback(() =>{
        setCount(pre=>pre+1)
    },[])

    
  return (
    <div>

        <h3>count: {count}</h3>

        <Button onClick={handleIncement}>increment</Button>

        <input type="text" onChange={(e)=>setText(e.target.value)} />

       

    </div>
  )
}

export default UseApp