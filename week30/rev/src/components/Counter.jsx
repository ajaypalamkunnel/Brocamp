import React from "react";
import { useContext } from "react";
import { counterContext } from "../context/CounterContextProvider";

const Counter = () => {
  const { count } = useContext(counterContext);
  return (
    <div>
        <h3>Counter</h3>
      <h1>{count}</h1>
    </div>
  );
};

export default Counter;
