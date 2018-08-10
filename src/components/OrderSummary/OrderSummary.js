import React from 'react';
import Button from '../ui/Button/Button';

const orderSummary = (props) => {
    const items = Object.keys(props.ingredients).map((item, i) => {
        return <li key={item}> <span style={{ textTransform: 'capitalize' }}>{item}: </span>
            <span style={{ color: '#1212ff' }}>{props.ingredients[item]}</span>
        </li>
    });
    return (
        <div>
            <h3>Here is your order summary</h3>
            <ul>{items}</ul>
            <p>Continue to checkout</p>
            <Button btnType={'Danger'} close={props.cancelOrder}>Cancel</Button>
            <Button btnType={'Success'} continue={props.continueOrder}>Continue</Button>
        </div>
    )
}

export default orderSummary;