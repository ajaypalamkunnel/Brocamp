import React, { useContext, useEffect, useState } from "react";
import { GlobalColorContext } from "../Context/colorChanger";

const DemoUseEffectTwo = () => {

  const {color,colorChanger} = useContext(GlobalColorContext)
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted cleanup function");
    };
  }, [count]);

  return (
    <div style={{backgroundColor:color}}>
      <h1>Welcome to React!</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>

      <button  onClick={colorChanger}>Color change</button>
    </div>
  );
};

export default DemoUseEffectTwo;
