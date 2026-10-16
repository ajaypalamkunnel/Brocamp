import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [message, setMessage] = useState("");

  const handleChildMessage = (message) => {
    setMessage(message);
  };

  return (
    <div>

      <h4>Parent</h4>
      <h2>Child Message: {message}</h2>
      <Child sendMsgToParent={handleChildMessage} />
    </div>
  );
};

export default Parent;
