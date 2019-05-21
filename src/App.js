import React from 'react';
import {Switch, Route} from 'react-router-dom';

import GameProvider from './services/GameProvider';

import HomePage from './components/HomePage';
import RaceCalculation from './components/RaceCalculation';
import NotFound from './components/NotFound';

import './App.css';

function App() {
  return (
    <div className="App">
      <GameProvider>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/winner' component={RaceCalculation} />
          <Route component={NotFound} />
        </Switch>
      </GameProvider>
    </div>
  );
}

export default App;
