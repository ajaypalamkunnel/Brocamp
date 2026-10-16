import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "5.4rem",
        backgroundColor: "orange",
        display: "flex",
        alignItems: "center",
        justifyContent:'center',
        
      }}
    >
      <nav style={{display:"flex",gap:10}}>
        <NavLink to="/home">Home</NavLink>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
};

export default Navbar;
