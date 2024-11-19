// src/components/Text/LargeText.js
import React from 'react';
import PropTypes from 'prop-types';
import './LargeText.css'; // Import the CSS file

function LargeText({ text, color, fontWeight }) {
  const style = {
    color: color,
    fontWeight: fontWeight,
  };

  return <h1 className="large-text" style={style}>{text}</h1>;
}

LargeText.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LargeText.defaultProps = {
  color: '#000',      // Default to black if no color is provided
  fontWeight: '400',  // Default to normal weight
};

export default LargeText;