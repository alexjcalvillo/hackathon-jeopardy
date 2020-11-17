import React, { useState, useEffect } from 'react';
import jService from '../../../../api/jService';
import filterCluesWithValues from '../../../../logic/filterCluesWithValues';
import GameCard from './GameCard';

const GameBoardColumn = ({ categoryID }) => {
  const [category, setCategory] = useState('');
  const [clues, setClues] = useState([]);

  useEffect(() => {
    getClues(categoryID);
  }, []);

  const getClues = async (categoryID) => {
    try {
      const { data } = await jService.get('/', {
        params: {
          id: categoryID,
        },
      });

      const { category, clueColumn } = filterCluesWithValues(
        data.clues,
        data.title
      );
      setCategory(category);
      setClues(clueColumn);
    } catch (error) {
      console.log('Error in getClues: ', error);
    }
  };

  const renderedCards = clues.map((clue, index) => {
    if (!clue) {
      console.log('Not enough clues for CategoryID', categoryID);
      return <p key={index}>oops no clue!</p>;
    }
    return (
      <GameCard
        key={index}
        Type="Question"
        Category={category}
        Question={clue.question}
        PointValue={clue.value}
        Answer={clue.answer}
      />
    );
  });

  if (!category) {
    return <div className="w-1/6">Still Loading!</div>;
  }

  return (
    <div className="w-1/6">
      <GameCard Type="Category" Category={category} />
      {renderedCards}
    </div>
  );
};

export default GameBoardColumn;
