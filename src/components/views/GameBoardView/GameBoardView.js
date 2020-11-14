import React from 'react';
import GameBoardColumn from './GameBoard_components/GameBoardColumn';
import GameCard from './GameBoard_components/GameCard'

const GameBoardView = () => {
const Cards =
            [
                <GameCard Category="dogs" />, 
                <GameCard 
                    Question="This dog is spotted and often referred to in movie containing the number 101"
                    PointValue="100"
                    Answer="Dalmation"
                />, 
                <GameCard />, 
                <GameCard />, 
                <GameCard />, 
                <GameCard />
            ];
    return (
        <div className="flex justify-between items-center w-full space-x-4">
            {/* <h1>Game Board Goes Here</h1> */}
            {/* <GameCard /> */}
            <GameBoardColumn Cards={Cards} />
            <GameBoardColumn Cards={Cards} />
            <GameBoardColumn Cards={Cards} />
            <GameBoardColumn Cards={Cards} />
            <GameBoardColumn Cards={Cards} />
            <GameBoardColumn Cards={Cards} />
        </div>
    )
}

export default GameBoardView;