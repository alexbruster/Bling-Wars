import React, { Component } from 'react';

class Footer extends Component {
  render() {
    console.log(this.props.vehiclePlayerOne.cargo_capacity)
    return (
      <div className = 'footer'>
        <button className = 'button'>Play</button>
        <button className = 'button'>Change Players</button>
      </div>
    );
  }
}

export default Footer;