import React, { useState, useEffect, useRef } from 'react';
import QuestionModal from './QuestionModal';

const GameCard = ({Type, Category, Question, Answer, PointValue}) => {
    const outside = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const [complete, setComplete] = useState(false);
    useEffect(() => {
        const getClick = document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, []);

    useEffect(() => {
        return () => {
            setComplete(false);
        }
    }, [Question]);

    const handleClick = (event) => {
        if (outside.current.contains(event.target)) {
            return;
        } else {
            setIsOpen(false);
        }
    }
    const displayTitle = Type === 'Category' ? Category : PointValue;
    const handleComplete = () => {
        setComplete(true);
    }
    return (
        <>
            {/* This div is to create tinted background when modal opens*/}
            <div style={isOpen ? modalContainer : null}></div>
            {/* This div contains a ref to the node which the modal is contained to
                allowing the user to click inside, but close the modal when clicking outside */}
            <div ref={outside}>
                {complete ?
                (
                    <div className="flex items-center justify-center border border-gray-500 rounded h-24 w-32 p-4 m-2 text-xl">
                        {<p className="line-through">{displayTitle}</p>}
                    </div>
                )
                :
                (
                    <div onClick={() => Type === 'Question' ? setIsOpen(!isOpen) : null} className="flex items-center justify-center border border-gray-500 rounded h-24 w-32 p-4 m-2 text-xl hover:border-white">
                        {displayTitle}
                    </div>
                )
                }
                {isOpen ?
                        <QuestionModal Question={Question} Answer={Answer} PointValue={PointValue} complete={() => handleComplete()} open={() => setIsOpen()} />
                        : null
                    }
            </div>
        </>
    )
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