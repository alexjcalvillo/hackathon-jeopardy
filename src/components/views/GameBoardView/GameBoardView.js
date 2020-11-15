import React, { useEffect, useState } from 'react';

import { connect, useDispatch } from 'react-redux';

import GameBoardColumn from './GameBoard_components/GameBoardColumn';
import GameCard from './GameBoard_components/GameCard';

import jService from '../../../api/jService';
import filterCluesWithValues from '../../../logic/getCategoryClues';
import generateCategoryIdSet from '../../../logic/generateCategoryIdSet';

const GameBoardView = () => {
  const [category, setCategory] = useState('');
  const [clues, setClues] = useState([]);
  const dispatch = useDispatch();
  // each GameCard component should recieve getClues as a prop.
  // For now I'm just calling getClues from here for testing.
  useEffect(() => {
    dispatch({ type: 'GET_COLUMN_1', payload: ids[1] });

    getClues();
  }, []);

  const ids = generateCategoryIdSet();

  const getClues = async (categoryID) => {
    const { data } = await jService.get('/', {
      params: {
        // this will need to be change to categoryID
        id: ids[0],
      },
    });
    // getClues will need to be called for each category column.
    // It will need a categoryID which is generated by generateCategoryIdSet().
    return const { category, clueColumn } = filterCluesWithValues(
      data.clues,
      data.title
    );
    // setCategory(category);
    // setClues(clueColumn);
  };

  const columns = clues.map((item, index) => {
    return <GameCard Category={category} key={index} clues={item.question} />;
  });

  console.log(clues);

  const Cards = [
    <GameCard Category="dogs" />,
    <GameCard
      Question="This dog is spotted and often referred to in movie containing the number 101"
      PointValue="100"
      Answer="Dalmation"
    />,
    <GameCard />,
    <GameCard />,
    <GameCard />,
    <GameCard />,
  ];
  return (
    <div className="flex justify-between items-center w-full space-x-4">
      {/* <h1>Game Board Goes Here</h1> */}
      {/* <GameCard /> */}
      <GameBoardColumn Cards={columns} getClues={getClues} />
      <GameBoardColumn Cards={columns} getClues={getClues} />
      <GameBoardColumn Cards={Cards} getClues={getClues} />
      <GameBoardColumn Cards={Cards} getClues={getClues} />
      <GameBoardColumn Cards={Cards} getClues={getClues} />
      <GameBoardColumn Cards={Cards} getClues={getClues} />
    </div>
  );
};

export default connect()(GameBoardView);
