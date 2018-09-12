import React from 'react';
import classes from './NavigationItems.css';
import { Link } from 'react-router-dom'; 
const NavigationItems = (props) => {
    return (
        <div className={classes.NavigationItems}>
            <ul>
                <li><Link to='/burger-builder'>Burger Builder</Link></li>
                <li><Link to='/checkout'>Checkout</Link></li>
                {props.isAuth ? <li ><Link to='/logout'>logout</Link></li> : null}
            </ul>
        </div>
    );
};

export default NavigationItems;




