import React from 'react';
import { useSelector } from 'react-redux';

const ScoreBoard = () => {
    const currScore = useSelector(state => state.score);
    
    return (
        <div className="border rounded p-6">
            Scoreboard: {currScore}
        </div>
    )
}

export default ScoreBoard;