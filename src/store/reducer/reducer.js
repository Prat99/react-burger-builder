
import * as actionType from '../actions';

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

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.payload.ingredientName] : state.ingredients[action.payload.ingredientName] + 1,
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICE[action.payload.ingredientName]

            }
        case actionType.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.payload.ingredientName] : state.ingredients[action.payload.ingredientName] - 1,
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICE[action.payload.ingredientName]
            }
        default:
            return state;
    }
}

export default reducer;