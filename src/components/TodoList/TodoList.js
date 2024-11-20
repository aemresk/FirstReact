import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import useTaskStore from '../../zustand/store';
import './TodoList.css';

const TodoList = ({ tasks }) => {
  const { toggleTask, deleteTask } = useTaskStore();

  const handleToggleActivation = (taskId) => {
    toggleTask(taskId);
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  return (
    <div className="todo-list">
      {tasks.length > 0 ? (
        tasks.map((task) => (
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
