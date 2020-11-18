import React, { useState, useEffect } from 'react';

import { connect, useDispatch, useSelector } from 'react-redux';

import GameBoardColumn from './GameBoard_components/GameBoardColumn';

import generateCategoryIdSet from '../../../logic/generateCategoryIdSet';
import ScoreBoard from './GameBoard_components/ScoreBoard';

const GameBoardView = () => {
  const dispatch = useDispatch();
  const ids = generateCategoryIdSet();

  const currentRound = useSelector((state) => state.round);

  const timerLength = 1000 * 60 * 6;

  useEffect(() => {
    const roundTimer = setInterval(() => {
      if (currentRound >= 3) {
        return;
      } else {
        dispatch({ type: 'NEXT_ROUND' });
      }
    }, 1000 * 5);

    return () => {
      clearInterval(roundTimer);
    };
  }, [currentRound]);

  const columns = ids.map((item, index) => {
    return <GameBoardColumn categoryID={item} key={index} />;
  });

  return (
    <div className="flex justify-between items-center w-full space-x-4">
      {/* <h1>Game Board Goes Here</h1> */}
      <ScoreBoard />
      {columns}
    </div>
  );
};

export default connect()(GameBoardView);
