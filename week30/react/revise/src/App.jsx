import React, { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Parent from "./components/Parent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Ref from "./components/Ref";
import UserContext from "./context/UserContext";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import GrandChild from "./components/GrandChild";
import Todo from "./components/todo";

function App() {
  const [count, setCount] = useState(0);
  const About = React.lazy(() => import("./components/About"));
  return (
    <>
      <UserContext>
        <Router>
          <Suspense fallback={<div>Loading.....</div>}>
            <Routes>
              <Route path="/" element={<h1>Home</h1>} />
              <Route path="/parent" element={<Parent />} />
              <Route path="/about" element={<About />} />
              <Route path="/ref" element={<Ref />} />
              <Route path="/nav" element={<Navbar/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/grandchild" element={<GrandChild/>}/>
              <Route path="/todo" element={<Todo/>}/>
            </Routes>
          </Suspense>
        </Router>
      </UserContext>
    </>
  );
}

export default App;
