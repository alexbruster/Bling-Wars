import React, { Component } from 'react';

const MyContext = React.createContext();

export const withContext = (Comp) => {
    return class WithContext extends Component {
      render() {
        return (
          <MyContext.Consumer>
                    {(value) => (
                     (<Comp distance={value.distance}
                            totalCargo={value.totalCargo}
                            randomDistance={value.randomDistance}
                            randomCargo={value.randomCargo}
                            {...this.props}
                      />)
                    )}
          </MyContext.Consumer>
        )
      }
    }
}

class GameProvider extends Component {

  state = {
    distance: 0,
    totalCargo: 0
  }

  randomCargo = () => {
    let min = 100;
    let max = 10000;
    let totalCargo = Math.floor(Math.random() * (max - min)) + min;

    this.setState ({
      totalCargo,
    })
  }

  randomDistance = () => {
    let min = 1000;
    let max = 100000;
    let distance = Math.floor(Math.random() * (max - min)) + min;

    this.setState ({
      distance,
    })
  }

  render() {
    const{distance, totalCargo} = this.state;
    return (
      <MyContext.Provider
        value={{ distance: distance,
                 totalCargo: totalCargo,
                 randomDistance: this.randomDistance,
                 randomCargo: this.randomCargo,
        }}
        >
        {this.props.children}
      </MyContext.Provider>
  )
  }
  }

export default GameProvider;