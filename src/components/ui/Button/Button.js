import React from 'react';
import classes from './Button.css';

const button = (props) => {
    let _style = {};
    if(props.color) {
     _style = {
         color: props.color,
         margin: '49px auto',
         display: 'block',
         border: '1px solid #ffaaaa',
         width: '20%'
     }
    }
    return (
        <div className={[classes.Button, classes[props.btnType]].join(' ')}
             onClick={props.btnType === 'Danger' ? props.close : props.continue}
            style={_style}>
            {props.children}
        </div>
    )
}

export default button;