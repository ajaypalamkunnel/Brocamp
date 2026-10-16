import React, { Suspense, useState,lazy } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Users from "./components/Users";
import Home from "./components/Home";
import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Parent from "./hoc/memo/Parent";
import ParentBack from "./hoc/useCallback.js/ParentBack";
import Exp from "./hoc/useMemo/Exp";
import UsersData from "./components/UsersData";
import ParentC from "./child-parent-communi/ParentC";
import CheckBoxContexProvider from "./contexts/CheckBoxContexProvider.jsx";
import CheckBox from "./components/CheckBox";
import Button from "./components/Button";
function App() {
  const [count, setCount] = useState(0);

  const Expload = lazy(()=>import("./hoc/useMemo/Exp"))

  

  return (
    <>
      
        {/* <Header /> */}

        {/* <Routes>
          <Route path="/users" element={<Home />} />
          <Route path="/memo" element={<Parent />} />
          <Route path="/usecallback" element={<ParentBack />} />
          <Route path="/usememo" element={
            
            <Suspense fallback={<h5>loading...</h5>}>
              <Exp/>

            </Suspense>
            

             } />
          
        </Routes> */}

        <UsersData/>

        <ParentC/>

        <CheckBoxContexProvider>
          <CheckBox/>
          <Button/>

        </CheckBoxContexProvider>
      
    </>
  );
}

export default App;
