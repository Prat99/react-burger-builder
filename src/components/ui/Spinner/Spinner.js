import React from 'react';
import classes from './Spinner.css';
const Spinner = () => {
    return (
        <div>
            {/* <div className={classes.Spinner}><div></div><div></div><div></div><div></div></div> */}
            <h4 style={{ color: '#000' }}>Loading...</h4>
        </div>
    );
};

export default Spinner;