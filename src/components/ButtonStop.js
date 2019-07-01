import React from 'react';

const ButtonStop = ({ onClick = () => {} }) => (
  <div
    style={{
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '300px',
      height: '100px',
      margin: 'auto',
      fontSize: '32px',
      fontStyle: 'italic',
      textAlign: 'center',
      lineHeight: '100px',
      cursor: 'pointer',
      backgroundColor: '#4BE072',
      color: '#21222C'
    }}
    onClick={onClick}
  >
    STOP !
  </div>
);

export default ButtonStop;