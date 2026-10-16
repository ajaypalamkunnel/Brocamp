import React, { useContext, useState } from "react";
import { todoContext } from "../context/TodocontextProvider";

const Todo = () => {
  const [text, setText] = useState("");
  const { data, addTodo, remove } = useContext(todoContext);

  const handleText = () => {
    addTodo(text);
    setText("");
  };

  console.log("data : ", data);

  return (
    <div>
      <h1>TODO</h1>
      <div style={{ backgroundColor: "brown" }}>
        {data.map((item, index) => (
          <>
          <div style={{border:"2px solid black", display:"flex", justifyContent:"space-between"}}>
            <h4  key={item.id}>{item.data}</h4>
            <button onClick={()=>remove(item.id)}>😒</button>

          </div>
          </>
        ))}
      </div>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleText}>Add</button>
    </div>
  );
};

export default Todo;
