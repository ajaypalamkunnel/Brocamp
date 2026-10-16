import React, { useContext } from "react";
import { CheckContext } from "../context/CheckContexProvider";

const CheckBox = () => {

    const {isChecked} = useContext(CheckContext)


  return (
    <div>
      <label>
        Check box
        {isChecked? <input type="checkbox" checked />:<input type="checkbox"  />}
        
      </label>
    </div>
  );
};

export default CheckBox;
