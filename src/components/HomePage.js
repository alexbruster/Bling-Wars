import React, { Component } from 'react';
import axios from 'axios';

import shipImage from '../images/space.png';
import loadingImage from '../images/hourglass.png';

class HomePage extends Component {

  state = {
    people: [],
    vehicles: [],
    playerOne: '',
    playerTwo: '',
    vehiclePlayerOne: '',
    vehiclePlayerTwo: '',
    status: 'loading',
    isButton: true
  }

  randomPlayers = () => {
    this.randomPlayerOne();
    this.randomPlayerTwo();
    this.setState({
      isButton: false,
    })
  }

  //función para escoger un personaje y un vehículo de manera aleatoria (player one)

  randomPlayerOne = () => {
    const { people, vehicles } = this.state;

    //elegimos el player y lo quitamos del array para ponerlo al final de éste
    //este nuevo array será el que recorra el player two
    let num = Math.floor(Math.random() * people.length);
    let playerOne = people.map(player => player.name)[num];

    let player = people.splice(num, 1);
    people.push(player[0]);

    //lo mismo para los vehículos
    let index = Math.floor(Math.random() * vehicles.length);
    let vehiclePlayerOne = vehicles.map(ship => ship.name)[index];

    let vehicle = vehicles.splice(index, 1);
    vehicles.push(vehicle[0]);

    this.setState({
          playerOne,
          vehiclePlayerOne,
        })
  }
  

  //función para escoger un personaje y un vehículo de manera aleatoria (player two)

  randomPlayerTwo = () => {
    const { people, vehicles } = this.state;

    //recorremos los arrays hasta la penúltima posición, para evitar que el player y 
    //el vehículo sean iguales a los del contrincante
    let playerTwo = people.map(player => player.name)[Math.floor(Math.random() * (people.length-1))];

    let vehiclePlayerTwo = vehicles.map(ship => ship.name)[Math.floor(Math.random() * (vehicles.length-1))];

    this.setState({
      playerTwo,
      vehiclePlayerTwo,
    })
  }

  componentDidMount = () => {
    axios.all([
      axios.get(`https://swapi.co/api/people/`),
      axios.get(`https://swapi.co/api/vehicles/`)
    ])
      .then(axios.spread((people, vehicles) => {
        this.setState({
          people: people.data.results,
          vehicles: vehicles.data.results,
          status: 'loaded',
        })
      }))
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { playerOne, playerTwo, vehiclePlayerOne, vehiclePlayerTwo, status, isButton } = this.state;

    switch (status) {

      case 'loading':
        return (<div className= 'loading-screen'>
                  <img className='loading-image' src={loadingImage} alt='loadingImage' />
                  <p>Loading...</p>
                </div>
                )

      default:
        return (
          <div>
            {isButton ? <section id = 'first-screen-button'>
                          <button className = 'button'
                                  onClick={() => this.randomPlayers()}>
                            Choose a random player and ship
                          </button> 
                        </section> :

                        <section id = "game-screen">
                          <div className = 'player-one'>
                            <h2>Player One:</h2>
                            <p>{playerOne}</p>
                            <br/>
                            <img className = "ship-image" src={shipImage} alt="shipImage" />
                            <p>{vehiclePlayerOne}</p>
                          </div>
                      
                          <div className = 'player-two'>
                            <h2>Player Two:</h2>
                            <p>{playerTwo}</p>
                            <br/>
                            <img className = "ship-image" src={shipImage} alt="shipImage" />
                            <div>{vehiclePlayerTwo}</div>
                          </div>
                        </section>
                        }
          </div>
        )
    }
  }
}

export default HomePage;