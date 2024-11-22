import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

const TodoList = ({ tasks = [], handleDeleteTask, handleToggleTask }) => {
  return (
    <div className="todo-list">
      {Array.isArray(tasks) && tasks.length > 0 ? (
        tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={handleDeleteTask}
            toggleTask={handleToggleTask}
          />
        ))
      ) : (
        <p>No tasks added yet</p>
      )}
    </div>
  );
};

export default TodoList;