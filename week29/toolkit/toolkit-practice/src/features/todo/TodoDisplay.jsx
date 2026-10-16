import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "./todoSlice";

const TodoDisplay = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const todos = useSelector((state) => state.todos);

  if (todos.length === 0) {
    return <p>No todos available</p>;
  }


  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "incomplte") return todo.incomplted;
    return true;
  });

  console.log("===> ",filteredTodos);
  

  if (filteredTodos.length === 0) {
    return <p>No todos available</p>;
  }

  return (
    <div>
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo._id} style={{marginBottom:'5px'}}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={()=>dispatch(toggleTodo(todo._id))}
            />

            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                marginLeft: "10px",
              }}
            >
              {todo.text}
            </span>

            <button
              style={{ marginLeft: "10px" }}
              onClick={() => dispatch(deleteTodo(todo._id))}
            >
              delete🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoDisplay;
