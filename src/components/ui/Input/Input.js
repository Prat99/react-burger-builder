import React from 'react';
import classes from './Input.css';

const Input = (props) => {
    let input = '';
    switch (props.elementtype) {
        case 'input':
            input = <input {...props.elementconfig} className={classes.inputElement}  onChange = {props.changed}/>
            break;
        case 'textarea':
            input = <textarea {...props.elementconfig} className={classes.inputElement} onChange={props.changed}/>
            break;
        case 'select':
            input = <select {...props.elementconfig} className={classes.inputElement} onChange={props.changed}>
                      {props.elementconfig.options.map((opt, i)=> {
                        return <option key = {i} value={opt.value}>{opt.displayValue}</option>
                      })}
                     </select>
            break;
        default:
            input = <input {...props.elementconfig} className={classes.inputElement} onChange={props.changed}/>
            break;
    }
    return (
        <div className={classes.inputDiv}>
            <label>{props.label}</label>
            {input}
        </div>

    );
};

export default Input;