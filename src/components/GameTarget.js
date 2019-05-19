import React, { Component } from 'react';
import { withContext } from '../services/GameProvider';

import goldImg from '../images/gold.png';
import distanceImg from '../images/distance.png';

const GameTarget = (props) => {

    const{randomCargo, randomDistance, distance, totalCargo} = props
    
    return (
      <div className='game-target'>
        <h3>VS</h3>
        {totalCargo === 0 ?
        <button onClick={() => (randomCargo(), randomDistance())}>press</button> :
        <div>
        <img src={goldImg} alt='GoldImage' />
        <h4>{totalCargo} kg</h4>
        <img src={distanceImg} alt='DistanceImage' />
        <h4>{distance} km</h4>
        </div>
        }
      </div>
    )
}

export default withContext(GameTarget);