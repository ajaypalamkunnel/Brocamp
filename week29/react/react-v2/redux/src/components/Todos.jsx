import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, completeTodo } from "../features/TodoSlice";

export const Todos = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todo.todos);

  console.log(todos);
  

  return (
    <div>
      <h1>My todos</h1>

      {todos.length > 0 ? (
        todos.map((todo) => (
          <div key={todo.id} style={{backgroundColor:"yellow", color:"black", border:"black 5px solid"}}>
            <h4 style={{textDecoration:todo.status?"line-through":"none"}}>{todo?.text}</h4>
            {todo?.status ? (
              <input type="checkbox" checked onClick={() => dispatch(completeTodo(todo.id))}/>
            ) : (
              <input type="checkbox" onClick={() => dispatch(completeTodo(todo.id))} />
            )}
          </div>
        ))
      ) : (
        <h1>no todos</h1>
      )}
    </div>
  );
};
