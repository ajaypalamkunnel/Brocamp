import { useReducer } from "react";

const initialState = 0;

const reducer = (state = initialState, action) => {
  switch (action) {
    case "increment":
      return (state = state + 1);

    case "decrement":
      return (state = state - 1);

    case "reset":
      return (state = 0);

    default:
      return state;
  }
};

const UseReducerPractice = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>use reducer</h1>

      <h2>{state}</h2>

      <button onClick={()=>dispatch("increment")}>Increment</button>
      <button onClick={()=>dispatch("decrement")}>Decrement</button>
      <button onClick={()=>dispatch("reset")}>Reset</button>


    </>
  );
};

export default UseReducerPractice;
