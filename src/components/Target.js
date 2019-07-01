import React from 'react';

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const Target = ({ x = 0, y = 0, value = 0, onClick = () => {} }) => (
  <div
    style={{
      position: 'absolute',
      top: `${y}%`,
      left: `${x}%`,
      width: '25px',
      height: '25px',
      textAlign: 'center',
      lineHeight: '25px',
      cursor: 'pointer',
      backgroundColor: getRandomColor()
    }}
    onClick={onClick}
  >
    {value}
  </div>
);

export default Target;
