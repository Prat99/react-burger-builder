import React, { Component } from 'react';
import Aux from "../../hoc/Aux";
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <Burger title='your burger'></Burger>
                <div>Burger Ingredients</div>
            </Aux>
        );
    };
}

export default BurgerBuilder;

// stateful component 