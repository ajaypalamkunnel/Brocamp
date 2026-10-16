import { lazy, Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyApp from "./components/MyApp";
import AuthContextProvider from "./context/AuthContextProvider";

import CartContextProvider from "./context/CartContextProvider";
import CartSummary from "./components/CartSummary";
import Parent from "./optimization/Parent";
import ParentCom from './optimization/useCallback/Parent'
import Result from "./optimization/useMemo/Result";
import Form from "./components/ref/Form";
import Live from "./components/ref/Live";
import ForwardParent from "./components/ref/ForwardParent";
import CartProvider from "./E-com/CartProvider";
import Cart from "./E-com/Cart";
import Products from "./E-com/Products";
import { CheckContexProvider } from "./Form/context/CheckContexProvider";
import CheckBox from "./Form/components/CheckBox";
import { Button } from "./Form/components/Button";

function App() {
  const [count, setCount] = useState(0);

  const Home = lazy(() => import("./app-component/Home"));
  const About = lazy(() => import("./app-component/About"));

  const [page, setPage] = useState("home");

  return (
    <>
      {/* <AuthContextProvider>
        <MyApp />
      </AuthContextProvider>
      <div style={{display:"flex", alignItems:"center"}}>
        <CartContextProvider>
          <CartSummary/>
          <Products />
        </CartContextProvider>
      </div> */}

      {/* <h1>Lazy loading example</h1>

      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("about")}>About</button>
      <button onClick={() => setPage("memo")}>Memo</button>

      <Suspense fallback={<p>Loadiing compoenetn...</p>}>
        {page === "home" && <Home />}
        {page === "about" && <About />}
        {page === 'memo' && <Parent/>}


      </Suspense>

      <ParentCom/>
      <Result/>

      <Form/>

      <Live/>

      <ForwardParent/> */}

      {/* <CartProvider>

        <Cart/>
        <Products/>

      </CartProvider> */}

      <CheckContexProvider>

        <CheckBox/>
        <Button/>


      </CheckContexProvider>



    </>
  );
}

export default App;
