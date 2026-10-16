import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function PersonalCounter(){

    const [count,setCount] = useState(0)

    useEffect(()=>{
        console.log(`UseEffect Counter ${count}`);
        
    },[count])
    return(
        <div>
            <h2>Personal Couner</h2>
            <h1>----[{count}]----</h1>
            <button onClick={()=>{setCount(count+1)}}>Increment</button>
        </div>
    )
}

export default PersonalCounter