import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ActionButton from '../../helpers/ActionButton';

const EndGame = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const score = useSelector((state) => state.score);

  const startNewGame = () => {
    clearReducers();
    history.push('/round/1');
  };

  const goHome = () => {
    clearReducers();

    history.push('/');
  };

  const clearReducers = () => {
    dispatch({
      type: 'NEW_GAME',
    });
    dispatch({
      type: 'CLEAR_SCORE',
    });
  };

  return (
    <div className="p-2">
      <div className="w-1/3 items-center w-full space-x-4 p-2">
        <h4 className="text-6xl text-white font-bold tracking-tighter">
          Your final score is {score}
        </h4>
      </div>

      <div className="items-center w-full space-x-4 p-2">
        <p>Would you like to start a new game?</p>
        <div>
          <ActionButton text="New Game" onClick={startNewGame} />

          <ActionButton text="Home Page" onClick={goHome} />
        </div>
      </div>
    </div>
  );
};

export default EndGame;
