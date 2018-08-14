import React from 'react';

const Input = (props) => {
    let input = '';
    switch (props.inputType) {
        case 'input':
            input = <input {...props} />
            break;
        case 'textarea':
            input = <textarea {...props} />
            break;
        default:
            input = <input {...props} />
            break;
    }
    return (
        <div>
            <label>{props.label}</label>
            {input}
        </div>

    );
};

export default Input;