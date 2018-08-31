
import * as actionType from '../actions/actionTypes';

const initialState = {
    ingredients: {
        cheese: 0,
        meat: 0,
        bacon: 0,
        salad: 0
    },
    totalPrice: 0,
}
const INGREDIENT_PRICE = {
    cheese: 0.4,
    salad: 0.2,
    bacon: 0.3,
    meat: 0.5
} // global variable

const burgerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName] : state.ingredients[action.ingredientName] + 1,
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICE[action.ingredientName]

            }
        case actionType.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName] : state.ingredients[action.ingredientName] - 1,
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICE[action.ingredientName]
            }
        default:
            return state;
    }
}

export default burgerReducer;