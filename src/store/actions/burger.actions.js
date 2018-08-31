import * as actions from './actionTypes';


const addIngredients = (ingName) => {
    return {
        type: actions.ADD_INGREDIENT,
        ingredientName: ingName
    }
}



const removeIngredients = (ingName) => {
    return {
        type: actions.REMOVE_INGREDIENT,
        ingredientName: ingName
    }
}

