import React, { useState, useEffect } from 'react';
import GameCard from './GameCard';

const GameBoardColumn = ({ Cards, getClues }) => {
  const [clues, setClues] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    const { cat, clue } = getClues();
    setCategory(cat);
    setClues(clue);
  }, []);

  const columns = clues.map((item, index) => {
    return <GameCard Category={category} key={index} clues={item.question} />;
  });

  return <div className="w-1/6">{Cards}</div>;
};

export default GameBoardColumn;
