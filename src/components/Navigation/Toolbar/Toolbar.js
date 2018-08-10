import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../ui/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
const toolbar = (props) => {
  return (
    <div>
      <header className={classes.Toolbar}>
        <Logo />
        <nav>
          <NavigationItems></NavigationItems>
        </nav>
      </header>
    </div>
  )
}

export default toolbar;