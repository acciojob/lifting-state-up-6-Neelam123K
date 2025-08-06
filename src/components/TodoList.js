import React from 'react';

const TodoList = ({todos, handleCOmplete}) => {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => handleCOmplete(todo.id)}>
            complete
          </button>
        </li>
      )
            )}
    </ul>
  );
}

export default TodoList;
