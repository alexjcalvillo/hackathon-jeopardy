import React, { useState, useEffect, useRef } from 'react';
import ActionButton from '../../../helpers/ActionButton';

const GameCard = ({Category, Question, Answer, PointValue}) => {
    const outside = useRef();
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const getClick = document.addEventListener('click', handleClick);

        return () => {
            getClick();
        }
    }, []);

    const handleClick = (event) => {
        if (outside.current.contains(event.target)) {
            return;
        } else {
            setIsOpen(false);
        }
    }
    const displayTitle = Category ? Category : PointValue;
    
    return (
        <>
            {/* This div is to create tinted background when modal opens*/}
            <div style={isOpen ? modalContainer : null}></div>
            {/* This div contains a ref to the node which the modal is contained to
                allowing the user to click inside, but close the modal when clicking outside */}
            <div ref={outside}>
                <div onClick={() => setIsOpen(!isOpen)} className="border border-gray-500 rounded h-24 w-32 p-4 m-2 hover:border-white">
                    {displayTitle}
                </div>
                {isOpen ?
                        <QuestionModal Question={Question} Answer={Answer} />
                        : null
                    }
            </div>
        </>
    )
}

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
        if (answerCheck.includes(Answer.toLowerCase())) {
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

const modalContainer = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

export default GameCard;