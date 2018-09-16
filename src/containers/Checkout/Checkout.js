import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import CustomerInfo from './CustomerInfo/CustomerInfo';
import Modal from '../../components/ui/Modal/Modal';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: null,
            totalPrice: null
        }
    }

    closeHandler = () => {
        console.log(
            'close handler in checkout', this.props.history
        );
        this.props.history.goBack();
    }

    continueHandler = () => {
        this.props.history.replace('/checkout/customer-info');
    }

    closeModalHandler = () => {
        this.props.history.replace('/checkout');
    }


    componentWillMount() {
        console.log('checkout props', this.props);
        //const ingredients = {}
        // const params = new URLSearchParams(this.props.location.search);
        // for (const pa of params) {
        //     if (pa[0] === 'price') {
        //         this.state.totalPrice = +pa[1];
        //     } else {
        //         ingredients[pa[0].toString()] = +pa[1];
        //     }
        // }

        // this.setState(
        //     { ingredients: ingredients }
        // );
    }
    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.props.ingredients}
                    continue={this.continueHandler}
                    close={this.closeHandler}>
                </CheckoutSummary>
                <Route path={this.props.match.path + '/customer-info'}
                    render={() => (
                        <Modal show={this.continueHandler} cancelOrder={this.closeModalHandler}>
                            <CustomerInfo  {...this.props}
                                // ingredients={this.state.ingredients}
                                // price={this.props.totalPrice} 
                                />
                        </Modal>
                    )} />
            </div>
        );
    }
}

const mapState = state => {
   return {
       ingredients: state.burgerBuilder.ingredients,
       totalPrice: state.burgerBuilder.totalPrice
   }
}
export default connect(mapState)(Checkout);