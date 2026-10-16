import React, { useContext } from "react";
import Header from "./Header";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { AuthContext } from "../context/AuthContextProvider";

const MyApp = () => {
  const { user } = useContext(AuthContext);
  console.log(user.isAuthenticated);
  
  return (
    <div>
      <Header />
      <Dashboard />
      {!user.isAuthenticated && <Login />}
    </div>
  );
};

export default MyApp;
