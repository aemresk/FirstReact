import React, { useState, useEffect } from "react";
import Modal from "../TaskEmptyModal";
import TodoList from "../TodoList/TodoList";
import useTaskStore from "../../zustand/store";
import "./Home.css";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskPriority, setTaskPriority] = useState("medium");

  const { tasks, fetchTasks, addTask, deleteTask, toggleTask, loading } = useTaskStore();

  const priorityMapping = {
    high: 0,
    medium: 1,
    low: 2,
  };

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const handleAddTask = () => {
    if (!taskTitle.trim()) {
      setModalOpen(true);
      return;
    }

    const newTask = {
      title: taskTitle,
      priority: priorityMapping[taskPriority],
    };

    addTask(newTask).then(() => {
      fetchTasks();
    });

    setTaskTitle("");
    setTaskPriority("medium");
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId).then(() => {
      fetchTasks();
    });
  };

  const handleToggleTask = (taskId) => {
    toggleTask(taskId).then(() => {
      fetchTasks();
    });
  };

  const closeModal = () => setModalOpen(false);

  return (
    <div className="home-container">
      <div className="task-input-container">
        <input
          type="text"
          placeholder="Enter your task..."
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
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
      
      {loading ? (
        <div className="loading-spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <TodoList 
          tasks={tasks} 
          handleDeleteTask={handleDeleteTask} 
          handleToggleTask={handleToggleTask} 
        />
      )}
    </div>
  );
};

export default Home;
