// it's a functional component which will receive some props and return some jsx

import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.label}>{props.label}</div>
    <div>
      <button className={classes.More} onClick={props.added}>More</button>
      <button className={classes.Less} onClick={props.removed} disabled={!props.disabled}>Less</button>
    </div>
  </div>
)

export default buildControl; 