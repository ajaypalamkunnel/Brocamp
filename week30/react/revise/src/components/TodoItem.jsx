import React from "react";

const TodoItem = ({ item }) => {
  return (
    <div className="todo-item">
      <p>User ID :{item.userId}</p>
      <h4>{item.title}</h4>
      <div
        className={`status-dot ${item.completed ? "completed" : "pending"}`}
      ></div>
    </div>
  );
};

export default TodoItem;
