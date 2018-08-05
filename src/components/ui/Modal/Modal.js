import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
  <Aux>
       <Backdrop style={{display: props.show ? 'block' : 'none' }} 
                 bdClicked = {props.cancelOrder}
                 show={props.show}></Backdrop>
        <div className={classes.Modal} style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? 1 : 0}}>
            <span className={classes.close} onClick={props.cancelOrder}>X</span>
            {props.children}
        </div>
  </Aux>  
);

export default modal;