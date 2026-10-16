import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./themeSlice";

const Theme = () => {
    
    const theme = useSelector((state) => state.theme.mode);
    console.log(theme);
    
    const dispatch = useDispatch();
    
    const styles = {
      backgroundColor: theme === "dark" ? "#222" : "#eee",
      color: theme === "dark" ? "#fff" : "#000",
      padding: "30px",
      textAlign: "center",
    };
  return(
    <div style={styles}>

        <h2>Current Theme :{theme}</h2>

        <button onClick={()=>dispatch(toggleTheme())}>Toggle Theme</button>

    </div>
  )
};

export default Theme;
