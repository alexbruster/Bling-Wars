import React, { Component } from 'react';

import goldImg from '../images/gold.png';
import distanceImg from '../images/distance.png';

class GameTarget extends Component {

  randomCargo = () => {
    let min = 100;
    let max = 10000;
    return Math.floor(Math.random() * (max - min)) + min;
  }

  randomDistance = () => {
    let min = 1000;
    let max = 100000;
    return Math.floor(Math.random() * (max - min)) + min;
  }

  render() {
      return (
          <div className='game-target'>
            <h3>VS</h3>
            <img src={goldImg} alt='GoldImage' />
            <h4>{this.randomCargo()} kg</h4>
            <img src={distanceImg} alt='DistanceImage' />
            <h4>{this.randomDistance()} km</h4>
          </div>
      )
  }
}

export default GameTarget;