import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ActionButton from '../../helpers/ActionButton';
import EndGame from '../EndGameView/EndGame';
import Timer from '../GameBoardView/GameBoard_components/Timer';
import jService from '../../../api/jService';

import {
  determineAnswerMatch,
  findKeywords,
} from '../../../logic/determineAnswerMatch';
import { changeScore } from '../../../actions/countScore';

const FinalJeopardyView = () => {
  const currScore = useSelector((state) => state.score);
  const [answer, setAnswer] = useState('');
  const [finalQuestion, setFinalQuestion] = useState(false);
  const [wagerConfirmed, setWagerConfirmed] = useState(false);
  const [wager, setWager] = useState(0);
  const [clues, setClues] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!gameOver) {
      getFinalClue();
    }
  }, [gameOver]);

  const getFinalClue = async () => {
    try {
      const { data } = await jService.get('/random', {
        params: {
          count: 1,
        },
      });

      setClues(data[0]);
    } catch (error) {
      console.log('There was a problem getting the final clue:', error);
    }
  };

  const regex = /((<|\/|i>|\\|\)|\(|\)))/gi;
  let PointValue = Number(wager);
  const Answer = clues && clues.answer && clues.answer.replace(regex, '');
  const handleWager = (event) => {
    event.preventDefault();
    setWagerConfirmed(true);
    setFinalQuestion(true);
  };

  const handleChange = () => (event) => {
    setAnswer(event.target.value);
  };

  const handleWagerChange = () => (event) => {
    setWager(event.target.value);
  };

  const timeCheck = () => {
    submitAnswer();
  };

  const submitAnswer = () => {
    const answerStatus = checkAnswer();
    dispatch(changeScore({ answerStatus, PointValue }));
    setGameOver(true);
    // history.push('/endgame');
  };

  const checkAnswer = () => {
    const keywords = findKeywords(Answer.toLowerCase());
    const answerWords = findKeywords(answer.toLowerCase());
    console.log(keywords, answerWords);
    return determineAnswerMatch(keywords, answerWords);
  };

  return (
    <div className="w-full border">
      {gameOver ? (
        <h1 className="text-6xl text-white font-bold tracking-tighter">
          Game Over!
        </h1>
      ) : (
        'Final Jeopardy'
      )}
      <div className="flex">
        <div className="w-1/2 border p-4">
          <h1>wager</h1>
          <form onSubmit={handleWager}>
            <input
              className="w-3/4 py-3 px-5 rounded focus:outline-none"
              type="number"
              placeholder={`enter your wage between 0 and ${currScore}`}
              onChange={handleWagerChange()}
              disabled={wagerConfirmed}
              min="0"
              max={`${currScore}`}
              required
            />

            {!wagerConfirmed && (
              <button
                type="submit"
                disabled={wagerConfirmed}
                className={`action-btn ${
                  wagerConfirmed ? 'cursor-not-allowed' : ''
                } `}
              >
                Confirm Wager
                {/* <ActionButton text="confirm wager" status={wagerConfirmed} /> */}
              </button>
            )}
          </form>
        </div>
        {clues && clues.category && (
          <div className="w-1/2 border p-4">
            <h1 className="text-3xl">{clues.category.title}</h1>
            <div className="w-1/2 h-40 mx-auto border rounded flex items-center justify-center">
              {finalQuestion ? <p>{clues.question}</p> : 'Question Hidden'}
            </div>
          </div>
        )}
      </div>
      {finalQuestion ? (
        <div className="p-5">
          <span>What is</span>
          <input
            className="text-black w-1/2 mx-1 h-6 py-2 px-3 rounded text-base align-middle focus:outline-none"
            type="text"
            disabled={gameOver}
            placeholder="Please answer here..."
            onChange={handleChange()}
          />
          <span>?</span>
          <div className="mx-auto w-1/4" onClick={() => submitAnswer()}>
            {gameOver && <p className="mt-4">Correct Answer: {clues.answer}</p>}
            {!gameOver && (
              <ActionButton text="Submit Answer" status={gameOver} />
            )}
          </div>

          {!gameOver && <Timer seconds={30} time={() => timeCheck()} />}
        </div>
      ) : null}
      {gameOver && <EndGame />}
    </div>
  );
};

export default FinalJeopardyView;
