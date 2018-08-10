import React from 'react';
import classes from './Button.css';

const button = (props) => {
    return (
        <div className={[classes.Button, classes[props.btnType]].join(' ')}
             onClick={props.btnType === 'Danger' ? props.close : props.continue}>
            {props.children}
        </div>
    )
}

export default button;