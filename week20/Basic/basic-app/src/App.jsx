import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Child from "./components/Child";
import Parent from "./components/Parent";
import DemoUseReducer from "./components/DemoUseReducer";
import { use } from "react";
import DemoEffect from "./components/DemoEffect";
import One from "./Drill/One";
import ThemeProvider from "./usecontext/ThemeProvider";
import Page from "./usecontext/Page";
import ParentCom from "./components/usecallback/ParentCom";

function App() {
  const [isVisible, setVisible] = useState(true);

  return (
    <div>
      {/* <Child/> */}

      <Parent />

      <DemoUseReducer />

      <div>
        <button onClick={() => setVisible(!isVisible)}>
          Toggle EffectDemo Component
        </button>

        {isVisible && <DemoEffect />}
      </div>

      <One name={"ajay"} />

      <ThemeProvider>
        <Page />
      </ThemeProvider>
      <hr />

      <ParentCom/>
    </div>
  );
}

export default App;
