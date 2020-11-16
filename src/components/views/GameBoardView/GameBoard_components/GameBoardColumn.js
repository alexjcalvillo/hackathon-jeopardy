import React, { useState, useEffect } from 'react';
import jService from '../../../../api/jService';
import filterCluesWithValues from '../../../../logic/getCategoryClues';
import GameCard from './GameCard';

const GameBoardColumn = ({ categoryID }) => {
  const [category, setCategory] = useState('');
  const [clues, setClues] = useState([]);

  console.log('Here is my categoryID: ', categoryID);

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

  //   const Cards = [
  //     <GameCard Type="Category" Category="Dogs" />,
  //     <GameCard
  //       Type="Question"
  //       Category="dogs"
  //       Question="This dog is spotted and often referred to in a certain movie containing the number 101"
  //       PointValue="100"
  //       Answer="Dalmation"
  //     />,
  //     <GameCard />,
  //     <GameCard />,
  //     <GameCard />,
  //     <GameCard />,
  //   ];

  //   const columns = clues.map((item, index) => {
  //     return <GameCard Category={category} key={index} clues={item.question} />;
  //   });

  return <div className="w-1/6">{renderedCards}</div>;
};

export default GameBoardColumn;
