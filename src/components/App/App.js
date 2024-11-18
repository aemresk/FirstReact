// src/App.js
import React, { useState } from 'react';
import './App.css';
import TodoList from '../Todo/TodoList';
import About from '../About/About';
import Modal from '../Modal/Modal';

function App() {
  // State to store the to-do list
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a To-Do app', completed: false },
  ]);

  // Function to handle toggle of completion status
  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to delete a todo item
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>To-Do App</h1>
      </header>
      
      <main className="app-main">
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </main>

      <footer className="app-footer">
        <About />
      </footer>

      {/* Modal component example */}
      <Modal />
    </div>
  );
}

export default App;
