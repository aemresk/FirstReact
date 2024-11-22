import React from 'react';
import './TodoItem.css';

const TodoItem = ({ task = {}, deleteTask, toggleTask }) => {
  const { id = 0, title = "Untitled", isDone = false, priority = 1 } = task;

  const priorityMapping = {
    0: 'high',
    1: 'medium',
    2: 'low',
  };

  return (
    <div className={`todo-item ${isDone ? 'done' : ''}`}>
      <input
        type="checkbox"
        checked={isDone}
        onChange={() => toggleTask(id)}
        className="task-checkbox"
      />
      <span className={`priority-bullet ${priorityMapping[priority] || 'unknown'}`}></span>
      <span className={`task-text ${isDone ? 'line-through' : ''}`}>
        {title}
      </span>
      <button onClick={() => deleteTask(id)} className="delete-button">
        Delete
      </button>
    </div>
  );
};

export default TodoItem;