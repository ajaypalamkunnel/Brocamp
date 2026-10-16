import React, { forwardRef } from "react";

const MyInput = forwardRef((props, ref) => {
  return (
    <div ref={ref} style={{height:"40px", padding:"20px", backgroundColor:"blue"}}>
      <input type="text" ref={ref} {...props} />
    </div>
  );
});

export default MyInput;
