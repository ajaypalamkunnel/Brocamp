import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";

const Header = () => {

    const {user,handleLogout} = useContext(AuthContext)


 


  return (
    <>
      <div
      >
        <h3 style={{ backgroundColor: "black" }}>My app</h3>

        <h4>Welcome {user.isAuthenticated?user.name:""}</h4>

        {user.isAuthenticated&&
        <button onClick={handleLogout}>Logout</button>
        }

      </div>
    </>
  );
};

export default Header;
