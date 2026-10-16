import React from "react";

const Display = (prop) => {
    console.log("====]]]]",prop.name.name);
    
  return (
    <div>
      <h1>Data: {prop.name.name}</h1>
    </div>
  );
};

export default Display;
