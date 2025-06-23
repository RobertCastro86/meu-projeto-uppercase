import React from 'react';

const UppercaseColoredText = ({ text, textColor }) => {
  return (
    <p style={{ 
      color: textColor,
      textTransform: 'uppercase',
      fontSize: '18px',
      fontWeight: 'bold',
      margin: '10px 0'
    }}>
      {text}
    </p>
  );
};

export default UppercaseColoredText;