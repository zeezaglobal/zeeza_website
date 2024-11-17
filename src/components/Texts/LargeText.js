// src/components/Text/LargeText.js
import React from 'react';
import PropTypes from 'prop-types';

function LargeText({ text, color, fontWeight }) {
  const style = {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '60px',
    color: color,
    fontWeight: fontWeight,
    lineHeight: 0,
  };

  return <h1 style={style}>{text}</h1>;
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