// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';  // Importing the App component from the components folder
import reportWebVitals from './reportWebVitals';

// Rendering the App component to the root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// For measuring performance, you can pass a function to log results
reportWebVitals();
