// src/components/Button/TextButton.js
import React from 'react';
import PropTypes from 'prop-types';
import './TextButton.css';

function TextButton({ text, textColor, onClick }) {
  const style = {
    color: textColor,
    fontFamily: 'Roboto, sans-serif',
    fontSize: '16px',  // Adjust size as needed
    cursor: 'pointer',
  };

  return (
    <button className="text-button" style={style} onClick={onClick}>
      {text}
    </button>
  );
}

TextButton.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  onClick: PropTypes.func,
};

TextButton.defaultProps = {
  textColor: '#007474',  // Default color (teal) if none is provided
  onClick: () => {},     // Default empty function if no onClick is provided
};

export default TextButton;