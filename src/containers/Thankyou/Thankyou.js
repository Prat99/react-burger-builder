import React, { Component } from 'react';
import classes from './Thankyou.css'
class Thankyou extends Component {
    render() {
        return (
            <div className={classes.Thankyou}>
                <h1>Thank You</h1>
                <p>We wish to see you again !!</p>
            </div>
        );
    }
}

export default Thankyou;