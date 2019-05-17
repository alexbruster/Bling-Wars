import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from './components/HomePage';
import GameScreen from './components/GameScreen';
import './App.css';

function App() {
  return (
    <div className="App">
      <HomePage/>
    </div>
  );
}

export default App;
