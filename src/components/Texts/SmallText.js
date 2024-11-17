// src/components/Text/SmallText.js
import React from 'react';
import PropTypes from 'prop-types';

function SmallText({ text, color, fontWeight }) {
  const style = {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '15px',
    color: color,
    fontWeight: fontWeight,
    
  };

  return <p style={style}>{text}</p>;
}

SmallText.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SmallText.defaultProps = {
  color: '#000',      // Default to black if no color is provided
  fontWeight: '400',  // Default to normal weight
};

export default SmallText;