import * as actions from './actionTypes';
import axios from '../../axios-orders';

export const addIngredients = (ingName) => {
    return {
        type: actions.ADD_INGREDIENT,
        ingredientName: ingName
    }
}

export const removeIngredients = (ingName) => {
    return {
        type: actions.REMOVE_INGREDIENT,
        ingredientName: ingName
    }
}

export const setIngredients = (ingredients) => {
    return {
        type: actions.SET_INGREDIENTS,
        ingredients: ingredients
    }
}

export const fetchIngredientsFailed = () => {
    return {
        type: actions.FETCH_INGREDIENTS_FAILED
    }
}
export const initIngredients = () => {
    return dispatch => {
      axios.get('/ingredients.json')
            .then((response) => {
                console.log('order response', response);
                return dispatch(setIngredients(response.data))
            })
            .catch((error) => {
                console.log('some error occured', error);
                return dispatch(fetchIngredientsFailed());
            })
    }
}