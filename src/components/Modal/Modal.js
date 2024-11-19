import React from 'react';
import './Modal.css';

const Modal = ({ closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Empty input</h2>
        <p>Please add text for the task.</p>
        <button className="close-button" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
