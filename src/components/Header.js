import React from 'react';
import logoImage from '../images/logo.png';
import './Header.css';
const Header = () => {
  return (
    <div className='header'>
      <div className='logoImageWrapper'>
        <img src={logoImage} alt='' className='logoImage' />
      </div>
      <p className='headerText'>MINT YOUR DRAGONZ</p>
    </div>
  );
};

export default Header;
