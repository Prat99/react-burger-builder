import React from 'react';
import BurgerLogo from '../../../assets/burger-logo.png';
import classes from './Logo.css';
import { Link } from 'react-router-dom';
const logo = () => {
  return (
      <div className={ classes.Logo}>
          <Link to='/'>
              <img src={BurgerLogo} alt='burger builder logo' />
          </Link>
      </div>
  )
}

export default logo;
 