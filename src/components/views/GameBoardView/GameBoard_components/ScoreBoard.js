import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeScore } from '../../../../actions/countScore';

const ScoreBoard = () => {
    const currScore = useSelector(state => state.score);
    const dispatch = useDispatch();
    console.log(currScore);

    const handleScore = (answerStatus, pointValue) => {
        dispatch(changeScore({answerStatus, pointValue}))
    }
    return (
        <div>
            Scoreboard: {currScore}
        </div>
    )
}

export default ScoreBoard;