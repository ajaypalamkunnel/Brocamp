import "./App.css";
import CheckboxDisplay from "./components/CheckboxDisplay";
import ToggleButton from "./components/ToggleButton";
import { CheckBoxProvider } from "./context/CheckBoxContext";


function App() {
 
  return (
    <>

    <CheckBoxProvider>

      <h1>Check box preovider</h1>

      <CheckboxDisplay/>
      <ToggleButton/>

    </CheckBoxProvider>
     
    
    </>
  );
}

export default App;
