import React from "react";
import { TodoProvider } from "./TodoContext";
import TodoList from "./TodoList";
import "./../styles/App.css";

const App = () => {
  return (
    <TodoProvider>
      <div>
        <h1>Todo App</h1>
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
