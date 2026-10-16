import React, { useContext } from "react";
import { ToggleContext } from "../contex/ToggleContexProvider";

const Button = () => {
  const {handleIsChecked} = useContext(ToggleContext);

  return (
    <div>
      <button onClick={()=>handleIsChecked(true)}>click to change</button>
    </div>
  );
};

export default Button;
