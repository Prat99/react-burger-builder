import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
class Checkout extends Component {
    state = {
        ingredients: {
            meat: 1,
            bacon: 1,
            cheese: 1,
            salad: 1
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