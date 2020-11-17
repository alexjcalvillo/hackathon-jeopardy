import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GameBoardView from './components/views/GameBoardView/GameBoardView';
import ScoreBoard from './components/views/GameBoardView/GameBoard_components/ScoreBoard';
import LandingView from './components/views/LandingPageView/LandingView';

function App() {
  return (
    <div className="flex bg-blue-600 justify-center items-center container mx-auto my-8 h-full text-center">
      <div className="flex justify-center items-center w-full">
        <div className="w-full mx-16">
          <div className="flex space-x-10 border rounded h-full px-24 py-10 justify-between">
            <Switch>
              <Route exact path="/" component={LandingView} />
              <Route exact path="/play" component={GameBoardView} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
