import React from 'react';
import {Switch, Route} from 'react-router-dom';

import GameCounter from './services/GameProvider';

import HomePage from './components/HomePage';
import RaceCalculation from './components/RaceCalculation';
import NotFound from './components/NotFound';

import './App.css';

function App() {
  return (
    <div className="App">
      <GameCounter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/winner' component={RaceCalculation} />
          <Route component={NotFound} />
        </Switch>
      </GameCounter>
    </div>
  );
}

export default App;
