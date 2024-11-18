// src/components/Todo/Todo.js
import React, { useState } from 'react';
import './Todo.css';  // Import the Todo.css file

function Todo({ todo, onToggle, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleSave = () => {
    // Save the edited text (you can add an onSave function if needed)
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
        ) : (
          <span onClick={() => onToggle(todo.id)}>{todo.text}</span>
        )}
      </div>
      <div className="todo-actions">
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <button className="delete-button" onClick={() => onDelete(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
