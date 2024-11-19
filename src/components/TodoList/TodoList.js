import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

const TodoList = ({ tasks, setTasks }) => {
  const toggleActivation = (taskId) => {
    // Toggle the active state of the task
    setTasks(tasks.map((task) =>
      task.id === taskId ? { ...task, active: !task.active } : task
    ));
  };

  const deleteTask = (taskId) => {
    // Remove the task by filtering out the task with the given id
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="todo-list">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            toggleActivation={toggleActivation}
            deleteTask={deleteTask}
          />
        ))
      ) : (
        <p>No tasks added yet</p>
      )}
    </div>
  );
};

export default TodoList;
