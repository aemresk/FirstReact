import React, { useState , use } from 'react'; //useX (hooks)
import Modal from '../Modal/Modal';
import TodoList from '../TodoList/TodoList';
import './Home.css';

// effects -> useEffect , useLayoutEffect
// useEffect -> apply changes after dom (data after loading)
// useLayoutEffect -> set initial (before dom)

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (!taskInput.trim()) {
      setModalOpen(true);
      return;
    }
    const newTask = { id: Date.now(), text: taskInput, active: true };
    setTasks([...tasks, newTask]); // setTasks((prevState)=> [...prevState, newTask] ) // real time add
    setTaskInput(''); // Clear input field after adding
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
        <button className="add-task-button" onClick={addTask}>
          Add Task
        </button>
      </div>
      {modalOpen && <Modal closeModal={closeModal} />}
      <TodoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default Home;
