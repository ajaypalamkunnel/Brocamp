import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CheckBox from "./components/CheckBox";
import Button from "./components/Button";
import CheckBoxContextProvider from "./context/CheckBoxContextProvider";
import Counter from "./features/Counter";
import Todo from "./features/Todo";
import WithGreeting from "./hoc/WithGreeting";
import MyComponent from "./simpleComponents/MyComponent";
import WithLoading from "./hoc/WithLoading";
import User from "./simpleComponents/User";
import SimpleCounter from "./simpleComponents/SimpleCounter";
import Focus from "./useref/Focus";
import StopWatch from "./useref/StopWatch";
import AutoFocs from "./useref/AutoFocs";
import Parent from "./forwardRef/parent";
import Main from "./forwardRef/Main";
import CounterPro from "./components/CounterPro";

function App() {
  const [count, setCount] = useState(0);
  const [loading,setLoading] = useState(true)

  const EnhancedComponent = WithGreeting(MyComponent)

  const EnhancedUserProfile = WithLoading(User)

  useEffect(()=>{

    setTimeout(()=>{
      setLoading(false)
    },2000)

  },[])

  return (
    <>
   
      <CheckBoxContextProvider>
        {/* <CheckBox />
        <Button />
        <Counter/> */}

        {/* <Todo/> */}


        {/* <EnhancedComponent name="Ajay"/>

        <EnhancedUserProfile loading={loading} name="Ajay PS"/>

        <SimpleCounter/>

        <Focus/>

        <StopWatch/>

        <AutoFocs/>

        <Parent/>

        <Main/> */}


        <CounterPro/>

      </CheckBoxContextProvider>
    </>
  );
}

export default App;
