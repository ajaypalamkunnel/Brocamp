import React from "react";
import Display from "./Display";

const Two = (prop) => {
    console.log("==>",prop.name);
    
  return (
    <div>
      <Display name={prop.name} />
    </div>
  );
};

export default Two;
