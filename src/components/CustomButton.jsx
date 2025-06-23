import React from 'react';

const CustomButton = ({ label }) => {
  const handleClick = () => {
    alert(`A label desse botão é ${label}`);
  };

  return (
    <button 
      onClick={handleClick}
      style={{
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        padding: '12px 24px',
        fontSize: '16px',
        borderRadius: '6px',
        cursor: 'pointer',
        margin: '5px',
        fontWeight: '500',
        transition: 'background-color 0.3s ease'
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
      onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
    >
      {label}
    </button>
  );
};

export default CustomButton;