import React, { useRef, useState } from "react";

let intervalId = null;
let counter = 0

const CounterPro = () => {
  const [count, setCounter] = useState(0);

  const counterRef = useRef(0)

  const handleIncrement = () => {

    intervalId = setInterval(() => {
      setCounter((prev) => prev + 1);
      counter++
      
     
    }, 1000);
  };

 if(count==10||counter==-1){
    clearInterval(intervalId)
   
 }
  

  const handleStop = () => {

    clearInterval(intervalId);
  };

  const handleDecrement = () => {
    intervalId = setInterval(() => {
      setCounter((prev) => prev - 1);
      counter--
    }, 1000);
  };



  return (
    <div>
      CounterPro
      <h1 ref={counterRef}>{count}</h1>
      <button onClick={() => handleIncrement()}>Increament</button>
      <button onClick={() => handleStop()}>stop</button>
      <button onClick={() => handleDecrement()}>Decrement</button>
    </div>
  );
};

export default CounterPro;
