import { memo, useState } from "react";

const Child = memo(({ name }) => {
    console.log("child rendered");
    
  return (
    <div>
      <h1>Name :{name}</h1>
    </div>
  );
});



const Parent = ()=>{
    const [count,setCount] = useState(0)

    return(
        <div>
            <button onClick={()=>setCount(count+1)}>Increment</button>

            <h1>{count}</h1>

            <Child name={"Ajay"}/>

        </div>
    )
}

export default Parent
