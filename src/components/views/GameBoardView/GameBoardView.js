import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';

// Logic
import generateCategoryIdSet from '../../../logic/generateCategoryIdSet';
import { endRound } from '../../../actions/endRound';

// Custom Components
import GameBoardColumn from './GameBoard_components/GameBoardColumn';
import ScoreBoard from './GameBoard_components/ScoreBoard';

const GameBoardView = (props) => {
  const ids = generateCategoryIdSet();
  const round = useSelector((state) => state.round);
  const score = useSelector((state) => state.score);
  const dispatch = useDispatch();
  // const { number } = useParams();
  const history = useHistory();
  const timerLength = 1000 * 20; // 1000 * 60 * 6.5;

  useEffect(() => {
    const roundTimer = setInterval(() => {
      if (round > 1 && score > 0) {
        history.push('/finaljeopardy');
        return () => {
          clearInterval(roundTimer);
        };
      } else if (round > 1 && score < 0) {
        history.push('/endgame');
      } else {
        roundEnd();
      }
    }, timerLength);

    return () => {
      clearInterval(roundTimer);
    };
  }, [round]);

  const columns = ids.map((item, index) => {
    return <GameBoardColumn categoryID={item} key={index} round={round} />;
  });

  const roundEnd = () => {
    dispatch(endRound());
    // history.push(`/round/${round + 1}`);
  };
  // console.log(number);
  return (
    <div className="flex justify-between items-center w-full space-x-4">
      <ScoreBoard currScore={score} />
      {columns}
    </div>
  );
};

export default connect()(GameBoardView);
