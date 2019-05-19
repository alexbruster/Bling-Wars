import React, { Component } from 'react';

import { withContext } from '../services/GameProvider';
import ButtonBackHome from './ButtonBackToHome';

let tripsPlayerOne = 0;
let totalTimePlayerOne = 0;
let tripsPlayerTwo = 0;
let totalTimePlayerTwo = 0;

class RaceCalculation extends Component {

  //algoritmo player 1

  racePlayerOne = () => {
    tripsPlayerOne = 0;
    totalTimePlayerOne = 0;
    
    const {cargoPlayerOne, speedPlayerOne, playerOne} = this.props.location;
    const {totalCargo, distance} = this.props;

    //distancia

    let timePerTrip = Math.floor(distance/speedPlayerOne);

    //viajes a realizar y horas acumuladas (teniendo en cuenta 2 horas por viaje 
    //para cargar y descargar)

    let load = totalCargo;
    
    while(load > 0) {
      load -= cargoPlayerOne;
      tripsPlayerOne++;
      totalTimePlayerOne = (timePerTrip * tripsPlayerOne) + (2 * tripsPlayerOne);  
    }

    return (
      <>
        <h2 className='player-one-title'>Player One</h2>
        <h3>{playerOne}</h3>
        <h4>Total Time: {totalTimePlayerOne}</h4>
        <h4>Trips: {tripsPlayerOne}</h4>
        <p>Speed: {speedPlayerOne}</p>
        <p>Cargo: {cargoPlayerOne}</p>
      </>
    )
  }

  //algoritmo player 2

  racePlayerTwo = () => {
    tripsPlayerTwo = 0;
    totalTimePlayerTwo = 0;

    const {cargoPlayerTwo, speedPlayerTwo, playerTwo} = this.props.location;
    const {totalCargo, distance} = this.props;

    //distancia

    let timePerTrip = Math.floor(distance/speedPlayerTwo);

    //viajes a realizar y horas acumuladas (teniendo en cuenta 2 horas por viaje 
    //para cargar y descargar)

    let load = totalCargo;

    while(load > 0) {
      load -= cargoPlayerTwo;
      tripsPlayerTwo++;
      totalTimePlayerTwo = (timePerTrip * tripsPlayerTwo) + (2 * tripsPlayerTwo);  
    }
    
    return (
      <>
        <h2 className='player-two-title'>Player Two</h2>
        <h3>{playerTwo}</h3>
        <h4>Total Time: {totalTimePlayerTwo}</h4>
        <h4>Trips: {tripsPlayerTwo}</h4>
        <p>Speed: {speedPlayerTwo}</p>
        <p>Cargo: {cargoPlayerTwo}</p>
      </>
    )
  }


  render() {
    const {playerOne, playerTwo} = this.props.location
    return (
      <div className='winner-screen'>
        <div className='winner-screen-playerOne'>{this.racePlayerOne()}</div>
        <div className='winner-screen-playerTwo'>{this.racePlayerTwo()}</div>
        {totalTimePlayerOne < totalTimePlayerTwo ?
                                        <div className='winner-screen-header'>
                                          <h2>the <span className='winner-letter'>WINNER</span> is {playerOne}</h2>
                                        </div> :

                                        <div className='winner-screen-header'>
                                          <h2>the <span className='winner-letter'>WINNER</span> is {playerTwo}</h2>
                                        </div> 
        }
        
        <div className='winner-screen-footer'><ButtonBackHome /></div>
        
      </div>
    );
  }
}

export default withContext(RaceCalculation);