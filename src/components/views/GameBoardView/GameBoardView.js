import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import GameBoardColumn from './GameBoard_components/GameBoardColumn';

import generateCategoryIdSet from '../../../logic/generateCategoryIdSet';
import ScoreBoard from './GameBoard_components/ScoreBoard';

const GameBoardView = () => {
  const ids = generateCategoryIdSet();

  const columns = ids.map((item, index) => {
    return <GameBoardColumn categoryID={item} key={index} />;
  });

  return (
    <div className="flex justify-between items-center w-full space-x-4">
      {/* <h1>Game Board Goes Here</h1> */}

      {columns}
    </div>
  );
};

export default connect()(GameBoardView);
