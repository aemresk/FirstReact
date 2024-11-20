import React, { useState } from 'react'; 
import Modal from '../Modal/Modal';
import TodoList from '../TodoList/TodoList';
import useTaskStore from '../../zustand/store';
import './Home.css';

// effects -> useLayoutEffect, useEffect
// useLayoutEffect -> set initial (before dom)
// useEffect -> apply changes after dom (data after loading)

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [taskInput, setTaskInput] = useState('');
  const [taskPriority, setTaskPriority] = useState('medium');

  const { tasks, addTask } = useTaskStore();

  const handleAddTask = () => {
    if (!taskInput.trim()) {
      setModalOpen(true);
      return;
    }
    const newTask = { 
      id: Date.now(), 
      text: taskInput, 
      done: false,
      priority: taskPriority
     };
    addTask(newTask);

    setTaskInput('');
    setTaskPriority('medium');
  };

  const closeModal = () => setModalOpen(false);

  return (
    <div className="home-container">
      <div className="task-input-container">
        <input
          type="text"
          placeholder="Enter your task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          className="task-input"
        />

      <div className="select-container">
        <select
          value={taskPriority}
          onChange={(e) => setTaskPriority(e.target.value)}
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>

        <button className="add-task-button" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
      {modalOpen && <Modal closeModal={closeModal} />}
      <TodoList tasks={tasks} />
    </div>
  );
};

export default Home;
