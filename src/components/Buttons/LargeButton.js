// src/components/Button/LargeButton.js
import React from 'react';
import PropTypes from 'prop-types';
import './LargeButton.css';

function LargeButton({ label, onClick, textColor, fillColor, strokeColor }) {
  const buttonStyle = {
    color: textColor,
    backgroundColor: fillColor,
    borderColor: strokeColor,
  };

  return (
    <button className="custom-button" style={buttonStyle} onClick={onClick}>
      {label}
    </button>
  );
}

LargeButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  textColor: PropTypes.string,
  fillColor: PropTypes.string,
  strokeColor: PropTypes.string,
};

LargeButton.defaultProps = {
  textColor: '#FFFFFF',    // Default white text color
  fillColor: '#007474',    // Default teal fill color
  strokeColor: '#000000',  // Default black stroke color
};

export default LargeButton;