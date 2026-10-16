import { lazy, Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HelloWithLogger from "./componets/Wrapper";
import UserWithLoader from "./componets/UserWithLoader";
import { Parent } from "./componets/fam/Parent";
import { Dashboard } from "./componets/fam/Dashboard";
import ChildCom from "./components/ChildCom";
import Cards from "./components/Cards";

function App() {
  const Numbers = lazy(() => import("./components/List"));
  const [show, setShow] = useState(false);

  return (
    <>
      {/* <HelloWithLogger name="AJay" />

     <UserWithLoader isLoading={true} name="Ajay"/>
     <UserWithLoader isLoading={false} name="Ajay"/>

     <Parent/>

     <Dashboard/> */}

      <ChildCom />

      <Suspense fallback={<p>Loading.....</p>}>{show && <Numbers />}</Suspense>

      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>

      <Cards/>
    </>
  );
}

export default App;
