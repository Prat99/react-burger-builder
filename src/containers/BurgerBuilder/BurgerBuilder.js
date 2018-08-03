import React, { Component } from 'react';
import Aux from "../../hoc/Aux";
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICE = {
    cheese: 0.4,
    salad: 0.2,
    bacon: 0.3,
    meat: 0.5
}
class BurgerBuilder extends Component {
    constructor (props) {
      super(props);
      this.state = {
          ingredients: {
              cheese: 0,
              meat: 0,
              bacon: 0,
              salad: 0
          },
          totalPrice: 0
      }
    }

    addIngredientHandler = (type) => {
       const updatedIngredients = {...this.state.ingredients};
       const newCount = this.state.ingredients[type] + 1;
       updatedIngredients[type] = newCount;
       const oldPrice = this.state.totalPrice;
       const priceAddition = INGREDIENT_PRICE[type];
       const newPrice = oldPrice + priceAddition;
       this.setState({
           ingredients: updatedIngredients,
           totalPrice: newPrice
       });
    }

    removeIngredientHandler = (type) => {
        if(this.state.ingredients[type]) {
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
        } else {

        }
    }
    render() {
        return (
            <Aux>
                <Burger title='your burger' ingredients = {this.state.ingredients} finalPrice={this.state.totalPrice}></Burger>
                <BuildControls 
                  ingredientAdded = {this.addIngredientHandler}
                  ingredientRemoved = {this.removeIngredientHandler}
                  disabled = {this.state.ingredients}/>
            </Aux>
        );
    };
}

export default BurgerBuilder;

// stateful component 