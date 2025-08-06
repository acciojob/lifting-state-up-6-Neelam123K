import React from "react";
import { useTodo } from "./TodoContext";

const TodoList = () => {
  const { todos, handleComplete } = useTodo();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {/* //style={{ textDecoration: todo.completed ? "line-through" : "none" }} */}
          <span>  
            {todo.text}
          </span>
          {!todo.completed && (
            <button onClick={() => handleComplete(todo.id)}>Completed</button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
