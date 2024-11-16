// src/components/Button/Button.js
import React from 'react';
import './LargeButton.css';

function LargeButton({ label, onClick }) {
  return (
    <button className="custom-button" onClick={onClick}>
      {label}
    </button>
  );
}

export default LargeButton;