import React, { useRef } from "react";

const ChildCom = () => {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus()
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type somthing..." />

      <button onClick={() => handleFocus()}>Focus me</button>
    </div>
  );
};

export default ChildCom;
