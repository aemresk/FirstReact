// src/components/Modal/Modal.js
import React from 'react';
import './Modal.css';  // Import the Modal.css file

function Modal({ isOpen, onClose, message }) {
  if (!isOpen) return null;  // Don't render anything if the modal is not open

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
