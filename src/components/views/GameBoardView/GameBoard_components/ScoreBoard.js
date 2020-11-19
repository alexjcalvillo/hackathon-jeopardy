import React from 'react';

const ScoreBoard = ({ currScore }) => {
  return <div className="border rounded p-6">Your Score: {currScore}</div>;
};

export default ScoreBoard;
