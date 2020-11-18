import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ActionButton from '../../helpers/ActionButton';
import Timer from '../GameBoardView/GameBoard_components/Timer';
import axios from 'axios';
import { determineAnswerMatch, findKeywords} from '../../../logic/determineAnswerMatch';
import { changeScore } from '../../../actions/countScore';

const FinalJeopardyView = () => {
    const currScore = useSelector(state => state.score);
    const [answer, setAnswer] = useState('');
    const [finalQuestion, setFinalQuestion] = useState(false);
    const [wagerConfirmed, setWagerConfirmed] = useState(false);
    const [wager, setWager] = useState(0);
    const [clues, setClues] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        axios.get('http://jservice.io/api/random', {
            params: {
                count: 1,
            }
        }).then((response) => {
            setClues(response.data[0]);
        });
    }, []);
    
    let PointValue = Number(wager);
    const Answer = clues.answer;
    const handleWager = (event) => {
        event.preventDefault();
        setWagerConfirmed(true);
        setFinalQuestion(true);
    }

    const handleChange = () => (event) => {
        setAnswer(event.target.value);
    }

    const handleWagerChange = () => (event) => {
        setWager(event.target.value);
    }

    const timeCheck = () => {
        submitAnswer();
    }

    const submitAnswer = () => {
        const answerStatus = checkAnswer();
        dispatch(changeScore({ answerStatus, PointValue }));
        history.push('/endgame');
    }

    const checkAnswer = () => {
        const keywords = findKeywords(Answer.toLowerCase());
        const answerWords = findKeywords(answer.toLowerCase());
        console.log(keywords, answerWords);
        return determineAnswerMatch(keywords, answerWords);
    }
    console.log(answer, clues);
    return (
        <div className="w-full border">
            Final Jeopardy
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
                        <button type="submit" disabled={wagerConfirmed} className="action-btn">
                            "Confirm Wager"
                            {/* <ActionButton text="confirm wager" status={wagerConfirmed} /> */}
                        </button>
                    </form>
                </div>
                {clues && clues.category && <div className="w-1/2 border p-4">
                    <h1 className="text-3xl">{clues.category.title}</h1>
                    <div className="w-1/2 h-40 mx-auto border rounded flex items-center justify-center">
                        {finalQuestion ? <p>{clues.question}</p> : "Question Hidden"}
                    </div>
                </div>}
            </div>
            {finalQuestion ?
            <div className="p-5">
                <span>What is</span>
                <input
                    className="text-black w-1/2 mx-1 h-6 py-2 px-3 rounded text-base align-middle focus:outline-none"
                    type="text"
                    placeholder="Please answer here..."
                    onChange={handleChange()}
                /><span>?</span>
                <div className="mx-auto w-1/4" onClick={() => submitAnswer()}>
                    <ActionButton text="Submit Answer" />
                </div>
                <Timer seconds={30} time={() => timeCheck()} />
            </div> : null}
        </div>
    )
}

export default FinalJeopardyView;