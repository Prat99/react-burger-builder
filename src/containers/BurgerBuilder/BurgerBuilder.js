import React, { Component } from 'react';
import Aux from "../../hoc/Aux";
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/ui/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import Spinner from '../../components/ui/Spinner/Spinner';
import axios from '../../axios-orders';

const INGREDIENT_PRICE = {
    cheese: 0.4,
    salad: 0.2,
    bacon: 0.3,
    meat: 0.5
} // global variable
class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                cheese: 0,
                meat: 0,
                bacon: 0,
                salad: 0
            },
            totalPrice: 0,
            isPurchasable: false,
            purchasing: false
        }
    }

    addIngredientHandler = (type) => {
        console.log('add Ingredient hit');
        const updatedIngredients = { ...this.state.ingredients };
        const newCount = this.state.ingredients[type] + 1;
        updatedIngredients[type] = newCount;
        const oldPrice = this.state.totalPrice;
        const priceAddition = INGREDIENT_PRICE[type];
        const newPrice = oldPrice + priceAddition;
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        }); // set state executes in async fashion
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        if (this.state.ingredients[type]) {
            const updatedIngredients = { ...this.state.ingredients };
            const newCount = this.state.ingredients[type] - 1;
            updatedIngredients[type] = newCount;
            const oldPrice = this.state.totalPrice;
            const priceAddition = INGREDIENT_PRICE[type];
            const newPrice = oldPrice - priceAddition;
            this.setState({
                ingredients: updatedIngredients,
                totalPrice: newPrice
            });
            this.updatePurchaseState(updatedIngredients);
        } else {

        }

    }

    updatePurchaseState = (ingredients) => {
        //const ingredients = {...this.state.ingredients};
        const sum = Object.keys(ingredients).map((igkey) => {
            return ingredients[igkey];
        }).reduce((acc, el) => {
            return acc + el
        }, 0);
        console.log('final sum of price', sum);
        this.setState({
            isPurchasable: sum > 0
        });
    }

    // isOrderPlaced(e) {
    //  console.log('is order placed', e);
    // } 
    // this method will not work properly if we trigger it through event
    // it may not be able to bind this keyword instead use fat arrow functions

    isOrderPlaced = (e) => {
        console.log('is order placed', e);
        this.setState({ purchasing: true });

    }

    cancelOrderHandler = () => {
        this.setState({ purchasing: false });
    }

    continueOrderHandler = () => {
        this.setState({ loading: true });
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Prateek',
                address: {
                    area: 'blue ridge',
                    city: 'pune',
                    country: 'india'
                }
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/order.json', order)
            .then((response) => {
                console.log('order response', response);
                this.setState({ loading: false });
            })
            .catch((error) => {
                this.setState({ loading: false });
                console.log('some error occured', error);
            })
    }

    render() {
        let orderSummary = null;
        if (!this.state.loading) {
            orderSummary = <OrderSummary ingredients={this.state.ingredients}
                cancelOrder={this.cancelOrderHandler}
                continueOrder={this.continueOrderHandler} />
        } else {
            orderSummary = <Spinner />
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} cancelOrder={this.cancelOrderHandler}>
                    {orderSummary}
                </Modal>
                <Burger title='your burger'
                    ingredients={this.state.ingredients}
                    finalPrice={this.state.totalPrice}>
                </Burger>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={this.state.ingredients}
                    btnDisabled={this.state.isPurchasable}
                    isOrdered={(event) => this.isOrderPlaced(event)} />
            </Aux>
        );
    };
}

export default BurgerBuilder;

// stateful component 