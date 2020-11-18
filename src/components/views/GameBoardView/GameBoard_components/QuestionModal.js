import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ActionButton from '../../../helpers/ActionButton';
import { changeScore } from '../../../../actions/countScore';
import Timer from './Timer';

const QuestionModal = ({ Question, Answer, PointValue, complete, open }) => {
  const [answer, setAnswer] = useState('');
  const dispatch = useDispatch();

  const handleChange = () => (event) => {
    setAnswer(event.target.value);
  };

  const submitAnswer = () => {
    // if (answer === '') {
    //     alert('Please enter your answer, then submit.');
    //     return;
    // }
    const answerStatus = checkAnswer();

    dispatch(changeScore({ answerStatus, PointValue }));
    complete();
    open(false);
  };

  const checkAnswer = () => {
    const answerCheck = answer.toLowerCase().split(' ');
    console.log(answerCheck.includes(Answer.toLowerCase()));
    if (answerCheck.includes(Answer.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  };

  const checkTimer = (minutes, seconds) => {
    if (minutes === 0 && seconds === 0) {
      submitAnswer();
    }
  };
  console.log(Question, Answer, PointValue);
  return (
    <div
      style={modal}
      className="bg-blue-500 border rounded p-16 w-1/2 font-thin text-3xl text-center text-white"
    >
      <h1>{Question}</h1>
      <span>What is</span>
      <input
        className="text-black w-1/2 mx-1 h-6 py-2 px-3 rounded text-base align-middle focus:outline-none"
        type="text"
        placeholder="Please answer here..."
        onChange={handleChange()}
      />
      <span>?</span>
      <div onClick={() => submitAnswer()}>
        <ActionButton text="Submit answer" />
      </div>
      <Timer time={(minutes, seconds) => checkTimer(minutes, seconds)} />
    </div>
  );
};

const modal = {
  width: '50%',
  height: '50%',
  margin: '0 auto',
  marginTop: '5rem',
  position: 'absolute',
  top: '5rem',
  left: '25%',
  transition: 'position 0.5s 1.3s ease-in-out',
};

export default QuestionModal;
