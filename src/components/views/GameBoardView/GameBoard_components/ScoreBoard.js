import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setScore } from '../../../../actions/countScore';

const ScoreBoard = ({currScore}) => {
    const dispatch = useDispatch();
    console.log(currScore);
    return (
        <div className="border rounded p-6">
            Scoreboard: {currScore}
        </div>
    )
}

export default ScoreBoard;