import React, { useRef } from "react";

const Live = () => {
  const inputRef = useRef(null);
  const textRef = useRef(null);

  const handleChange = () => {

    textRef.current.innerText = inputRef.current.value
 
  }
  
  ;

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        ref={inputRef}
        onChange={handleChange}
        placeholder="Type somthing"
        style={{padding:"10px",fontSize:"16px"}}
      />

      <h1 ref={textRef}></h1>
    </div>
  );
};

export default Live;
