import React from 'react';
import './TodoItem.css';

const TodoItem = ({ task, toggleActivation, deleteTask }) => {
  return (
    <div className={`todo-item ${task.done ? 'done' : ''}`}>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => toggleActivation(task.id)}
        className="task-checkbox"
      />
      <span className={`task-text ${task.done ? 'line-through' : ''}`}>
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)} className="delete-button">
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
