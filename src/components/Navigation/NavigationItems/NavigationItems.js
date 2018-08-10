import React from 'react';
import classes from './NavigationItems.css';
const NavigationItems = () => {
    return (
        <div className={classes.NavigationItems}>
            <ul>
                <li><a href='/burger-builder'>Burger Builder</a></li>
                <li><a href='/checkout'>Checkout</a></li>
            </ul>
        </div>
    );
};

export default NavigationItems;