import React, { useState, useEffect } from 'react';
import GameCard from './GameCard';

const GameBoardColumn = ({ Cards }) => {
    return (
        <div className="w-1/6">
            {Cards}
        </div>
    )
}

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
