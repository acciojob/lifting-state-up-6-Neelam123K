import React from 'react';

const TodoList = ({todos, handleComplete}) => {
  return (
    <li key={todos.id} style={{ textDecoration: todos.completed ? 'line-through' : 'none' }}>
  {todos.text}
  {!todos.completed && (
    <button onClick={() => handleComplete(todo.id)}>
      Complete
    </button>
  )}
</li>
  );
}

export default TodoList;
