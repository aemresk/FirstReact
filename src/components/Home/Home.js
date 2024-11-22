import React, { useState, useEffect } from "react";
import TodoList from "../TodoList/TodoList";
import useTaskStore from "../../zustand/store";
import "./Home.css";

const Home = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskPriority, setTaskPriority] = useState("medium");

  const { tasks, fetchTasks, addTask, loading } = useTaskStore();

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const handleAddTask = async () => {
    if (!taskTitle.trim()) {
      alert("Task title cannot be empty");
      return;
    }

    const newTask = {
      title: taskTitle,
      priority: taskPriority,
    };

    try {
      await addTask(newTask);
      console.log("Task successfully added:", newTask);
    } catch (error) {
      console.error("Error adding task:", error);
    }

    setTaskTitle("");
    setTaskPriority("medium");
  };

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
        <select
          value={taskPriority}
          onChange={(e) => setTaskPriority(e.target.value)}
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <button onClick={handleAddTask} className="add-task-button">
          Add Task
        </button>
      </div>
      {loading ? (
        <p>Loading tasks...</p>
      ) : (
        <TodoList tasks={tasks} />
      )}
    </div>
  );
};

export default Home;