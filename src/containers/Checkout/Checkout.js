import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                cheese: 1,
                meat: 1,
                bacon: 1,
                salad: 1
            }
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
    componentDidMount() {
        console.log(this.props);
        const ingredients1 = {}
        const params = new URLSearchParams(this.props.location.search);
        
        for (const pa of params) {
            console.log('!!!!!', pa);
            ingredients1[pa[0].toString()] = +pa[1];
        }
        console.log('final ingredients', ingredients1);
        this.setState(
            {ingredients: ingredients1}
        );
        // this.setState({
        //     ingredients: {
        //         meat: 1,
        //         bacon: 0,
        //         cheese: 0,
        //         salad: 0
        //     }
        // })
        console.log('new state', this.state.ingredients);
    }
    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    continue={this.continueHandler}
                    close={this.closeHandler} ></CheckoutSummary>
            </div>
        );
    }
}

export default Checkout;