import React from 'react';
import { withContext } from '../services/GameProvider';

import goldImg from '../images/gold.png';
import distanceImg from '../images/distance.png';

const GameTarget = (props) => {

    const{randomCargo, randomDistance, distance, totalCargo} = props

    return (
      <div className='game-target'>
        {totalCargo === 0 || distance === 0 ?
                    <button className='target-button button'
                            onClick={() => {randomCargo(); randomDistance()}}>
                            Press Here
                    </button> :

                    <div className='game-target'>
                      <h2>VS</h2>
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