import React, { useState, useEffect, useRef } from 'react';

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
        <div style={isOpen ? modalContainer : null}>
            <div ref={outside}>
                <div onClick={() => setIsOpen(!isOpen)} className="border border-gray-500 rounded h-24 w-32 p-4 m-2 hover:border-white">
                    {displayTitle}
                </div>
                {isOpen ?
                        <QuestionModal Question={Question} />
                        : null
                    }
            </div>
        </div>
    )
}

const QuestionModal = ({Question, Answer}) => {
    return (
        <div style={modal} className="bg-blue-500">
            {Question}
            <input type="text" placeholder="Please answer here..." defaultValue="What is " />
        </div>
    )
}

const modal = {
    width: '50%',
    height: '50%',
    border: '1px solid gray',
    borderRadius: '4px',
    margin: '0 auto',
    marginTop: '5rem',
    position: 'absolute',
    top: '5rem',
    left: '25%',
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