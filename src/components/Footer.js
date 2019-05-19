import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => {

    const {playerOne, playerTwo, cargoPlayerOne, cargoPlayerTwo, speedPlayerOne, speedPlayerTwo} = props;

    return (
      <div className = 'footer'>
        <Link className= 'footer-one button' 
              to = {{
              pathname: '/winner',
              playerOne,
              playerTwo,
              cargoPlayerOne,
              cargoPlayerTwo,
              speedPlayerOne,
              speedPlayerTwo,
              }}>
              Play
        </Link>

        <button className = 'footer-two button' onClick={() => props.players()}>Change Players</button>
      </div>
    );

}

export default Footer;