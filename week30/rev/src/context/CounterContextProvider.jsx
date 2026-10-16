import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const counterContext = createContext();

const CounterContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <counterContext.Provider value={{ count, setCount }}>
      {children}
    </counterContext.Provider>
  );
};

export default CounterContextProvider;
