import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingView from './components/views/LandingView';

function App() {
  return (
    <div className="bg-blue-600 container mx-auto text-center">
      <Switch>
        <Route exact path="/" component={LandingView} />
      </Switch>
    </div>
  );
}

export default App;
