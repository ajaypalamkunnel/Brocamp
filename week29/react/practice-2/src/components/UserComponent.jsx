import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../features/DataFetch";

const UserComponent = () => {
  const [text,setText] = useState("")
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.user);
console.log("HI");

  return (
    <div>
      {text}
      <h3>User Data</h3>
      <button onClick={() => dispatch(fetchUser())}>fetch user</button>

      <p>status:{status}</p>

      <input type="text" onChange={(e)=>setText(e.target.value)} />


      {status === "succeeded" && (
        <div>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserComponent;
