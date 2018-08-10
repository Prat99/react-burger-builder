import React from 'react';
import BurgerLogo from '../../../assets/burger-logo.png';
import classes from './Logo.css';
const logo = () => {
  return (
      <div className={ classes.Logo}>
          <img src={BurgerLogo} alt='burger builder logo'/>
      </div>
  )
}

export default logo;
 