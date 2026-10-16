import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useRef } from "react";
import StopWatch from "./components/StopWatch";
import CounterContextProvider from "./context/CounterContextProvider";
import Counter from "./components/Counter";
import Button from "./components/Button";
import Cards from "./components/Cards";
import ReduxCounter from "./components/ReduxCounter";
import { Route, Routes } from "react-router-dom";
import Users from "./components/Users";

function App() {
  return (

    <>
      {/* <StopWatch />

      <CounterContextProvider>
        <Counter />
        <Button />

        <Cards />
      </CounterContextProvider>

      <ReduxCounter /> */}
      <Routes>
        
        <Route path="/home" element={<ReduxCounter/>}/>
        <Route path="/users" element={<Users/>}/>


      </Routes>



    </>
  );
}

export default App;
