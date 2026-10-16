import React, { useContext } from "react";
import { ToggleContext } from "../contex/ToggleContexProvider";


export const CheckBox = () => {

    const {isCheck} = useContext(ToggleContext)

    console.log("--",isCheck)


  return (
    <div>
      <label >
        checkbox
        <input type="checkbox" checked={isCheck} readOnly />
      </label>
    </div>
  );
};
