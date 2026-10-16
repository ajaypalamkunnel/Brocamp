import React,{useState} from "react";

const Counter = ()=>{

    const [count,setCount] = useState(4)

    return(
        <div>

            <button>+</button>
            <h3>{count}</h3>
            <button>-</button>

        </div>
    )
    

}