import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./userSlice";

const User = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>User:{user.loggedIn ? user.name : "Guest"}</h1>

      {!user.loggedIn ? (
        <button onClick={() => dispatch(login("Ajay"))}>Login</button>
      ) : (
        <button onClick={() => dispatch(logout())}>Logout</button>
      )}
    </div>
  );
};

export default User;
