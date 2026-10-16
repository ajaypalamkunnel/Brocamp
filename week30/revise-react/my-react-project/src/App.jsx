import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import withGreeting from "./hoc/withGreeting";
import User from "./components/User";
import WithLoader from "./hoc/WithLoader";
import DataList from "./components/DataList";
import ContextProvider from "./context/ContextProvider";
import ContextReader from "./components/ContextReader";

function App() {
  const [count, setCount] = useState(0);

  const EnhancedUser = withGreeting(User);
  const data = ["React", "Redux", "Node"];
  const DataListWithLoader = WithLoader(DataList);

  const handleRightClick = (e)=>{
    e.preventDefault()
    // alert("right click privented")
  }

  useEffect(() => {
  const handleKeyDown = (e) => {
    // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    if (
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && ["I", "J"].includes(e.key.toUpperCase())) ||
      (e.ctrlKey && e.key.toUpperCase() === "U")
    ) {
      e.preventDefault();
      alert("Inspecting is disabled!");
    }
  };

  document.addEventListener("keydown", handleKeyDown);
  return () => document.removeEventListener("keydown", handleKeyDown);
}, []);

  return (
    <>
      <div onContextMenu={handleRightClick}>
      <EnhancedUser name="Ajay" />

      <DataListWithLoader isLoading={false} data={data} />
      <ContextProvider>
        <ContextReader />
      </ContextProvider>

        <h1>hellooo</h1>
      </div>
    </>
  );
}

export default App;
