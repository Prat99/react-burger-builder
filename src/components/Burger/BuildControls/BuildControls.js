// it's a functional component which will receive some props and return some jsx

import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon' },
    { label: 'Meat', type: 'meat' },
    { label: 'Cheese', type: 'cheese' },
];
const buildControls = (props) => {
       const allControls = controls.map( (control) => {
           return <BuildControl label={control.label}
                   type={control.type}
                   key={control.label}
                   added={() => props.ingredientAdded(control.type) }
                   removed={() => props.ingredientRemoved(control.type)}
                   disabled = {props.disabled[control.type]}>
                  </BuildControl>
       });
       return (
           <div className={classes.BuildControls}>
               {allControls}
           </div>
       )
}

export default buildControls; 