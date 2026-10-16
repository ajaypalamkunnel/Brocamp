import React, { useState } from "react";
import Child from "./child";

const Parent = () => {
    const [count,setCount] = useState(0)
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>incremet{count}</button>
      <Child name="Ajay" />
    </div>
  );
};

export default Parent;
