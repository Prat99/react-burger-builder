import React from 'react';
import classes from './Button.css';

const button = (props) => {
    let color = '';
    if(props.color) {
     color = props.color
    }
    return (
        <div className={[classes.Button, classes[props.btnType]].join(' ')}
             onClick={props.btnType === 'Danger' ? props.close : props.continue}
             style={{color: color}}>
            {props.children}
        </div>
    )
}

export default button;