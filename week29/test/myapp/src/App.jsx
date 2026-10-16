
import "./App.css";

import { CheckBox } from "./componets/CheckBox";
import Button from "./componets/Button";
import { ToggleContexProvider } from "./contex/ToggleContexProvider";

function App() {
  

  return (
    <>
      <h1>
        hello
        
      </h1>
        <ToggleContexProvider>
          <CheckBox />

          <Button />
        </ToggleContexProvider>
      
    </>
  );
}

export default App;
