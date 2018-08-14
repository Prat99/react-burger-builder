import React from 'react';
import Burger from '../../Burger/Burger'
import Button from '../../ui/Button/Button';
import classes from './CheckoutSummary.css';
const CheckoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h3>Hope this tastes well !</h3>
            <div >
                <Burger ingredients={props.ingredients}></Burger>
                <Button btnType='Success' continue={props.continue} >Continue</Button>
                <Button btnType='Danger' close={props.close} >Cancel</Button>
            </div>
        </div>
    );
};

export default CheckoutSummary;