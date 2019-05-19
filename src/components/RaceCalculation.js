import React, { Component } from 'react';
import ButtonBackHome from './ButtonBackToHome';

let tripsPlayerOne = 0;
let totalTimePlayerOne = 0;
let tripsPlayerTwo = 0;
let totalTimePlayerTwo = 0;

class RaceCalculation extends Component {

  //algoritmo player 1

  racePlayerOne = () => {
    const {cargoPlayerOne, speedPlayerOne} = this.props.location;

    //distancia
    let distance = 100000
    let timePerTrip = Math.floor(distance/speedPlayerOne);

    //viajes a realizar y horas acumuladas (teniendo en cuenta 2 horas por viaje 
    //para cargar y descargar)
    let carga = 500;
    
    while(carga > 0) {
      carga -= cargoPlayerOne;
      tripsPlayerOne++;
      totalTimePlayerOne = (timePerTrip * tripsPlayerOne) + (2 * tripsPlayerOne);  
    }
    console.log('pl1', totalTimePlayerOne)
    return (
      <>
        <h4>Total Time: {totalTimePlayerOne}</h4>
        <h4>Trips: {tripsPlayerOne}</h4>
        <p>Speed: {speedPlayerOne}</p>
        <p>Cargo: {cargoPlayerOne}</p>
      </>
    )
  }

  //algoritmo player 2

  racePlayerTwo = () => {
    const {cargoPlayerTwo, speedPlayerTwo} = this.props.location;

    //distancia
    let distance = 100000
    let timePerTrip = Math.floor(distance/speedPlayerTwo);

    //viajes a realizar y horas acumuladas (teniendo en cuenta 2 horas por viaje 
    //para cargar y descargar)
    let carga = 500;

    while(carga > 0) {
      carga -= cargoPlayerTwo;
      tripsPlayerTwo++;
      totalTimePlayerTwo = (timePerTrip * tripsPlayerTwo) + (2 * tripsPlayerTwo);  
    }
    
    console.log('pl2', totalTimePlayerTwo)
    return (
      <>
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
      <div>
        {this.racePlayerOne()}
        {this.racePlayerTwo()}
        {totalTimePlayerOne < totalTimePlayerTwo ?
                                        <div>
                                          <h2>And the winner is {playerOne}</h2>
                                        </div> :

                                        <div>
                                          <h2>And the winner is {playerTwo}</h2>
                                        </div> 
        }
        
        <ButtonBackHome />
      </div>
    );
  }
}

export default RaceCalculation;