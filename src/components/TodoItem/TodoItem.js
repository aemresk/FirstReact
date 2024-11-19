import React from 'react';
import './TodoItem.css';

const TodoItem = ({ task, toggleActivation, deleteTask }) => {
  return (
    <div className={`todo-item ${!task.active ? 'inactive' : ''}`}>
      <input
        type="checkbox"
        checked={!task.active}  // Invert the active state for the checkbox
        onChange={() => toggleActivation(task.id)}  // Toggle active state
        className="task-checkbox"
      />
      <span className={`task-text ${!task.active ? 'line-through' : ''}`}>
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)} className="delete-button">
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
