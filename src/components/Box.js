import React from 'react';
import './Box.css';

const Box = ({ color, onClick }) => {
  return <div className={`box ${color}`} onClick={onClick}></div>;
};

export default Box;