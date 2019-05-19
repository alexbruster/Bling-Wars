import React from 'react';
import { Link } from 'react-router-dom';

const ButtonBackToHome = () => {
  return <Link className='button'
               to='/'>
               Back to Home
         </Link>
}

export default ButtonBackToHome;