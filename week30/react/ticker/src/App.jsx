import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./counter/Counter";
import CounterContextProvider from "./context/CounterContextProvider";
import Button from "./counter/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CounterContextProvider>
        <Counter />
        <Button/>
      </CounterContextProvider>
    </>
  );
}

export default App;
