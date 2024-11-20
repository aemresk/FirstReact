import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import useTaskStore from '../../zustand/store';
import './TodoList.css';

const TodoList = ({ tasks }) => {
  const { toggleTask, deleteTask } = useTaskStore();

  const sortedTasks = tasks.sort((a, b) => {
    if (a.done !== b.done) {
      return a.done ? 1 : -1;
    }
  
    const priorityOrder = { high: 1, medium: 2, low: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  const handleToggleActivation = (taskId) => {
    toggleTask(taskId);
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  return (
    <div className="todo-list">
      {sortedTasks.length > 0 ? (
        sortedTasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            toggleActivation={handleToggleActivation}
            deleteTask={handleDeleteTask}
          />
        ))
      ) : (
        <p>No tasks added yet</p>
      )}
    </div>
  );
};

export default TodoList;
