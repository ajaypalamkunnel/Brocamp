import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "../features/counterReducer";
import Search from "./Search";
import Posts from "./Posts";
const ReduxCounter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1 style={{ color: "violet" }}>ReduxCounter</h1>

      <Search/>

      <h1>{count}</h1>

      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>

      <Posts/>
    </div>
  );
};

export default ReduxCounter;
