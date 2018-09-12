import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../ui/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import { connect } from 'react-redux';
const toolbar = (props) => {
  return (
    <div>
      <header className={classes.Toolbar}>
        <Logo />
        <nav>
          <NavigationItems isAuth = {props.isAuthenticated}></NavigationItems>
        </nav>
      </header>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

export default connect(mapStateToProps)(toolbar);