import React from 'react';

const GameCard = ({Category, Question, Answer, PointValue}) => {
    const displayTitle = Category ? Category : PointValue;
    return (
        <div className="border rounded h-24 w-32 p-4 m-2">
            {displayTitle}
        </div>
    )
}

export default GameCard;