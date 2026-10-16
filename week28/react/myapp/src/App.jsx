import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Child from "./hooks/Child";
import UseMemoEx from "./hooks/useMemoEx";
import UseMouseMove from "./customhooks/UseMouseMove";
import Parent from "./components/Parent";
import UserForm from "./components/UserForm";
import MyParent from "./components/MyParent";

function App() {
  
  return (
    <>
     <MyParent/>
    </>
  );
}

export default App;
