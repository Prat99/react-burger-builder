import React from 'react';
import classes from './Input.css';

const Input = (props) => {
    let input = '';
    let inputClass = [];
    let validationError = null;
    inputClass.push(classes.inputElement);
    if(props.invalid && props.istouched && props.shouldValidate) {
        inputClass.push(classes.invalid);
        validationError = <p className={classes.validationError}>Please enter a valid value</p>
    }
    switch (props.elementtype) {
        case 'input':
            input = <input {...props} 
              className={inputClass.join(' ')} 
              onChange = {props.changed}/>
            break;
        case 'textarea':
            input = <textarea {...props.elementconfig} className={inputClass.join(' ')}  onChange={props.changed}/>
            break;
        case 'select':
            input = <select {...props.elementconfig} className={inputClass.join(' ')}  onChange={props.changed}>
                      {props.elementconfig.options.map((opt, i)=> {
                        return <option key = {i} value={opt.value}>{opt.displayValue}</option>
                      })}
                     </select>
            break;
        default:
            input = <input {...props.elementconfig} className={inputClass.join(' ')}  onChange={props.changed}/>
            break;
    }
    return (
        <div className={classes.inputDiv}>
            <label>{props.label}</label>
            {input}
            {validationError}
        </div>

    );
};

export default Input;