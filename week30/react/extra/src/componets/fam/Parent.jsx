import React, { useRef } from "react";
import MyInput from "./MyInput";

export const Parent = () => {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };
  const changeColor = () => {
    console.log()
    inputRef.current.style.backgroundColor = "orange"
  };

  return (
    <div>
      <h4>Forward Ref example</h4>
      <MyInput ref={inputRef} />
      <button onClick={focusInput}>focus</button>
      <button onClick={changeColor}>change clr</button>
    </div>
  );
};
