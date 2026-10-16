import React, { useReducer } from "react";

const initialState = {
  count: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    default:
      return state;
  }
};
const State = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
        <h1>count : {state.count}</h1>

        <button onClick={()=>dispatch({type:'increment'})}>+</button>
        <button onClick={()=>dispatch({type:'decrement'})}>-</button>
    </div>
  )
};

export default State;
