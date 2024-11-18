// src/components/Todo/TodoList.js
import React from 'react';
import Todo from './Todo';  // Import the Todo component
import './TodoList.css';   // Import the TodoList.css file

function TodoList({ todos, onToggle, onDelete }) {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TodoList;
