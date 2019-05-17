import React, { Component } from 'react';


class GameScreen extends Component {

  // playerTwoRandom = () => {
  //   const { people } = this.state;
  //   let playerTwo = people.map(person => person.name)[
  //                   Math.floor(Math.random() 
  //                   * people.length)
  //                   ];

  //   return playerTwo;
  // }

  // vehicle = () => {
  //   const { vehicles } = this.state;
  //   return vehicles.map(vehicle => vehicle.name)[
  //          Math.floor(Math.random() 
  //          * vehicles.length)
  //          ]
  // }

  

  render() {
    console.log(this.props)
      return (
          <div>{this.props.player}</div>
      )
  }
}

export default GameScreen;