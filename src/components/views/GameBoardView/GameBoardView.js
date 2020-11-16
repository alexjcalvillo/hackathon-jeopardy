import React, { useEffect } from 'react';

import { connect, useDispatch } from 'react-redux';

import GameBoardColumn from './GameBoard_components/GameBoardColumn';

import generateCategoryIdSet from '../../../logic/generateCategoryIdSet';

const GameBoardView = () => {
  const dispatch = useDispatch();

  const ids = generateCategoryIdSet();

  useEffect(() => {
    // dispatch({ type: 'GET_COLUMN_1', payload: ids[1] });
  }, []);

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
