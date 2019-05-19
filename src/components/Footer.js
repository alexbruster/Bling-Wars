import React from 'react';
import { Link } from 'react-router-dom';
import { withContext } from '../services/GameProvider';

const Footer = (props) => {

  const { totalCargo, distance, playerOne, playerTwo, cargoPlayerOne, cargoPlayerTwo,
    speedPlayerOne, speedPlayerTwo } = props;

  return (
    <div className='footer'>
      {totalCargo !== 0 || distance !== 0 ?
        <div className='footer'>
          <Link className='footer-one button'
            to={{
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

          <button className='footer-two button'
              onClick={() => props.players()}>
              Change Players
          </button>
        </div> : null
      }
    </div>
  );
}

export default withContext(Footer);