import React, { useRef, useState } from "react";

const Form = () => {
  const [myNum, setMynum] = useState(0);
  const [myText, setMyText] = useState(0);
  const [count,setCount] = useState()

  const numRef = useRef()
  const textRef = useRef()


  const getNumBox = () =>{
    console.log("hello");

   let num = numRef.current.value

   console.log(num+4)
   setCount(num)
    
    
}
const getTextBox = () =>{
      console.log("world");

  }

  return (
    <>
      <input ref={numRef} value={myNum} type="number" onChange={(e)=>setMynum(e.target.value)}/>
      <input ref={textRef} value={myNum} type="text" onChange={(e)=>setMyText(e.target.value )}/>

    <h3>Value is : {myNum}</h3>
    <h1>count: {count}</h1>
    <button onClick={()=>getNumBox()}>Rupees</button>
    <button onClick={()=>getTextBox()}>Dollar</button>
    </>
  );
};

export default Form;
