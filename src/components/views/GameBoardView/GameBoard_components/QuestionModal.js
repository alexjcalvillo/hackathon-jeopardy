import React, { useState } from 'react';
import ActionButton from '../../../helpers/ActionButton';

const QuestionModal = ({Question, Answer}) => {
    const [answer, setAnswer] = useState('');

    const handleChange = () => (event) => {
        setAnswer(event.target.value);
    }

    const submitAnswer = () => {
        if (answer === '') {
            alert('Please enter your answer, then submit.');
            return;
        }
        const answerCheck = answer.toLowerCase().split(' ');
        if (answerCheck.includes(Answer.toLowerCase().split(' '))) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
    console.log(Question, Answer);
    return (
        <div style={modal} className="bg-blue-500 border rounded p-16 w-1/2 font-thin text-3xl text-center text-white">
            <h1>{Question}</h1>
            <span>What is</span>
            <input
                className="text-black w-1/2 mx-1 h-6 py-2 px-3 rounded text-base align-middle focus:outline-none"
                type="text"
                placeholder="Please answer here..."
                onChange={handleChange()}
            />?
            <div onClick={() => submitAnswer()}>
                <ActionButton text="Submit answer" />
            </div>
        </div>
    )
}

const modal = {
    width: '50%',
    height: '50%',
    margin: '0 auto',
    marginTop: '5rem',
    position: 'absolute',
    top: '5rem',
    left: '25%',
    transition: 'position 0.5s 1.3s ease-in-out',
}

export default QuestionModal;