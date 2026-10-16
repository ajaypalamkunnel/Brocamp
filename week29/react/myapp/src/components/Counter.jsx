import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  decremetCount2ByFive,
  incremeCount2ByFive,
} from "../redux/counter/action";
const Counter = () => {
  const count = useSelector((state) => state.count);
  const count2 = useSelector((state) => state.count2);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <h1>{count2}</h1>

      <div>
        <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button style={{marginLeft:"50px"}} onClick={() => dispatch(decrement())}>
            Decrement
          </button>
          <br />
        </div>
        <div>
          <button onClick={() => dispatch(incremeCount2ByFive())}>
            Increment C2 By 5
          </button>
          <button
            style={{ marginLeft: "50px" }}
            onClick={() => dispatch(decremetCount2ByFive())}
          >
            Decrement C2 By 5
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
