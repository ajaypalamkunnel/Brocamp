import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [todos, setTodo] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const getTodos = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setTodo(data);
    } catch (error) {
      setError(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h1>ToDO</h1>
      {todos.map((todo)=>(
        <TodoItem key={todo.id} item={todo}/>
      ))}
    </div>
  );
};

export default Todo;
