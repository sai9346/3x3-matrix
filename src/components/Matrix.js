import React, { useState } from 'react';
import Box from './Box';
import './Matrix.css';

const Matrix = () => {
  const [boxes, setBoxes] = useState(Array(9).fill('white'));
  const [clickOrder, setClickOrder] = useState([]);
  const [gameComplete, setGameComplete] = useState(false);

  const handleBoxClick = (index) => {
    if (gameComplete) return;
    const newBoxes = [...boxes];
    const newClickOrder = [...clickOrder];
    if (newBoxes[index] === 'white') {
      newBoxes[index] = 'green';
      newClickOrder.push(index);
    }
    setBoxes(newBoxes);
    setClickOrder(newClickOrder);
    if (newClickOrder.length === 9) {
      setGameComplete(true);
      animateOrangeSequence(newClickOrder);
    }
  };

  const animateOrangeSequence = (order) => {
    order.forEach((index, i) => {
      setTimeout(() => {
        setBoxes((prevBoxes) => {
          const newBoxes = [...prevBoxes];
          newBoxes[index] = 'orange';
          return newBoxes;
        });
      }, i * 500);
    });
  };

  const resetGame = () => {
    setBoxes(Array(9).fill('white'));
    setClickOrder([]);
    setGameComplete(false);
  };

  return (
    <div className="matrix-container">
      <div className="matrix">
        {boxes.map((color, index) => (
          <Box key={index} color={color} onClick={() => handleBoxClick(index)} />
        ))}
      </div>
      {gameComplete && (
        <button className="reset-button" onClick={resetGame}>
          Reset Game
        </button>
      )}
    </div>
  );
};

export default Matrix;